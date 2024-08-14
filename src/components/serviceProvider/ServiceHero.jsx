import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import providerHero from '../../asserts/serviceHero.jpg'; // Replace with your actual image path
import LoadingIndicator from '../LoadingIndicator';
import Footer from '../Footer';
import serviceAbout from '../../asserts/service_about.png';
import NavbarService from './NavbarService';

const ServiceProviderHero = () => {
  const [loading, setLoading] = useState(false);

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
  const { ref: featuresRef, inView: featuresInView } = useInView({ triggerOnce: true });

  const handleButtonClick = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = path;
    }, 1000);
  };

  return (
    <div className="relative bg-white overflow-hidden mt-5 min-h-screen">
      <NavbarService />
      {loading && <LoadingIndicator />}
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        <motion.div
          ref={heroRef}
          className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-1/2 lg:pb-28 xl:pb-32 flex flex-col justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h1
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : -50 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <span className="block xl:inline">Join Our Network of </span>
                <span className="block text-indigo-600 xl:inline">Service Providers</span>
              </motion.h1>
              <motion.p
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 30 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                Register today to offer your services to our vast customer base. Become a trusted service provider and grow your business.
              </motion.p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <motion.button
                  onClick={() => handleButtonClick('/service')}
                  className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 no-underline"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  Register Now
                </motion.button>
              </div>
            </div>
          </main>
        </motion.div>
        <motion.div
          className="lg:w-1/2 lg:flex lg:items-center lg:justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: heroInView ? 1 : 0, scale: heroInView ? 1 : 0.9 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-auto"
            src={providerHero}
            alt="Service Provider"
          />
        </motion.div>
      </div>

      {/* About Section */}
      <div className="bg-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <motion.div
            ref={aboutRef}
            className="lg:w-1/2 lg:flex lg:items-center lg:justify-center mt-8 lg:mt-0 lg:pr-8"
            initial={{ opacity: 0, x: -100, rotate: -10 }}
            animate={{ opacity: aboutInView ? 1 : 0, x: aboutInView ? 0 : -100, rotate: aboutInView ? 0 : -10 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img
              className="hidden lg:block w-full h-full object-cover rounded-lg shadow-lg"
              src={serviceAbout}
              alt="About HouseHold Care"
            />
          </motion.div>
          <motion.div
            ref={aboutRef}
            className="lg:w-1/2 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 100, rotate: 10 }}
            animate={{ opacity: aboutInView ? 1 : 0, x: aboutInView ? 0 : 100, rotate: aboutInView ? 0 : 10 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Join <span className="text-indigo-600">HouseHold Care</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              HouseHold Care is dedicated to connecting you with clients who need your expertise. Whether you provide cooking, cleaning, or other household services, we make it easy for you to find and secure jobs.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Our platform is designed to support you in building a successful business. We offer tools and resources to help you manage your appointments, track your earnings, and grow your client base.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Join us today and experience the benefits of being part of a trusted network of service providers.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            ref={featuresRef}
            className="text-3xl font-extrabold text-indigo-800 text-center sm:text-4xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : -50 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Benefits of Joining Us
          </motion.h2>
          <div className="mt-10 flex flex-wrap justify-center gap-10">
            {[
              { icon: 'fa-users', title: 'Large Client Base', description: 'Access a wide range of clients looking for reliable service providers.' },
              { icon: 'fa-briefcase', title: 'Job Management', description: 'Easy tools to manage your jobs, schedule, and clients efficiently.' },
              { icon: 'fa-dollar-sign', title: 'Competitive Earnings', description: 'Set your rates and earn competitively with our platform.' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                  <i className={`fas ${feature.icon} fa-2x`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceProviderHero;
