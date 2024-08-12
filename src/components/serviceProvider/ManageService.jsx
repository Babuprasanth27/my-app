import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { FaEdit, FaTrashAlt, FaPlusCircle } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import { motion } from 'framer-motion';
import NavbarService from './NavbarService';

const ManageService = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [rating, setRating] = useState('');
  const [services, setServices] = useState([]);
  const [editingServiceId, setEditingServiceId] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const response = await fetch('http://localhost:8080/api/services');
    const data = await response.json();
    setServices(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceData = { name, img, rating: parseFloat(rating) };

    let response;
    if (editingServiceId) {
      response = await fetch(`http://localhost:8080/api/services/${editingServiceId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(serviceData),
      });
    } else {
      response = await fetch('http://localhost:8080/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(serviceData),
      });
    }

    if (response.ok) {
      enqueueSnackbar(editingServiceId ? 'Service updated successfully!' : 'Service created successfully!', { variant: 'success' });
      setName('');
      setImg('');
      setRating('');
      setEditingServiceId(null);
      fetchServices(); 
    } else {
      enqueueSnackbar(editingServiceId ? 'Failed to update service' : 'Failed to create service', { variant: 'error' });
    }
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:8080/api/services/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      enqueueSnackbar('Service deleted successfully!', { variant: 'success' });
      fetchServices();
    } else {
      enqueueSnackbar('Failed to delete service', { variant: 'error' });
    }
  };

  const handleEdit = (service) => {
    setName(service.name);
    setImg(service.img);
    setRating(service.rating);
    setEditingServiceId(service.id);
  };

  return (
    <div className="container mx-auto p-4">
      <NavbarService />
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-lg rounded-lg p-8 space-y-6 transform transition-all duration-300 hover:scale-105 h-[80%]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h1 className="text-3xl font-extrabold mb-6">{editingServiceId ? 'Update Service' : 'Create New Service'}</h1>
          <form onSubmit={handleSubmit} className="space-y-6 ">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">Service Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter service name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="img">Image URL</label>
              <input
                id="img"
                type="text"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image URL"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="rating">Rating</label>
              <input
                id="rating"
                type="number"
                step="0.1"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter rating (1-5)"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <motion.button
                type="submit"
                className="flex items-center justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full w-full sm:w-auto focus:outline-none focus:shadow-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {editingServiceId ? <FaEdit className="mr-2" /> : <FaPlusCircle className="mr-2" />}
                {editingServiceId ? 'Update Service' : 'Create Service'}
              </motion.button>
              {editingServiceId && (
                <motion.button
                  type="button"
                  onClick={() => {
                    setName('');
                    setImg('');
                    setRating('');
                    setEditingServiceId(null);
                  }}
                  className="flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full w-full sm:w-auto focus:outline-none focus:shadow-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <MdCancel className="mr-2" />
                  Cancel
                </motion.button>
              )}
            </div>
          </form>
        </motion.div>

        <motion.div
          className="bg-white shadow-lg rounded-lg p-8 transform transition-all duration-300 hover:scale-105"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-3xl mb-6 text-indigo-800 font-extrabold">Manage Services</h2>
          <ul className="space-y-4">
            {services.map((service) => (
              <motion.li
                key={service.id}
                className="p-4 bg-gray-100 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-4 shadow-md"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.id * 0.1, ease: 'easeOut' }}
              >
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-lg font-bold text-gray-900">{service.name}</p>
                  <p className="text-sm text-gray-700">Rating: {service.rating}</p>
                </div>
                <div className="flex flex-col sm:flex-row w-full sm:w-auto space-y-4 sm:space-y-0 sm:space-x-4">
                  <motion.button
                    onClick={() => handleEdit(service)}
                    className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-full w-full sm:w-auto focus:outline-none focus:shadow-outline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <FaEdit className="mr-2" />
                    Update
                  </motion.button>
                  <motion.button
                    onClick={() => handleDelete(service.id)}
                    className="flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full w-full sm:w-auto focus:outline-none focus:shadow-outline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <FaTrashAlt className="mr-2" />
                    Delete
                  </motion.button>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ManageService;
