import React from 'react';
import { motion } from 'framer-motion';
import service from '../asserts/service.jpg'; 

const Hire = () => {
  return (
    <div>
      <div className="relative">
        <motion.img 
          src={service} 
          alt="Service" 
          className="w-full h-[25rem] object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        >
         {/* <h1 className="text-indigo-800 text-4xl font-bold">
            Your Desired Service
          </h1>*/}
        </motion.div>
      </div>
    </div>
  );
};

export default Hire;

// import React, { useState } from 'react';
// import service from '../asserts/service.jpg'; // Corrected path
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import CategoriesAndServices from './categories'; // Ensure this path is correct

// const Hire = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortOption, setSortOption] = useState('role');

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSortChange = (e) => {
//     setSortOption(e.target.value);
//   };

//   return (
//     <div className="relative">
//       {/* Background Image */}
//       <img src={service} alt="Service" className="w-full h-[25rem] object-cover" />

//       {/* Overlay with search and sort */}
//       <div className="absolute inset-0 flex items-center justify-center p-4">
//         <div className="bg-white bg-opacity-70 p-4 rounded-md shadow-md w-full max-w-4xl">
//           <h2 className="mb-4 text-gray-500 text-center text-xl sm:text-2xl">Choose a service to get started.</h2>
//           <div className="flex flex-col sm:flex-row items-center gap-4">
//             {/* Sort Dropdown */}
//             <select
//               className="pl-3 pr-10 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-auto"
//               value={sortOption}
//               onChange={handleSortChange}
//             >
//               <option value="role">Role</option>
//               <option value="rating">Rating</option>
//               <option value="location">Location</option>
//             </select>

//             {/* Search Input */}
//             <div className="relative flex-grow">
//               <input
//                 type="text"
//                 placeholder="Search for services..."
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 className="pl-10 py-2 border border-gray-300 rounded-md w-full"
//               />
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3">
//                 <FontAwesomeIcon icon={faSearch} className="text-indigo-800" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Categories and Services */}
//       <CategoriesAndServices searchTerm={searchTerm} sortOption={sortOption} />
//     </div>
//   );
// };

// export default Hire;

