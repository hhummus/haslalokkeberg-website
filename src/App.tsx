import * as React from "react";

import "./css/landingPage.css";
import Footer from "./components/global/Footer";
import Navbarr from "./components/global/Navbar";
import ArticleContact from "./pages/landingPage/ArticleContact";
import ArticlePrices from "./pages/landingPage/ArticlePrices";
import ArticleAbout from "./pages/landingPage/ArticleAbout";
import ArticlePortfolio from "./pages/landingPage/ArticlePortfolio";

export default function App() {
  return (
    <div>
      <Navbarr />
        <ArticleAbout />
        <div className="landingPageContainer">
        <ArticlePortfolio />
        <ArticlePrices />
        <ArticleContact />
      </div>
      <Footer />
    </div>
  );
}
