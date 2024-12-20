const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');
const customerRoutes = require('./routes/customers');
const orderRoutes = require('./routes/orders');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

const uri = 'mongodb://localhost:27017/ecommerceDB';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/products', productRoutes);
app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});