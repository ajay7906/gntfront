import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./componets/Navbar/navbar";
import Footer from "./componets/Footer/footer";


import './styles.css';
import Hero from './pages/hero/Hero';
//import AboutPage from "./pages/aboutPage/AboutUs"
import About from './pages/aboutPage/AboutUs'
//import ContactUs from './pages/contact/ContactUs'
import Contact from './pages/contact/ContactUs'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
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