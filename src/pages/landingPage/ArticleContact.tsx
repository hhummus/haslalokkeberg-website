import * as React from "react";
import { Link } from "react-router-dom";
import magazineImage from "../../img/magazine/kontakt-alle.JPG";

function ArticleContact() {
  return (
    <div className="articleContainer">
      <div className="container">
        <Link to="/tidsskrift-kontakt" className="articleBtn btn-white">
        <div className="row row-eq-heigh">
          <div className="col-sm-7 articleContainerText brown">
            <h3 className="articleTitle">Vi gir ut tidsskriftet KONTAKT</h3>
            <p className="btn-italic">Se mer</p>
          </div>
          <div className="col-sm-5 col-no-padding articleContainerImage magazine">
            <div className="divForImage">
            <img src={magazineImage} alt="three magazines" className="img-fluid"></img>
            </div>
          
          </div>
        </div>
        </Link>
      </div>
    </div>
    
  );
  }

export default ArticleContact;
