import "../../css/prices.css";
import Navbarr from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";
import PricesHeader from "./PricesHeader";
import Products from "./Products";

function Prices() {
  return (
    <div>
      <Navbarr />

      <PricesHeader
        pricesImage="pricesHeaderImage"
        titlePricesHeader="Priser"
      />
      <Products />
      <Footer />
    </div>
  );
}

export default Prices;
