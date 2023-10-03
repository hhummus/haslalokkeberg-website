import React from "react";
import "./css/landingPage.css";
import Footer from "./components/global/Footer";
import Navbarr from "./components/global/Navbar";
import ArticleContact from "./pages/landingPage/ArticleContact";
import ArticlePrices from "./pages/landingPage/ArticlePrices";
import ArticleAbout from "./pages/landingPage/ArticleAbout";
import ArticlePortfolio from "./pages/landingPage/ArticlePortfolio";
export default function App() {
    return (React.createElement("div", null,
        React.createElement(Navbarr, null),
        React.createElement(ArticleAbout, null),
        React.createElement(ArticlePortfolio, null),
        React.createElement(ArticlePrices, null),
        React.createElement(ArticleContact, null),
        React.createElement(Footer, null)));
}
