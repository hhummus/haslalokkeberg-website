import Navbarr from "../../components/global/Navbar";
import ContactForm from "./ContactForm";
import Footer from "../../components/global/Footer";
import "../../css/contact.css";

function ContactUs() {
  return (
    <>
      <Navbarr />
      <div className="container contact-intro">
        <h1>Ta kontakt, da vel!</h1>
        <p>Du kan også sende oss en melding på instagram.</p>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}

export default ContactUs;
