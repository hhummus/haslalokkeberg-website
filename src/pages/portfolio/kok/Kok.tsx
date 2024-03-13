import * as React from 'react';
import { useEffect } from 'react';
import "../../../css/portfolioPages.css"
import kokImagesArray from './Images';
import Navbarr from '../../../components/global/Navbar';
import HeaderComponent from '../../products/HeaderComp';
import GoBack from '../../../components/global/GoBack';
import Footer from '../../../components/global/Footer';
import AboutIntroText from '../AboutIntroText';
import scrollToTop from '../../../components/global/scrollToTop';
import GoTop from '../../../components/global/GoTop';


function Kok() {

  useEffect(() => {
    scrollToTop()
   }, []);

  const kokPhotos = kokImagesArray.map((image: string) => {
    return (
     <div className="portfolio-image-container col-sm-12 col-md-4 col-lg-3">
        <img
          src={image}
          alt="kok photos"
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
      introTitle="KOK" 
      introText="KOK Norge AS ble stiftet av Kristin Lorange i 2017. Siden den gang har KOK eskapendert både i innbyggernes interesse  og antall og drifter i dag 9 badstuer i Oslo."
      introLinkText="Besøk KOK sin nettside her"  introLink="https://koknorge.no/"/>
      <div className="portfolioPhotos row" id="portfolioPhotosWrap" >{kokPhotos}</div>
      <GoTop />
      </div>
      <GoBack />
      <Footer />
    </div>
  )
}

export default Kok
