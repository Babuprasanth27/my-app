import React from 'react';
import { FaCheckCircle, FaShieldAlt, FaClock, FaHandsHelping, FaMoneyBillWave, FaVideo } from 'react-icons/fa';
import blog1 from '../asserts/blog1house.jpg';
import blog2 from '../asserts/blog2clean.jpeg';
import blog3 from '../asserts/blog3baby.jpeg';
import person from '../asserts/person.png';
import p1 from '../asserts/p1.jpg';
import p2 from '../asserts/p2.jpg';
import Footer from './Footer';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl font-bold mb-6 text-center mt-12 font-serif text-indigo-800"
        >
          Household Care Blog
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 flex flex-col"
          >
            <img
              src={blog1}
              alt="Top 5 Tips for Efficient Household Management"
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h2 className="text-2xl font-bold mb-2">Top 5 Tips for Efficient Household Management</h2>
            <p className="text-sm text-gray-600 mb-2">July 28, 2024 by Babuprasanth R</p>
            <p className="flex-grow">Managing a household efficiently requires organization and planning. Here are our top 5 tips to help you streamline your household tasks...</p>
            <div className="mt-auto">
              <a
                href="https://ourhappyhive.com/the-best-home-management-tips/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer no-underline"
              >
                Learn More
              </a>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 flex flex-col"
          >
            <img
              src={blog2}
              alt="The Benefits of Hiring Professional Cleaning Services"
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h2 className="text-2xl font-bold mb-2">The Benefits of Hiring Professional Cleaning Services</h2>
            <p className="text-sm text-gray-600 mb-2">July 25, 2024 by Dusyanth J</p>
            <p className="flex-grow">Professional cleaning services can save you time and ensure your home is spotless. Learn more about the benefits of hiring a professional cleaner...</p>
            <div className="mt-auto">
              <a
                href="https://www.coit.com/blog/general-home-cleaning/15-benefits-professional-residential-cleaning-service-why-every"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer no-underline"
              >
                Learn More
              </a>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 flex flex-col"
          >
            <img
              src={blog3}
              alt="How to Choose the Right Babysitter"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">How to Choose the Right Babysitter</h2>
            <p className="text-sm text-gray-600 mb-4">July 20, 2024 by DheenaSai S</p>
            <p className="flex-grow">Choosing the right babysitter is crucial for your peace of mind. Here are some tips to help you find the perfect sitter for your children...</p>
            <div>
              <a
                href="https://www.care.com/c/guides/hiring-a-babysitter-guide/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer no-underline"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <section className="mt-12 mb-10">
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl font-bold mb-4 text-center font-serif text-indigo-800"
          >
            How Our Services Have Helped People
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <img src={p1} alt="Hariprasath M" className="w-24 h-24 rounded-full mb-4"/>
              <h3 className="text-2xl font-bold mb-2">Hariprasath M</h3>
              <p className="text-gray-600 mb-4 text-center">"The cleaning service was exceptional. My house has never been this clean! Highly recommend."</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <img src={person} alt="Abi" className="w-24 h-24 rounded-full mb-4"/>
              <h3 className="text-2xl font-bold mb-2">Abi</h3>
              <p className="text-gray-600 mb-4 text-center">"Hiring a babysitter through Household Care was a game changer. I can now attend my meetings with peace of mind knowing my kids are in good hands."</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <img src={p2} alt="Harish G" className="w-24 h-24 rounded-full mb-4"/>
              <h3 className="text-2xl font-bold mb-2">Harish G</h3>
              <p className="text-gray-600 mb-4 text-center">"The cook we hired was fantastic. Delicious meals prepared every day without any hassle. Truly a time saver!"</p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl font-bold mb-4 text-center font-serif text-indigo-800"
          >
            Security & Safety
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <FaShieldAlt className="text-4xl text-blue-500 mb-4"/>
              <p className="text-gray-700 mb-4">All service providers are thoroughly vetted and background checked.</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <FaClock className="text-4xl text-blue-500 mb-4"/>
              <p className="text-gray-700 mb-4">Flexible scheduling to meet your needs, ensuring reliable service at the right time.</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <FaHandsHelping className="text-4xl text-blue-500 mb-4"/>
              <p className="text-gray-700 mb-4">Dedicated customer support to address any concerns or issues promptly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center" 
            data-aos="fade-up"
            data-aos-delay="400">
              <FaCheckCircle className="text-4xl text-blue-500 mb-4"/>
              <p className="text-gray-700 mb-4">Customer support is available 24/7 to address any concerns you may have.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-delay="400">
              <FaVideo className="text-4xl text-blue-500 mb-4"/>
              <p className="text-gray-700 mb-4">Service providers wear shoulder cams to ensure transparency and security during service delivery.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-delay="400">
              <FaMoneyBillWave className="text-4xl text-blue-500 mb-4"/>
              <p className="text-gray-700 mb-4">Secure payment methods and data protection are integral to our services.</p>
            </div>
          
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
