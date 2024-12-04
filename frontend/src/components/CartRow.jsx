import PropTypes from 'prop-types';
import ItemType from '../types/item';
import { CartTypes } from '../reducers/cartReducer';

function CartRow({ cartItem, dispatch, items }) {
  const item = items.find((i) => i._id === cartItem.itemId);

  const removeItemFromCart = () => {
    dispatch({ type: CartTypes.REMOVE, itemId: item._id });
  };

  console.log(cartItem, dispatch, items);

  return (
    <tr>
      <td>{cartItem.quantity}</td>
      <td>{item.name}</td>
      <td>
        $
        {((item.price) * cartItem.quantity).toFixed(2)}
      </td>
      <td>
        <button
          type="button"
          onClick={removeItemFromCart}
        >
          X
        </button>
      </td>
    </tr>
  );
}

CartRow.propTypes = {
  cartItem: PropTypes.shape({
    itemId: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default CartRow;
