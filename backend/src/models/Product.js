const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  department: String,
  category: String,
  specifications: [{ specificationId: String, specificationDescription: String }],
  qa: [{ questionId: String, question: String, answer: String }],
  shippingAndReturnDetails: String,
  isActive: { type: Boolean, default: true },
  createdDate: { type: Date, default: Date.now },
  modifiedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);