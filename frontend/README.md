# Preparing the README content for the frontend in plain markdown text
frontend_readme_content = """
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
