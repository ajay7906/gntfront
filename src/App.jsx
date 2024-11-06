import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/nav/Navbar'
import Footer from './component/footer/Footer'


import './styles.css';
import Hero from './pages/hero/Hero';

import AboutUs from './pages/contacts/ContactUs';

import ContactUs from './pages/contacts/ContactUs'

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
    
  
  )
}

export default App