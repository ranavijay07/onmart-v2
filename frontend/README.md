
# OnMart Frontend  

## Overview  
The **OnMart Frontend** is a React.js-based single-page application (SPA) for the OnMart e-commerce platform. It provides customer-facing pages for browsing products, managing orders, and handling user authentication.  

---

## Features  
- **Homepage:** Displays featured products and categories.  
- **Product Browsing:** Filter products by category and view product details.  
- **User Authentication:** Sign-in and sign-up functionality.  
- **Cart Management:** Add, remove, and update products in the cart.  
- **Order Management:** View and manage placed orders.  

---

## Tech Stack  
- **Frontend Framework:** React.js  
- **Styling:** CSS  
- **State Management:** Context API with Reducers  
- **Routing:** React Router Dom  

---

## Folder Structure  
```plaintext  
src/  
├── components/       # Reusable React components  
├── contexts/         # Context API for state management  
├── images/           # Static images  
├── items/            # Sample data or static assets  
├── pages/            # Main pages for the application  
│   ├── CartPage.jsx  
│   ├── CategoryPage.jsx  
│   ├── Homepage.jsx  
│   ├── OrdersPage.jsx  
│   ├── ProductDetailPage.jsx  
│   ├── SignInPage.jsx  
│   └── SignUpPage.jsx  
├── reducers/         # Reducers for state updates  
├── types/            # Action types for reducers  
├── App.js            # Root component  
├── index.js          # Entry point  
├── setupProxy.js     # Proxy for API requests  
```  

---

## Prerequisites  
- Node.js (v14 or later)  
- npm  

---

## Installation  

### Clone the Repository  
```bash  
git clone https://github.com/username/OnMart.git  
cd OnMart/frontend  
```  

### Install Dependencies  
Run the following command to install all required Node.js packages:  
```bash  
npm install  
```  

### Start the Development Server  
To start the development server, use:  
```bash  
npm start  
```  
This will launch the application at `:3000/`.  

---

## Available Scripts  
In the project directory, you can run the following scripts:  

### `npm start`  
Runs the app in development mode.  

### `npm test`  
Launches the test runner.  

### `npm run build`  
Builds the app for production to the `build` folder.  

### `npm run eject`  
Ejects the app configuration (irreversible).  

---

## Proxy Setup  
The `setupProxy.js` file in the `src` folder configures a proxy for API requests to the backend. Ensure the backend server is running before testing API endpoints.  

---

## License  
This project is licensed under the MIT License.
