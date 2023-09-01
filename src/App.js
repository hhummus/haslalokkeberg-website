import Footer from "./components/global/Footer";
import Navbar from "./components/global/Navbar";
import ReUseArticle from "./components/ReUseArticle";
import "./css/landingPage.css";
import ArticleContact from "./pages/landingPage/ArticleContact";
import ArticlePrices from "./pages/landingPage/ArticlePrices";

export default function App() {
  return (
    <div>
      <Navbar />
      <ReUseArticle
        ReUseArticleContainer="getToKnowUsCTA"
        title="Bli bedre kjent med oss"
        description="Vi elsker å fange øyeblikk. I hverdagen, på 
      fest, i skogen, på stranden, på reise og i 
      sofaen hjemme."
        linkTo="/om-oss"
        linkButton="Fotoalbum"
      />
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
