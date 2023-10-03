import * as React from "react";
import "../../css/prices.css";
import Navbarr from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";
import HeaderComponent from "./HeaderComp";
import Products from "./Products";

function Prices() {
  return (
    <div>
      <Navbarr />
      <HeaderComponent
        pricesImage="pricesHeaderImage"
        titlePricesHeader="Priser"
      />
      <Products />
      <Footer />
    </div>
  );
}

export default Prices;
