import * as React from "react";
import Navbarr from "../../components/global/Navbar";
import ContactForm from "./ContactForm";
import Footer from "../../components/global/Footer";
import HeaderComponent from "../products/HeaderComp";
import "../../css/contact.css";

function ContactUs() {
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
      <Footer />
    </>
  );
}

export default ContactUs;
