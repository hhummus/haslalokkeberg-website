import * as React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import aboutUsImage from "../../img/bli-kjent-2-optimized.jpg";
import scrollToTop from "../../components/global/scrollToTop";

function AboutUs() {

  useEffect(() => {
    scrollToTop()
  }, []);

  return (
    <div className="aboutUs">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-xl-6 aboutUsImageContainer">
            <img src={aboutUsImage}  alt="Helena and Stine in front of mountains." className="aboutUsImage"/>
          </div>
          <div className="col-lg-8 col-xl-6 aboutUsP">
          <p>Hasla-Løkkeberg Agentur ble etablert i 2021 av Stine Hasla og Helena Løkkeberg. Helena har studert kunstfoto ved DTK og kan skilte med flere soloutstillinger, prosjekter og fotoboken «Challenging the view». Stine etablerte i 2018 «Hasla Foto» og har  i en årrekke samarbeidet med ulike aktører innen mote, kunst og kultur. 
          </p>
          <p>Hasla-Løkkeberg holder til på Holmen i Fredrikstad, men vi flytter oss gjerne dit kunden befinner seg. 
          </p>
          <p>I 2021 bestemte vi oss for å skape tidsskriftet <Link to="/tidsskrift-kontakt" className="ctaInternal">KONTAKT </Link>og siden den gang har det kommet fire utgaver.
          </p>
          </div> 
       </div>
      </div>
    </div>

  );
}

export default AboutUs;
