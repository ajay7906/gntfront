// MarketingProtectedRoute.js
import { Navigate } from 'react-router-dom';

const MarketingProtectedRoute = ({ children }) => {
  const marketingToken = localStorage.getItem('marketingToken');
  
  if (!marketingToken) {
    return <Navigate to="/marketing/login" />;
  }
  
  return children;
};

export default MarketingProtectedRoute;