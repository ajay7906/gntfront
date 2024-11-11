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
import Regular from './pages/regular/Regular';
import Seo from './pages/seo/Seo';

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
        <Route path='/blog/education' element={<EducationBlog/>}/>
        <Route path='/blog/regular' element={<Regular/>}/>
        <Route path='/blog/seo' element={<Seo/>}/>
      </Routes>
      <Footer/>
    </Router>
    </ContactFormProvider>
    
  
  )
}

export default App