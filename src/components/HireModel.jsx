import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import { useUser } from './UserContext';


const HireModal = ({ service, onClose }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPreference, setSelectedPreference] = useState('');
  const [otherPreference, setOtherPreference] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useUser();

 
  useEffect(() => {
    if (user && user.email) {
      setEmail(user.email);
    }
  }, [user]);

  if (!service) return null;

  useEffect(() => {
    if (service) {
      setSelectedService({ value: service.name, label: service.name });
      
    }
  }, [service]);

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!startDate) {
      newErrors.startDate = 'Date and Time are required';
    }

    if (!location) {
      newErrors.location = 'Location is required';
    }

    if (!phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!selectedPreference) {
      newErrors.selectedPreference = 'Preference is required';
    } else if (selectedPreference === 'Other' && !otherPreference) {
      newErrors.otherPreference = 'Please specify your other preference';
    }

    if (!selectedService) {
      newErrors.selectedService = 'Service type is required';
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
  
    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true);
  
      try {
        console.log('Submitting data:', {
          email,
          dateTime: startDate,
          location,
          phone,
          preferences: selectedPreference === 'Other' ? otherPreference : selectedPreference,
          serviceType: selectedService.value,
        });
  
        const response = await axios.post('http://localhost:8080/api/bookings', {
          email,
          dateTime: startDate,
          location,
          phone,
          preferences: selectedPreference === 'Other' ? otherPreference : selectedPreference,
          serviceType: selectedService.value,
        });
  
        if (response.status === 200 || response.status === 201) {
          enqueueSnackbar('Booking created successfully!', { variant: 'success' });
          onClose(); 
        } else {
          enqueueSnackbar('Error creating booking.', { variant: 'error' });
        }
      } catch (error) {
        console.error('Error creating booking:', error);
        enqueueSnackbar('Error creating booking.', { variant: 'error' });
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrors(formErrors);
    }
  };
  

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full h-[70vh] overflow-y-auto animate-fade-in shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-300 text-gray-800 py-1 px-3 rounded-lg hover:bg-gray-200 transition-colors"
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center text-indigo-800">
          Book {service.name}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@example.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="1234567890"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
              required
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 mb-2">Select Date & Time</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              dateFormat="Pp"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
              required
            />
            {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700 mb-2">Location</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Your location"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
              required
            />
            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="serviceType" className="block text-gray-700 mb-2">Type of Service</label>
            <input
              type="text"
              id="serviceType"
              value={selectedService?.label || ''}
              readOnly
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100"
            />
            {errors.selectedService && <p className="text-red-500 text-sm mt-1">{errors.selectedService}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="preferences" className="block text-gray-700 mb-2">Preferences</label>
            <input
              type="text"
              id="preferences"
              value={selectedPreference}
              onChange={(e) => setSelectedPreference(e.target.value)}
              placeholder="Enter your preference"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            />
            {selectedPreference === 'Other' && (
              <div className="mt-2">
                <label htmlFor="otherPreference" className="block text-gray-700 mb-2">Specify Preference</label>
                <textarea
                  id="otherPreference"
                  value={otherPreference}
                  onChange={(e) => setOtherPreference(e.target.value)}
                  placeholder="Please specify your preference"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                />
                {errors.otherPreference && <p className="text-red-500 text-sm mt-1">{errors.otherPreference}</p>}
              </div>
            )}
            {errors.selectedPreference && <p className="text-red-500 text-sm mt-1">{errors.selectedPreference}</p>}
          </div>
          <button
            type="submit"
            className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Booking...' : 'Book Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HireModal;
