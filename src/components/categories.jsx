import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import ViewProfileModal from './viewProfileModel';
import HireModal from './HireModel';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const categories = [
  'Cleaning',
  'TV and Electronics',
  'Assembly',
  'General Handyman',
  'Plumbing',
  'Electrical',
  'Painting',
  'Moving',
  'Smart Home',
  'Window Treatments'
];

const CategoriesAndServices = () => {
  const [services, setServices] = useState([]);
  const [sortOption, setSortOption] = useState('role');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [isViewProfileOpen, setIsViewProfileOpen] = useState(false);
  const [isHireOpen, setIsHireOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/services');
        if (response.ok) {
          const data = await response.json();
          setServices(data);
        } else {
          console.error('Failed to fetch services');
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/user'); 
        if (response.ok) {
          const data = await response.json();
          setUserEmail(data.email); 
        } else {
          console.error('Failed to fetch user email');
        }
      } catch (error) {
        console.error('Error fetching user email:', error);
      }
    };

    fetchUserEmail();
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    sortServices(e.target.value);
  };

  const sortServices = (criteria) => {
    const sortedServices = [...services].sort((a, b) => {
      if (criteria === 'rating') {
        return b.rating - a.rating;
      }
      return a.name.localeCompare(b.name);
    });
    setServices(sortedServices);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openHireModal = (service) => {
    setSelectedService(service);
    setIsHireOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsViewProfileOpen(false);
    setIsHireOpen(false);
  };

  const { ref: profileRef, inView: isProfileVisible } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: hireRef, inView: isHireVisible } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row">
      <div className="hidden lg:block lg:w-1/4 pr-4 sticky top-16 h-[calc(100vh-6rem)] bg-white z-10">
        <h2 className="text-xl font-bold mb-2 text-indigo-800 font-serif">Popular Categories</h2>
        <ul className="list-none p-0">
          {categories.map((category) => (
            <li
              key={category}
              className="mb-2 text-slate-600 cursor-pointer hover:text-indigo-800 transition-colors duration-300"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:w-3/4 overflow-y-auto">
        <div className="flex-col lg:flex-row items-center mb-4 flex-wrap">
          <div className="relative w-full lg:w-auto flex items-center mb-2 lg:mb-0">
            <FontAwesomeIcon icon={faFilter} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <select
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none w-full lg:w-auto"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="role">Role</option>
              <option value="rating">Rating</option>
            </select>
            <div className="ml-2 lg:ml-5 relative w-full lg:w-auto flex items-center flex-grow lg:flex-grow-0">
              <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search Services..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full lg:w-auto"
              />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-3 font-serif text-indigo-800">Popular Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer p-10">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              className="bg-slate-100 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
              ref={profileRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isProfileVisible ? 1 : 0, y: isProfileVisible ? 0 : 20 }}
              transition={{ duration: 0.5 }}
            >
              <img className="w-full h-40 object-cover rounded-t-lg" src={service.img} alt={service.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{service.name}</div>
                <div className="text-gray-600 text-lg">
                  Ratings : <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1 size-6" /> {service.rating}
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => openHireModal(service)}
                    className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-300 transition-colors duration-300"
                  >
                    Book
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isViewProfileOpen && (
          <motion.div
            className="fixed inset-0 z-30 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ViewProfileModal service={selectedService} onClose={closeModal} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isHireOpen && (
          <motion.div
            className="fixed inset-0 z-30 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <HireModal
              service={selectedService}
              userEmail={userEmail}
              onClose={closeModal}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoriesAndServices;
