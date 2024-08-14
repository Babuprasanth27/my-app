// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const SummaryPage = () => {
//   const [bookingDetails, setBookingDetails] = useState({
//     includes: 'Brooming, Mopping, Bathroom cleaning',
//     gender: 'Female',
//     hours: 'Morning (7am onwards)',
//     startDate: '12-Aug',
//     notes: 'NA',
//     shifts: '08:00-11:30',
//     workDetails: '3 BHK (less than 2000sqft), 3 floors, 5-6 bathrooms',
//     salary: 'Rs 8600/-',
//   });
//   const [address, setAddress] = useState('Current Address');
//   const [showEditAddress, setShowEditAddress] = useState(false);
//   const [totalAmount, setTotalAmount] = useState(49.00);
//   const [couponApplied, setCouponApplied] = useState(false);

//   const handleAddressChange = (e) => {
//     setAddress(e.target.value);
//   };

//   const handleApplyCoupon = () => {
//     if (!couponApplied) {
//       setTotalAmount(totalAmount - 10); 
//       setCouponApplied(true);
//     }
//   };
//   const handleAddressEdit = () => {
//     setShowEditAddress(!showEditAddress);
//   };
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <motion.div className="bg-white shadow-md p-4" initial={{ y: -50 }} animate={{ y: 0 }}>
//         <div className="flex items-center">
//           <button className="text-black focus:outline-none">
//             ←
//           </button>
//           <h1 className="text-lg font-semibold ml-4">Summary</h1>
//         </div>
//       </motion.div>

//       <div className="flex-grow p-6">
//         <motion.div className="bg-white shadow-lg rounded-lg p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           <div className="flex justify-between items-center border-b pb-2">
//             <div className="flex items-center">
//               <span className="text-orange-500">📍</span>
//               {showEditAddress ? (
//                 <input
//                   type="text"
//                   value={address}
//                   onChange={handleAddressChange}
//                   className="ml-2 text-gray-600 border-b focus:outline-none"
//                 />
//               ) : (
//                 <span className="ml-2 text-gray-600">{address}</span>
//               )}
//             </div>
//             <button className="text-orange-500 text-sm" onClick={handleAddressEdit}>
//               {showEditAddress ? 'Save' : 'Change'}
//             </button>
//           </div>

//           <div className="mt-4">
//             <h2 className="font-semibold text-gray-700">Booking Details</h2>
//             <div className="grid grid-cols-2 gap-4 mt-4">
//               <div>
//                 <p className="text-gray-600">Includes</p>
//                 <p>{bookingDetails.includes}</p>
//               </div>
//               <div>
//                 <p className="text-gray-600">Gender</p>
//                 <p>{bookingDetails.gender}</p>
//               </div>
//               <div>
//                 <p className="text-gray-600">Hours of service</p>
//                 <p>{bookingDetails.hours}</p>
//               </div>
//               <div>
//                 <p className="text-gray-600">Start Date</p>
//                 <p>{bookingDetails.startDate}</p>
//               </div>
//               <div>
//                 <p className="text-gray-600">Notes</p>
//                 <p>{bookingDetails.notes}</p>
//               </div>
//               <div>
//                 <p className="text-gray-600">Work shifts</p>
//                 <p>{bookingDetails.shifts}</p>
//               </div>
//               <div>
//                 <p className="text-gray-600">Work Details</p>
//                 <p>{bookingDetails.workDetails}</p>
//               </div>
//               <div>
//                 <p className="text-gray-600">Monthly Worker Salary</p>
//                 <p>{bookingDetails.salary}</p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-6">
//             <h2 className="font-semibold text-gray-700">Billing</h2>
//             <div className="flex justify-between items-center mt-2">
//               <p>Booking Fee (Non-refundable)</p>
//               <p>(₹{totalAmount.toFixed(2)})</p>
//             </div>
//             <button className="text-orange-500 text-sm mt-2" onClick={handleApplyCoupon}>
//               {couponApplied ? 'Coupon Applied!' : 'View Coupons'}
//             </button>
//           </div>

//           <div className="mt-4">
//             <div className="flex items-center">
//               <input type="checkbox" id="terms" className="mr-2 text-orange-500 focus:ring-orange-500" />
//               <label htmlFor="terms" className="text-gray-600 text-sm">
//                 I agree to the <span className="text-orange-500 underline">Terms and Conditions</span>
//               </label>
//             </div>
//             <p className="text-gray-500 text-xs mt-2">
//               *Estimate varies with workload, shifts, timings and location
//             </p>
//           </div>
//         </motion.div>
//       </div>

//       <div className="bg-white shadow-md p-4">
//         <div className="flex justify-between items-center">
//           <p>Total Amount</p>
//           <motion.button
//             className="bg-orange-500 text-white px-6 py-2 rounded-full"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             ₹{totalAmount.toFixed(2)} Book Now
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SummaryPage;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEdit, FaSave } from 'react-icons/fa';

const SummaryPage = () => {
  const [bookingDetails, setBookingDetails] = useState({
    includes: 'Brooming, Mopping, Bathroom cleaning',
    gender: 'Female',
    hours: 'Morning (7am onwards)',
    startDate: '12-Aug',
    notes: 'NA',
    shifts: '08:00-11:30',
    workDetails: '3 BHK (less than 2000sqft), 3 floors, 5-6 bathrooms',
    salary: 'Rs 8600/-',
  });
  const [address, setAddress] = useState('Current Address');
  const [showEditAddress, setShowEditAddress] = useState(false);
  const [totalAmount, setTotalAmount] = useState(49.00);
  const [couponApplied, setCouponApplied] = useState(false);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleApplyCoupon = () => {
    if (!couponApplied) {
      setTotalAmount(totalAmount - 10); 
      setCouponApplied(true);
    }
  };

  const handleAddressEdit = () => {
    setShowEditAddress(!showEditAddress);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col mt-10">
      <motion.div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md p-4" initial={{ y: -50 }} animate={{ y: 0 }}>
        <div className="flex items-center">
          <button className="text-white focus:outline-none">
            ←
          </button>
          <h1 className="text-lg font-semibold ml-4">Summary</h1>
        </div>
      </motion.div>

      <div className="flex-grow p-6 ">
        <motion.div className="bg-white shadow-lg rounded-lg p-6 space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="flex justify-between items-center border-b pb-2">
            <div className="flex items-center text-gray-600">
              <FaMapMarkerAlt className="text-orange-500" />
              {showEditAddress ? (
                <input
                  type="text"
                  value={address}
                  onChange={handleAddressChange}
                  className="ml-2 border-b focus:outline-none focus:border-orange-500 text-gray-700"
                />
              ) : (
                <span className="ml-2">{address}</span>
              )}
            </div>
            <button className="text-orange-500 text-sm flex items-center" onClick={handleAddressEdit}>
              {showEditAddress ? <><FaSave className="mr-1" /> Save</> : <><FaEdit className="mr-1" /> Change</>}
            </button>
          </div>

          <div className="mt-4">
            <h2 className="font-semibold text-gray-700">Booking Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {Object.entries(bookingDetails).map(([key, value]) => (
                <div key={key}>
                  <p className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                  <p className="text-gray-900">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h2 className="font-semibold text-gray-700">Billing</h2>
            <div className="flex justify-between items-center mt-2 text-gray-800">
              <p>Booking Fee (Non-refundable)</p>
              <p>₹{totalAmount.toFixed(2)}</p>
            </div>
            <button className="text-orange-500 text-sm mt-2" onClick={handleApplyCoupon}>
              {couponApplied ? 'Coupon Applied!' : 'View Coupons'}
            </button>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2 focus:ring-orange-500" />
              <label htmlFor="terms" className="text-gray-600 text-sm">
                I agree to the <span className="text-orange-500 underline">Terms and Conditions</span>
              </label>
            </div>
            <p className="text-gray-500 text-xs mt-2">
              *Estimate varies with workload, shifts, timings, and location
            </p>
          </div>
        </motion.div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md p-4">
        <div className="flex justify-between items-center">
          <p>Total Amount</p>
          <motion.button
            className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ₹{totalAmount.toFixed(2)} Book Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
