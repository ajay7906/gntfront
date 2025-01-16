

// import React from 'react';

// const TaskInformationForm = () => {
//   return (
//     <div className="w-full max-w-2xl mx-auto pt-16">
//       <div className="bg-white rounded-lg shadow-lg">
//         <div className="p-6">
//           <div className="space-y-6">
//           <div className="border-b border-t py-4">
//                 <h1 className="text-xl font-medium text-center mb-6">Task information</h1>
                
//                 <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6">
//                 <div>
//                     <p className="text-sm">Task Id : 159357</p>
//                 </div>
//                 <div className="text-right">
//                     <p className="text-sm">Task Name : xyz</p>
//                 </div>
                
//                 <div>
//                     <p className="text-sm">Task States: Completed</p>
//                 </div>
//                 <div className="text-right">
//                     <p className="text-sm">Date : 22/12/2024</p>
//                 </div>
//                 </div>
//             </div>

//             <form className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Company Name</label>
//                   <input
//                     type="text"
//                     placeholder="Company Name"
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Name</label>
//                   <input
//                     type="text"
//                     placeholder="Name"
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Current Location</label>
//                   <input
//                     type="text"
//                     placeholder="Current Location"
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Phone No</label>
//                   <input
//                     type="tel"
//                     placeholder="Phone Number"
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Category</label>
//                   <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
//                     <option value="">Select Category</option>
//                     <option value="category1">Category 1</option>
//                     <option value="category2">Category 2</option>
//                     <option value="category3">Category 3</option>
//                   </select>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Value</label>
//                   <input
//                     type="text"
//                     placeholder="Value"
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Plan</label>
//                   <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
//                     <option value="">Select Plan</option>
//                     <option value="plan1">Plan 1</option>
//                     <option value="plan2">Plan 2</option>
//                     <option value="plan3">Plan 3</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="flex justify-center">
//                 <button 
//                   type="submit"
//                   className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-md transition-colors duration-200"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskInformationForm;







































































































// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const TaskInformationForm = ({ taskId = '1', taskName = 'xyz' }) => {
//   const navigate = useNavigate();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
  
//   // Form state
//   const [formData, setFormData] = useState({
//     company_name: '',
//     name: '',
//     current_location: '',
//     phone_number: '',
//     category: '',
//     value: '',
//     plan: ''
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setErrorMessage('');

//     try {
//       const response = await fetch('https://gntindia.com:5000/api/v1/emplyeers/admins/completetask', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('marketingToken')}` // Assuming token is stored in localStorage
//         },
//         body: JSON.stringify({
//           ...formData,
//           task_id: taskId,
//           employee_id: localStorage.getItem('employeeId') // Assuming employeeId is stored in localStorage
//         })
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Something went wrong');
//       }

//       // Show success message or redirect
//       alert('Task completed successfully!');
//       // navigate('/tasks'); // Redirect to tasks page
//     } catch (error) {
//       setErrorMessage(error.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="w-full max-w-2xl mx-auto pt-16">
//       <div className="bg-white rounded-lg shadow-lg">
//         <div className="p-6">
//           <div className="space-y-6">
//             <div className="border-b border-t py-4">
//               <h1 className="text-xl font-medium text-center mb-6">Task information</h1>
              
//               <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6">
//                 <div>
//                   <p className="text-sm">Task Id : {taskId}</p>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm">Task Name : {taskName}</p>
//                 </div>
                
//                 <div>
//                   <p className="text-sm">Task States: Completed</p>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm">Date : {new Date().toLocaleDateString()}</p>
//                 </div>
//               </div>
//             </div>

//             {errorMessage && (
//               <div className="bg-red-50 text-red-500 p-3 rounded-md">
//                 {errorMessage}
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Company Name</label>
//                   <input
//                     type="text"
//                     name="company_name"
//                     value={formData.company_name}
//                     onChange={handleChange}
//                     placeholder="Company Name"
//                     required
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Name"
//                     required
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Current Location</label>
//                   <input
//                     type="text"
//                     name="current_location"
//                     value={formData.current_location}
//                     onChange={handleChange}
//                     placeholder="Current Location"
//                     required
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Phone No</label>
//                   <input
//                     type="tel"
//                     name="phone_number"
//                     value={formData.phone_number}
//                     onChange={handleChange}
//                     placeholder="Phone Number"
//                     required
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Category</label>
//                   <select 
//                     name="category"
//                     value={formData.category}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
//                   >
//                     <option value="">Select Category</option>
//                     <option value="category1">Category 1</option>
//                     <option value="category2">Category 2</option>
//                     <option value="category3">Category 3</option>
//                   </select>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Value</label>
//                   <input
//                     type="text"
//                     name="value"
//                     value={formData.value}
//                     onChange={handleChange}
//                     placeholder="Value"
//                     required
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Plan</label>
//                   <select 
//                     name="plan"
//                     value={formData.plan}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
//                   >
//                     <option value="">Select Plan</option>
//                     <option value="plan1">Plan 1</option>
//                     <option value="plan2">Plan 2</option>
//                     <option value="plan3">Plan 3</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="flex justify-center">
//                 <button 
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`${
//                     isSubmitting ? 'bg-blue-400' : 'bg-blue-500 hover:bg-blue-600'
//                   } text-white px-8 py-2 rounded-md transition-colors duration-200`}
//                 >
//                   {isSubmitting ? 'Submitting...' : 'Submit'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskInformationForm;


























































































































import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const TaskInformationForm = ({ taskId = '1', taskName = 'xyz' }) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLocating, setIsLocating] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    company_name: '',
    name: '',
    current_location: '',
    phone_number: '',
    category: '',
    value: '',
    plan: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Get current location
  const getCurrentLocation = () => {
    setIsLocating(true);
    setErrorMessage('');

    if (!navigator.geolocation) {
      setErrorMessage('Geolocation is not supported by your browser');
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          // Use reverse geocoding to get address from coordinates
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
          );
          const data = await response.json();
          
          // Format the address
          const address = data.display_name;
          
          setFormData(prevData => ({
            ...prevData,
            current_location: address
          }));
        } catch (error) {
          setErrorMessage('Failed to get address from coordinates');
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        setErrorMessage('Unable to retrieve your location');
        setIsLocating(false);
      }
    );
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://gntindia.com:5000/api/v1/emplyeers/admins/completetask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('marketingToken')}`
        },
        body: JSON.stringify({
          ...formData,
          task_id: taskId,
          employee_id: localStorage.getItem('employeeId')
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      alert('Task completed successfully!');
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto pt-16">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-6">
          <div className="space-y-6">
            <div className="border-b border-t py-4">
              <h1 className="text-xl font-medium text-center mb-6">Task information</h1>
              
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6">
                <div>
                  <p className="text-sm">Task Id : {taskId}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">Task Name : {taskName}</p>
                </div>
                
                <div>
                  <p className="text-sm">Task States: Completed</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">Date : {new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            {errorMessage && (
              <div className="bg-red-50 text-red-500 p-3 rounded-md">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company Name</label>
                  <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    placeholder="Company Name"
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Current Location</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name="current_location"
                      value={formData.current_location}
                      onChange={handleChange}
                      placeholder="Current Location"
                      required
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={getCurrentLocation}
                      disabled={isLocating}
                      className={`${
                        isLocating ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
                      } text-white px-3 py-2 rounded-md transition-colors duration-200 flex items-center`}
                    >
                      <MapPin className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone No</label>
                  <input
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <select 
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
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
                    name="value"
                    value={formData.value}
                    onChange={handleChange}
                    placeholder="Value"
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Plan</label>
                  <select 
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
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
                  disabled={isSubmitting}
                  className={`${
                    isSubmitting ? 'bg-blue-400' : 'bg-blue-500 hover:bg-blue-600'
                  } text-white px-8 py-2 rounded-md transition-colors duration-200`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
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