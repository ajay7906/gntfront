import React from 'react';

const TaskInformationForm = () => {
  return (
    <div className="w-full max-w-2xl mx-auto pt-16">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-6">
          <div className="space-y-6">
          <div className="border-b border-t py-4">
                <h1 className="text-xl font-medium text-center mb-6">Task information</h1>
                
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6">
                <div>
                    <p className="text-sm">Task Id : 159357</p>
                </div>
                <div className="text-right">
                    <p className="text-sm">Task Name : xyz</p>
                </div>
                
                <div>
                    <p className="text-sm">Task States: Completed</p>
                </div>
                <div className="text-right">
                    <p className="text-sm">Date : 22/12/2024</p>
                </div>
                </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company Name</label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Current Location</label>
                  <input
                    type="text"
                    placeholder="Current Location"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone No</label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                    <option value="">Select Category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Value</label>
                  <input
                    type="text"
                    placeholder="Value"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Plan</label>
                  <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                    <option value="">Select Plan</option>
                    <option value="plan1">Plan 1</option>
                    <option value="plan2">Plan 2</option>
                    <option value="plan3">Plan 3</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-center">
                <button 
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-md transition-colors duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskInformationForm;