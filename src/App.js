import "./css/landingPage.css";
import Footer from "./components/global/Footer";
import Navbarr from "./components/global/Navbar";
import ReUseArticle from "./components/ReUseArticle";
import ArticleContact from "./pages/landingPage/ArticleContact";
import ArticlePrices from "./pages/landingPage/ArticlePrices";
import ArticleAbout from "./pages/landingPage/ArticleAbout";

export default function App() {
  return (
    <div>
      <Navbarr />
      <ArticleAbout />

      <ArticlePrices />

      <ArticleContact />
      <ReUseArticle
        ReUseArticleContainer="portefoljeCTA"
        title="Er vi de rette for deg?"
        description="Du kan kontakte oss for en uforpliktende prat.
        Du kan også klikke deg videre til vår portefølje,  
        her vil du se et utvalg tidligere arbeid, samt 
        tilbakemeldinger vi har fått."
        linkTo="/portefølje"
        linkButton="Portefølje"
      />
      <Footer />
    </div>
  );
}
