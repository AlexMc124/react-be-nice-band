import React from "react";
import { useEffect } from "react";
import ContactForm from "../components/ContactForm/ContactForm";

function Contact() {
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href =
        "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  return (
    <div class="bg-centre bg-[url('BackgroundImages/backgroundimage.JPG')]">
      <div class="container pt-10 h-full">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
