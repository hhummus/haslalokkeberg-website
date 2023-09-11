import React from "react";
import { Link } from "react-router-dom";

function ArticleAbout() {
  return (
    <div>
      <div className="aboutUsContainerImage">
        <div className="container">
          <div className="row">
            <div className="col aboutUsBtnContainer">
              <Link to="om-oss" className="aboutUsBtn">
                Bli bedre kjent med oss
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleAbout;
