import * as React from "react";
import "./css/landingPage.css";
import Footer from "./components/global/Footer";
import Navbar from "./components/global/Navbar";
import ArticleAbout from "./pages/landingPage/ArticleAbout";
import PagesLink from "./pages/landingPage/PagesLink";

export default function App() {
  return (
    <div>
      <Navbar />
        <ArticleAbout />
        <div className="landingPageContainer">
        <PagesLink/>
      </div>
      <Footer />
    </div>
  );
}
