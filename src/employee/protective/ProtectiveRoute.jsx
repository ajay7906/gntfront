import { Navigate } from 'react-router-dom';
import { useContactForm } from '../../context/ContactFormContext';
//import { useAuth } from '../context/useAuth';
// import { useAuth } from './AuthContext';

const EmployeersProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContactForm();
  console.log(isAuthenticated);
  
  
  if (!isAuthenticated) {
    return <Navigate to="/employeer/login" replace />;
  }

  return children;
};

export default EmployeersProtectedRoute;