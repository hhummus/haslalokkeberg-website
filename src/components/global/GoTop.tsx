import * as React from 'react';
import { useState, useEffect } from 'react';
import "../../css/scrollTopButton.css";
import scrollToTop from './scrollToTop';

function GoTop() {
    const [checkScroll, setCheckScroll] = useState(false);

    const windowOnScroll = () => {
        window.scrollY > 400 ? setCheckScroll(true) : setCheckScroll(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", windowOnScroll) 
        return () => {
            window.removeEventListener("scroll", windowOnScroll)
        }; 
    },[])

  return (
       <div className={checkScroll ? "scrollTopButtonContainer active" : "scrollTopButtonContainer"}>
            <button className="scrollTopButton" onClick={scrollToTop}>&#8593;</button>
        </div>  
    
  )
}
export default GoTop