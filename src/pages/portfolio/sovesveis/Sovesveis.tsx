import * as React from 'react'
import { useEffect } from 'react';
import sovesveisImagesArray from './Images';
import Navbarr from '../../../components/global/Navbar'
import HeaderComponent from '../../products/HeaderComp';
import AboutIntroText from '../AboutIntroText';
import GoBack from '../../../components/global/GoBack';
import Footer from '../../../components/global/Footer';
import scrollToTop from '../../../components/global/scrollToTop';
import GoTop from '../../../components/global/GoTop';


function Ambijus() {

 useEffect(() => {
  scrollToTop()
 }, []);

  const sovesveisPhotos = sovesveisImagesArray.map((image: string) => {
    return (
      <div className="portfolio-image-container col-sm-12 col-md-4 col-lg-3">
        <img
          src={image}
          alt="Wilder Kitchen"
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
      introTitle="Sovesveis" 
      introText="OIa G. Snippen bor på et lite småbruk i Telemark, kalt Lykka. Der jobber han med foto, kunst og tekstil-håndverk. 
      Våren 2023 fullførte han sin bachelor i Kunst, design og handverk ved Høgskulen i Volda, der oppgaven hans handlet om hvordan å se «det magiske i naturen»
      Kjærligheten for natur og bærekraft resulterte i merket Sovesveis.  "
     introLinkText="Se Sovesveis av Ola G Snippen sin nettbutikk her"  introLink="https://www.znippen.no/om-sovesveis"/>
      <div className="portfolioPhotos row" id="portfolioPhotosWrap" >{sovesveisPhotos}</div>
      <GoTop />
      </div>
      <GoBack />
      <Footer />
    </div>
    
  )
}

export default Ambijus;