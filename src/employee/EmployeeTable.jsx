

import React, { useState, useEffect } from 'react';
import { Search, Plus, Edit2, Trash2, ChevronLeft, ChevronRight, Eye, EyeOff } from 'lucide-react';
import { useContactForm } from '../context/ContactFormContext';
//import { useAuth } from '../../context/useAuth';
//import { useAuth } from './AuthContext';

const INITIAL_EMPLOYEE = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  password: '',
};

const STATUS_COLORS = {
  'Online': 'bg-green-100 text-green-800',
  'Offline': 'bg-gray-100 text-gray-800'
};

const ITEMS_PER_PAGE = 10;

const EmployeeTable = () => {
  const { employees, fetchEmployees, addEmployee, updateEmployee, deleteEmployee } = useContactForm();
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [newEmployee, setNewEmployee] = useState(INITIAL_EMPLOYEE);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const filteredEmployees = employees.filter(employee =>
    Object.values(employee)
      .filter(value => typeof value === 'string')
      .some(value => value.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredEmployees.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentEmployees = filteredEmployees.slice(startIndex, endIndex);

  const validateEmployee = (employee) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    
    if (!employee.firstName || !employee.lastName || !employee.email || !employee.phoneNumber) {
      alert('Please fill in all required fields');
      return false;
    }
    
    if (!emailRegex.test(employee.email)) {
      alert('Please enter a valid email address');
      return false;
    }
    
    if (!phoneRegex.test(employee.phoneNumber)) {
      alert('Please enter a valid phone number');
      return false;
    }
    
    if (!isEditing && !employee.password) {
      alert('Password is required for new employees');
      return false;
    }

    return true;
  };

  const handleAddClick = () => {
    setIsEditing(false);
    setShowForm(true);
    setNewEmployee(INITIAL_EMPLOYEE);
  };

  const handleAddEmployee = async () => {
    if (!validateEmployee(newEmployee)) return;

    const result = await addEmployee({
      first_name: newEmployee.firstName,
      last_name: newEmployee.lastName,
      email: newEmployee.email,
      password: newEmployee.password,
      phone: newEmployee.phoneNumber
    });

    if (result.success) {
      handleResetForm();
    } else {
      alert(result.error || 'Error adding employee');
    }
  };

  const handleEditClick = (employee) => {
    setIsEditing(true);
    setShowForm(true);
    setEditingEmployee(employee);
    setNewEmployee({
      firstName: employee.first_name,
      lastName: employee.last_name,
      email: employee.email,
      phoneNumber: employee.phone,
      password: ''
    });
  };

  const handleUpdateEmployee = async () => {
    if (!validateEmployee(newEmployee)) return;

    const result = await updateEmployee(editingEmployee.id, {
      first_name: newEmployee.firstName,
      last_name: newEmployee.lastName,
      email: newEmployee.email,
      phone: newEmployee.phoneNumber,
      ...(newEmployee.password && { password: newEmployee.password })
    });

    if (result.success) {
      handleResetForm();
    } else {
      alert(result.error || 'Error updating employee');
    }
  };

  const handleDeleteEmployee = async (employeeId) => {
    if (!window.confirm('Are you sure you want to delete this employee?')) return;

    const result = await deleteEmployee(employeeId);
    if (!result.success) {
      alert(result.error || 'Error deleting employee');
    }
  };

  const handleResetForm = () => {
    setShowForm(false);
    setIsEditing(false);
    setEditingEmployee(null);
    setNewEmployee(INITIAL_EMPLOYEE);
    setShowPassword(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="w-full p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-xl md:text-2xl font-bold">Employee Management</h1>
        <button 
          onClick={handleAddClick}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Plus size={16} />
          Add Employee
        </button>
      </div>

      {showForm && (
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              value={newEmployee.firstName}
              onChange={handleInputChange}
              className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              value={newEmployee.lastName}
              onChange={handleInputChange}
              className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={newEmployee.email}
              onChange={handleInputChange}
              className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number *"
              value={newEmployee.phoneNumber}
              onChange={handleInputChange}
              className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder={isEditing ? "Password (leave empty to keep current)" : "Password *"}
                value={newEmployee.password}
                onChange={handleInputChange}
                className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <div className="flex gap-2">
              <button
                onClick={isEditing ? handleUpdateEmployee : handleAddEmployee}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors flex-1"
              >
                {isEditing ? 'Update Employee' : 'Save Employee'}
              </button>
              <button
                onClick={handleResetForm}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-4 pb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="overflow-x-auto border rounded-lg shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500">Name</th>
              <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500">Email</th>
              <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500">Phone</th>
              <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500">Status</th>
              <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentEmployees.map((employee) => (
              <tr key={employee.id} className="hover:bg-gray-50">
                <td className="px-4 md:px-6 py-4 text-sm">{`${employee.first_name} ${employee.last_name}`}</td>
                <td className="px-4 md:px-6 py-4 text-sm">{employee.email}</td>
                <td className="px-4 md:px-6 py-4 text-sm">{employee.phone}</td>
                <td className="px-4 md:px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${STATUS_COLORS[employee.last_active ? 'Online' : 'Offline']}`}>
                    {employee.last_active ? 'Online' : 'Offline'}
                  </span>
                </td>
                <td className="px-4 md:px-6 py-4">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleEditClick(employee)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                      title="Edit employee"
                    >
                      <Edit2 size={16} className="text-blue-600" />
                    </button>
                    <button 
                      onClick={() => handleDeleteEmployee(employee.id)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                      title="Delete employee"
                    >
                      <Trash2 size={16} className="text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-lg ${
                currentPage === page
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default EmployeeTable;