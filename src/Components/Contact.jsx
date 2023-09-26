import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="./src/assets/email.png"
            alt="email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:rakibshanto96@gmail.com">rakibshanto96@gmail.com</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src="./src/assets/linkedin.png"
            alt="linkedin icon"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/rakibshanto96/">LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
