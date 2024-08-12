import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaRegCopyright } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-black py-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="footer-col">
            <h4 className="text-xl font-semibold mb-4 text-indigo-800 font-serif">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="relative hover:text-indigo-800 hover-link no-underline text-black">About us</a></li>
              <li><a href="#" className="relative hover:text-indigo-800 hover-link no-underline text-black">Our services</a></li>
              <li><a href="#" className="relative hover:text-indigo-800 hover-link no-underline text-black">Privacy policy</a></li>
              <li><a href="#" className="relative hover:text-indigo-800 hover-link no-underline text-black">Affiliate program</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="text-xl font-semibold mb-4 text-indigo-800 font-serif">Get help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="relative hover:text-indigo-800 hover-link no-underline text-black">FAQ</a></li>
        
              <li><a href="#" className="relative hover:text-indigo-800 hover-link no-underline text-black">Returns</a></li>
              <li><a href="#" className="relative hover:text-indigo-800 hover-link no-underline text-black">Order status</a></li>
              <li><a href="#" className="relative hover:text-indigo-800 hover-link no-underline text-black">Payment options</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="text-xl font-semibold mb-4 text-indigo-800 font-serif">Courses</h4>
            <ul className="space-y-2">
              <li><a href="#" className="relative hover:text-indigo-800 hover-link no-underline text-black"><Link  to="/Blog" className='no-underline text-black'>Tips for Service</Link></a></li>
              <li><a href="#" className="relative hover:text-indigo-800 hover-link no-underline text-black"><Link  to="/Blog" className='no-underline text-black'>Maintainance</Link></a></li>
              <li><a href="#" className="relative hover:text-indigo-800 hover-link no-underline text-black"><Link  to="/Blog" className='no-underline text-black'>Learn</Link></a></li>
              <li><a href="#" className="relative hover:text-indigo-800 hover-link no-underline text-black"><Link to="/Blog" className='no-underline text-black'>Blog</Link></a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="text-xl font-semibold mb-4 text-indigo-800 font-serif">Follow us</h4>
            <div className="flex space-x-4">
              <a href="#" className="relative hover:text-indigo-800 hover-link no-underline">
                <FaFacebookF className="text-3xl text-black hover:text-indigo-800" />
              </a>
              <a href="#" className="relative hover:text-indigo-800 hover-link no-underline">
                <FaTwitter className="text-3xl text-black hover:text-indigo-800" />
              </a>
              <a href="#" className="relative hover:text-indigo-800 hover-link no-underline">
                <FaInstagram className="text-3xl text-black hover:text-indigo-800" />
              </a>
              <a href="#" className="relative hover:text-indigo-800 hover-link no-underline">
                <FaLinkedinIn className="text-3xl text-black hover:text-indigo-800" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-4 text-center">
          <p className="text-gray-600 flex items-center justify-center">
            <FaRegCopyright className="mr-2" /> {new Date().getFullYear()} HouseHold Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
