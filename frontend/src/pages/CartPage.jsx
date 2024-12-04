import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";


const CartPage = ( { cart, dispatch, items }) => {
  return (
    <div>
      <Header cart= { cart }/>
        <Cart cart={cart} dispatch={dispatch} items={items}/>
      <Footer />
    </div>
  );
};

export default CartPage;
