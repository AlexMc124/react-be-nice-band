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
    <div class="h-screen bg-cover bg-centre bg-[url('BackgroundImages/homepagebackground.JPG')] h-full ">
      <div class="container pt-10">
        <div class="container p-10 mx-auto bg-white text-black rounded">
          For bookings, press or enquiries, get in touch via our email
          be.nice.band1@gmail.com, or through the contact form below.
        </div>
      </div>
      <div class="container pt-10">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
