import * as React from "react";
import "../css/aboutPage.css";
import Footer from "../components/global/Footer";
import Navbarr from "../components/global/Navbar";
import AboutUs from "./about/AboutUs";
import SocialMediaLinks from "./about/SocialMediaAbout";
import ArticleTwo from "./about/ArticleTwo";
import GoBack from "../components/global/GoBack";

function AboutPage() {
  return (
    <div>
      <Navbarr />
      <div className="aboutPage">
        <AboutUs />
        <ArticleTwo />
        <SocialMediaLinks />
      </div>
      <GoBack />
      <Footer />
    </div>
  );
}

export default AboutPage;
