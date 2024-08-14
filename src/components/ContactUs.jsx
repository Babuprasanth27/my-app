import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import axios  from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useUser } from './UserContext'; 
import { useSnackbar } from 'notistack'; 

const ContactPage = () => {
  const { user } = useUser(); 
  const [formData, setFormData] = useState({ name: '', email: user.email, phone: '', message: '' });
  const [messageSent, setMessageSent] = useState(false);
  const { enqueueSnackbar } = useSnackbar(); 

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post('http://localhost:8080/api/contact', formData); 
      setFormData({ name: '', email: '', phone: '', message: '' }); 
      enqueueSnackbar('Message sent successfully!', { variant: 'success' }); 
    } catch (error) {
      console.error('Error sending message:', error);
      enqueueSnackbar('Failed to send message. Please try again.', { variant: 'error' }); // Show error notification
    }
  };
  
  return (
    <div className="container mx-auto p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 font-serif text-indigo-800 mt-12" data-aos="fade-down">Contact Us</h1>
        <p className="text-lg text-gray-600" data-aos="fade-up">We'd love to hear from you. Please reach out with any questions or feedback.</p>
      </header>

      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="lg:w-1/2" data-aos="fade-right">
          <h2 className="text-2xl font-bold mb-4 font-serif text-indigo-800">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone (optional)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              rows="4"
              required
            ></textarea>
            <button type="submit" className="bg-indigo-800 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors">
              Send Message
            </button>
            {messageSent && <p className="text-green-600">Message sent successfully!</p>}
          </form>
        </div>

        <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0" data-aos="fade-left">
          <h2 className="text-2xl font-bold mb-4 font-serif text-indigo-800">Contact Information</h2>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 mr-3" />
            <span>1234 Street Name, Coimbatore, India</span>
          </div>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faPhone} className="text-gray-600 mr-3" />
            <span>+91 852567890</span>
          </div>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-3" />
            <span>householdcare@example.com</span>
          </div>

          <div className="my-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312539.2177033156!2d76.60014329999999!3d11.016844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85750176d0271%3A0x60000144bcd81b0!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1638978660580"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
