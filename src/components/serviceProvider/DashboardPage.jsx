import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import NavbarService from './NavbarService';
import { motion } from 'framer-motion';

const BookingDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const fetchBookings = () => {
    fetch('http://localhost:8080/api/bookings')
      .then((response) => response.json())
      .then((data) => {
        const filteredBookings = data.filter(
          (booking) => booking.status !== 'CONFIRMED' && booking.status !== 'REJECTED'
        );
        setBookings(filteredBookings);
      })
      .catch((error) => console.error('Error fetching bookings:', error));
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleBookingAction = (id, action) => {
    const url =
      action === 'confirm'
        ? `http://localhost:8080/api/bookings/${id}/confirm`
        : `http://localhost:8080/api/bookings/${id}/reject`;

    fetch(url, { method: 'PUT' })
      .then((response) => {
        if (response.ok) {
          setBookings((prevBookings) =>
            prevBookings.filter((booking) => booking.id !== id)
          );
          enqueueSnackbar(`Booking ${action}ed successfully!`, { variant: 'success' });
        } else {
          return response.json().then((errorData) => {
            console.error(`Failed to ${action} booking:`, errorData);
            throw new Error(`Failed to ${action} booking: ${errorData.message || response.statusText}`);
          });
        }
      })
      .catch((error) => {
        console.error(`Error during ${action}:`, error);
        enqueueSnackbar(`Error during ${action}: ${error.message}`, { variant: 'error' });
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <NavbarService />
      <main className="p-6 flex-grow">
        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-x-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl mb-4 text-center text-indigo-700 font-bold mt-12">Bookings</h2>
          <motion.table
            className="min-w-full divide-y divide-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-4 text-left text-sm">ID</th>
                <th className="p-4 text-left text-sm">Email</th>
                <th className="p-4 text-left text-sm">Date & Time</th>
                <th className="p-4 text-left text-sm">Location</th>
                <th className="p-4 text-left text-sm">Service Type</th>
                <th className="p-4 text-left text-sm">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <motion.tr
                    key={booking.id}
                    className="hover:bg-gray-50"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <td className="p-4 text-sm">{booking.id}</td>
                    <td className="p-4 text-sm">{booking.email}</td>
                    <td className="p-4 text-sm">{new Date(booking.dateTime).toLocaleString()}</td>
                    <td className="p-4 text-sm">{booking.location}</td>
                    <td className="p-4 text-sm">{booking.serviceType}</td>
                    <td className="p-4 flex gap-2">
                      <motion.button
                        onClick={() => handleBookingAction(booking.id, 'confirm')}
                        className="bg-green-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-700"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Confirm
                      </motion.button>
                      <motion.button
                        onClick={() => handleBookingAction(booking.id, 'reject')}
                        className="bg-red-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-700"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Reject
                      </motion.button>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="p-4 text-center text-gray-600">No bookings available</td>
                </tr>
              )}
            </tbody>
          </motion.table>
        </motion.div>
      </main>
    </div>
  );
};

export default BookingDashboard;
