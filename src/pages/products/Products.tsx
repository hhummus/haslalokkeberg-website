import * as React from "react";
import { Link } from "react-router-dom";
import * as data from "../../components/json/InfoProducts.json";

// making data to be an array to use map function
const dataArray= Array.from(data);

function Products() {

  // setting types to be expected from data
  interface itemObjects {
    id: number,
    headline: string,
    intro: string,
    cost: string,
    link: string
  }
  
  return (
    <div className="product-container">
     
      {dataArray.map((item:itemObjects) => {
        return (
          <div key={item.id} className="products">
            <div className="container">
            <div className="row">
              <div className="col-sm-6 product-info">
                <h1>{item.headline}</h1>
                <p>{item.intro}</p>
              </div>
              <div className="col-sm-6 product-price">
                <p>Priser fra {item.cost}</p>
              </div>
            </div>
            <div className="row">
              <div className="col cta-products">
                  <Link to={item.link}>Se mer</Link>
              </div>
            </div>
            </div>
          </div>
        );
       
      })}
      ;
    </div>
  );
}

export default Products;
