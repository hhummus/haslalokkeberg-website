import * as React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {homepageNavigation} from "./navigationArray";
import scrollToTop from '../../components/global/scrollToTop';

function Homepage() {

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
    <div className="container">
      <div className="row">

      {homepageNavigation.map((link:itemObjects) => {
        return (
          <div className="col-md-6 homepageLinkContainer" key={link.id}>
            <Link 
            to={link.link} 
            className={`homepageLinks ${link.class}`} 
            onClick={() => scrollToTop()}>
            {link.title}
           </Link>
          </div>
        );
      })}
      ;
    </div>
  </div>
  );
}
export default Homepage