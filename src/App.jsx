import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/nav/Navbar'
import Footer from './component/footer/Footer'


import './styles.css';
import Hero from './pages/hero/Hero';

import AboutUs from './pages/about/AboutUs';

// save changes in data with new category and new file categorywith new file structure with name and file struncute and asus file strucntue


import ContactUs from './pages/contact/ContactUs'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about" element={<AboutUs/>} />
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