import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTag, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

const ViewProfileModal = ({ service, onClose }) => {
  if (!service) return null;

  
  const { name, image, rating, reviews, packages, pricing } = service;


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full animate-fade-in mt-10">
        <h2 className="text-2xl font-bold mb-4">Service Details for <span className='text-indigo-800'>{name}</span></h2>
        <img className="w-full h-40 object-cover rounded mb-4" src={image} alt={name} />
        
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-2" />
          <span>{rating} out of 5</span>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Customer Reviews:</h3>
          <ul className="list-disc ml-5">
            {reviews && reviews.length > 0 ? reviews.map((review, index) => (
              <li key={index} className="text-gray-700 mb-2">"{review}"</li>
            )) : <p>No reviews available.</p>}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Service Packages:</h3>
          <ul className="list-disc ml-5">
            {packages && packages.length > 0 ? packages.map((pkg, index) => (
              <li key={index} className="text-gray-700 mb-2">{pkg}</li>
            )) : <p>No service packages available.</p>}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Pricing:</h3>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faMoneyBillWave} className="text-green-500 mr-2" />
            <span>{pricing || 'Pricing information is available upon request.'}</span>
          </div>
        </div>

        <button onClick={onClose} className="mt-4 bg-indigo-800 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors">
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewProfileModal;
