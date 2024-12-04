// routes/orders.js
const express = require('express');
const Order = require('../models/Order');
const mongoose = require('mongoose');
const router = express.Router();
const { ObjectId } = require('mongodb');

// Endpoint to fetch orders by customerId
router.get('/:customerId', async (req, res) => {
  const { customerId } = req.params;

  try {
    // Validate customerId format
    if (!ObjectId.isValid(customerId)) {
      return res.status(400).json({ message: 'Invalid customer ID format.' });
    }

    // Convert customerId to ObjectId
    const customerObjectId = new ObjectId(customerId);

    // Query orders by customerId
    const orders = await Order.find({ customerId: customerObjectId }).populate('customerId','firstName lastName zipCode').populate('items.itemId','name price');;

    // Check if orders exist
    if (orders.length === 0) {
      return res.status(200).json([]);
    }

    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});


router.post('/', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;