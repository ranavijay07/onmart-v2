import axios from 'axios';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ItemType from '../types/item';
import './Orders.css';
// import { useCurrentUserContext } from '../contexts/CurrentUserContext';

function Orders({ items }) {
  const [orders, setOrders] = useState([]);
  const username = localStorage.getItem('username');
  const customerId = localStorage.getItem('customerId');
  // const { currentUser } = useCurrentUserContext();

  useEffect(
    () => {
      console.log('hehe');
      // if (currentUser.access === 'associate') {
      fetch('http://localhost:5000/orders/'+customerId)
        .then(res => res.json())
        .then(data => {
          // // const filteredOrders = data.filter(order => order.customerId[0]._id === customerId); 
          // console.log(data);
          // // console.log(filteredOrders);
          setOrders(data);
        })
        .catch(error => console.error('Error fetching products:', error));
    },
    [],
  );

  const deleteOrder = (order) => {
    fetch('http://localhost:5000/orders/'+order._id,{
      method: 'DELETE',
      headers: { "Content-Type": "application/json"}
    })
      .then(window.location.reload()
      )
      .catch(error => console.error('Error deleting:', error));
  };

  return (
    <div className="orders-component">
      <h2>Existing Orders</h2>
      {console.log(orders)}
      {orders.length === 0
        ? (
          <div>
            No Orders
            <br />
            <br />
          </div>

        )
        : orders.map((order) => (
          <div className="order" key={order._id}>
            <table>
              <thead>
                <tr>
                  <th>Order Number</th>
                  <th></th>
                  <th>Order Date</th>
                  {order.phone && <th>Phone</th>}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{order._id }</td>
                  <td></td>
                  <td>{Date(order.createdDate)}</td>
                  {order.phone && <td>{order.phone}</td>}
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th></th>
                  <th>Item</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item) => (
                  <tr key={item.itemId._id}>
                    {console.log(item)}
                    <td>{item.quantity}</td>
                    <td></td>
                    <td>{items.find((i) => i._id === item.itemId._id)?.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              type="button"
              onClick={() => deleteOrder(order)}
            >
              Delete Order
            </button>
          </div>
        ))}
    </div>
  );
}

Orders.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default Orders;
