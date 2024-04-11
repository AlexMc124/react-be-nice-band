import React, { useState } from "react";


const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch("https://domain.provider.com/mas/api/v1/mail/transaction", {
        body: "{\"id\":\"3970a1b0-6e27-448a-adfc-0083db15b2fb\", \"tokens\":{\"design_token1\":\"Hi\",\"design_token2\":\"Hello\",\"design_token3\":\"World\",\"subject_token1\":\"XYZ\"}, \"recipient\":\"james@sample.com\"}",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Token: "sfg999666t673t7t82"
        },
        method: "POST"
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>
  );
//   <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
//     <div className="form-group">
//         <label htmlFor="name">Name</label>
//         <input type="text" className="form-control" />
//     </div>
//     <div className="form-group">
//         <label htmlFor="exampleInputEmail1">Email address</label>
//         <input type="email" className="form-control" aria-describedby="emailHelp" />
//     </div>
//     <div className="form-group">
//         <label htmlFor="message">Message</label>
//         <textarea className="form-control" rows="5"></textarea>
//     </div>
//     <button type="submit" className="btn btn-primary">Submit</button>
// </form>
};

export default ContactForm;
