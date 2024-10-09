import * as React from "react";
import { Link } from "react-router-dom";
import "../../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";



function Footer() {
  return (
    <div className="globalFooter">
      

        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 globalFooterCopyright">
              <p>© 2024 haslalokkeberg</p>
            </div>
            <div className=" col-sm-12 col-md-6 soMe">
            <Link to="https://www.instagram.com/haslalokkeberg/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
            <Link to="/kontakt-oss"><FontAwesomeIcon icon={faEnvelope} /></Link>
          </div>        
          </div>
        </div>
        <div className="container">
        <div className="row">
          
        </div>
      </div>
      </div>
  );
}

export default Footer;
