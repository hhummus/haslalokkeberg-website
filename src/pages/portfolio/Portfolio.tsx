import * as React from 'react'
import "../../css/portfolio.css";
import Navbarr from "../../components/global/Navbar";
import HeaderComponent from '../products/HeaderComp'
import Footer from '../../components/global/Footer';
import PortfolioNavigation from './PortfolioNavigation';

function Portfolio() {
  return (
    <div>
        <Navbarr />
        <HeaderComponent 
       pricesImage="portfolioHeaderImage"
       titlePricesHeader="Tidligere arbeid"
      />
      <PortfolioNavigation />
      <Footer />
    </div>
  )
}

export default Portfolio