import * as React from "react";
import { Link } from "react-router-dom";
import "../../css/footer.css";
import iconIg from "../../img/icons/ig-icon.png";


function Footer() {
  return (
    <div className="globalFooter">
      <div className="container">
      <div className="row">
        <div className="col-12 globalFooterCopyright">
            <p>© 2024 haslalokkeberg</p>
            <p>
             Nettside av Helena Løkkeberg
            </p>
        </div>
        </div>
        <div className="row">
          <div className=" col-12 soMe">
            <Link to="https://www.instagram.com/haslalokkeberg/" target="_blank"><img src={iconIg} alt="instagram icon" className="iconIg"></img></Link>
          </div>
        </div>
        </div>
      </div>
  );
}

export default Footer;
