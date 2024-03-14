import React from "react";
import "./index.css";
import {ComplexNavbar, SimpleNavbar} from "./Navigation/Navbar.js";
import Section from "./Section/Section.js";
import EPK from "./EPK/EPK.js";
import LiveDatesSection from "./LiveDatesSection/LiveDatesSection.js";
import Footer from "./Footer/Footer.js";

function App() {
  return (
    <div>
      <SimpleNavbar />
      <Section />
      <EPK/>
      <LiveDatesSection />
      <Footer />
    </div>
  );
}

export default App;
