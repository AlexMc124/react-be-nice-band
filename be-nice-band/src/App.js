import React from "react";
import "./index.css";
import Navbar from "./Navigation/Navbar.js";
import Section from "./Section/Section.js";
import EPK from "./EPK/EPK.js";
import LiveDatesSection from "./LiveDatesSection/LiveDatesSection.js";
import Footer from "./Footer/Footer.js";

function App() {
  return (
    <div>
      <Navbar />
      <Section />
      <EPK/>
      <LiveDatesSection />
      <Footer />
    </div>
  );
}

export default App;
