import * as React from "react";
import { Link } from "react-router-dom";

function ArticleContact() {
  return (
    <div className="articleContainer">
      <div className="container">
        <div className="row">
          <div className="col-sm col-no-padding">
            <div className="articleContainerText brown">
              <h3 className="articleTitle">Kontakt</h3>
              <p className="articleP">
                Vi håper du tar kontakt med oss — vi håper også at du vil sjekke
                ut vårt tidsskrift kalt Kontakt.
              </p>
              <div className="articleBtn btn-white">
                <Link
                  to="https://oslovelobodega.com/products/tidsskriftet-kontakt-issue-03?_pos=1&_sid=b6a470adc&_ss=r"
                  target="_blank"
                >
                  Sjekk ut tidsskriftet Kontakt
                </Link>
              </div>
              <div className="articleBtn btn-white ">
                <Link to="/kontakt-oss">Kontakt oss</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleContact;
