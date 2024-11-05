import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./componets/Navbar/navbar";
import Footer from "./componets/Footer/footer";

//import Hero from "./pages/HeroSection/HeroSection"
//import AboutPage from "./pages/AboutPage/AboutUs";
// import  Contact  from "./pages/Contact/ContactUs";
import ContactUs from './pages/Contact/ContactUs'
import './styles.css';
import Hero from './pages/hero/Hero';
import AboutPage from "./pages/AboutPage/AboutUs"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactUs/>} />
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