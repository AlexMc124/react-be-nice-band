import React from "react";
import "./index.css";
// import SimpleNavbar from "./components/Navigation/Navbar.js";
// import EPK from "./components/EPK/EPK.js";
// import LiveDatesSection from "./components/LiveDatesSection/LiveDatesSection.js";
// import Footer from "./components/Footer/Footer.js";
import Navbar from "./components/SimpleComponents/Navbar.js";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import HomePage from "./pages/homepage.js";
import Bio from "./pages/bio.js";
import Gigs from "./pages/gigs.js";
import Merch from "./pages/merch.js";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/bio" element={<Bio />} />
                <Route
                    path="/gigs"
                    element={<Gigs />}
                />
                <Route
                    path="/merch"
                    element={<Merch />}
                />
            </Routes>
        </Router>
    );
}
 
export default App;


