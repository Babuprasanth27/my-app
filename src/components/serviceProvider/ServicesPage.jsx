// // import React from 'react';
// // import { FaCalendarCheck, FaMoneyCheckAlt, FaBell, FaTasks } from 'react-icons/fa';

// // function DashboardPage() {
// //   return (
// //     <div className="min-h-screen bg-gray-100 p-4">
// //       <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //         <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
// //           <FaCalendarCheck className="text-blue-500 text-2xl mr-4" />
// //           <div>
// //             <h2 className="text-xl font-semibold">Upcoming Jobs</h2>
// //             <p>5 Jobs</p>
// //           </div>
// //         </div>
// //         <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
// //           <FaMoneyCheckAlt className="text-green-500 text-2xl mr-4" />
// //           <div>
// //             <h2 className="text-xl font-semibold">Earnings Summary</h2>
// //             <p>$1200</p>
// //           </div>
// //         </div>
// //         <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
// //           <FaBell className="text-yellow-500 text-2xl mr-4" />
// //           <div>
// //             <h2 className="text-xl font-semibold">Notifications</h2>
// //             <p>3 New</p>
// //           </div>
// //         </div>
// //         <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
// //           <FaTasks className="text-purple-500 text-2xl mr-4" />
// //           <div>
// //             <h2 className="text-xl font-semibold">Quick Actions</h2>
// //             <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Mark Availability</button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default DashboardPage;


// import React, { useState, useEffect } from 'react';
// import { FaCalendarCheck, FaMoneyCheckAlt, FaBell, FaTasks } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import NavbarService from './NavbarService';

// // Mock function to simulate data fetching
// const fetchDashboardData = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         upcomingJobs: 5,
//         earnings: 1200,
//         notifications: 3,
//       });
//     }, 1000);
//   });
// };

// function DashboardPage() {
//   const [data, setData] = useState({
//     upcomingJobs: 0,
//     earnings: 0,
//     notifications: 0,
//   });

//   useEffect(() => {
//     // Fetch data when the component mounts
//     const getData = async () => {
//       const result = await fetchDashboardData();
//       setData(result);
//     };
//     getData();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//     <NavbarService/>
//       <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Dashboard</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {/* Upcoming Jobs Card */}
//         <motion.div
//           className="bg-gradient-to-r from-blue-400 to-blue-600 p-4 rounded-lg shadow-lg flex items-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <FaCalendarCheck className="text-white text-2xl mr-4" />
//           <div className="text-white">
//             <h2 className="text-xl font-semibold">Upcoming Jobs</h2>
//             <p className="text-2xl">{data.upcomingJobs} Jobs</p>
//           </div>
//         </motion.div>

//         {/* Earnings Summary Card */}
//         <motion.div
//           className="bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-lg shadow-lg flex items-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <FaMoneyCheckAlt className="text-white text-2xl mr-4" />
//           <div className="text-white">
//             <h2 className="text-xl font-semibold">Earnings Summary</h2>
//             <p className="text-2xl">${data.earnings}</p>
//           </div>
//         </motion.div>

//         {/* Notifications Card */}
//         <motion.div
//           className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 rounded-lg shadow-lg flex items-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <FaBell className="text-white text-2xl mr-4" />
//           <div className="text-white">
//             <h2 className="text-xl font-semibold">Notifications</h2>
//             <p className="text-2xl">{data.notifications} New</p>
//           </div>
//         </motion.div>

//         {/* Quick Actions Card */}
//         <motion.div
//           className="bg-gradient-to-r from-purple-400 to-purple-600 p-4 rounded-lg shadow-lg flex items-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <FaTasks className="text-white text-2xl mr-4" />
//           <div className="text-white">
//             <h2 className="text-xl font-semibold">Quick Actions</h2>
//             <button className="mt-2 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition duration-300">
//               Mark Availability
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default DashboardPage;

// import React, { useState, useEffect } from 'react';
// import NavbarService from './NavbarService';

// const DashboardPage = () => {
//   const [serviceProviders, setServiceProviders] = useState([]);

//   useEffect(() => {
//     // Fetching data from the API
//     fetch('http://localhost:8080/api/admin/service-providers') // Adjust the URL based on your backend endpoint
//       .then((response) => response.json())
//       .then((data) => setServiceProviders(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <NavbarService />
//       <header className="bg-blue-600 p-4 text-white shadow-md">
//         <h1 className="text-3xl font-extrabold text-center">Admin Dashboard</h1>
//       </header>
//       <main className="p-4 md:p-6 lg:p-8">
//         <div className="flex flex-col lg:flex-row gap-4">
          
//           <div className="flex-1 bg-white rounded-lg shadow-md p-4 overflow-x-auto">
//             <h2 className="text-2xl font-semibold mb-4">Service Providers</h2>
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-blue-700 text-white">
//                 <tr>
//                   <th className="p-3 text-left">Email</th>
//                   <th className="p-3 text-left">Availability</th>
//                   <th className="p-3 text-left">Location</th>
//                   <th className="p-3 text-left">Name</th>
//                   <th className="p-3 text-left">Type</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {serviceProviders.length > 0 ? (
//                   serviceProviders.map((provider) => (
//                     <tr key={provider.id} className="hover:bg-gray-50">
//                       <td className="p-3">{provider.email}</td>
//                       <td className="p-3">
//                         <span
//                           className={`inline-block px-3 py-1 rounded-full text-sm ${
//                             provider.isAvailable ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
//                           }`}
//                         >
//                           {provider.isAvailable ? 'Available' : 'Not Available'}
//                         </span>
//                       </td>
//                       <td className="p-3">{provider.location}</td>
//                       <td className="p-3">{provider.name}</td>
//                       <td className="p-3">{provider.type}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="5" className="p-3 text-center text-gray-600">No data available</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default DashboardPage;
import React, { useState, useEffect } from 'react';
import NavbarService from './NavbarService';
import { HiMail, HiLocationMarker, HiUser, HiCube, HiPhone } from 'react-icons/hi';
import { MdCheckCircle, MdCancel, MdEdit, MdDelete } from 'react-icons/md';

const ServicesPage = () => {
  const [serviceProviders, setServiceProviders] = useState([]);
  const [form, setForm] = useState({
    email: '',
    isAvailable: true,
    location: '',
    name: '',
    type: '',
    phoneNumber: '',
    rating: '',
  });
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [currentProviderId, setCurrentProviderId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/admin/service-providers')
      .then((response) => response.json())
      .then((data) => setServiceProviders(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedForm = {
      ...form,
      type: form.type.toUpperCase(),
    };
    fetch('http://localhost:8080/api/admin/service-providers/postEmployee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedForm),
    })
      .then((response) => response.json())
      .then((data) => {
        setServiceProviders((prevProviders) => [...prevProviders, data]);
        setForm({
          email: '',
          isAvailable: true,
          location: '',
          name: '',
          type: '',
          phoneNumber: '',
          rating: '',
        });
      })
      .catch((error) => console.error('Error adding service provider:', error));
  };

  const handleUpdate = (provider) => {
    setForm({
      email: provider.email,
      isAvailable: provider.isAvailable,
      location: provider.location,
      name: provider.name,
      type: provider.type,
      phoneNumber: provider.phoneNumber,
      rating: provider.rating,
    });
    setCurrentProviderId(provider.id);
    setIsUpdateModalOpen(true);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/api/admin/service-providers/${currentProviderId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...form,
        type: form.type.toUpperCase(),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setServiceProviders((prevProviders) =>
          prevProviders.map((provider) =>
            provider.id === currentProviderId ? data : provider
          )
        );
        setIsUpdateModalOpen(false);
        setCurrentProviderId(null);
        setForm({
          email: '',
          isAvailable: true,
          location: '',
          name: '',
          type: '',
          phoneNumber: '',
          rating: '',
        });
      })
      .catch((error) => console.error('Error updating service provider:', error));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this service provider?')) {
      fetch(`http://localhost:8080/api/admin/service-providers/${id}`, {
        method: 'DELETE',
      })
        .then(() => {
          setServiceProviders((prevProviders) =>
            prevProviders.filter((provider) => provider.id !== id)
          );
        })
        .catch((error) => console.error('Error deleting service provider:', error));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      <NavbarService />
      <div className="flex-1  md:pt-6  bg-gray-200 mt-10">
      {/* <header className="p-4 text-indigo-800 shadow-lg ">
          <h1 className="text-3xl font-extrabold text-center ">Admin Dashboard</h1>
        </header>*/}
        <main className="mt-6">
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl mb-6 text-center text-indigo-800 font-bold">Add New Service Provider</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center space-x-4">
                <HiMail className="text-gray-500 text-xl" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div className="flex items-center space-x-4">
                <MdCheckCircle className={`text-${form.isAvailable ? 'green' : 'red'}-500 text-xl`} />
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="isAvailable"
                    checked={form.isAvailable}
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <span className="text-sm">Available</span>
                </label>
              </div>
              <div className="flex items-center space-x-4">
                <HiLocationMarker className="text-gray-500 text-xl" />
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  required
                  placeholder="Location"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div className="flex items-center space-x-4">
                <HiUser className="text-gray-500 text-xl" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div className="flex items-center space-x-4">
                <HiCube className="text-gray-500 text-xl" />
                <input
                  type="text"
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  required
                  placeholder="Type"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div className="flex items-center space-x-4">
                <HiPhone className="text-gray-500 text-xl" />
                <input
                  type="text"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div className="flex items-center space-x-4">
                <HiCube className="text-gray-500 text-xl" />
                <input
                  type="number"
                  name="rating"
                  value={form.rating}
                  onChange={handleChange}
                  required
                  placeholder="Rating"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 transition duration-150 ease-in-out"
              >
                Add Service Provider
              </button>
            </form>
          </div>

          <div className="mt-8 p-5">
            <div className="bg-white rounded-lg shadow-md ">
              <h2 className="text-2xl  mb-4 p-4 border-b border-gray-200 text-center text-indigo-800 font-bold">Service Providers</h2>
              <div className="overflow-x-auto ">
                <table className="min-w-full divide-y divide-gray-200 ">
                  <thead className="bg-blue-700 text-white">
                    <tr>
                      <th className="p-3 text-left">Email</th>
                      <th className="p-3 text-left">Availability</th>
                      <th className="p-3 text-left">Location</th>
                      <th className="p-3 text-left">Name</th>
                      <th className="p-3 text-left">Type</th>
                      <th className="p-3 text-left">Phone Number</th>
                      <th className="p-3 text-left">Rating</th>
                      <th className="p-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {serviceProviders.map((provider) => (
                      <tr key={provider.id}>
                        <td className="p-3">{provider.email}</td>
                        <td className="p-3">
                          {provider.isAvailable ? (
                            <MdCheckCircle className="text-green-500" />
                          ) : (
                            <MdCancel className="text-red-500" />
                          )}
                        </td>
                        <td className="p-3">{provider.location}</td>
                        <td className="p-3">{provider.name}</td>
                        <td className="p-3">{provider.type}</td>
                        <td className="p-3">{provider.phoneNumber}</td>
                        <td className="p-3">{provider.rating}</td>
                        <td className="p-3">
                          <button
                            onClick={() => handleUpdate(provider)}
                            className="text-blue-500 hover:text-blue-700"
                          >
                            <MdEdit />
                          </button>
                          <button
                            onClick={() => handleDelete(provider.id)}
                            className="ml-2 text-red-500 hover:text-red-700"
                          >
                            <MdDelete />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {isUpdateModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold mb-4">Update Service Provider</h2>
                <form onSubmit={handleUpdateSubmit} className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <HiMail className="text-gray-500 text-xl" />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="Email"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <MdCheckCircle className={`text-${form.isAvailable ? 'green' : 'red'}-500 text-xl`} />
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="isAvailable"
                        checked={form.isAvailable}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="text-sm">Available</span>
                    </label>
                  </div>
                  <div className="flex items-center space-x-4">
                    <HiLocationMarker className="text-gray-500 text-xl" />
                    <input
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      required
                      placeholder="Location"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <HiUser className="text-gray-500 text-xl" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Name"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <HiCube className="text-gray-500 text-xl" />
                    <input
                      type="text"
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      required
                      placeholder="Type"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <HiPhone className="text-gray-500 text-xl" />
                    <input
                      type="text"
                      name="phoneNumber"
                      value={form.phoneNumber}
                      onChange={handleChange}
                      required
                      placeholder="Phone Number"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <HiCube className="text-gray-500 text-xl" />
                    <input
                      type="number"
                      name="rating"
                      value={form.rating}
                      onChange={handleChange}
                      required
                      placeholder="Rating"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setIsUpdateModalOpen(false)}
                      className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ServicesPage;
