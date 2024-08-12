import React, { useState } from 'react';
import axios from 'axios';

const ServiceForm = ({ onAddServiceProvider }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    rating: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/service-providers', formData);
      onAddServiceProvider(response.data);
      setFormData({ name: '', role: '', rating: '', location: '' });
    } catch (error) {
      console.error('Error adding service provider', error);
    }
  };

  return (
    <form className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Add Service Provider</h2>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Role</label>
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Rating</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          min="0"
          max="5"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Add Service Provider
      </button>
    </form>
  );
};

export default ServiceForm;
