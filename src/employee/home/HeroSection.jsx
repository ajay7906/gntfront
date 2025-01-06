import React, { useState } from 'react';
import { Eye, X, Calendar } from 'lucide-react';
import HERO from "./images/MARKETING.jpg";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative h-64 w-full">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HERO})`
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  ); 
};

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
            to="/completed"
            className="flex items-center justify-center py-2 px-4 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors"
          >
            Completed
          </Link>
          <Link
            to="/incomplete"
            className="flex items-center justify-center py-2 px-4 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors"
          >
            Incompleted
          </Link>
          <Link
            to="/reschedule"
            className="flex items-center justify-center py-2 px-4 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            Reschedule
          </Link>
          <Link
            to="/reject"
            className="flex items-center justify-center py-2 px-4 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
          >
            Rejected
          </Link>
        </div>
      </div>
    </div>
  );
};

const TaskTables = () => {
  // Generate dates for the next 7 days
  const generateDates = (startDate, days) => {
    return Array.from({ length: days }, (_, i) => {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      return date.toLocaleDateString('en-GB');
    });
  };

  const dates = generateDates(new Date(), 7);

  // Sample data with different dates
  const todayTasks = Array.from({ length: 50 }, (_, index) => ({
    srNo: index + 1,
    taskId: `19${String(index + 1000).padStart(4, '0')}`,
    taskName: `Task ${index + 1}`,
    taskStatus: ['Completed', 'Pending', 'In Progress'][index % 3],
    taskDate: dates[index % 7]
  }));

  const rescheduledTasks = Array.from({ length: 50 }, (_, index) => ({
    srNo: index + 1,
    taskId: `19${String(index + 2000).padStart(4, '0')}`,
    customerName: `Customer ${index + 1}`,
    previousDate: dates[(index + 1) % 7],
    rescheduleDate: dates[(index + 2) % 7]
  }));

  // States
  const [searchTaskId, setSearchTaskId] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [todayCurrentPage, setTodayCurrentPage] = useState(1);
  const [rescheduleCurrentPage, setRescheduleCurrentPage] = useState(1);
  const [filteredTodayTasks, setFilteredTodayTasks] = useState(todayTasks);
  const [filteredRescheduledTasks, setFilteredRescheduledTasks] = useState(rescheduledTasks);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 10;

  // Pagination helpers
  const getTotalPages = (totalItems) => Math.ceil(totalItems / itemsPerPage);
  
  const getPaginatedData = (data, currentPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  };

  // Action handlers
  const handleView = (taskData) => {
    setSelectedTask(taskData);
    setIsModalOpen(true);
  };

  const handleSearch = () => {
    let filteredToday = todayTasks;
    let filteredReschedule = rescheduledTasks;

    if (searchTaskId.trim() !== '') {
      filteredToday = filteredToday.filter(task => 
        task.taskId.toLowerCase().includes(searchTaskId.toLowerCase())
      );
      filteredReschedule = filteredReschedule.filter(task => 
        task.taskId.toLowerCase().includes(searchTaskId.toLowerCase())
      );
    }

    if (selectedDate) {
      filteredToday = filteredToday.filter(task => task.taskDate === selectedDate);
      filteredReschedule = filteredReschedule.filter(task => 
        task.previousDate === selectedDate || task.rescheduleDate === selectedDate
      );
    }

    setFilteredTodayTasks(filteredToday);
    setFilteredRescheduledTasks(filteredReschedule);
    setTodayCurrentPage(1);
    setRescheduleCurrentPage(1);
  };

  const handleRefresh = () => {
    setSearchTaskId('');
    setSelectedDate('');
    setFilteredTodayTasks(todayTasks);
    setFilteredRescheduledTasks(rescheduledTasks);
    setTodayCurrentPage(1);
    setRescheduleCurrentPage(1);
  };

  const PaginationControls = ({ currentPage, totalPages, onPageChange }) => (
    <div className="flex justify-center items-center gap-2 mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded bg-gray-100 text-gray-600 disabled:opacity-50"
      >
        Previous
      </button>
      <span className="text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded bg-gray-100 text-gray-600 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );

  const ActionButtons = ({ taskData }) => (
    <div className="flex items-center gap-2">
      <button 
        onClick={() => handleView(taskData)}
        className="text-teal-600 hover:text-teal-800 transition-colors"
        title="View"
      >
        <Eye size={18} />
      </button>
    </div>
  );

  return (
    <div className="p-4 bg-gray-100">
     <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          {/* Task Details Section */}
          <div className="flex flex-col sm:flex-row gap-4 items-center w-full md:w-auto">
            <span className="text-gray-600 font-semibold whitespace-nowrap">Task Details</span>
            <input
              type="text"
              placeholder="Type Id"
              value={searchTaskId}
              onChange={(e) => setSearchTaskId(e.target.value)}
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

          {/* Buttons Section */}
          <div className="flex gap-2 w-full md:w-auto justify-end">
            <button 
              onClick={handleSearch}
              className="bg-teal-500 text-white px-4 py-1 rounded text-sm hover:bg-teal-600 transition-colors w-full sm:w-auto"
            >
              Search
            </button>
            <button 
              onClick={handleRefresh}
              className="bg-teal-500 text-white px-4 py-1 rounded text-sm hover:bg-teal-600 transition-colors w-full sm:w-auto"
            >
              Refresh Task
            </button>
          </div>
        </div>
      </div>


      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-lg font-bold mb-3 text-center relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-0.5 after:bg-gray-300">
          Today Task
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2 font-medium">Sr No</th>
                <th className="text-left p-2 font-medium">Task Id</th>
                <th className="text-left p-2 font-medium">Task Name</th>
                <th className="text-left p-2 font-medium">Task Status</th>
                <th className="text-left p-2 font-medium">Task Date</th>
                <th className="text-left p-2 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {getPaginatedData(filteredTodayTasks, todayCurrentPage).map((task) => (
                <tr key={task.taskId} className="border-b hover:bg-gray-50">
                  <td className="p-2">{task.srNo}</td>
                  <td className="p-2">{task.taskId}</td>
                  <td className="p-2">{task.taskName}</td>
                  <td className="p-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      task.taskStatus === 'Completed' ? 'bg-green-100 text-green-800' :
                      task.taskStatus === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {task.taskStatus}
                    </span>
                  </td>
                  <td className="p-2">{task.taskDate}</td>
                  <td className="p-2">
                    <ActionButtons taskData={task} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <PaginationControls
            currentPage={todayCurrentPage}
            totalPages={getTotalPages(filteredTodayTasks.length)}
            onPageChange={setTodayCurrentPage}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-bold mb-3 text-center relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-0.5 after:bg-gray-300">
          Reschedule Task
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2 font-medium">Sr No</th>
                <th className="text-left p-2 font-medium">Task Id</th>
                <th className="text-left p-2 font-medium">Customer Name</th>
                <th className="text-left p-2 font-medium">Previous Date</th>
                <th className="text-left p-2 font-medium">Reschedule date</th>
                <th className="text-left p-2 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {getPaginatedData(filteredRescheduledTasks, rescheduleCurrentPage).map((task) => (
                <tr key={task.taskId} className="border-b hover:bg-gray-50">
                  <td className="p-2">{task.srNo}</td>
                  <td className="p-2">{task.taskId}</td>
                  <td className="p-2">{task.customerName}</td>
                  <td className="p-2">{task.previousDate}</td>
                  <td className="p-2">{task.rescheduleDate}</td>
                  <td className="p-2">
                    <ActionButtons taskData={task} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <PaginationControls
            currentPage={rescheduleCurrentPage}
            totalPages={getTotalPages(filteredRescheduledTasks.length)}
            onPageChange={setRescheduleCurrentPage}
          />
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

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSection />
      <div className="container mx-auto">
        <TaskTables />
      </div>
    </div>
  );
};

export default App;
