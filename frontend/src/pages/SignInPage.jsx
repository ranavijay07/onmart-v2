import React from "react";
import Header from "../components/Header";
import DepartmentMenu from "../components/DepartmentMenu";
import ImagesCarousel from "../components/ImagesCarousel";
import ProductsList from "../components/ProductsList";
import ProductsCarousel from "../components/ProductsCarousel";
import TitiledSections from "../components/TitiledSections";
import Footer from "../components/Footer";
import SignIn from "../components/SignIn";


const Homepage = ({ cart, dispatch, items }) => {
  return (
    <div>
      <Header cart= { cart }/>
      <SignIn />
      {/* <DepartmentMenu />
      <ProductsList />
      <ProductsCarousel title='Similar Products' />
      <ImagesCarousel />
      <TitiledSections /> */}
      <Footer />
    </div>
  );
};

export default Homepage;
