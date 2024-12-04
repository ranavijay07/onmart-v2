import React from "react";
import Header from "../components/Header";
import DepartmentMenu from "../components/DepartmentMenu";
import ImagesCarousel from "../components/ImagesCarousel";
import ProductDetails from "../components/ProductDetails";
import ProductsCarousel from "../components/ProductsCarousel";
import TitiledSections from "../components/TitiledSections";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const Homepage = ({ cart, addToCart, items }) => {

  const { productId } = useParams();
  const product = items.find(item => item._id === productId);
  //console.log(product)

  return (
    <div>
      <Header cart= { cart }/>
      <DepartmentMenu />
      <ProductDetails product={product} cart={cart} addToCart={addToCart}/>
      <ProductsCarousel title='Similar Products' />
      <ImagesCarousel />
      <TitiledSections />
      <Footer />
    </div>
  );
};

export default Homepage;
