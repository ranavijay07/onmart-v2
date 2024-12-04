import React, { useState } from "react";
import Header from "../components/Header";
import DepartmentMenu from "../components/DepartmentMenu";
import ImagesCarousel from "../components/ImagesCarousel";
import ProductsCarousel from "../components/ProductsCarousel";
import ProductsList from "../components/ProductsList";
import TitiledSections from "../components/TitiledSections";
import Footer from "../components/Footer";



const Homepage = ({ cart, addToCart, items }) => {

  return (
    <div>
      <Header cart= { cart }/>
      <DepartmentMenu />
      <ImagesCarousel />
      <ProductsList addToCart={ addToCart } items={ items } title="Top Products"/>
      {/* <ProductsCarousel title="Best Sellers of the Month" />
      <ProductsCarousel title="Spring Essentials" />
      <ProductsCarousel title="Party Essentials" /> */}
      <ImagesCarousel />
      <TitiledSections />
      <Footer />
    </div>
  );
};

export default Homepage;
