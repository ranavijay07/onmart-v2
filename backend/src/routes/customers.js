const express = require('express');
const bcrypt = require('bcryptjs');
const Customer = require('../models/Customer');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const newCustomer = new Customer(req.body);
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Sign in route
router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    // console.log(email);
    const customer = await Customer.findOne({ email });
    if (!customer) {
      // console.log(email);
      return res.status(401).json({ message: 'Sign in failed. Here Invalid email or password.' });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, customer.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ message: 'Sign in failed. Here 2 Invalid email or password.' });
    }

    // Return the customer ID
    res.json({ customerId: customer._id, firstName: customer.firstName, lastName: customer.lastName });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
