import { Link } from "react-router-dom";

function ArticlePrices() {
  return (
    <div className="articlePrices">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h2 className="articlePricesH2">
              Hva koster det å bestille fotografering av oss?
            </h2>

            <div className="articlePricesImgContainer"></div>
          </div>

          <div className="col-sm-6 articleprices-col-6">
            <p className="articlePricesP">
              Vi tar oppdrag som konfirmasjon, parbilder, portretter,
              alternative bilder, eventer, bedrift mm og prisene vil fluktuere
              utifra dette.
            </p>
            <Link to="/prislister" className="articlePricesBtn">
              Til prislister
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePrices;
