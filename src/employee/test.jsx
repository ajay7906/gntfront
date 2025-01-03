// import React, { useState } from 'react';
// import { Search, Plus, Edit2, Trash2, ChevronLeft, ChevronRight, UserPlus } from 'lucide-react';
// import AssignmentModal from '../../components/AssignmentDialog';

// const INITIAL_TASK = {
//   title: '',
//   description: '',
//   priority: 'Medium',
//   deadline: ''
// };

// const PRIORITY_COLORS = {
//   High: 'bg-red-100 text-red-800',
//   Medium: 'bg-yellow-100 text-yellow-800',
//   Low: 'bg-green-100 text-green-800'
// };

// const ITEMS_PER_PAGE = 10;

// const AdminTaskTable = () => {
//   const [tasks, setTasks] = useState([
//     {
//       id: 1,
//       title: 'Update user dashboard',
//       description: 'Update the main dashboard with new metrics and charts',
//       priority: 'High',
//       deadline: '2024-12-31'
//     },
//     {
//       id: 2,
//       title: 'Fix login bug',
//       description: 'Investigate and fix the authentication issue on login page',
//       priority: 'Medium',
//       deadline: '2024-12-28'
//     }
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [isEditing, setIsEditing] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const [editingTask, setEditingTask] = useState(null);
//   const [newTask, setNewTask] = useState(INITIAL_TASK);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isAssignmentOpen, setIsAssignmentOpen] = useState(false);
//   const [selectedTaskForAssignment, setSelectedTaskForAssignment] = useState(null);

//   // Filter tasks based on search term
//   const filteredTasks = tasks.filter(task =>
//     Object.values(task)
//       .filter(value => typeof value === 'string')
//       .some(value => value.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   // Calculate pagination values
//   const totalPages = Math.ceil(filteredTasks.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const endIndex = startIndex + ITEMS_PER_PAGE;
//   const currentTasks = filteredTasks.slice(startIndex, endIndex);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handleAddClick = () => {
//     setIsEditing(false);
//     setShowForm(true);
//     setNewTask(INITIAL_TASK);
//   };

//   const validateTask = (task) => {
//     return task.title && task.description && task.deadline;
//   };

//   const handleAddTask = async () => {
//     if (!validateTask(newTask)) {
//       alert('Please fill in all required fields');
//       return;
//     }

//     try {
//       const response = await fetch('/api/tasks', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           title: newTask.title,
//           description: newTask.description,
//           priority: newTask.priority,
//           deadline: newTask.deadline
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to create task');
//       }

//       const data = await response.json();
      
//       const taskToAdd = {
//         id: data.task_id,
//         ...newTask
//       };

//       setTasks(prevTasks => [...prevTasks, taskToAdd]);
//       handleResetForm();
//     } catch (error) {
//       alert('Error creating task: ' + error.message);
//     }
//   };

//   // ... other handler functions remain the same ...

//   return (
//     <div className="w-full p-4 md:p-6 space-y-4 md:space-y-6">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//         <h1 className="text-xl md:text-2xl font-bold">Task Management</h1>
//         <button
//           onClick={handleAddClick}
//           className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//         >
//           <Plus size={16} />
//           Add Task
//         </button>
//       </div>

//       {showForm && (
//         <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               type="text"
//               name="title"
//               placeholder="Task Title *"
//               value={newTask.title}
//               onChange={handleInputChange}
//               className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
//             />
//             <div className="md:col-span-2">
//               <textarea
//                 name="description"
//                 placeholder="Task Description *"
//                 value={newTask.description}
//                 onChange={handleInputChange}
//                 rows="4"
//                 className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full resize-none"
//               />
//             </div>
//             <select
//               name="priority"
//               value={newTask.priority}
//               onChange={handleInputChange}
//               className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
//             >
//               <option value="High">High</option>
//               <option value="Medium">Medium</option>
//               <option value="Low">Low</option>
//             </select>
//             <input
//               type="date"
//               name="deadline"
//               value={newTask.deadline}
//               onChange={handleInputChange}
//               className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
//             />
//             <div className="flex gap-2">
//               <button
//                 onClick={isEditing ? handleUpdateTask : handleAddTask}
//                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors flex-1"
//               >
//                 {isEditing ? 'Update Task' : 'Save Task'}
//               </button>
//               <button
//                 onClick={handleResetForm}
//                 className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Rest of the component remains the same */}
//     </div>
//   );
// };

// export default AdminTaskTable;

























