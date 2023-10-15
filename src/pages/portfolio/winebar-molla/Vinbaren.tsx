import * as React from 'react'
import winebarMollaImagesArray from './Images';
import Navbarr from '../../../components/global/Navbar'
import HeaderComponent from '../../products/HeaderComp';
import AboutIntroText from '../AboutIntroText';
import GoBack from '../../../components/global/GoBack';
import Footer from '../../../components/global/Footer';


function NewMovements() {

    const winebarMollaPhotos = winebarMollaImagesArray.map((image: string) => {
        return (
         <div className="portfolio-image-container col-sm-12 col-md-4 col-lg-3">
            <img
              src={image}
              alt="vinbaren på mølla"
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
      introTitle="Vinbaren på mølla" 
      introText="tekst kommer"
     introLinkText="Vinbaren på mølla" introLink="https://newmovements.com/"/>
      <div className="portfolioPhotos row" id="portfolioPhotosWrap" >{winebarMollaPhotos}</div>
      </div>
      <GoBack />
      <Footer />
    </div>
    
  )
}

export default NewMovements