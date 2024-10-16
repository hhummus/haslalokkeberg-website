import * as React from "react";
import { homepageNavigation } from "../../pages/landingPage/navigationArray";
import { Link } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";
import { useState } from "react";

const navRoutes = homepageNavigation;

const NavMobile = () => {
    // determine if nav is open / close
    const [isOpen, setIsOpen] = useState(false)

    // setting types to be expected 
    interface itemObjects {
        title: string,
        id: number,
        link: string}

    const navBurgerOnClick = () => {
        isOpen ? setIsOpen(true)  : setIsOpen(false)
    };
        
    window.addEventListener("click", navBurgerOnClick)

    return (
        <div className="row">
            <div className="col-8">
                <Link to="/" className="brandIcon">Hasla-Løkkenerg Agentur</Link>
            </div>
            <div className="col-4 burgerMenu"> 
                <button onClick={() => setIsOpen(!isOpen)} className=""><Hamburger/></button>
            </div>
            {isOpen && 
            <div className="row dropDownNav">
                <div className="navDropdownDivider"></div>
                    <div className="col globalNav mobileNav">
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
            } 
        </div>
    );
};

export default NavMobile