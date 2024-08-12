import React, { useState } from 'react';

const services = [
  { id: 1, name: 'House Cleaning', description: 'Professional house cleaning services.', price: '$50/hour' },
  { id: 2, name: 'Cooking', description: 'Delicious home-cooked meals.', price: '$40/hour' },
  { id: 3, name: 'Babysitting', description: 'Experienced babysitters for your kids.', price: '$20/hour' },
  { id: 4, name: 'Pet Care', description: 'Loving care for your pets.', price: '$30/hour' },
];

function BookServices() {
  const [selectedService, setSelectedService] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({
      ...bookingDetails,
      [name]: value,
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    // Handle booking submission here
    alert(`Booking confirmed for ${selectedService.name}`);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">Book a Service</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              onClick={() => handleServiceClick(service)}
            >
              <h2 className="text-2xl font-semibold mb-2">{service.name}</h2>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <p className="text-lg font-bold text-blue-600">{service.price}</p>
            </div>
          ))}
        </div>

        {selectedService && (
          <div className="mt-12 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-center mb-6">Book {selectedService.name}</h3>
            <form onSubmit={handleBooking} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={bookingDetails.name}
                  onChange={handleInputChange}
                  className="mt-1 p-3 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={bookingDetails.email}
                  onChange={handleInputChange}
                  className="mt-1 p-3 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  name="date"
                  value={bookingDetails.date}
                  onChange={handleInputChange}
                  className="mt-1 p-3 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Time</label>
                <input
                  type="time"
                  name="time"
                  value={bookingDetails.time}
                  onChange={handleInputChange}
                  className="mt-1 p-3 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookServices;
