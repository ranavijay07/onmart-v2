import axios from 'axios';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import ItemType from '../types/item';
import CartRow from './CartRow';
import './Cart.css';
import Alert from './Alert';
import { CartTypes } from '../reducers/cartReducer';

function Cart({ cart, dispatch, items }) {
  const isLogged = localStorage.getItem('isLogged') === 'true';
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [isEmployeeOfTheMonth, setIsEmployeeOfTheMonth] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [apiError, setApiError] = useState('');
  const debounceRef = useRef(null);
  const zipRef = useRef(null);
  const username = localStorage.getItem('username');
  const customerId = localStorage.getItem('customerId');

  const subTotal = isEmployeeOfTheMonth ? 0 : cart.reduce((acc, item) => {
    console.log(items);
    console.log(item);
    const detailItem = items.find((i) => i._id === item.itemId);
    console.log(detailItem);
    const itemPrice = detailItem.price;
    return item.quantity * itemPrice + acc;
  }, 0);

  const taxPercentage = parseInt(zipCode.substring(0, 1) || '0', 10) + 1;
  const taxRate = taxPercentage / 100;
  const tax = subTotal * taxRate;
  const total = subTotal + tax;
  const isFormValid = zipCode.length === 5 && name.trim();

  const submitOrder = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setApiError('');
    try {
      const newOrder = {
          items: cart,
          totalPrice:total,
          customerId:customerId,
          name,
          username,
          phone,
          zipCode,
      };
      fetch('/api/orders',{
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(newOrder)
      })
        .then(console.log('New order added!'))
        .catch(error => console.error('Error fetching products:', error));

      dispatch({ type: CartTypes.EMPTY });
      setShowSuccessAlert(true);
    } catch (error) {
      console.error('Error submitting the order', error);
      setApiError(error?.response?.data?.error || 'Unknown Error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const setFormattedPhone = (newNumber) => {
    const digits = newNumber.replace(/\D/g, '');
    let formatted = digits.substring(0, 3);
    if (digits.length === 3 && newNumber[3] === '-') {
      formatted = `${formatted}-`;
    } else if (digits.length > 3) {
      formatted = `${formatted}-${digits.substring(3, 6)}`;
    }
    if (digits.length === 6 && newNumber[7] === '-') {
      formatted = `${formatted}-`;
    } else if (digits.length > 6) {
      formatted = `${formatted}-${digits.substring(6, 10)}`;
    }

    if (digits.length === 10) {
      zipRef.current.focus();
    }
    setPhone(formatted);
  };

  return (
    <div className="cart-component">
      <Alert visible={showSuccessAlert} type="success">
        Thank you for your order.
      </Alert>
      <Alert visible={!!apiError} type="error">
        <p>There was an error submitting your order.</p>
        <p>{apiError}</p>
        <p>Please try again.</p>
      </Alert>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <div>Your cart is empty.<br /><br /></div>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Item</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <CartRow
                  key={item.id}
                  cartItem={item}
                  items={items}
                  dispatch={dispatch}
                />
              ))}
            </tbody>
          </table>
          <div>
            Subtotal: $
            {subTotal.toFixed(2)}
          </div>
          { zipCode.length === 5
            ? (
              <>
                <div>
                  Tax: $
                  {tax.toFixed(2)}
                </div>
                <div>
                  Total: $
                  { total.toFixed(2) }
                </div>
              </>
            ) : (
              <div className="warning">Enter ZIP Code to get total</div>
            )}
          <h2>Checkout</h2>
          <form onSubmit={submitOrder}>
            <label htmlFor="name">
              Name
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>
            <label htmlFor="phone">
              Phone Number
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(event) => setFormattedPhone(event.target.value)}
                aria-label="Enter your phone number.
                After a phone number is entered,
                you will automatically be moved to the next field."
              />
            </label>
            <label htmlFor="zipcode">
              ZIP Code
              <input
                id="zipcode"
                type="text"
                maxLength="5"
                inputMode="numeric"
                value={zipCode}
                onChange={(event) => setZipCode(event.target.value)}
                required
                ref={zipRef}
              />
            </label>

            {!isLogged && <div className="warning">Please login to place order</div>}
            <button type="submit" disabled={!isFormValid || isSubmitting}>
              Order Now
            </button>
          </form>
          <br />
        </>
      )}
    </div>
  );
}

// Cart.propTypes = {
//   cart: PropTypes.arrayOf(PropTypes.shape({
//     itemId: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//   })).isRequired,
//   dispatch: PropTypes.func.isRequired,
//   items: PropTypes.arrayOf(ItemType).isRequired,
// };

export default Cart;
