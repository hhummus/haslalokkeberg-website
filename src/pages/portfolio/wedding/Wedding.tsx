import * as React from 'react'
import { useEffect } from 'react';
import weddingImagesArray from './Images';
import Navbar from '../../../components/global/Navbar'
import HeaderComponent from '../../products/HeaderComp';
import AboutIntroText from '../AboutIntroText';
import Footer from '../../../components/global/Footer';
import scrollToTop from '../../../components/global/scrollToTop';
import WeddingText from './WeddingText';

function Wedding() {
 useEffect(() => {
  scrollToTop()
 }, []);

  const weddingPhotos = weddingImagesArray.map((image: string) => {
    return (
      <div className="portfolio-image-container col-sm-12 col-md-4 col-lg-3">
        <img
          src={image}
          alt="Bryllupsbilder"
          className="portfolioImageWidth img-fluid"
        ></img>
      </div>
    );
  });

  return (
    <div>
      <Navbar />
      <HeaderComponent 
        pricesImage="portfolioHeaderImage"
        titlePricesHeader="Tidligere arbeid"
      />
      <div className="container portfolioIndividualContainer">
        <WeddingText />
        <AboutIntroText 
          introTitle="" 
          introText= ""
          introLinkText="Kontakt oss her for en uforpliktende prat" introLink="/kontakt-oss"
        />
        <div className="portfolioPhotos row" id="portfolioPhotosWrap">
          {weddingPhotos}
        </div>
      </div>
      <Footer />
    </div>
    
  )
}

export default Wedding