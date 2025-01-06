import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2, ChevronLeft, ChevronRight, UserPlus, X } from 'lucide-react';

// Sample employees data - replace with your actual data source
const SAMPLE_EMPLOYEES = [
  { id: 1, name: 'John Doe', department: 'Engineering', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', department: 'Design', email: 'jane@example.com' },
  { id: 3, name: 'Mike Johnson', department: 'Marketing', email: 'mike@example.com' },
  { id: 4, name: 'Sarah Williams', department: 'Engineering', email: 'sarah@example.com' },
];

const AssignmentDialog = ({ isOpen, onClose, onAssign, currentAssignee }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  if (!isOpen) return null;

  const filteredEmployees = SAMPLE_EMPLOYEES.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAssign = () => {
    if (selectedEmployee) {
      onAssign(selectedEmployee);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Assign Task</h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} className="text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search employees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Employee List */}
            <div className="max-h-[300px] overflow-y-auto">
              {filteredEmployees.map((employee) => (
                <div
                  key={employee.id}
                  className={`flex items-center justify-between p-3 rounded-lg mb-2 cursor-pointer border transition-colors ${
                    selectedEmployee?.id === employee.id 
                      ? 'bg-blue-50 border-blue-200' 
                      : 'hover:bg-gray-50 border-gray-200'
                  }`}
                  onClick={() => setSelectedEmployee(employee)}
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-gray-900">{employee.name}</h4>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{employee.department}</span>
                      <span>•</span>
                      <span>{employee.email}</span>
                    </div>
                  </div>
                  <button
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      selectedEmployee?.id === employee.id
                        ? 'bg-blue-500 text-white'
                        : 'text-blue-500 border border-blue-500 hover:bg-blue-50'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedEmployee(employee);
                    }}
                  >
                    {selectedEmployee?.id === employee.id ? 'Selected' : 'Select'}
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-2 pt-4 border-t">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAssign}
                disabled={!selectedEmployee}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Assign Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 



export default AssignmentDialog;
