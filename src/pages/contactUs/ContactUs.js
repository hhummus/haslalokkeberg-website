import Navbar from "../../components/global/Navbar";
import ContactForm from "./ContactForm";
import "../../css/contact.css";

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="container contact-intro">
        <h1>Hva lurer du på?</h1>
        <p>Still oss ditt spørsmål og få svar i løpet av 5-6 virkedager</p>
      </div>

      <ContactForm />
    </>
  );
}

export default ContactUs;
