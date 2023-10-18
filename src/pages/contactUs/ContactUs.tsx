import * as React from "react";
import { useEffect } from "react";
import Navbarr from "../../components/global/Navbar";
import ContactForm from "./ContactForm";
import Footer from "../../components/global/Footer";
import HeaderComponent from "../products/HeaderComp";
import "../../css/contact.css";
import GoBack from "../../components/global/GoBack";
import scrollToTop from "../../components/global/scrollToTop";


function ContactUs() {

// scroll to top upon viewing page
  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <>
      <Navbarr />
      <HeaderComponent 
       pricesImage="contactHeaderImage"
       titlePricesHeader="Kontakt oss"
      />
      <div className="container contact-intro">
        <h1>Fyll ut skjemaet for å komme i kontakt med oss.</h1>
      </div>
      <ContactForm />
      <GoBack />
      <Footer />
    </>
  );
}

export default ContactUs;
