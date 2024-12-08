
# OnMart Backend  

## Overview  
The **OnMart Backend** is a RESTful API developed using Node.js, Express.js, and MongoDB. It supports an e-commerce application, handling customer authentication, product management, order processing, and more.  

---

## Features  
- **Customer Management:** Registration, login, and CRUD operations for customer profiles.  
- **Product Management:** CRUD operations for managing products, including filtering by department and category.  
- **Order Management:** CRUD operations for orders, with support for customer-specific queries.  

---

## Tech Stack  
- **Backend Framework:** Node.js, Express.js  
- **Database:** MongoDB (with Mongoose ODM)  
- **Authentication:** bcrypt.js for password hashing  

---

## Prerequisites  
- Node.js (v14 or later)  
- MongoDB (local or hosted on Atlas)  
- npm  

---

## Installation  

### Clone the Repository  
```bash  
git clone https://github.com/username/OnMart.git  
cd OnMart/backend  
```  

### Install Dependencies  
Run the following command to install all required Node.js packages:  
```bash  
npm install  
```  

### Configure Environment Variables  
Create a `.env` file in the `backend` directory with the following content:  
```env  
PORT=3000  
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/OnMart  
JWT_SECRET=your_jwt_secret  
```  

### Start the Server  
Run the server using the following command:  
```bash  
npm start  
```  

---

## API Endpoints  

### Customer Routes  
- **GET /customers**: Fetch all customers  
- **POST /customers**: Add a new customer  
- **PUT /customers/:id**: Update customer details  
- **DELETE /customers/:id**: Delete a customer  
- **POST /customers/signin**: Sign in a customer  

### Product Routes  
- **GET /products**: Fetch all products  
- **GET /products/department/:department**: Fetch products by department  
- **GET /products/category/:category**: Fetch products by category  
- **POST /products**: Add a new product  
- **PUT /products/:id**: Update a product  
- **DELETE /products/:id**: Delete a product  

### Order Routes  
- **GET /orders/:customerId**: Fetch orders for a specific customer  
- **POST /orders**: Create a new order  
- **PUT /orders/:id**: Update an order  
- **DELETE /orders/:id**: Delete an order  

---

## License  
This project is licensed under the MIT License.
