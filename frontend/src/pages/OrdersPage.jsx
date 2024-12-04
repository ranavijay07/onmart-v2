import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Orders from "../components/Orders";


const OrdersPage = ( { cart, dispatch, items }) => {
  return (
    <div>
      <Header cart= { cart }/>
        <Orders cart={cart} dispatch={dispatch} items={items}/>
      <Footer />
    </div>
  );
};

export default OrdersPage;
