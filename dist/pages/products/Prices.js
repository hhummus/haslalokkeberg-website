import React from "react";
import "../../css/prices.css";
import Navbarr from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";
import PricesHeader from "./PricesHeader";
import Products from "./Products";
function Prices() {
    return (React.createElement("div", null,
        React.createElement(Navbarr, null),
        React.createElement(PricesHeader, { pricesImage: "pricesHeaderImage", titlePricesHeader: "Priser" }),
        React.createElement(Products, null),
        React.createElement(Footer, null)));
}
export default Prices;
