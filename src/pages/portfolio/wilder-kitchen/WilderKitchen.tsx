import * as React from 'react'
import { useEffect } from 'react';
import wilderImagesArray from './Images';
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

  const wkPhotos = wilderImagesArray.map((image: string) => {
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
      introTitle="Wilder Kitchen" 
      introText="Kokk, fotograf og kunster Rebecca Hawkes startet opp det idealistiske konseptet Wilder Kitchen i 2021. Med fokus på sesongbaserte råvarer og det hun finner i naturen lager hun hver fjerde søndag spennende, veganske måltider på Losæter i Oslo. Hver enkelt betaler selv det man føler man har råd til og alle er velkommne. På denne måten får hun samlet mennesker fra alle lag til et felles måltid. Snakk om fantastisk dame!"
     introLinkText="Wilder Kitchen av Rebecca Hawkes" introLinkWebsite="nettside" introLink="https://www.hawkes.work/about"/>
      <div className="portfolioPhotos row" id="portfolioPhotosWrap" >{wkPhotos}</div>
      <GoTop />
      </div>
      <GoBack />
      <Footer />
    </div>
    
  )
}

export default Ambijus;