import * as React from "react";
import { Link } from "react-router-dom";
import portfolioImage from "../../img/portfolio-intro-image-4.JPG";


function ArticlePortfolio() {
  return (
    <div className="articleContainer">
      <div className="container">
        <div className="row row-eq-height">
          <div className="col-sm-7 col-no-padding">
            <Link className="articleBtn btn-white"
              to="/tidligere-arbeid"
             >
                <div className="articleContainerText blue">
                  <h3 className="articleTitle">Tidligere arbeid</h3>
                  <p className="articleP">
                    Vi tar oppdrag for blant annet bedrifter, privatpersoner,
                    eventer, bryllup og nyfødt fotografering.
                  </p>
                  <p className="btn-italic">
                    Ta en titt
                  </p>
                </div>
            </Link>
          </div>
          <div className="col-sm-5 portfolioImgContainer col-no-padding">
              <div className="divForImage">
                <img src={portfolioImage} alt="something" className="img-fluid"></img>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePortfolio;
