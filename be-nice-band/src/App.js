import React from 'react';
import './index.css';
import Navbar from './Navigation/Navbar.js'
import Section from './Section/Section.js'
import LiveDatesSection from './LiveDatesSection/LiveDatesSection.js'
import Footer from './Footer/Footer.js'


function App() {
  return (
    <div>
      <Navbar />
      <div class="h-screen" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/BackgroundImages/indexphoto.jpg'})`,
        backgroundSize: 'cover',
      }}>
        <Section />
      </div>
      <div class="h-screen" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + 'BackgroundImages/liveshowsbg.jpg'})`,
        backgroundSize: 'cover',
      }}>
        <LiveDatesSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
