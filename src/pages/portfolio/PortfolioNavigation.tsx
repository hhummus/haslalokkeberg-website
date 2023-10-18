import * as React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {imagesForPortfolio} from "./PortfolioWork";
import scrollToTop from '../../components/global/scrollToTop';

function PortfolioNavigation() {

useEffect(() => {
  scrollToTop()
}, []);

// setting types to be expected 
  interface itemObjects {
    title: string,
    id: number,
    class: string,
    link: string
  };

  return (
    <div className="portfolio-container container">
      <div className="row">

      {imagesForPortfolio.map((work:itemObjects) => {
        return (
          <div className='col-md-6' key={work.id}>
            <Link 
            to={work.link} 
            className={`portfolio-cta-container ${work.class}`} 
            onClick={() => scrollToTop()}>
            {work.title}
           </Link>
          </div>
        );
      })}
      ;
    </div>
  </div>
  );
}

export default PortfolioNavigation