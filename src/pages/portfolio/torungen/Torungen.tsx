import * as React from 'react'
import { useEffect } from 'react';
import torungenImagesArray from './Images';
import Navbarr from '../../../components/global/Navbar'
import HeaderComponent from '../../products/HeaderComp';
import AboutIntroText from '../AboutIntroText';
import GoBack from '../../../components/global/GoBack';
import Footer from '../../../components/global/Footer';
import scrollToTop from '../../../components/global/scrollToTop';
import GoTop from '../../../components/global/GoTop';


function NewMovements() {

  useEffect(() => {
    scrollToTop()
   }, []);

    const torungenPhotos = torungenImagesArray.map((image: string) => {
        return (
         <div className="portfolio-image-container col-sm-12 col-md-4 col-lg-3">
            <img
              src={image}
              alt="torungen strikka gensere"
              className="portfolioImageWidth img-fluid"
            ></img>
          </div>
        );
    });

  return (
    <div>
        <Navbarr />
        <HeaderComponent 
       pricesImage="portfolioHeaderImage"
       titlePricesHeader="Tidligere arbeid"
      />
      <div className="container portfolioIndividualContainer">
      <AboutIntroText 
      introTitle="Torungen" 
      introText="Torungen Design ble stiftet av Kaja Baust i 1995. Med sitt tidløse design, inspirasjon fra Sørlandets skjærgård og garn fra Rauma er hun stadig like populær hos både Husfliden og kunder fra hele Norden."
     introLinkText="Se Torungen design sin nettside her" introLink="https://www.torungendesign.no/"/>
      <div className="portfolioPhotos row" id="portfolioPhotosWrap" >{torungenPhotos}</div>
      <GoTop />
      </div>
      <GoBack />
      <Footer />
    </div>
    
  )
}

export default NewMovements