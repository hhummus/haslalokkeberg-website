import * as React from 'react'
import torungenImagesArray from './Images';
import Navbarr from '../../../components/global/Navbar'
import HeaderComponent from '../../products/HeaderComp';
import AboutIntroText from '../AboutIntroText';
import GoBack from '../../../components/global/GoBack';
import Footer from '../../../components/global/Footer';


function NewMovements() {

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
      introText="Torungen designer og selger klasssiske gensere for barn og voksne.
      Mønstre, farger og presentasjon er inspirert av fiskartrøye-tradisjonen og kystkulturen i Sør-Norge."
     introLinkText="Torungen design" introLink="https://www.torungendesign.no/"/>
      <div className="portfolioPhotos row" id="portfolioPhotosWrap" >{torungenPhotos}</div>
      </div>
      <GoBack />
      <Footer />
    </div>
    
  )
}

export default NewMovements