import React from "react";
// import { useEffect } from "react";
// import ContactForm from "../components/ContactForm/ContactForm";
import emailjs from "@emailjs/browser";
import { useEffect } from "react"

function Contact() {
  useEffect(() => {
    document.title = "Be Nice! - Contact Us"
  }
  , [])
  const sendemail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_k0vuj0p",
        "template_a2s7dbt",
        e.target,
        "P51NoS4FqZ2o9vTiR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div class="h-screen bg-cover bg-centre bg-[url('BackgroundImages/homepagebackground.JPG')] h-full ">
      <div class="container p-5">
        <div class="container p-10 mx-auto bg-white text-black rounded">
          For bookings, press, or enquiries, get in touch via our email <b>be.nice.band1@gmail.com</b>, or through the contact form below.
        </div>
      </div>
      <div class="container p-5">
        <div class="container pt-5 mx-auto bg-white text-black rounded">
          <form className="contact__form" onSubmit={sendemail}>
            <div class="container p-1">
              <div class="label" htmlFor="emailFrom">
                Email:
              </div>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="email_from"
                id="emailFrom"
                placeholder="person@example.com"
              />
            </div>
            <div class="container p-1">
              <div class="label" htmlFor="emailName">
                Name:
              </div>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="email_name"
                id="emailName"
                placeholder="Your name here"
              />
            </div>
            <div class="container p-1">
              <div class="label" htmlFor="message">
                Message:
              </div>
              <textarea
                name="message"
                id="message"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></textarea>
            </div>
            <div class="container p-1 pb-10">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="button"
                variant="contained"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
