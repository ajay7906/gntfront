import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/nav/Navbar'
import Footer from './component/footer/Footer'


import './styles.css';
import Hero from './pages/hero/Hero';

import AboutUs from './pages/about/AboutUs';

import ContactUs from './pages/contacts/ContactUs'
import { ContactFormProvider } from './context/ContactFormContext';
import ContactFormPopup from './component/popupform/ContactFormPopup';
import BlogPage from './pages/blog/Blog';
import EducationBlog from './pages/educational/EducationBlog';

const App = () => {
  return (
    <ContactFormProvider>
      <Router>
      <Navbar />
      <ContactFormPopup/>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path='/blog' element={<EducationBlog/>}/>
      </Routes>
      <Footer/>
    </Router>
    </ContactFormProvider>
    
  
  )
}

export default App