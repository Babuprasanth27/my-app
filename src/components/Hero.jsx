import React, { useState } from 'react';
import hero from '../asserts/hero.jpg';
import Footer from './Footer';
import img6 from '../asserts/img6-removebg-preview.png';
import IconsContainer from './IconsContainer';
import LoadingIndicator from './LoadingIndicator';
import EmployeeRegistrationModal from '../components/EmployeeRegistrationmodel'; // Ensure this import path is correct
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Hero() {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: joinRef, inView: joinInView } = useInView({ triggerOnce: false, threshold: 0.1 });

  const handleButtonClick = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = path;
    }, 1000);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="relative bg-white overflow-hidden mt-5">
      {loading && <LoadingIndicator />}

      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row"
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-1/2 lg:pb-28 xl:pb-32 flex flex-col justify-center">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h1
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: heroInView ? 1 : 0, x: heroInView ? 0 : -50 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <span className="block xl:inline">Find Trusted</span>
                <span className="block text-indigo-600 xl:inline"> Cooks & Household Services</span>
              </motion.h1>
              <motion.p
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                Simplify your life by hiring reliable household service providers at the click of a button.
              </motion.p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <motion.div
                  className="mt-3 sm:mt-0 sm:ml-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <button
                    onClick={() => handleButtonClick('/Hire')}
                    className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 no-underline"
                  >
                    Hire
                  </button>
                </motion.div>
                <motion.div
                  className="mt-3 sm:mt-0 sm:ml-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <button
                    onClick={() => handleButtonClick('/Blog')}
                    className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 no-underline"
                  >
                    Explore More
                  </button>
                </motion.div>
              </div>
            </div>
          </main>
        </div>
        <div className="lg:w-1/2 lg:flex lg:items-center lg:justify-center">
          <motion.img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-auto"
            src={hero}
            alt="Household Services"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: heroInView ? 1 : 0, scale: heroInView ? 1 : 0.95 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
      </motion.div>

      <motion.div
        className="bg-gray-100 max-w-screen mx-auto my-auto flex flex-col lg:flex-row min-h-screen"
        ref={aboutRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: aboutInView ? 1 : 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <motion.div
            className="hidden lg:w-1/2 lg:flex lg:items-center lg:justify-center mt-8 lg:mt-0 lg:pr-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: aboutInView ? 1 : 0, x: aboutInView ? 0 : 50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <img
              className="w-full h-full object-cover rounded-lg shadow-lg"
              src={img6}
              alt="About HouseHold Care"
            />
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl sm:mt-4">
              About <span className='text-indigo-600'>HouseHold Care</span>
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              HouseHold Care is dedicated to simplifying your daily life by connecting you with trusted and reliable household service providers. Whether you need a cook, maid, or any other household help, we make it easy to find and hire qualified professionals.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Our mission is to provide a seamless experience for both service providers and users. We ensure that all our service providers are thoroughly vetted and have a proven track record of reliability and quality service.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Join us today and experience the convenience of finding the right help for your home with just a few clicks.
            </p>
          </motion.div>
        </div>
      </motion.div>
      
      <IconsContainer />

      <motion.div
        className="bg-gray-100 py-12 px-6 lg:px-16 mt-16 rounded-lg shadow-lg"
        ref={joinRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: joinInView ? 1 : 0, y: joinInView ? 0 : 50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Join Our Community
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Be a part of the HouseHold Care community and make a difference in the lives of many. Sign up today to become a service provider or stay updated with our latest offerings.
          </p>
          <motion.button
           className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          
            onClick={openModal}
          
          >
            Register
          </motion.button>
        </div>
      </motion.div>
      
      <Footer />
      {isModalOpen && <EmployeeRegistrationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
    </div>
  );
}

export default Hero;
