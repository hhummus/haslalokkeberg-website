import { useRef } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_da8dq9b",
        "template_jcw0eca",
        form.current,
        "ZRcK89DVwt93bESi5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <form ref={form} className="contact-form" onSubmit={sendEmail}>
      <div className="container">
        <div className="row form-name form-spacing">
          <label htmlFor="name">Navn</label>
          <input type="text" name="name" id="name"></input>
        </div>

        <div className="row form-subject-text form-spacing">
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" id="subject"></input>
        </div>

        <div className="row form-message form-spacing">
          <label htmlFor="message">Melding</label>
          <textarea type="text" name="message"></textarea>
        </div>

        <div className="row form-email form-spacing">
          <label htmlFor="email">Din email</label>
          <input type="email" name="email"></input>
        </div>

        <div className="row form-submit form-spacing">
          <div className="col"></div>
          <button type="submit">Send melding</button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
