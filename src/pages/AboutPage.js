import "../css/aboutPage.css";
import Footer from "../components/global/Footer";
import Navbarr from "../components/global/Navbar";
import AboutUs from "./about/AboutUs";
import ArticleFour from "./about/ArticleFour";
import ArticleTwo from "./about/ArticleTwo";

function AboutPage() {
  return (
    <div>
      <Navbarr />
      <div className="aboutPage">
        <AboutUs />
        <ArticleTwo />
        <ArticleFour />
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
