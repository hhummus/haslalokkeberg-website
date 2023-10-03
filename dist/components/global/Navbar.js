import React from "react";
import "../../css/navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
function Navbarr() {
    const [navbar, setNavbar] = useState(false);
    const navbarOnScroll = () => {
        if (window.scrollY >= 65) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    };
    window.addEventListener("scroll", navbarOnScroll);
    return (React.createElement(React.Fragment, null,
        React.createElement(Navbar, { collapseOnSelect: true, expand: "lg", className: navbar ? "navbar active" : "navbar" },
            React.createElement(Link, { to: "/", className: "navbar-logo" }, "Hasla-L\u00F8kkeberg Agentur"),
            React.createElement(Navbar.Toggle, { "aria-controls": "responsive-navbar-nav" }),
            React.createElement(Navbar.Collapse, { id: "responsive-navbar-nav" },
                React.createElement("div", { className: "nav-dropdown-divider" }),
                React.createElement(Nav, { className: "mr-auto" },
                    React.createElement(Link, { to: "/om-oss", className: "nav-dropdown" }, "Bli kjent med oss"),
                    React.createElement(Link, { to: "/kontakt-oss", className: "nav-dropdown" }, "Kontakt oss"),
                    React.createElement(Link, { to: "/prislister", className: "nav-dropdown" }, "Prislister"))))));
}
export default Navbarr;
