import * as React from "react";
import { socialMediaPhotos } from "./socialImages";

function ArticleTwo() {
  // new var with first 9 images
  const firstNinePhotos = socialMediaPhotos.filter((_: any, index: number) => index < 9);

  // displaying each of the 9 images
  const socialPhotos = firstNinePhotos.map((image: string) => {
    return (
      <div className="col">
        <img
          src={image}
          alt="social media photos"
          className="socialImageWidth"
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
        <div className="photographsDaily row">{socialPhotos}</div>

        <div className="row">
          <div className="col-12">
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
