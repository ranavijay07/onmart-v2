import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import ProductDetailPage from './pages/ProductDetailPage';
import CategoryPage from './pages/CategoryPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";
import {
  useEffect,
  useReducer,
  useState,
} from 'react';
import { cartReducer, CartTypes, initialCartState } from './reducers/cartReducer';

function App() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const storageKey = 'cart';
  const [cart, dispatch] = useReducer(
    cartReducer,
    initialCartState,
    (initialState) => {
      try {
        const storedCart = JSON.parse(localStorage.getItem(storageKey));
        return storedCart || initialState;
      } catch (error) {
        console.log('Error parsing cart', error);
        return initialState;
      }
    },
  );

  const addToCart = (itemId) => dispatch({ type: CartTypes.ADD, itemId });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <Routes>
        {items && <Route path="/" element={<Homepage cart={cart} addToCart={addToCart} items={items} />} /> }
        {items && <Route path="/product/:productId" element={<ProductDetailPage cart={cart} addToCart={addToCart} items={items} />} /> }
        {items && <Route path="/cart" element={<CartPage cart={cart} dispatch={dispatch} items={items} />} /> }
        {items && <Route path="/orders" element={<OrdersPage cart={cart} dispatch={dispatch} items={items} />} /> }
        {items && <Route path="/category/:category" element={<CategoryPage cart={cart} addToCart={addToCart} items={items} />} /> }
        {items && <Route path="/signin" element={<SignInPage cart={cart} addToCart={addToCart} items={items} />} />}
        {items && <Route path="/signup" element={<SignUpPage cart={cart} addToCart={addToCart} items={items} />} />}
      </Routes>
    </Router>
  );
}

export default App;
