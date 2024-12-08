const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const uri = 'mongodb://localhost:27017/ecommerceDB';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Schema Definitions

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  department: String,
  rating: Number,
  category: String,
  image: String,
  specifications: [{ specificationId: String, specificationDescription: String }],
  qa: [{
    questionId: String,
    question: String,
    answer: String
  }],
  shippingAndReturnDetails: String,
  isActive: { type: Boolean, default: true },
  createdDate: { type: Date, default: Date.now },
  modifiedDate: { type: Date, default: Date.now }
});

const customerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dob: Date,
  email: { type: String, unique: true },
  zipCode: String,
  country: { type: String, enum: ['United States', 'Canada'] },
  passwordHash: String,
  createdDate: { type: Date, default: Date.now },
  modifiedDate: { type: Date, default: Date.now }
});

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  items: [{
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number
  }],
  totalPrice: Number,
  createdDate: { type: Date, default: Date.now },
  modifiedDate: { type: Date, default: Date.now }
});

// Models
const Product = mongoose.model('Product', productSchema);
const Customer = mongoose.model('Customer', customerSchema);
const Order = mongoose.model('Order', orderSchema);

// Data Generation Function
async function generateData() {
  await mongoose.connection.dropDatabase();

  const departments = {
    Furniture: ['Bookcases', 'Chairs', 'Tables'],
    Grocery: ['Dairy', 'Beans', 'Pasta'],
    'Office Supplies': ['Desk Supplies', 'Filing Supplies', 'Paper & Pads'],
    Clothing: ['Shoes', 'Dresses', 'Shirts'],
    Electronics: ['Computers', 'TV'],
    Appliances: ['Refrigerators', 'Microwaves']
  };

  // Insert Products
  const products = [];
  for (const [department, categories] of Object.entries(departments)) {
    for (const category of categories.slice(0, 2)) { // Add 2 products per category
      for (let i = 1; i <= 2; i++) {
        products.push(await Product.create({
          name: `${category} Product ${i}`,
          description: `Description for ${category} Product ${i}`,
          price: (Math.random() * 100).toFixed(2),
          department,
          rating: (Math.random() * (5 - 1) + 1).toFixed(2),
          image: `https://via.placeholder.com/150`,
          category,
          specifications: [{ specificationId: `spec-${i}`, specificationDescription: `Details for ${category} Product ${i}` }],
          qa: [
            {
              questionId: `q1-${i}`,
              question: `Question for ${category} Product ${i}`,
              answer: `Answer for ${category} Product ${i}`
            }
          ],
          shippingAndReturnDetails: `Shipping and return details for ${category} Product ${i}`
        }));
      }
    }
  }

  // Insert Customers
  const customers = await Promise.all(
    Array.from({ length: 10 }).map(async (_, i) => {
      const passwordHash = await bcrypt.hash(`password${i + 1}`, 10);
      return Customer.create({
        firstName: `FirstName${i + 1}`,
        lastName: `LastName${i + 1}`,
        dob: new Date(1980 + i, i % 12, (i + 1) % 28 + 1),
        email: `customer${i + 1}@example.com`,
        zipCode: `1000${i}`,
        country: i % 2 === 0 ? 'United States' : 'Canada',
        passwordHash
      });
    })
  );

  // Create Orders for Each Customer
  await Promise.all(
    customers.map(async (customer, index) => {
      const selectedProducts = products.slice(index * 2, index * 2 + 2).map((product) => ({
        itemId: product._id,
        quantity: Math.floor(Math.random() * 5) + 1
      }));

      const totalPrice = selectedProducts.reduce(
        (sum, item) => sum + item.quantity * products.find(p => p._id.equals(item.itemId)).price,
        0
      );

      await Order.create({
        customerId: customer._id,
        items: selectedProducts,
        totalPrice: totalPrice.toFixed(2)
      });
    })
  );

  console.log('Sample data generated successfully');
  mongoose.connection.close();
}

generateData().catch((err) => console.error(err));
