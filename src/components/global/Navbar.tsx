import * as React from "react";
import "../../css/navbar.css";
import { useState, useEffect, useRef} from "react";
import NavMobile from "./MobileNav";
import NavDesktop from "./DesktopNav";

function Navbar() {
  // determine if user scrolls down/up
  const [navbar, setNavbar] = useState(false);
   // determine window size for navmenu
  const [windowSizeNav, setWindowSizeNav] = useState(false)
  // find & store width value
  const previousWidthValue = useRef(window.innerWidth);
  // find & store scroll position
  const prevScrollHeight = useRef(window.scrollY)
  //top page
  const topPage = 30;
    
 useEffect(() => {
  const handleResizeNav = () => {
    // current width
    const currentWidth = window.innerWidth;

    currentWidth > 999 ? setWindowSizeNav(true) : setWindowSizeNav(false)

    if(currentWidth <= 999) {
      setWindowSizeNav(false) 
    }

    // update window width size
    previousWidthValue.current = currentWidth;
  };
    window.addEventListener("resize", handleResizeNav)
    return () => {
    window.removeEventListener("resize", handleResizeNav)
    };
 },[]);


  useEffect(() => {
    const navbarOnScroll = () => {
      // current scroll position
      const currentScrollPos = window.scrollY;
      
      prevScrollHeight.current > currentScrollPos ? setNavbar(false) : setNavbar(true)

      if(prevScrollHeight.current <= topPage) {
        setNavbar(false) 
      }  
      // update previous scroll position
      prevScrollHeight.current = currentScrollPos;
    };
      window.addEventListener("scroll", navbarOnScroll); 
      return () => {
      window.removeEventListener("scroll", navbarOnScroll)
      };
  },[])
 
  return (
    <div className={navbar? "navbar active" : "navbar"}>
      {windowSizeNav ? <NavDesktop/> : <NavMobile/>}
    </div>
  );
}
export default Navbar;
