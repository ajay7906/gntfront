// import React, { useState } from 'react';
// import { Eye, X, Calendar } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const StatusModal = ({ isOpen, onClose, taskData }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
//         <button 
//           onClick={onClose}
//           className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
//         >
//           <X size={20} className="text-gray-600" />
//         </button>

//         <h2 className="text-2xl font-bold mb-6 text-center">Selected Options</h2>

//         <div className="grid grid-cols-2 gap-4">
//           <Link
//             to="/marketing/completed"
//             className="flex items-center justify-center py-2 px-4 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors"
//           >
//             Completed
//           </Link>
//           <Link
//             to="/marketing/incompleted"
//             className="flex items-center justify-center py-2 px-4 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors"
//           >
//             Incompleted
//           </Link>
//           <Link
//             to="/marketing/reschedule"
//             className="flex items-center justify-center py-2 px-4 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
//           >
//             Reschedule
//           </Link>
//           <Link
//             to="/marketing/rejected"
//             className="flex items-center justify-center py-2 px-4 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
//           >
//             Rejected
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// const AllTasksList = () => {
//   // Generate dates for the next 7 days
//   const generateDates = (startDate, days) => {
//     return Array.from({ length: days }, (_, i) => {
//       const date = new Date(startDate);
//       date.setDate(date.getDate() + i);
//       return date.toLocaleDateString('en-GB');
//     });
//   };

//   const dates = generateDates(new Date(), 7);

//   // Sample data with both regular and rescheduled tasks
//   const allTasks = [
//     ...Array.from({ length: 50 }, (_, index) => ({
//       srNo: index + 1,
//       taskId: `19${String(index + 1000).padStart(4, '0')}`,
//       taskName: `Task ${index + 1}`,
//       customerName: `Customer ${index + 1}`,
//       taskStatus: ['Completed', 'Pending', 'In Progress'][index % 3],
//       taskDate: dates[index % 7],
//       type: 'regular',
//       previousDate: null,
//       rescheduleDate: null
//     })),
//     ...Array.from({ length: 50 }, (_, index) => ({
//       srNo: index + 51,
//       taskId: `19${String(index + 2000).padStart(4, '0')}`,
//       taskName: `Rescheduled Task ${index + 1}`,
//       customerName: `Customer ${index + 51}`,
//       taskStatus: 'Rescheduled',
//       taskDate: dates[(index + 2) % 7],
//       type: 'rescheduled',
//       previousDate: dates[(index + 1) % 7],
//       rescheduleDate: dates[(index + 2) % 7]
//     }))
//   ];

//   // States
//   const [searchTaskId, setSearchTaskId] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filteredTasks, setFilteredTasks] = useState(allTasks);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const itemsPerPage = 10;

//   // Pagination helpers
//   const getTotalPages = (totalItems) => Math.ceil(totalItems / itemsPerPage);
  
//   const getPaginatedData = (data, currentPage) => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     return data.slice(startIndex, startIndex + itemsPerPage);
//   };

//   // Action handlers
//   const handleView = (taskData) => {
//     setSelectedTask(taskData);
//     setIsModalOpen(true);
//   };

//   const handleSearch = () => {
//     let filtered = allTasks;

//     if (searchTaskId.trim() !== '') {
//       filtered = filtered.filter(task => 
//         task.taskId.toLowerCase().includes(searchTaskId.toLowerCase()) ||
//         task.customerName.toLowerCase().includes(searchTaskId.toLowerCase())
//       );
//     }

//     if (selectedDate) {
//       filtered = filtered.filter(task => 
//         task.taskDate === selectedDate ||
//         task.previousDate === selectedDate ||
//         task.rescheduleDate === selectedDate
//       );
//     }

//     setFilteredTasks(filtered);
//     setCurrentPage(1);
//   };

//   const handleRefresh = () => {
//     setSearchTaskId('');
//     setSelectedDate('');
//     setFilteredTasks(allTasks);
//     setCurrentPage(1);
//   };

//   const PaginationControls = ({ currentPage, totalPages, onPageChange }) => (
//     <div className="flex justify-center items-center gap-2 mt-4">
//       <button
//         onClick={() => onPageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//         className="px-3 py-1 rounded bg-gray-100 text-gray-600 disabled:opacity-50"
//       >
//         Previous
//       </button>
//       <span className="text-sm text-gray-600">
//         Page {currentPage} of {totalPages}
//       </span>
//       <button
//         onClick={() => onPageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//         className="px-3 py-1 rounded bg-gray-100 text-gray-600 disabled:opacity-50"
//       >
//         Next
//       </button>
//     </div>
//   );

//   return (
//     <div className="p-4 bg-gray-100 pt-24">
//       <div className="bg-white rounded-lg shadow-md p-4 mb-4">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
//           <div className="flex flex-col sm:flex-row gap-4 items-center w-full md:w-auto">
//             <span className="text-gray-600 font-semibold whitespace-nowrap">Task Details</span>
//             <input
//               type="text"
//               placeholder="Search by Task ID or Customer Name"
//               value={searchTaskId}
//               onChange={(e) => setSearchTaskId(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
//               className="flex-grow border rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
//             />
//             <div className="flex items-center gap-2">
//               <Calendar size={18} className="text-gray-500" />
//               <select
//                 value={selectedDate}
//                 onChange={(e) => setSelectedDate(e.target.value)}
//                 className="border rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
//               >
//                 <option value="">All Dates</option>
//                 {dates.map((date) => (
//                   <option key={date} value={date}>{date}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="flex gap-2 w-full md:w-auto justify-end">
//             <button 
//               onClick={handleSearch}
//               className="bg-teal-500 text-white px-4 py-1 rounded text-sm hover:bg-teal-600 transition-colors w-full sm:w-auto"
//             >
//               Search
//             </button>
//             <button 
//               onClick={handleRefresh}
//               className="bg-teal-500 text-white px-4 py-1 rounded text-sm hover:bg-teal-600 transition-colors w-full sm:w-auto"
//             >
//               Refresh Task
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-lg shadow-md p-4">
//         <h2 className="text-lg font-bold mb-3 text-center relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-0.5 after:bg-gray-300">
//           All Tasks
//         </h2>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b">
//                 <th className="text-left p-2 font-medium">Sr No</th>
//                 <th className="text-left p-2 font-medium">Task Id</th>
//                 <th className="text-left p-2 font-medium">Task Name</th>
//                 <th className="text-left p-2 font-medium">Customer Name</th>
//                 <th className="text-left p-2 font-medium">Status</th>
//                 <th className="text-left p-2 font-medium">Task Date</th>
//                 <th className="text-left p-2 font-medium">Previous Date</th>
//                 <th className="text-left p-2 font-medium">Reschedule Date</th>
//                 <th className="text-left p-2 font-medium">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {getPaginatedData(filteredTasks, currentPage).map((task) => (
//                 <tr key={task.taskId} className="border-b hover:bg-gray-50">
//                   <td className="p-2">{task.srNo}</td>
//                   <td className="p-2">{task.taskId}</td>
//                   <td className="p-2">{task.taskName}</td>
//                   <td className="p-2">{task.customerName}</td>
//                   <td className="p-2">
//                     <span className={`px-2 py-1 rounded-full text-xs ${
//                       task.taskStatus === 'Completed' ? 'bg-green-100 text-green-800' :
//                       task.taskStatus === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
//                       task.taskStatus === 'Rescheduled' ? 'bg-purple-100 text-purple-800' :
//                       'bg-blue-100 text-blue-800'
//                     }`}>
//                       {task.taskStatus}
//                     </span>
//                   </td>
//                   <td className="p-2">{task.taskDate}</td>
//                   <td className="p-2">{task.previousDate || '-'}</td>
//                   <td className="p-2">{task.rescheduleDate || '-'}</td>
//                   <td className="p-2">
//                     <button 
//                       onClick={() => handleView(task)}
//                       className="text-teal-600 hover:text-teal-800 transition-colors"
//                       title="View"
//                     >
//                       <Eye size={18} />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <PaginationControls
//             currentPage={currentPage}
//             totalPages={getTotalPages(filteredTasks.length)}
//             onPageChange={setCurrentPage}
//           />
//         </div>
//       </div>

//       <StatusModal 
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)} 
//         taskData={selectedTask}
//       />
//     </div>
//   );
// };

// export default AllTasksList;





















































































































// import React, { useState, useEffect } from 'react';
// import { Eye, X, Calendar } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const StatusModal = ({ isOpen, onClose, taskData }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
//         <button 
//           onClick={onClose}
//           className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
//         >
//           <X size={20} className="text-gray-600" />
//         </button>

//         <h2 className="text-2xl font-bold mb-6 text-center">Selected Options</h2>

//         <div className="grid grid-cols-2 gap-4">
//           <Link
//             to="/marketing/completed"
//             className="flex items-center justify-center py-2 px-4 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors"
//           >
//             Completed
//           </Link>
//           <Link
//             to="/marketing/incompleted"
//             className="flex items-center justify-center py-2 px-4 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors"
//           >
//             Incompleted
//           </Link>
//           <Link
//             to="/marketing/reschedule"
//             className="flex items-center justify-center py-2 px-4 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
//           >
//             Reschedule
//           </Link>
//           <Link
//             to="/marketing/rejected"
//             className="flex items-center justify-center py-2 px-4 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
//           >
//             Rejected
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// const AllTasksList = () => {
//   // States
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [totalTasks, setTotalTasks] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [itemsPerPage] = useState(7); // Matching backend default limit

//   // Generate dates for the date filter
//   const generateDates = (startDate, days) => {
//     return Array.from({ length: days }, (_, i) => {
//       const date = new Date(startDate);
//       date.setDate(date.getDate() + i);
//       return date.toLocaleDateString('en-GB');
//     });
//   };

//   const dates = generateDates(new Date(), 7);

//   // Fetch tasks from API  =      https://gntindia.com:5000/api/v1/emplyeers/admins/employeelogin
//   const fetchTasks = async (page = 1) => {
//     try {
//       setLoading(true);
//       const response = await fetch(`https://gntindia.com:5000/api/v1/emplyeers/admins/getalltask?page=${page}&limit=${itemsPerPage}`);
//       if (!response.ok) throw new Error('Failed to fetch tasks');
      
//       const data = await response.json();
//       console.log(data);
      
//       setTasks(data.tasks);
//       setTotalPages(data.totalPages);
//       setTotalTasks(data.totalTasks);
//       setCurrentPage(data.currentPage);
//     } catch (err) {
//       setError(err.message);
//       console.error('Error fetching tasks:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Initial fetch
//   useEffect(() => {
//     fetchTasks(currentPage);
//   }, [currentPage]);

//   // Action handlers
//   const handleView = (taskData) => {
//     setSelectedTask(taskData);
//     setIsModalOpen(true);
//   };

//   const handleSearch = async () => {
//     try {
//       setLoading(true);
//       // Adjust the API endpoint based on your search implementation
//       const response = await fetch(`/api/tasks/search?query=${searchQuery}&date=${selectedDate}`);
//       if (!response.ok) throw new Error('Search failed');
      
//       const data = await response.json();
//       setTasks(data.tasks);
//       setTotalPages(data.totalPages);
//       setTotalTasks(data.totalTasks);
//       setCurrentPage(1);
//     } catch (err) {
//       setError(err.message);
//       console.error('Error searching tasks:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRefresh = () => {
//     setSearchQuery('');
//     setSelectedDate('');
//     fetchTasks(1);
//   };

//   const PaginationControls = () => (
//     <div className="flex justify-center items-center gap-2 mt-4">
//       <button
//         onClick={() => setCurrentPage(prev => prev - 1)}
//         disabled={currentPage === 1 || loading}
//         className="px-3 py-1 rounded bg-gray-100 text-gray-600 disabled:opacity-50"
//       >
//         Previous
//       </button>
//       <span className="text-sm text-gray-600">
//         Page {currentPage} of {totalPages}
//       </span>
//       <button
//         onClick={() => setCurrentPage(prev => prev + 1)}
//         disabled={currentPage === totalPages || loading}
//         className="px-3 py-1 rounded bg-gray-100 text-gray-600 disabled:opacity-50"
//       >
//         Next
//       </button>
//     </div>
//   );

//   if (error) {
//     return (
//       <div className="p-4 bg-red-100 text-red-700 rounded-lg">
//         Error: {error}
//       </div>
//     );
//   }

//   return (
//     <div className="p-4 bg-gray-100">
//       <div className="bg-white rounded-lg shadow-md p-4 mb-4">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
//           <div className="flex flex-col sm:flex-row gap-4 items-center w-full md:w-auto">
//             <span className="text-gray-600 font-semibold whitespace-nowrap">Task Details</span>
//             <input
//               type="text"
//               placeholder="Search tasks..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
//               className="flex-grow border rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
//             />
//             <div className="flex items-center gap-2">
//               <Calendar size={18} className="text-gray-500" />
//               <select
//                 value={selectedDate}
//                 onChange={(e) => setSelectedDate(e.target.value)}
//                 className="border rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
//               >
//                 <option value="">All Dates</option>
//                 {dates.map((date) => (
//                   <option key={date} value={date}>{date}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="flex gap-2 w-full md:w-auto justify-end">
//             <button 
//               onClick={handleSearch}
//               disabled={loading}
//               className="bg-teal-500 text-white px-4 py-1 rounded text-sm hover:bg-teal-600 transition-colors w-full sm:w-auto disabled:opacity-50"
//             >
//               Search
//             </button>
//             <button 
//               onClick={handleRefresh}
//               disabled={loading}
//               className="bg-teal-500 text-white px-4 py-1 rounded text-sm hover:bg-teal-600 transition-colors w-full sm:w-auto disabled:opacity-50"
//             >
//               Refresh Task
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-lg shadow-md p-4">
//         <h2 className="text-lg font-bold mb-3 text-center relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-0.5 after:bg-gray-300">
//           All Tasks {totalTasks > 0 && `(${totalTasks})`}
//         </h2>
//         <div className="overflow-x-auto">
//           {loading ? (
//             <div className="flex justify-center items-center p-8">
//               <div className="text-gray-500">Loading tasks...</div>
//             </div>
//           ) : (
//             <>
//               <table className="w-full">
//                 <thead>
//                   <tr className="border-b">
//                     <th className="text-left p-2 font-medium">Sr No</th>
//                     <th className="text-left p-2 font-medium">Task Id</th>
//                     <th className="text-left p-2 font-medium">Task Name</th>
//                     <th className="text-left p-2 font-medium">Customer Name</th>
//                     <th className="text-left p-2 font-medium">Status</th>
//                     <th className="text-left p-2 font-medium">Task Date</th>
//                     <th className="text-left p-2 font-medium">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {tasks.map((task, index) => (
//                     <tr key={task.id} className="border-b hover:bg-gray-50">
//                       <td className="p-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
//                       <td className="p-2">{task.task_id}</td>
//                       <td className="p-2">{task.task_name}</td>
//                       <td className="p-2">{task.customer_name}</td>
//                       <td className="p-2">
//                         <span className={`px-2 py-1 rounded-full text-xs ${
//                           task.status === 'completed' ? 'bg-green-100 text-green-800' :
//                           task.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
//                           task.status === 'rescheduled' ? 'bg-purple-100 text-purple-800' :
//                           'bg-blue-100 text-blue-800'
//                         }`}>
//                           {task.status}
//                         </span>
//                       </td>
//                       <td className="p-2">{new Date(task.task_date).toLocaleDateString('en-GB')}</td>
//                       <td className="p-2">
//                         <button 
//                           onClick={() => handleView(task)}
//                           className="text-teal-600 hover:text-teal-800 transition-colors"
//                           title="View"
//                         >
//                           <Eye size={18} />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <PaginationControls />
//             </>
//           )}
//         </div>
//       </div>

//       <StatusModal 
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)} 
//         taskData={selectedTask}
//       />
//     </div>
//   );
// };

// export default AllTasksList;


























































































import React, { useState, useEffect } from 'react';
import { Eye, X, Calendar } from 'lucide-react';
import { Link, Navigate } from 'react-router-dom';

const StatusModal = ({ isOpen, onClose, taskData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
        >
          <X size={20} className="text-gray-600" />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Selected Options</h2>

        <div className="grid grid-cols-2 gap-4">
          <Link
            to="/marketing/completed"
            className="flex items-center justify-center py-2 px-4 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors"
          >
            Completed
          </Link>
          <Link
            to="/marketing/incompleted"
            className="flex items-center justify-center py-2 px-4 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors"
          >
            Incompleted
          </Link>
          <Link
            to="/marketing/reschedule"
            className="flex items-center justify-center py-2 px-4 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            Reschedule
          </Link>
          <Link
            to="/marketing/rejected"
            className="flex items-center justify-center py-2 px-4 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
          >
            Rejected
          </Link>
        </div>
      </div>
    </div>
  );
};

const AllTasksList = () => {
  // Check for authentication token
  const marketingToken = localStorage.getItem('marketingToken');
  if (!marketingToken) {
    return <Navigate to="/marketing/login" />;
  }

  // States
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalTasks, setTotalTasks] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemsPerPage] = useState(7);

  const generateDates = (startDate, days) => {
    return Array.from({ length: days }, (_, i) => {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      return date.toLocaleDateString('en-GB');
    });
  };

  const dates = generateDates(new Date(), 7);

  // Updated fetch function with authorization header
  const fetchTasks = async (page = 1) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://gntindia.com:5000/api/v1/emplyeers/admins/getalltask?page=${page}&limit=${itemsPerPage}`,
        {
          headers: {
            'Authorization': `Bearer ${marketingToken}`
          }
        }
      );
      
      if (response.status === 401) {
        localStorage.removeItem('marketingToken');
        return <Navigate to="/marketing/login" />;
      }
      
      if (!response.ok) throw new Error('Failed to fetch tasks');
      
      const data = await response.json(); 
      console.log(data);
      
      setTasks(data.tasks);
      setTotalPages(data.totalPages);
      setTotalTasks(data.totalTasks);
      setCurrentPage(data.currentPage);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks(currentPage);
  }, [currentPage]);

  // Updated search function with authorization header
  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/tasks/search?query=${searchQuery}&date=${selectedDate}`,
        {
          headers: {
            'Authorization': `Bearer ${marketingToken}`
          }
        }
      );
      
      if (response.status === 401) {
        localStorage.removeItem('marketingToken');
        return <Navigate to="/marketing/login" />;
      }
      
      if (!response.ok) throw new Error('Search failed');
      
      const data = await response.json();
      setTasks(data.tasks);
      setTotalPages(data.totalPages);
      setTotalTasks(data.totalTasks);
      setCurrentPage(1);
    } catch (err) {
      setError(err.message);
      console.error('Error searching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleView = (taskData) => {
    setSelectedTask(taskData);
    setIsModalOpen(true);
  };

  const handleRefresh = () => {
    setSearchQuery('');
    setSelectedDate('');
    fetchTasks(1);
  };

  const PaginationControls = () => (
    <div className="flex justify-center items-center gap-2 mt-4">
      <button
        onClick={() => setCurrentPage(prev => prev - 1)}
        disabled={currentPage === 1 || loading}
        className="px-3 py-1 rounded bg-gray-100 text-gray-600 disabled:opacity-50"
      >
        Previous
      </button>
      <span className="text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => setCurrentPage(prev => prev + 1)}
        disabled={currentPage === totalPages || loading}
        className="px-3 py-1 rounded bg-gray-100 text-gray-600 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded-lg">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center w-full md:w-auto">
            <span className="text-gray-600 font-semibold whitespace-nowrap">Task Details</span>
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="flex-grow border rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-gray-500" />
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="border rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="">All Dates</option>
                {dates.map((date) => (
                  <option key={date} value={date}>{date}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-2 w-full md:w-auto justify-end">
            <button 
              onClick={handleSearch}
              disabled={loading}
              className="bg-teal-500 text-white px-4 py-1 rounded text-sm hover:bg-teal-600 transition-colors w-full sm:w-auto disabled:opacity-50"
            >
              Search
            </button>
            <button 
              onClick={handleRefresh}
              disabled={loading}
              className="bg-teal-500 text-white px-4 py-1 rounded text-sm hover:bg-teal-600 transition-colors w-full sm:w-auto disabled:opacity-50"
            >
              Refresh Task
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-bold mb-3 text-center relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-0.5 after:bg-gray-300">
          All Tasks {totalTasks > 0 && `(${totalTasks})`}
        </h2>
        <div className="overflow-x-auto">
          {loading ? (
            <div className="flex justify-center items-center p-8">
              <div className="text-gray-500">Loading tasks...</div>
            </div>
          ) : (
            <>
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 font-medium">Sr No</th>
                    <th className="text-left p-2 font-medium">Task Id</th>
                    <th className="text-left p-2 font-medium">Task Name</th>
                    <th className="text-left p-2 font-medium">Customer Name</th>
                    <th className="text-left p-2 font-medium">Status</th>
                    <th className="text-left p-2 font-medium">Task Date</th>
                    <th className="text-left p-2 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task, index) => (
                    <tr key={task.id} className="border-b hover:bg-gray-50">
                      <td className="p-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                      <td className="p-2">{task.task_id}</td>
                      <td className="p-2">{task.title}</td>
                      <td className="p-2">{task.customer_name}</td>
                      <td className="p-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          task.status === 'completed' ? 'bg-green-100 text-green-800' :
                          task.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          task.status === 'rescheduled' ? 'bg-purple-100 text-purple-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {task.status}
                        </span>
                      </td>
                      <td className="p-2">{new Date(task?.created_at).toLocaleDateString('en-GB')}</td>
                      <td className="p-2">
                        <button 
                          onClick={() => handleView(task)}
                          className="text-teal-600 hover:text-teal-800 transition-colors"
                          title="View"
                        >
                          <Eye size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <PaginationControls />
            </>
          )}
        </div>
      </div>

      <StatusModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} 
        taskData={selectedTask}
      />
    </div>
  );
};

export default AllTasksList;