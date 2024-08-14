import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

import img1 from '../asserts/img1.jpg';
import img3 from '../asserts/img3.jpg';
import img5 from '../asserts/img5.jpg';
import img6 from '../asserts/img6.jpg';

const IconsContainer = () => {
  const icons = [
    {
      src: img1,
      title: 'Cooking',
      description: 'Delicious meals prepared with care',
    },
    {
      src: img3,
      title: 'HouseHold Work',
      description: 'Keeping your home spotless and tidy',
    },
    {
      src: img5,
      title: 'Pet Care',
      description: 'Loving care for your furry friends',
    },
    {
      src: img6,
      title: 'Baby Sitting',
      description: 'Trustworthy care for your little ones',
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <section className="icons-container my-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {icons.map((icon, index) => {
          
          const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

          return (
            <motion.div
              key={index}
              className="icons flex flex-col items-center p-4 bg-white shadow-lg rounded-lg"
              ref={ref}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              data-aos="fade-up" 
            >
              <div className="info text-center">
                <img src={icon.src} alt={icon.title} className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{icon.title}</h3>
                <span className="text-gray-500">{icon.description}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default IconsContainer;
