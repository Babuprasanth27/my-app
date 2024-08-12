// import React, { useState } from 'react';
// import { Dialog } from '@headlessui/react';
// import { FiX } from 'react-icons/fi';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useUser } from './UserContext'; // Ensure this path is correct

// function EmployeeRegistrationModal({ isOpen, setIsOpen }) {
//   const [serviceType, setServiceType] = useState('');
//   const [cookPreferences, setCookPreferences] = useState([]);
//   const [cleaningPreferences, setCleaningPreferences] = useState([]);
//   const [housekeepingPreferences, setHousekeepingPreferences] = useState([]);
//   const [otherCookPreference, setOtherCookPreference] = useState(''); // State for "Other" cook preference
//   const [otherCleaningPreference, setOtherCleaningPreference] = useState(''); // State for "Other" cleaning preference
//   const [otherHousekeepingPreference, setOtherHousekeepingPreference] = useState(''); // State for "Other" housekeeping preference
//   const { user } = useUser(); // Access user information from context

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const handleServiceTypeChange = (e) => {
//     setServiceType(e.target.value);
//   };

//   const handleCookPreferencesChange = (e) => {
//     const { value, checked } = e.target;
//     if (value === 'other') {
//       setOtherCookPreference(''); // Reset the "Other" preference text box
//     }
//     setCookPreferences((prev) =>
//       checked ? [...prev, value] : prev.filter((pref) => pref !== value)
//     );
//   };

//   const handleCleaningPreferencesChange = (e) => {
//     const { value, checked } = e.target;
//     if (value === 'other') {
//       setOtherCleaningPreference(''); // Reset the "Other" preference text box
//     }
//     setCleaningPreferences((prev) =>
//       checked ? [...prev, value] : prev.filter((pref) => pref !== value)
//     );
//   };

//   const handleHousekeepingPreferencesChange = (e) => {
//     const { value, checked } = e.target;
//     if (value === 'other') {
//       setOtherHousekeepingPreference(''); // Reset the "Other" preference text box
//     }
//     setHousekeepingPreferences((prev) =>
//       checked ? [...prev, value] : prev.filter((pref) => pref !== value)
//     );
//   };

//   const handleOtherCookPreferenceChange = (e) => {
//     setOtherCookPreference(e.target.value);
//   };

//   const handleOtherCleaningPreferenceChange = (e) => {
//     setOtherCleaningPreference(e.target.value);
//   };

//   const handleOtherHousekeepingPreferenceChange = (e) => {
//     setOtherHousekeepingPreference(e.target.value);
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <Dialog as="div" className="relative z-20" open={isOpen} onClose={closeModal} static>
//           <motion.div 
//             className="fixed inset-0 bg-gray-800 bg-opacity-50" 
//             initial={{ opacity: 0 }} 
//             animate={{ opacity: 1 }} 
//             exit={{ opacity: 0 }} 
//             transition={{ duration: 0.3 }} 
//           />
//           <div className="fixed inset-0 z-30 flex items-center justify-center p-4">
//             <motion.div
//               className="bg-white rounded-2xl p-8 max-w-lg w-full h-96 overflow-y-auto shadow-xl"
//               initial={{ opacity: 0, y: 50, scale: 0.95 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: 50, scale: 0.95 }}
//               transition={{ duration: 0.4, ease: 'easeInOut' }}
//             >
//               <div className="flex justify-between items-center">
//                 <h3 className="text-xl font-bold leading-6 text-gray-800">
//                   Employee Registration
//                 </h3>
//                 <button onClick={closeModal} className="text-gray-800 hover:text-gray-500">
//                   <FiX className="h-6 w-6" />
//                 </button>
//               </div>
//               <form className="mt-6 space-y-6">
//                 {/* Name Field */}
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-4 py-2"
//                   />
//                 </div>

//                 {/* Email Field */}
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={user.email} // Automatically populated from context
//                     readOnly
//                     className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-4 py-2"
//                   />
//                 </div>

//                 {/* Phone Number Field */}
//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//                     Phone Number
//                   </label>
//                   <input
//                     type="text"
//                     id="phone"
//                     name="phone"
//                     className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-4 py-2"
//                   />
//                 </div>

//                 {/* Location Field */}
//                 <div>
//                   <label htmlFor="location" className="block text-sm font-medium text-gray-700">
//                     Location
//                   </label>
//                   <input
//                     type="text"
//                     id="location"
//                     name="location"
//                     className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-4 py-2"
//                   />
//                 </div>

//                 {/* Service Type Field */}
//                 <div>
//                   <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">
//                     Service Type
//                   </label>
//                   <select
//                     id="serviceType"
//                     name="serviceType"
//                     value={serviceType}
//                     onChange={handleServiceTypeChange}
//                     className="mt-1 block w-full rounded-md border border-gray-300 bg-white text-gray-800 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-4 py-2"
//                   >
//                     <option value="">Select Service Type</option>
//                     <option value="cook">Cook</option>
//                     <option value="cleaning">Cleaning</option>
//                     <option value="housekeeping">Housekeeping</option>
//                     <option value="other">Other</option> {/* Added Other option */}
//                   </select>
//                 </div>

//                 {/* TextBox for Other Service Type */}
//                 {serviceType === 'other' && (
//                   <div>
//                     <label htmlFor="otherServiceType" className="block text-sm font-medium text-gray-700">
//                       Please specify the service
//                     </label>
//                     <input
//                       type="text"
//                       id="otherServiceType"
//                       name="otherServiceType"
//                       value={serviceType}
//                       onChange={handleOtherServiceTypeChange}
//                       className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-4 py-2"
//                     />
//                   </div>
//                 )}

//                 {/* Preferences Fields */}
//                 {serviceType === 'cook' && (
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Cook Preferences
//                     </label>
//                     <div className="mt-2 space-y-2">
//                       <label className="flex items-center">
//                         <input
//                           type="checkbox"
//                           value="vegan"
//                           checked={cookPreferences.includes('vegan')}
//                           onChange={handleCookPreferencesChange}
//                           className="mr-2"
//                         />
//                         Vegan
//                       </label>
//                       <label className="flex items-center">
//                         <input
//                           type="checkbox"
//                           value="glutenFree"
//                           checked={cookPreferences.includes('glutenFree')}
//                           onChange={handleCookPreferencesChange}
//                           className="mr-2"
//                         />
//                         Gluten-Free
//                       </label>
//                       <label className="flex items-center">
//                         <input
//                           type="checkbox"
//                           value="spicy"
//                           checked={cookPreferences.includes('spicy')}
//                           onChange={handleCookPreferencesChange}
//                           className="mr-2"
//                         />
//                         Spicy
//                       </label>
//                       <label className="flex items-center">
//                         <input
//                           type="checkbox"
//                           value="other"
//                           checked={cookPreferences.includes('other')}
//                           onChange={handleCookPreferencesChange}
//                           className="mr-2"
//                         />
//                         Other {/* Added Other option */}
//                       </label>
//                       {cookPreferences.includes('other') && (
//                         <input
//                           type="text"
//                           value={otherCookPreference}
//                           onChange={handleOtherCookPreferenceChange}
//                           placeholder="Please specify"
//                           className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-4 py-2"
//                         />
//                       )}
//                     </div>
//                   </div>
//                 )}

//                 {serviceType === 'cleaning' && (
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Cleaning Preferences
//                     </label>
//                     <div className="mt-2 space-y-2">
//                       <label className="flex items-center">
//                         <input
//                           type="checkbox"
//                           value="daily"
//                           checked={cleaningPreferences.includes('daily')}
//                           onChange={handleCleaningPreferencesChange}
//                           className="mr-2"
//                         />
//                         Daily
//                       </label>
//                       <label className="flex items-center">
//                         <input
//                           type="checkbox"
//                           value="weekly"
//                           checked={cleaningPreferences.includes('weekly')}
//                           onChange={handleCleaningPreferencesChange}
//                           className="mr-2"
//                         />
//                         Weekly
//                       </label>
//                       <label className="flex items-center">
//                         <input
//                           type="checkbox"
//                           value="deepCleaning"
//                           checked={cleaningPreferences.includes('deepCleaning')}
//                           onChange={handleCleaningPreferencesChange}
//                           className="mr-2"
//                         />
//                         Deep Cleaning
//                       </label>
//                       <label className="flex items-center">
//                         <input
//                           type="checkbox"
//                           value="other"
//                           checked={cleaningPreferences.includes('other')}
//                           onChange={handleCleaningPreferencesChange}
//                           className="mr-2"
//                         />
//                         Other {/* Added Other option */}
//                       </label>
//                       {cleaningPreferences.includes('other') && (
//                         <input
//                           type="text"
//                           value={otherCleaningPreference}
//                           onChange={handleOtherCleaningPreferenceChange}
//                           placeholder="Please specify"
//                           className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-4 py-2"
//                         />
//                       )}
//                     </div>
//                   </div>
//                 )}

//                 {serviceType === 'housekeeping' && (
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Housekeeping Preferences
//                     </label>
//                     <div className="mt-2 space-y-2">
//                       <label className="flex items-center">
//                         <input
//                           type="checkbox"
//                           value="laundry"
//                           checked={housekeepingPreferences.includes('laundry')}
//                           onChange={handleHousekeepingPreferencesChange}
//                           className="mr-2"
//                         />
//                         Laundry
//                       </label>
//                       <label className="flex items-center">
//                         <input
//                           type="checkbox"
//                           value="ironing"
//                           checked={housekeepingPreferences.includes('ironing')}
//                           onChange={handleHousekeepingPreferencesChange}
//                           className="mr-2"
//                         />
//                         Ironing
//                       </label>
//                       <label className="flex items-center">
//                         <input
//                           type="checkbox"
//                           value="petCare"
//                           checked={housekeepingPreferences.includes('petCare')}
//                           onChange={handleHousekeepingPreferencesChange}
//                           className="mr-2"
//                         />
//                         Pet Care
//                       </label>
//                       <label className="flex items-center">
//                         <input
//                           type="checkbox"
//                           value="other"
//                           checked={housekeepingPreferences.includes('other')}
//                           onChange={handleHousekeepingPreferencesChange}
//                           className="mr-2"
//                         />
//                         Other {/* Added Other option */}
//                       </label>
//                       {housekeepingPreferences.includes('other') && (
//                         <input
//                           type="text"
//                           value={otherHousekeepingPreference}
//                           onChange={handleOtherHousekeepingPreferenceChange}
//                           placeholder="Please specify"
//                           className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-4 py-2"
//                         />
//                       )}
//                     </div>
//                   </div>
//                 )}

//                 {/* Submit Button */}
//                 <div className="flex justify-end">
//                   <button
//                     type="submit"
//                     className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </motion.div>
//           </div>
//         </Dialog>
//       )}
//     </AnimatePresence>
//   );
// }

// export default EmployeeRegistrationModal;


import React, { useState } from 'react';
import axios from 'axios';
import { Dialog } from '@headlessui/react';
import { FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from './UserContext'; // Ensure this path is correct

function EmployeeRegistrationModal({ isOpen, setIsOpen }) {
  const [serviceType, setServiceType] = useState('');
  const [cookPreferences, setCookPreferences] = useState([]);
  const [cleaningPreferences, setCleaningPreferences] = useState([]);
  const [housekeepingPreferences, setHousekeepingPreferences] = useState([]);
  const [otherCookPreference, setOtherCookPreference] = useState('');
  const [otherCleaningPreference, setOtherCleaningPreference] = useState('');
  const [otherHousekeepingPreference, setOtherHousekeepingPreference] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const { user } = useUser(); // Access user information from context

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleServiceTypeChange = (e) => {
    setServiceType(e.target.value);
  };

  const handleCookPreferencesChange = (e) => {
    const { value, checked } = e.target;
    if (value === 'other') {
      setOtherCookPreference(''); // Reset the "Other" preference text box
    }
    setCookPreferences((prev) =>
      checked ? [...prev, value] : prev.filter((pref) => pref !== value)
    );
  };

  const handleCleaningPreferencesChange = (e) => {
    const { value, checked } = e.target;
    if (value === 'other') {
      setOtherCleaningPreference(''); // Reset the "Other" preference text box
    }
    setCleaningPreferences((prev) =>
      checked ? [...prev, value] : prev.filter((pref) => pref !== value)
    );
  };

  const handleHousekeepingPreferencesChange = (e) => {
    const { value, checked } = e.target;
    if (value === 'other') {
      setOtherHousekeepingPreference(''); // Reset the "Other" preference text box
    }
    setHousekeepingPreferences((prev) =>
      checked ? [...prev, value] : prev.filter((pref) => pref !== value)
    );
  };

  const handleOtherCookPreferenceChange = (e) => {
    setOtherCookPreference(e.target.value);
  };

  const handleOtherCleaningPreferenceChange = (e) => {
    setOtherCleaningPreference(e.target.value);
  };

  const handleOtherHousekeepingPreferenceChange = (e) => {
    setOtherHousekeepingPreference(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email: user.email,
      phone,
      location,
      serviceType,
      cookPreferences: serviceType === 'cook' ? [...cookPreferences, otherCookPreference].filter(Boolean) : [],
      cleaningPreferences: serviceType === 'cleaning' ? [...cleaningPreferences, otherCleaningPreference].filter(Boolean) : [],
      housekeepingPreferences: serviceType === 'housekeeping' ? [...housekeepingPreferences, otherHousekeepingPreference].filter(Boolean) : [],
    };

    try {
      const response = await axios.post('http://localhost:8080/api/employees', formData);
      console.log('Response:', response.data);
      alert('Employee registration successful!');
      setIsOpen(false);
    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error.message);
      alert('There was an error submitting the form.');
    }
    
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog as="div" className="relative z-20" open={isOpen} onClose={closeModal} static>
          <motion.div 
            className="fixed inset-0 bg-gray-800 bg-opacity-50" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.3 }} 
          />
          <div className="fixed inset-0 z-30 flex items-center justify-center p-4">
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-lg w-full h-96 overflow-y-auto shadow-xl"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold leading-6 text-gray-800">
                  Employee Registration
                </h3>
                <button onClick={closeModal} className="text-gray-800 hover:text-gray-500">
                  <FiX className="h-6 w-6" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-4 py-2"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    readOnly
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-4 py-2"
                  />
                </div>

                {/* Phone Number Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-4 py-2"
                  />
                </div>

                {/* Location Field */}
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-4 py-2"
                  />
                </div>

                {/* Service Type Field */}
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={serviceType}
                    onChange={handleServiceTypeChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white text-gray-800 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-4 py-2"
                  >
                    <option value="">Select Service Type</option>
                    <option value="cook">Cook</option>
                    <option value="cleaning">Cleaning</option>
                    <option value="housekeeping">Housekeeping</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* TextBox for Other Service Type */}
                {serviceType === 'other' && (
                  <div>
                    <label htmlFor="otherServiceType" className="block text-sm font-medium text-gray-700">
                      Please specify the service
                    </label>
                    <input
                      type="text"
                      id="otherServiceType"
                      name="otherServiceType"
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-4 py-2"
                    />
                  </div>
                )}

                {/* Preferences for Cook */}
                {serviceType === 'cook' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Cook Preferences
                    </label>
                    <div className="mt-2">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          value="Indian"
                          checked={cookPreferences.includes('Indian')}
                          onChange={handleCookPreferencesChange}
                          className="form-checkbox"
                        />
                        <span className="ml-2">Indian</span>
                      </label>
                      <label className="inline-flex items-center ml-4">
                        <input
                          type="checkbox"
                          value="Continental"
                          checked={cookPreferences.includes('Continental')}
                          onChange={handleCookPreferencesChange}
                          className="form-checkbox"
                        />
                        <span className="ml-2">Continental</span>
                      </label>
                      <label className="inline-flex items-center ml-4">
                        <input
                          type="checkbox"
                          value="Chinese"
                          checked={cookPreferences.includes('Chinese')}
                          onChange={handleCookPreferencesChange}
                          className="form-checkbox"
                        />
                        <span className="ml-2">Chinese</span>
                      </label>
                      <label className="inline-flex items-center ml-4">
                        <input
                          type="checkbox"
                          value="other"
                          checked={cookPreferences.includes('other')}
                          onChange={handleCookPreferencesChange}
                          className="form-checkbox"
                        />
                        <span className="ml-2">Other</span>
                      </label>
                      {cookPreferences.includes('other') && (
                        <input
                          type="text"
                          value={otherCookPreference}
                          onChange={handleOtherCookPreferenceChange}
                          placeholder="Specify other preference"
                          className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-4 py-2"
                        />
                      )}
                    </div>
                  </div>
                )}

                {/* Preferences for Cleaning */}
                {serviceType === 'cleaning' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Cleaning Preferences
                    </label>
                    <div className="mt-2">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          value="Daily"
                          checked={cleaningPreferences.includes('Daily')}
                          onChange={handleCleaningPreferencesChange}
                          className="form-checkbox"
                        />
                        <span className="ml-2">Daily</span>
                      </label>
                      <label className="inline-flex items-center ml-4">
                        <input
                          type="checkbox"
                          value="Weekly"
                          checked={cleaningPreferences.includes('Weekly')}
                          onChange={handleCleaningPreferencesChange}
                          className="form-checkbox"
                        />
                        <span className="ml-2">Weekly</span>
                      </label>
                      <label className="inline-flex items-center ml-4">
                        <input
                          type="checkbox"
                          value="Monthly"
                          checked={cleaningPreferences.includes('Monthly')}
                          onChange={handleCleaningPreferencesChange}
                          className="form-checkbox"
                        />
                        <span className="ml-2">Monthly</span>
                      </label>
                      <label className="inline-flex items-center ml-4">
                        <input
                          type="checkbox"
                          value="other"
                          checked={cleaningPreferences.includes('other')}
                          onChange={handleCleaningPreferencesChange}
                          className="form-checkbox"
                        />
                        <span className="ml-2">Other</span>
                      </label>
                      {cleaningPreferences.includes('other') && (
                        <input
                          type="text"
                          value={otherCleaningPreference}
                          onChange={handleOtherCleaningPreferenceChange}
                          placeholder="Specify other preference"
                          className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-4 py-2"
                        />
                      )}
                    </div>
                  </div>
                )}

                {/* Preferences for Housekeeping */}
                {serviceType === 'housekeeping' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Housekeeping Preferences
                    </label>
                    <div className="mt-2">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          value="Light"
                          checked={housekeepingPreferences.includes('Light')}
                          onChange={handleHousekeepingPreferencesChange}
                          className="form-checkbox"
                        />
                        <span className="ml-2">Light</span>
                      </label>
                      <label className="inline-flex items-center ml-4">
                        <input
                          type="checkbox"
                          value="Heavy"
                          checked={housekeepingPreferences.includes('Heavy')}
                          onChange={handleHousekeepingPreferencesChange}
                          className="form-checkbox"
                        />
                        <span className="ml-2">Heavy</span>
                      </label>
                      <label className="inline-flex items-center ml-4">
                        <input
                          type="checkbox"
                          value="Occasional"
                          checked={housekeepingPreferences.includes('Occasional')}
                          onChange={handleHousekeepingPreferencesChange}
                          className="form-checkbox"
                        />
                        <span className="ml-2">Occasional</span>
                      </label>
                      <label className="inline-flex items-center ml-4">
                        <input
                          type="checkbox"
                          value="other"
                          checked={housekeepingPreferences.includes('other')}
                          onChange={handleHousekeepingPreferencesChange}
                          className="form-checkbox"
                        />
                        <span className="ml-2">Other</span>
                      </label>
                      {housekeepingPreferences.includes('other') && (
                        <input
                          type="text"
                          value={otherHousekeepingPreference}
                          onChange={handleOtherHousekeepingPreferenceChange}
                          placeholder="Specify other preference"
                          className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-4 py-2"
                        />
                      )}
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

export default EmployeeRegistrationModal;
