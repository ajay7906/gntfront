import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./componets/Navbar/navbar";
import Footer from "./componets/Footer/footer";
import HeroSection from "./pages/HeroSection/heroSection";
import AboutPage from "./pages/AboutPage/aboutUs";
import  Contact  from "./pages/Contact/contactUs";
import './styles.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
    
    // <div>
    //   <Navbar />
    //   <HeroSection />
    //   <AboutPage />
    //   <Footer />

    // </div>
  )
}

export default App