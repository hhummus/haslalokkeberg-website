import  * as React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../css/magazine.css";
import Navbarr from '../../components/global/Navbar';
import Footer from '../../components/global/Footer';
import kontaktOneImage from "../../img/magazine/kontakt01-optimized.jpg";
import kontaktTwoImage from "../../img/magazine/kontakt02-optimized.jpg";
import kontaktThreeImage from "../../img/magazine/kontakt03-optimized.jpg";
import scrollToTop from '../../components/global/scrollToTop';
import allMagazinesImg from "../../img/magazine/kontakt-alle-optimized.jpg";


function Magazine() {
    
    useEffect(() => {
        scrollToTop()
       }, []);
  return (
    <div>
        <Navbarr />
       
        <div className="container magazine-container">
            <div className="row magazine-intro-container">
                <div className="row">
                    <div className="col-md-6">
                    <div className="col-md-12 magazine-image-container">
                    <img src={allMagazinesImg} alt="three KONTAKT magazines depicted"></img>
                    </div>
                <div className="col-md-12 magazine-title-container">
                    <h1 className="magazine-title">KONTAKT <span className="magazine-title-p">er et tidsskrift som har hovedforankring i analoge foto og har en ambisjon om å være et friskt tilskudd i skjæringspunktet mellom natur og kultur. Hver utgave har ulik tilnærming til disse temaene. KONTAKT finner du bla.a på KURO, Oslo Velo, Oslo Foto, Hasla Jewlery og Prisløs.</span></h1>
                </div>
                <p>KONTAKT koster 199 NOK.</p>
            </div>
                    </div>
                </div>
            

                <div className="row magazine-books-container">
                    <div className="col-md-6 eachMagazine">
                        <div className="magazine-title-container row">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="magazine-h2">Kontakt 01</h2>
                                    <small className="magazine-sm">Skjulte perler</small>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="magazine-image col-sm-6 col-md-12 col-lg-6">
                                <img src={kontaktOneImage} alt="kontakt 01" className="img-fluid"></img>
                            </div>                    
                            <div className="magazine-p col-sm-6 col-md-12 col-lg-6">
                                <div className="row">
                                    <div className="col-12">
                                        <p className="magazine-about-p">
                                        Vi ønsket å løfte opp og frem små ukjente og idylliske steder i Oslo, nyoppstartede bedrifter med fokus på bærekraft eller kultur og miljøbevisste kunstnere for å gi dem en arena å fortelle om sine tanker og verdier på. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 magazine-soldout">
                                     <small>utsolgt</small>
                                </div>
                            </div>
                        </div>
                      
                        
                    </div>

                    <div className="col-md-6 eachMagazine">
                        <div className="magazine-title-container row">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="magazine-h2">Kontakt 02</h2>
                                    <small className="magazine-sm">Natur og naturlighet</small>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="magazine-image col-sm-6 col-md-12 col-lg-6">
                            <img src={kontaktTwoImage} alt="kontakt 02" className="img-fluid"></img>
                            </div>
                            <div className="magazine-p col-sm-6 col-md-12 col-lg-6">
                                <div className="row">
                                    <div className="col-12">
                                    <p className="magazine-about-p">
                                Med blant annet Villbrygg og Veganergutta på laget ble Kontakt 2 til. Denne utgaven fokuserte på åpenhet rundt psykisk helse, naturens rolle i menneskets sinn, kloke ord fra en landskapsarkitekt og berettelser fra et kreativt par som bosatte seg på en bitteliten øy. Sånn blant annet. 
                                </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-6 magazine-order">
                            <Link to="/kontakt-oss">Bestill</Link>
                        </div>
                        </div>
                        
                    </div>

                    <div className="col-md-6 eachMagazine">
                        <div className="magazine-title-container row">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="magazine-h2">Kontakt 03</h2>
                                    <small className="magazine-sm">Natur og kultur</small>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="magazine-image col-sm-6 col-md-12 col-lg-6">
                            <img src={kontaktThreeImage} alt="kontakt 03" className="img-fluid"></img>
                            </div>
                            <div className="magazine-p col-sm-6 col-md-12 col-lg-6">
                                <p className="magazine-about-p">
                                I denne utgaven tok vi et dypdykk inn i ulike menneskers forhold til relasjonen mellom natur og kultur. Sigurd Lamark, F5, Edona Arnesen, New Movements og Rebecca Hawkes var blant aktørene som vi var så heldige å få høre tankene til denne gangen.  
                                </p>    
                            </div>
                          
                        </div>
                        <div className="row">
                            <div className="col-lg-6 magazine-order">
                            <Link to="/kontakt-oss">Bestill</Link>
                        </div></div>
                        
                        
                    </div>

                </div>

            </div>
      <Footer />
    </div>
  )
}

export default Magazine