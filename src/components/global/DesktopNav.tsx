import * as React from "react";
import { homepageNavigation } from "../../pages/landingPage/navigationArray";
import { Link } from "react-router-dom";

const navRoutes = homepageNavigation;

// setting types to be expected 
interface itemObjects {
    title: string,
    id: number,
    link: string
  };

// desktop nav menu 
const NavDesktop = () => {
    return (
        <div className="row">
        <div className="col-3">
        <Link to="/" className="brandIcon">Hasla-Løkkenerg Agentur </Link>
        </div>
        <div className="col-9 globalNav desktopNav">
          {navRoutes.map((link:itemObjects) => {
            const links = "/" + link.link;
            return (
              <Link to={links} key={link.id}>
                {link.title}
              </Link>
            );
          })}     
        </div>
      </div>
    )               
};

export default NavDesktop