import * as React from "react";
import "../../css/navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

function Navbarr() {
 
  const [navbar, setNavbar] = useState(false);

  const navbarOnScroll = () => {
    if (window.scrollY >= 65) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", navbarOnScroll);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={navbar ? "navbar active" : "navbar"}
      >
        <Link to="/" className="navbar-logo">
          Hasla-Løkkeberg Agentur
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse role="" id="responsive-navbar-nav">
          <div className="nav-dropdown-divider"></div>
          <Nav className="mr-auto">
          <Link to="/tidligere-arbeid" className="nav-dropdown">
              Samarbeid
            </Link>
            <Link to="/prislister" className="nav-dropdown">
              Prislister
            </Link>
            <Link to="/om-oss" className="nav-dropdown">
              Bli kjent med oss
            </Link>
            <Link to="/kontakt-oss" className="nav-dropdown">
              Kontakt oss
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navbarr;