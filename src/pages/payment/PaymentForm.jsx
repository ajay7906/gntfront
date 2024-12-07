// import React, { useState } from 'react';
// import { ArrowLeft, CreditCard } from 'lucide-react';
// import { useLocation } from 'react-router-dom';

// const PaymentForm = ({  onBack }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     cardNumber: '',
//     expiryDate: '',
//     cvv: ''
//   });

//   const location = useLocation();
  
//   // Access the plan details from location.state
//   const planDetails = location.state?.planDetails;
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically handle payment processing
//     console.log('Processing payment:', formData);
//     console.log('Plan details:', planDetails);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4">
//       <div className="max-w-2xl mx-auto">
//         <button 
//           onClick={onBack}
//           className="flex items-center text-green-600 hover:text-green-700 mb-6 transition-colors"
//         >
//           <ArrowLeft className="mr-2" size={20} />
//           Back to Plans
//         </button>

//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           {/* Header */}
//           <div className="border-b border-gray-200 p-6">
//             <h1 className="text-2xl font-bold text-gray-800">Complete Your Payment</h1>
//           </div>

//           <div className="p-6">
//             {/* Order Summary */}
//             <div className="bg-green-50 rounded-lg p-4 mb-8">
//               <h3 className="font-semibold text-lg text-gray-800 mb-2">Order Summary</h3>
//               <div className="flex justify-between items-center">
//                 <div>
//                   <p className="font-medium text-gray-800">{planDetails?.name} Plan</p>
//                   <p className="text-sm text-gray-600">{planDetails?.cycle}</p>
//                 </div>
//                 <div className="text-xl font-bold text-green-600">
//                   ₹{planDetails?.price}
//                 </div>
//               </div>
//             </div>

//             {/* Payment Form */}
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Personal Details Section */}
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     placeholder="Enter your full name"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="Enter your email"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Mobile Number
//                   </label>
//                   <input
//                     type="tel"
//                     name="mobile"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
//                     value={formData.mobile}
//                     onChange={handleInputChange}
//                     placeholder="Enter your mobile number"
//                   />
//                 </div>
//               </div>

//               {/* Card Details Section */}
//               <div className="bg-gray-50 p-6 rounded-lg space-y-4">
//                 <div className="flex items-center mb-4">
//                   <CreditCard className="text-green-600 mr-2" size={24} />
//                   <h3 className="font-semibold text-gray-800">Card Details</h3>
//                 </div>

//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Card Number
//                     </label>
//                     <input
//                       type="text"
//                       name="cardNumber"
//                       required
//                       maxLength="16"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
//                       value={formData.cardNumber}
//                       onChange={handleInputChange}
//                       placeholder="1234 5678 9012 3456"
//                     />
//                   </div>

//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Expiry Date
//                       </label>
//                       <input
//                         type="text"
//                         name="expiryDate"
//                         required
//                         maxLength="5"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
//                         value={formData.expiryDate}
//                         onChange={handleInputChange}
//                         placeholder="MM/YY"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         CVV
//                       </label>
//                       <input
//                         type="password"
//                         name="cvv"
//                         required
//                         maxLength="3"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
//                         value={formData.cvv}
//                         onChange={handleInputChange}
//                         placeholder="123"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-medium text-lg"
//               >
//                 Pay ₹{planDetails?.price}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentForm;



















































// import React, { useState } from 'react';
// import { ArrowLeft } from 'lucide-react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const PaymentForm = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const planDetails = location.state?.planDetails;

//   // Redirect if no plan details
//   if (!planDetails) {
//     return navigate('/pricing');
//   }

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Here you would call your PhonePe payment creation API
//     try {
//       // Example API call structure
//       // const response = await createPhonePePayment({
//       //   amount: planDetails.price,
//       //   customerDetails: formData,
//       //   planName: planDetails.name,
//       //   cycle: planDetails.cycle
//       // });
//       // Redirect to PhonePe payment page with response data
//       console.log('Processing payment:', {
//         userDetails: formData,
//         planDetails: planDetails
//       });
//     } catch (error) {
//       console.error('Payment creation failed:', error);
//     }
//   };

//   const handleBack = () => {
//     navigate('/products/whatsapp');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4">
//       <div className="max-w-2xl mx-auto">
//         <button 
//           onClick={handleBack}
//           className="flex items-center text-green-600 hover:text-green-700 mb-6 transition-colors pt-20"
//         >
//           <ArrowLeft className="mr-2" size={20} />
//           Back to Plans
//         </button>

//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           {/* Header */}
//           <div className="border-b border-gray-200 p-6">
//             <h1 className="text-2xl font-bold text-gray-800">Complete Your Purchase</h1>
//           </div>

//           <div className="p-6">
//             {/* Order Summary */}
//             <div className="bg-green-50 rounded-lg p-4 mb-8">
//               <h3 className="font-semibold text-lg text-gray-800 mb-2">Order Summary</h3>
//               <div className="flex justify-between items-center">
//                 <div>
//                   <p className="font-medium text-gray-800">{planDetails.name} Plan</p>
//                   <p className="text-sm text-gray-600">{planDetails.cycle}</p>
//                 </div>
//                 <div className="text-xl font-bold text-green-600">
//                   ₹{planDetails.price}
//                 </div>
//               </div>
//             </div>

//             {/* Contact Details Form */}
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     placeholder="Enter your full name"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="Enter your email"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Mobile Number
//                   </label>
//                   <input
//                     type="tel"
//                     name="mobile"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
//                     value={formData.mobile}
//                     onChange={handleInputChange}
//                     placeholder="Enter your mobile number"
//                   />
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-medium text-lg"
//               >
//                 Proceed to Pay ₹{planDetails.price}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentForm;





import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PaymentForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const planDetails = location.state?.planDetails;

  // Redirect if no plan details
  if (!planDetails) {
    navigate('/pricing');
    return null;
  }

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { name, mobile } = formData;

      const response = await axios.post('https://gntindia.com:5000/api/v1/payment/create-payment', {
        name,
        mobileNumber: mobile,
        amount: planDetails.price,
      });

      if (response.data.success) {
        // Redirect to the payment page
        window.location.href = response.data.url;
      } else {
        throw new Error(response.data.error || 'Payment initiation failed.');
      }
    } catch (err) {
      console.error('Payment creation failed:', err);
      setError(err.response?.data?.error || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/products/whatsapp');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={handleBack}
          className="flex items-center text-green-600 hover:text-green-700 mb-6 transition-colors pt-20"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Plans
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="border-b border-gray-200 p-6">
            <h1 className="text-2xl font-bold text-gray-800">Complete Your Purchase</h1>
          </div>

          <div className="p-6">
            {/* Order Summary */}
            <div className="bg-green-50 rounded-lg p-4 mb-8">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Order Summary</h3>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800">{planDetails.name} Plan</p>
                  <p className="text-sm text-gray-600">{planDetails.cycle}</p>
                </div>
                <div className="text-xl font-bold text-green-600">₹{planDetails.price}</div>
              </div>
            </div>

            {/* Contact Details Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter your mobile number"
                  />
                </div>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-green-500 text-white py-3 rounded-lg transition-colors font-medium text-lg ${
                  loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'
                }`}
              >
                {loading ? 'Processing...' : `Proceed to Pay ₹${planDetails.price}`}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
