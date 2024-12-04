import React from "react";
import Header from "../components/Header";
import DepartmentMenu from "../components/DepartmentMenu";
import ImagesCarousel from "../components/ImagesCarousel";
import ProductsList from "../components/ProductsList";
import ProductsCarousel from "../components/ProductsCarousel";
import TitiledSections from "../components/TitiledSections";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";


const Homepage = ({ cart, dispatch, items, addToCart }) => {

  const { category } = useParams();
  const products = items.filter(item => item.category === category);
  
  return (
    <div>
      <Header cart= { cart }/>
      <DepartmentMenu />
      <ProductsList addToCart={ addToCart } items={ products } title='Search Results'/>
      <ProductsCarousel title='Similar Products' />
      <ImagesCarousel />
      <TitiledSections />
      <Footer />
    </div>
  );
};

export default Homepage;
