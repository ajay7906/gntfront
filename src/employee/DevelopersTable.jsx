import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2, ChevronLeft, ChevronRight, Eye, EyeOff } from 'lucide-react';

const INITIAL_USER = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  password: '',
  role: 'User',
  status: 'Active'
};

const STATUS_COLORS = {
  'Active': 'bg-green-100 text-green-800',
  'Inactive': 'bg-red-100 text-red-800',
  'Pending': 'bg-yellow-100 text-yellow-800'
};

const ROLE_COLORS = {
  'Admin': 'bg-purple-100 text-purple-800',
  'User': 'bg-blue-100 text-blue-800',
  'Guest': 'bg-gray-100 text-gray-800'
};

const ITEMS_PER_PAGE = 10;

const DevelopersTable = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '+1 234-567-8900',
      password: 'hashedPassword123',
      role: 'Admin',
      status: 'Active'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phoneNumber: '+1 234-567-8901',
      password: 'hashedPassword456',
      role: 'User',
      status: 'Active'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState(INITIAL_USER);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPassword, setShowPassword] = useState(false);

  const filteredUsers = users.filter(user =>
    Object.values(user)
      .filter(value => typeof value === 'string')
      .some(value => value.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  const validateUser = (user) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    
    if (!user.firstName || !user.lastName || !user.email || !user.phoneNumber) {
      alert('Please fill in all required fields');
      return false;
    }
    
    if (!emailRegex.test(user.email)) {
      alert('Please enter a valid email address');
      return false;
    }
    
    if (!phoneRegex.test(user.phoneNumber)) {
      alert('Please enter a valid phone number');
      return false;
    }
    
    if (!isEditing && !user.password) {
      alert('Password is required for new users');
      return false;
    }

    return true;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleAddClick = () => {
    setIsEditing(false);
    setShowForm(true);
    setNewUser(INITIAL_USER);
  };

  const handleAddUser = () => {
    if (!validateUser(newUser)) {
      return;
    }

    const userToAdd = {
      id: Date.now(),
      ...newUser
    };
    
    setUsers(prevUsers => [...prevUsers, userToAdd]);
    handleResetForm();
  };

  const handleEditClick = (user) => {
    setIsEditing(true);
    setShowForm(true);
    setEditingUser(user);
    setNewUser(user);
  };

  const handleUpdateUser = () => {
    if (!validateUser(newUser)) {
      return;
    }

    setUsers(prevUsers => 
      prevUsers.map(user => 
        user.id === editingUser.id 
          ? { 
              ...newUser, 
              id: user.id,
              password: newUser.password || user.password // Keep old password if not changed
            } 
          : user
      )
    );
    
    handleResetForm();
  };

  const handleResetForm = () => {
    setShowForm(false);
    setIsEditing(false);
    setEditingUser(null);
    setNewUser(INITIAL_USER);
    setShowPassword(false);
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="w-full p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-xl md:text-2xl font-bold">User Management</h1>
        <button 
          onClick={handleAddClick}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Plus size={16} />
          Add User
        </button>
      </div>

      {showForm && (
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              value={newUser.firstName}
              onChange={handleInputChange}
              className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              value={newUser.lastName}
              onChange={handleInputChange}
              className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={newUser.email}
              onChange={handleInputChange}
              className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number *"
              value={newUser.phoneNumber}
              onChange={handleInputChange}
              className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder={isEditing ? "Password (leave empty to keep current)" : "Password *"}
                value={newUser.password}
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
            <select
              name="role"
              value={newUser.role}
              onChange={handleInputChange}
              className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            >
              <option value="">Selected</option>
              <option value="User">User</option>
            </select>
            <select
              name="status"
              value={newUser.status}
              onChange={handleInputChange}
              className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <div className="flex gap-2">
              <button
                onClick={isEditing ? handleUpdateUser : handleAddUser}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors flex-1"
              >
                {isEditing ? 'Update User' : 'Save User'}
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
            placeholder="Search users..."
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
              <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500">Role</th>
              <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500">Status</th>
              <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 md:px-6 py-4 text-sm">{`${user.firstName} ${user.lastName}`}</td>
                <td className="px-4 md:px-6 py-4 text-sm">{user.email}</td>
                <td className="px-4 md:px-6 py-4 text-sm">{user.phoneNumber}</td>
                <td className="px-4 md:px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${ROLE_COLORS[user.role]}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-4 md:px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${STATUS_COLORS[user.status]}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-4 md:px-6 py-4">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleEditClick(user)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                      title="Edit user"
                    >
                      <Edit2 size={16} className="text-blue-600" />
                    </button>
                    <button 
                      onClick={() => handleDeleteUser(user.id)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                      title="Delete user"
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
              onClick={() => handlePageChange(page)}
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

export default DevelopersTable;