import React from 'react';
import { FaQuestionCircle, FaPhoneAlt, FaEnvelope, FaTools, FaExclamationCircle } from 'react-icons/fa';
import Footer from '../Footer';
import NavbarService from './NavbarService';

function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 lg:p-8">
    <NavbarService/>
      <h1 className="text-3xl font-bold mb-8 text-center">Support Center</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* FAQ Section */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <FaQuestionCircle className="text-blue-500 text-3xl mb-4" />
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center">
            Have questions? Browse through our FAQs to find answers to common queries related to service provision.
          </p>
          <a href="/faq" className="mt-4 text-blue-500 hover:underline">View FAQs</a>
        </div>

        {/* Contact Support Section */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <FaPhoneAlt className="text-green-500 text-3xl mb-4" />
          <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
          <p className="text-gray-600 mb-4">
            Need assistance? Reach out to our support team through the following channels.
          </p>
          <p className="flex items-center mb-2">
            <FaPhoneAlt className="text-green-500 text-xl mr-2" /> 
            <a href="tel:123-456-7890" className="text-blue-500 hover:underline">123-456-7890</a>
          </p>
          <p className="flex items-center">
            <FaEnvelope className="text-yellow-500 text-xl mr-2" /> 
            <a href="mailto:support@example.com" className="text-blue-500 hover:underline">support@example.com</a>
          </p>
        </div>

        {/* Troubleshooting Guides Section */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <FaTools className="text-orange-500 text-3xl mb-4" />
          <h2 className="text-xl font-semibold mb-4">Troubleshooting Guides</h2>
          <p className="text-gray-600 text-center">
            Facing issues? Check out our troubleshooting guides for common problems related to service provision.
          </p>
          <a href="/troubleshooting" className="mt-4 text-blue-500 hover:underline">View Guides</a>
        </div>
        
        {/* Report an Issue Section */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center col-span-1 md:col-span-2 lg:col-span-3">
          <FaExclamationCircle className="text-red-500 text-3xl mb-4" />
          <h2 className="text-xl font-semibold mb-4">Report an Issue</h2>
          <p className="text-gray-600 mb-4">
            If you're encountering a problem that isn't covered by the FAQs or guides, please report it using the form below.
          </p>
          <form className="w-full space-y-4">
            <textarea
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Describe the issue you're facing..."
            />
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Issue
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default SupportPage;
