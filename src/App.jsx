




// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './component/nav/Navbar'
// import Footer from './component/footer/Footer'
// import './styles.css';
// import Hero from './pages/hero/Hero';
// import AboutUs from './pages/about/AboutUs';
// import ContactUs from './pages/contacts/ContactUs'
// import { ContactFormProvider } from './context/ContactFormContext';
// import ContactFormPopup from './component/popupform/ContactFormPopup';
// import BlogPage from './pages/blog/Blog';
// import EducationBlog from './pages/educational/EducationBlog';
// import Regular from './pages/regular/Regular';
// import Seo from './pages/seo/Seo';
// import FounderMessage from './component/founderMessage/FounderMessage';
// import CareersPage from './component/carrier/CareerPage';
// import AdminPanel from './admin/adminhome/AdminPage';

// const App = () => {
//   return (
//     <ContactFormProvider>
//       <Router>
//         {/* Conditionally render Navbar and Footer */}
//         {window.location.pathname !== '/admin/home' && (
//           <>
//             <Navbar />
//             {/* <Footer /> */}
//           </>
//         )}
//         <ContactFormPopup />
//         <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/about/aboutus" element={<AboutUs />} />
//           <Route path="/about/founder" element={<FounderMessage />} />
//           <Route path="/contact" element={<ContactUs />} />
//           <Route path="/careers" element={<CareersPage />} />
//           <Route path='/blog/education' element={<EducationBlog />} />
//           <Route path='/blog/regular' element={<Regular />} />
//           <Route path='/blog/seo' element={<Seo />} />
//           <Route path='/admin/home' element={<AdminPanel />} />
//         </Routes>
//         {window.location.pathname !== '/admin/home' && (
//           <>
//             {/* <Navbar /> */}
//             <Footer />
//           </>
//         )}
//       </Router>
//     </ContactFormProvider>
//   )
// }

// export default App





















































import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './component/nav/Navbar';
import Footer from './component/footer/Footer';
import './styles.css';
import Hero from './pages/hero/Hero';
import AboutUs from './pages/about/AboutUs';
import ContactUs from './pages/contacts/ContactUs';
import { ContactFormProvider } from './context/ContactFormContext';
import ContactFormPopup from './component/popupform/ContactFormPopup';
import BlogPage from './pages/blog/Blog';
import EducationBlog from './pages/educational/EducationBlog';
import Regular from './pages/regular/Regular';
import Seo from './pages/seo/Seo';
import FounderMessage from './component/founderMessage/FounderMessage';
import CareersPage from './component/carrier/CareerPage';
import AdminPanel from './admin/adminhome/AdminPage';
import LoginForm from './adminCompo/loginAdmin/LoginForm';
import Service from './pages/whatsapppage/WhatsAppChat';
import WhatsAppChat from './pages/whatsapppage/WhatsAppChat';
import DigitalMarketing from './component/digitalmarketing/DigitalMarketing';
import Cybersecurity from './component/cybersecurity/CyberSecurity';
import ErpSolution from './component/erp/ErpSolution';
import Ecommerse from './component/ecommerse/Ecommerse';
//import LoginForm from './components/login/LoginForm'; // Import LoginForm

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const adminToken = localStorage.getItem('adminToken');
  if (!adminToken) {
    return <Navigate to="/login" />;
  }
  return children;
};

const App = () => {
  // Check if current path is admin route or login route
  const isAdminRoute = window.location.pathname.includes('/admin') || window.location.pathname.includes('/login');

  return (
    <ContactFormProvider>
      <Router>
        {/* Conditionally render Navbar for non-admin routes */}
        {!isAdminRoute && (
          <>
            <Navbar />
          </>
        )}
        
        <ContactFormPopup />
        
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about/aboutus" element={<AboutUs />} />
          <Route path="/about/founder" element={<FounderMessage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path='/blog/education' element={<EducationBlog />} />
          <Route path='/blog/regular' element={<Regular />} />
          <Route path='/blog/seo' element={<Seo />} />
          <Route path='/products/whatsapp' element={< WhatsAppChat/>} />
          <Route path='/products/digitalmarketing' element={< DigitalMarketing/>} />
          <Route path='/products/cybersecurity' element={< Cybersecurity/>} />
          <Route path='/products/erp' element={< ErpSolution/>} />
          <Route path='/products/ecom' element={< Ecommerse/>} />
          {/* Login Route */}
          <Route path="/login" element={<LoginForm />} />
          
          {/* Protected Admin Route */}
          <Route
            path='/admin/home'
            element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            }
          />
        </Routes>

        {/* Conditionally render Footer for non-admin routes */}
        {!isAdminRoute && (
          <>
            <Footer />
          </>
        )}
      </Router>
    </ContactFormProvider>
  );
};

export default App;