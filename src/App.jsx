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
import CloudPage from './component/cloud/CloudPage';
import AiPowered from './component/aipowered/AiPowered';
import CRMPage from './component/crm/CRMPage';
import SocialMedia from './component/social/SocialMedia';
import WebDevelopment from './component/webdevelopment/WebDevelopment';
import CustomSoftwares from './component/custem/CustemSoftware';
import PortFolio from './component/portfolio/PortFolio';
import 'react-toastify/dist/ReactToastify.css';
import TermsAndConditions from './pages/termsancondi/TermsAndCondition';
import PolicyPage from './pages/policy/PolicyPage';
import NotFound from './component/notfound/NotFound';
import PaymentForm from './pages/payment/PaymentForm';
import SuccessPaymentPage from './pages/successpayment/SuccessPaymentPage';
import FailurePaymentPage from './pages/failurepayment/FailurePaymentPage';
import ApplicationForm from './component/careerCompo/ApplicationForm';
import EmployerSignin from './employee/EmployeeSignIn';
import EmployeersProtectedRoute from './employee/protective/ProtectiveRoute';
import EmployeeNavbar from './employee/EmployeeNavbar';
import AdminDashboard from './employee/AdminDashboard';
import EmployeeTable from './employee/EmployeeTable';
import AdminTaskTable from './employee/TaskTable';
import MarketingLoginForm from './marketing/LoginForm';
import MarketingProtectedRoute from './marketing/protetiveRoute/MarketingProtectedRoute';
import MarketingNavbar from './marketing/MarketingNavbar';
import MarketingHome from './marketing/MarketingHome';
import TaskInformationForm from './marketing/TaskInformation';
import IncompletedTaskForm from './marketing/IncompletedForm';
import RescheduleTaskForm from './marketing/RescheduleTaskForm';
import RejectedTaskForm from './marketing/RejectedTaskForm';
import AllTasksList from './marketing/AllTaskList';
const ProtectedRoute = ({ children }) => {
  const adminToken = localStorage.getItem('adminToken');
  if (!adminToken) {
    return <Navigate to="/login" />;
  }
  return children;
};

const App = () => {
  // Check if current path is admin route or login route
  const isAdminRoute = window.location.pathname.includes('/admin');
  const isEmployeeRoute = window.location.pathname.includes('/employee');
  const isMarketingRoute = window.location.pathname.includes('/marketing');
  const isLoginRoute = window.location.pathname.includes('/login');






  return (
    <ContactFormProvider>
      <Router>
        {/* Conditionally render Navbar for non-admin routes */}
        {/* Update navbar conditional render */}
        {!isAdminRoute && !isEmployeeRoute && !isMarketingRoute && !isLoginRoute && <Navbar />}


        <ContactFormPopup />

        <Routes>
          <Route path='/form' element={<ApplicationForm />} />
          <Route path="/" element={<Hero />} />
          <Route path="/about/aboutus" element={<AboutUs />} />
          <Route path="/about/founder" element={<FounderMessage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/portfolio" element={<PortFolio />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path='/blog/education' element={<EducationBlog />} />
          <Route path='/blog/regular' element={<Regular />} />
          <Route path='/blog/seo' element={<Seo />} />
          <Route path='/products/whatsapp' element={< WhatsAppChat />} />
          <Route path='/products/digitalmarketing' element={< DigitalMarketing />} />
          <Route path='/products/cybersecurity' element={< Cybersecurity />} />
          <Route path='/products/erp' element={< ErpSolution />} />
          <Route path='/products/ecom' element={< Ecommerse />} />
          <Route path='/services/cloud' element={< CloudPage />} />
          <Route path='/services/ai' element={< AiPowered />} />
          <Route path='/services/crm' element={< CRMPage />} />
          <Route path='/services/social' element={< SocialMedia />} />
          <Route path='/services/web' element={< WebDevelopment />} />
          <Route path='/services/custem' element={< CustomSoftwares />} />
          <Route path='/termsandconditions' element={< TermsAndConditions />} />
          <Route path='/policy' element={< PolicyPage />} />
          <Route path='/payment' element={< PaymentForm />} />
          <Route path='/success' element={< SuccessPaymentPage />} />
          <Route path='/failure' element={< FailurePaymentPage />} />

          <Route path='*' element={< NotFound />} />


          {/* Login Route */}
          <Route path="/login" element={<LoginForm />} />

          {/* employeer login page */}
          <Route path="/employeer/login" element={<EmployerSignin />} />



          {/* Protected Admin Route */}
          <Route
            path='/admin/home'
            element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            }
          />







          {/* Employeer admin panel */}

          <Route
            path="/employeer/home"
            element={
              <EmployeersProtectedRoute>
                <>
                  <EmployeeNavbar />
                  <AdminDashboard />
                </>
              </EmployeersProtectedRoute>
            }
          />

          <Route
            path="/employeer/user"
            element={
              <EmployeersProtectedRoute>
                <>
                  <EmployeeNavbar />
                  <EmployeeTable />
                </>
              </EmployeersProtectedRoute>
            }
          />

          <Route
            path="/employeer/task"
            element={
              <EmployeersProtectedRoute>
                <>
                  <EmployeeNavbar />
                  <AdminTaskTable />
                </>
              </EmployeersProtectedRoute>
            }
          />

          <Route path="/marketing/login" element={<MarketingLoginForm />} />

          <Route
            path="/marketing/dashboard"
            element={
              <MarketingProtectedRoute>
                <>
                  <MarketingNavbar />
                  <MarketingHome />
                </>
              </MarketingProtectedRoute>
            }
          />

          <Route
            path="/marketing/completed"
            element={
              <MarketingProtectedRoute>
                <>
                  <MarketingNavbar />
                  <TaskInformationForm />
                </>
              </MarketingProtectedRoute>
            }
          />


          <Route
            path="/marketing/incompleted"
            element={
              <MarketingProtectedRoute>
                <>
                  <MarketingNavbar />
                  <IncompletedTaskForm />
                </>
              </MarketingProtectedRoute>
            }
          />


          <Route
            path="/marketing/reschedule"
            element={
              <MarketingProtectedRoute>
                <>
                  <MarketingNavbar />
                  <RescheduleTaskForm />
                </>
              </MarketingProtectedRoute>
            }
          />


          <Route
            path="/marketing/rejected"
            element={
              <MarketingProtectedRoute>
                <>
                  <MarketingNavbar />
                  <RejectedTaskForm />
                </>
              </MarketingProtectedRoute>
            }
          />



          <Route
            path="/marketing/alltask"
            element={
              <MarketingProtectedRoute>
                <>
                  <MarketingNavbar />
                  <AllTasksList />
                </>
              </MarketingProtectedRoute>
            }
          />












        </Routes>






        {/* Conditionally render Footer for non-admin routes */}
        {/* {!isAdminRoute && (
          <>
            <Footer />
          </>
        )} */}
        {/* Update navbar conditional render */}
        {!isAdminRoute && !isEmployeeRoute && !isMarketingRoute && !isLoginRoute && <Footer />}

      </Router>
    </ContactFormProvider>
  );
};

export default App;