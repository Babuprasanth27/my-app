import React from 'react';

const ServiceList = ({ serviceProviders }) => {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4">Service Providers</h2>
      <ul className="space-y-4">
        {serviceProviders.map((provider, index) => (
          <li key={index} className="p-4 border rounded-lg">
            <h3 className="text-xl font-bold">{provider.name}</h3>
            <p>Role: {provider.role}</p>
            <p>Rating: {provider.rating}</p>
            <p>Location: {provider.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
