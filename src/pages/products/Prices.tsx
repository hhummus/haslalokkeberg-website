import * as React from "react";
import { useEffect } from "react";
import "../../css/prices.css";
import Navbarr from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";
import HeaderComponent from "./HeaderComp";
import Products from "./Products";
import GoBack from "../../components/global/GoBack";
import scrollToTop from "../../components/global/scrollToTop";

function Prices() {

  useEffect(() => {
    scrollToTop()
   }, []);

  return (
    <div>
      <Navbarr />
      <HeaderComponent
        pricesImage="pricesHeaderImage"
        titlePricesHeader="Priser"
      />
      <Products />
      <GoBack />
      <Footer />
    </div>
  );
}
export default Prices;
