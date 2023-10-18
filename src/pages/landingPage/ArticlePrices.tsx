import * as React from "react";
import { Link } from "react-router-dom";


function ArticlePrices() {
  return (
    <div className="articlePrices">
       <Link className="articleBtn btn-black"
          to="/prislister"
          >
      <div className="container">
        <h2 className="articleTitle">
          Hva koster det å bestille{" "}
          <span className="textSpan">fotografering av oss?</span>
        </h2>
        <p className="btn-italic">
         
            Til prislister
         
        </p>
      </div>
      </Link>
    </div>
  );
}

export default ArticlePrices;
