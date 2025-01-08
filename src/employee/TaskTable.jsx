

import React, { useEffect, useState } from 'react';
import { Search, Plus, Edit2, Trash2, ChevronLeft, ChevronRight, UserPlus } from 'lucide-react';
// import AssignmentModal from '../../components/AssignmentDialog';
//import { useAuth } from '../../context/useAuth';
import { useContactForm } from '../context/ContactFormContext';
import AssignmentDialog from './AssignmentDialog';

const INITIAL_TASK = {
  title: '',
  description: '',
  priority: 'Medium',
  dueDate: ''
};

const PRIORITY_COLORS = {
  High: 'bg-red-100 text-red-800',
  Medium: 'bg-yellow-100 text-yellow-800',
  Low: 'bg-green-100 text-green-800'
};

const ITEMS_PER_PAGE = 10;

const AdminTaskTable = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Update user dashboard',
      description: 'Update the main dashboard with new metrics and charts',
      priority: 'High',
      dueDate: '2024-12-31'
    },
    {
      id: 2,
      title: 'Fix login bug',
      description: 'Investigate and fix the authentication issue on login page',
      priority: 'Medium',
      dueDate: '2024-12-28'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [newTask, setNewTask] = useState(INITIAL_TASK);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAssignmentOpen, setIsAssignmentOpen] = useState(false);
  const [selectedTaskForAssignment, setSelectedTaskForAssignment] = useState(null);
  const {getAllTask, allTask, setAllTask} = useContactForm();
  useEffect(()=>{
    getAllTask();

  }, [])

  console.log(allTask);
  
  // Filter tasks based on search term
  const filteredTasks = allTask?.filter(task =>
    Object.values(task)
      .filter(value => typeof value === 'string')
      .some(value => value.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Calculate pagination values
  const totalPages = Math.ceil(filteredTasks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTasks = filteredTasks.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleAddClick = () => {
    setIsEditing(false);
    setShowForm(true);
    setNewTask(INITIAL_TASK);
  };

  const validateTask = (task) => {
    return task.title && task.description && task.dueDate;
  };  



    const handleAssignTask = (employee) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === selectedTaskForAssignment.id
          ? { ...task, assignee: employee.name }
          : task
      )
    );
    setIsAssignmentOpen(false);
    setSelectedTaskForAssignment(null);
  };





  const handleAddTask = async () => {
    if (!validateTask(newTask)) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      const response = await fetch('https://gntindia.com:5000/api/v1/emplyeers/admins/createtask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newTask.title,
          description: newTask.description,
          priority: newTask.priority,
          dueDate: newTask.dueDate
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create task');
      }

      const data = await response.json();
      
      const taskToAdd = {
        id: data.task_id,
        ...newTask
      };

      setTasks(prevTasks => [...prevTasks, taskToAdd]);
      handleResetForm();
    } catch (error) {
      alert('Error creating task: ' + error.message);
    }
  };

  const handleEditClick = (task) => {
    setIsEditing(true);
    setShowForm(true);
    setEditingTask(task);
    setNewTask(task);
  };

  const handleUpdateTask = () => {
    if (!validateTask(newTask)) {
      alert('Please fill in all required fields');
      return;
    }

    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === editingTask.id ? { ...newTask, id: task.id } : task
      )
    );

    handleResetForm();
  };

  const handleResetForm = () => {
    setShowForm(false);
    setIsEditing(false);
    setEditingTask(null);
    setNewTask(INITIAL_TASK);
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    }
  }; 

    const handleAssignClick = (task) => {
    setSelectedTaskForAssignment(task);
    setIsAssignmentOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="w-full p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-xl md:text-2xl font-bold">Task Management</h1>
        <button
          onClick={handleAddClick}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Plus size={16} />
          Add Task
        </button>
      </div>

      {showForm && (
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Task Title *"
              value={newTask.title}
              onChange={handleInputChange}
              className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
            <div className="md:col-span-2">
              <textarea
                name="description"
                placeholder="Task Description *"
                value={newTask.description}
                onChange={handleInputChange}
                rows="4"
                className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full resize-none"
              />
            </div>
            <select
              name="priority"
              value={newTask.priority}
              onChange={handleInputChange}
              className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <input
              type="date"
              name="dueDate"
              value={newTask.dueDate}
              onChange={handleInputChange}
              className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
            <div className="flex gap-2">
              <button
                onClick={isEditing ? handleUpdateTask : handleAddTask}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors flex-1"
              >
                {isEditing ? 'Update Task' : 'Save Task'}
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
            placeholder="Search tasks..."
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
              <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500">Title</th>
              <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500">Description</th>
              <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500">Priority</th>
              <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500">Due Date</th>
              <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentTasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50">
                <td className="px-4 md:px-6 py-4 text-sm">{task.title}</td>
                <td className="px-4 md:px-6 py-4 text-sm">{task.description}</td>
                <td className="px-4 md:px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${PRIORITY_COLORS[task.priority]}`}>
                    {task.priority}
                  </span>
                </td>
                <td className="px-4 md:px-6 py-4 text-sm">{task.dueDate}</td>
                <td className="px-4 md:px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAssignClick(task)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                      title="Assign task"
                    >
                      <UserPlus size={16} className="text-purple-600" />
                    </button>
                    <button
                      onClick={() => handleEditClick(task)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                      title="Edit task"
                    >
                      <Edit2 size={16} className="text-blue-600" />
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                      title="Delete task"
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

      <AssignmentDialog
        isOpen={isAssignmentOpen}
        onClose={() => {
          setIsAssignmentOpen(false);
          setSelectedTaskForAssignment(null);
        }}
        onAssign={handleAssignTask}
        currentAssignee={selectedTaskForAssignment?.assignee}
      />

      {/* Pagination */}
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
              className={`px-3 py-1 rounded-lg ${currentPage === page
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

export default AdminTaskTable;