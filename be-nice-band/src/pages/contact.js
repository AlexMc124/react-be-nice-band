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
    <div class="h-screen bg-cover bg-centre bg-[url('BackgroundImages/backgroundimage.JPG')] h-full ">
      <div class="container pt-10">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
