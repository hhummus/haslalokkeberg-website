import * as React from "react";
import { socialMediaPhotos } from "./socialImages";

function ArticleTwo() {


  // displaying each of the 9 images
  const socialPhotos = socialMediaPhotos.map((image: string) => {
    return (
     <div className="social-image-container col-4 col-md-3 col-lg-3 ">
        <img
          src={image}
          alt="social media photos"
          className="socialImageWidth img-fluid"
        ></img>
    </div>
    );
  });

  return (
    <div className="articleTwo">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="articleTwoTitle">
              Bli bedre kjent med oss gjennom fotografier fra dagliglivet.
            </h1>
            <p className="articleTwoP">
              Kanskje litt utradisjonelt? Vi liker det sånn.
            </p>
          </div>
        </div>
        <div className="photographsDaily row" id="photographsDailyWrap" >{socialPhotos}</div>

        <div className="row">
          <div className="col">
            <p className="articleTwoSmallP">
              Vi liker også kjærlighet for alle. Bærekraft. Norske råvarer.
              Oransje-vin. Bøker. Stine liker krim, Helena digger sci-fi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleTwo;
