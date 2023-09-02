import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";
import "../css/aboutPage.css";
import AboutUs from "./about/AboutUs";
import ArticleFour from "./about/ArticleFour";
import ArticleTwo from "./about/ArticleTwo";

function AboutPage() {
  return (
    <div>
      <Navbar />
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
