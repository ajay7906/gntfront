// ContactFormContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

const ContactFormContext = createContext();

export const ContactFormProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    businessName: ''
  }); 

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [employees, setEmployees] = useState([]);
  const [allTask, setAllTask] = useState([]);

  useEffect(() => {
    const checkAuth = () => { 
      const storedToken = localStorage.getItem('token');
      setIsAuthenticated(!!storedToken);
      setLoading(false);
    };
    checkAuth();
  }, []);



  const fetchEmployees = async () => {
    try {
      const response = await fetch('https://gntindia.com:5000/api/v1/emplyeers/admins/allemplyees', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setEmployees(data);
      }
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const addEmployee = async (employeeData) => {
    try {
      const response = await fetch('https://gntindia.com:5000/api/v1/emplyeers/admins/createEmployee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(employeeData)
      });
      if (response.ok) {
        await fetchEmployees();
        return { success: true };
      }
      const error = await response.json();
      return { success: false, error };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const updateEmployee = async (id, employeeData) => {
    try {
      const response = await fetch(`https://gntindia.com:5000/api/v1/emplyeers/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(employeeData)
      });
      if (response.ok) {
        await fetchEmployees();
        return { success: true };
      }
      const error = await response.json();
      return { success: false, error };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const deleteEmployee = async (id) => {
    try {
      const response = await fetch(`https://gntindia.com:5000/api/v1/emplyeers/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        await fetchEmployees();
        return { success: true };
      }
      const error = await response.json();
      return { success: false, error };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };
  const getAllTask = async () =>{
    try {
      const response = await fetch('https://gntindia.com:5000/api/v1/emplyeers/admins/getalltask', { 
        method:'GET',
        headers: { 'Authorization': `Bearer ${token}` } 


      });
      if (response.ok) {
        const data = await response.json();
        setAllTask(data);
      }
      
    } catch (error) {
      console.error('Error fetching employees:', error);
      
    }
  }

  const login = async (email, password) => {
    try {
      const response = await fetch('https://gntindia.com:5000/api/v1/emplyeers/adminsemployee/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      localStorage.setItem('employeeToken', data.token);
      setToken(data.token);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const EmployeerLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setIsAuthenticated(false);
    setEmployees([]);
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }



  const openForm = () => setIsOpen(true);
  const closeForm = () => {
    setIsOpen(false);
    // Reset form after closing
    setFormData({
      name: '',
      email: '',
      mobile: '',
      businessName: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    closeForm();
  };

  const value = {
    isOpen,
    formData,
    setFormData,
    openForm,
    closeForm,
    handleSubmit,

    isAuthenticated,
    login,
    EmployeerLogout,
    token,
    employees, 
    setAllTask,
    fetchEmployees, 
    allTask,
    getAllTask,
    addEmployee,
    updateEmployee,
    deleteEmployee
  };

  return (
    <ContactFormContext.Provider value={value}>
      {children}
    </ContactFormContext.Provider>
  );
};

export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error('useContactForm must be used within a ContactFormProvider');
  }
  return context;
};