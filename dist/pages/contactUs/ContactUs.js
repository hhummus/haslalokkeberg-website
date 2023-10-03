import React from "react";
import Navbarr from "../../components/global/Navbar";
import ContactForm from "./ContactForm";
import Footer from "../../components/global/Footer";
import "../../css/contact.css";
function ContactUs() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Navbarr, null),
        React.createElement("div", { className: "container contact-intro" },
            React.createElement("h1", null, "Ta kontakt, da vel!"),
            React.createElement("p", null, "Du kan ogs\u00E5 sende oss en melding p\u00E5 instagram.")),
        React.createElement(ContactForm, null),
        React.createElement(Footer, null)));
}
export default ContactUs;
