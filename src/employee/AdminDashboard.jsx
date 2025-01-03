import React, { useState } from 'react';
import {
  Users,
  BarChart2,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  TrendingUp,
  Activity,
  Calendar,
  ArrowUp,
  ArrowDown,
  MoreVertical,
  Plus,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  // Pagination state
  const [userPage, setUserPage] = useState(1);
  const [taskPage, setTaskPage] = useState(1);
  const usersPerPage = 4;
  const tasksPerPage = 4;

  // Sample data for stats
  const stats = [
    { title: 'Total Users', value: '126', trend: '+15%', up: true, icon: <Users size={20} /> },
    { title: 'Completed Tasks', value: '459', trend: '+8%', up: true, icon: <CheckCircle size={20} /> },
    { title: 'In Completed Tasks', value: '86%', trend: '+2%', up: true, icon: <Activity size={20} /> },
    { title: 'Rejected Task', value: '0', trend: '+12%', up: false, icon: <AlertCircle size={20} /> }
  ];

  // Expanded sample data for recent users
  const allRecentUsers = [
    { id: 1, name: 'Sarah Wilson', role: 'Product Designer', status: 'Active', avatar: '/api/placeholder/32/32' },
    { id: 2, name: 'Michael Chen', role: 'Developer', status: 'Inactive', avatar: '/api/placeholder/32/32' },
    { id: 3, name: 'Emma Thompson', role: 'Manager', status: 'Active', avatar: '/api/placeholder/32/32' },
    { id: 4, name: 'James Rodriguez', role: 'UI Designer', status: 'Active', avatar: '/api/placeholder/32/32' },
    { id: 5, name: 'Lisa Brown', role: 'Data Analyst', status: 'Active', avatar: '/api/placeholder/32/32' },
    { id: 6, name: 'David Kim', role: 'Frontend Dev', status: 'Inactive', avatar: '/api/placeholder/32/32' },
    { id: 7, name: 'Anna Smith', role: 'UX Designer', status: 'Active', avatar: '/api/placeholder/32/32' },
    { id: 8, name: 'Tom Wilson', role: 'Backend Dev', status: 'Active', avatar: '/api/placeholder/32/32' }
  ];

  // Expanded sample data for tasks
  const allTasks = [
    { id: 1, title: 'Update user interface', status: 'Rescheduled', priority: 'High', assignee: 'Sarah Wilson' },
    { id: 2, title: 'Fix login issues', status: 'Rejected', priority: 'High', assignee: 'Michael Chen' },
    { id: 3, title: 'Implement new features', status: 'Completed', priority: 'Medium', assignee: 'Emma Thompson' },
    { id: 4, title: 'Review code changes', status: 'In Completed', priority: 'Low', assignee: 'James Rodriguez' },
    { id: 5, title: 'Optimize database queries', status: 'Completed', priority: 'High', assignee: 'Lisa Brown' },
    { id: 6, title: 'Update documentation', status: 'In Completed', priority: 'Medium', assignee: 'David Kim' },
    { id: 7, title: 'Fix mobile responsiveness', status: 'Rescheduled', priority: 'High', assignee: 'Anna Smith' },
    { id: 8, title: 'Implement authentication', status: 'Completed', priority: 'Critical', assignee: 'Tom Wilson' }
  ];

  // Pagination calculations
  const userStartIndex = (userPage - 1) * usersPerPage;
  const userEndIndex = userPage * usersPerPage;
  const currentUsers = allRecentUsers.slice(userStartIndex, userEndIndex);
  const totalUserPages = Math.ceil(allRecentUsers.length / usersPerPage);

  const taskStartIndex = (taskPage - 1) * tasksPerPage;
  const taskEndIndex = taskPage * tasksPerPage;
  const currentTasks = allTasks.slice(taskStartIndex, taskEndIndex);
  const totalTaskPages = Math.ceil(allTasks.length / tasksPerPage);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="text-green-500" size={16} />;
      case 'In Completed':
        return <Clock className="text-blue-500" size={16} />;
      case 'Rescheduled':
        return <Clock className="text-orange-500" size={16} />;
      case 'Rejected':
        return <AlertCircle className="text-red-500" size={16} />;
      default:
        return <XCircle className="text-red-500" size={16} />;
    }
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'Critical':
        return 'bg-red-100 text-red-700';
      case 'High':
        return 'bg-orange-100 text-orange-700';
      case 'Medium':
        return 'bg-blue-100 text-blue-700';
      case 'Low':
        return 'bg-yellow-100 text-yellow-700';  
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const PaginationControls = ({ currentPage, totalPages, onPageChange }) => (
    <div className="flex items-center justify-center space-x-2 mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={20} />
      </button>
      <span className="text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="text-gray-600 mt-1">Welcome back, Admin</p>
          </div>
          <Link
            to="/task"
            className="flex items-center justify-center py-2 px-4 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            <Plus size={20} className="mr-2" />
            New Task
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-600 text-sm">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                </div>
                <div className="p-2 bg-blue-50 rounded-lg">
                  {stat.icon}
                </div>
              </div>
              <div className="flex items-center mt-4">
                {stat.up ? (
                  <ArrowUp size={16} className="text-green-500" />
                ) : (
                  <ArrowDown size={16} className="text-red-500" />
                )}
                <span className={`text-sm ml-1 ${stat.up ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.trend}
                </span>
                <span className="text-gray-600 text-sm ml-2">vs last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Users */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Recent Users</h2>
              <Link
                to="/user"
                className="flex items-center justify-center py-2 px-4 rounded-full bg-blue-50 text-blue-400 hover:bg-blue-100 transition-colors"
              >
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {currentUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="font-medium">{user.name}</p>
                      <p className="font-extralight">{user.role}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    user.status === 'Active' ? 'bg-green-100 text-green-700' :
                    user.status === 'Inactive' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {user.status}
                  </span>
                </div>
              ))}
            </div>
            <PaginationControls
              currentPage={userPage}
              totalPages={totalUserPages}
              onPageChange={setUserPage}
            />
          </div>

          {/* Tasks List */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Recent Tasks</h2>
              <div className="flex space-x-2">
                <Link
                  to="/task"
                  className="flex items-center justify-center py-2 px-4 rounded-full bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors"
                >
                  View All
                </Link>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 text-sm">
                    <th className="pb-4">Task</th>
                    <th className="pb-4">Status</th>
                    <th className="pb-4">Priority</th>
                    <th className="pb-4">Assignee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {currentTasks.map((task) => (
                    <tr key={task.id} className="text-sm">
                      <td className="py-4">
                        <p className="font-medium">{task.title}</p>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center">
                          {getStatusIcon(task.status)}
                          <span className="ml-2">{task.status}</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${getPriorityClass(task.priority)}`}>
                          {task.priority}
                        </span>
                      </td>
                      <td className="py-4">{task.assignee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <PaginationControls
              currentPage={taskPage}
              totalPages={totalTaskPages}
              onPageChange={setTaskPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;