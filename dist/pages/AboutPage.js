import React from "react";
import "../css/aboutPage.css";
import Footer from "../components/global/Footer";
import Navbarr from "../components/global/Navbar";
import AboutUs from "./about/AboutUs";
import ArticleFour from "./about/ArticleFour";
import ArticleTwo from "./about/ArticleTwo";
function AboutPage() {
    return (React.createElement("div", null,
        React.createElement(Navbarr, null),
        React.createElement("div", { className: "aboutPage" },
            React.createElement(AboutUs, null),
            React.createElement(ArticleTwo, null),
            React.createElement(ArticleFour, null),
            React.createElement(Footer, null))));
}
export default AboutPage;
