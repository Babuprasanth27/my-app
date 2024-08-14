import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faStar, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const SubscriptionPlans = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      easing: 'ease-in-out', // Easing function
      once: false, // Animation only happens once
    });
  }, []);

  const plans = [
    {
      name: 'Basic Plan',
      price: '$9/month',
      features: ['Access to basic services', 'Up to 3 bookings per month', 'Standard customer support'],
      icon: 'faCheckCircle',
      color: 'text-blue-500',
    },
    {
      name: 'Standard Plan',
      price: '$29/month',
      features: ['Access to all services', 'Up to 10 bookings per month', 'Priority customer support', '10% discount on services'],
      icon: 'faCheckCircle',
      color: 'text-green-500',
    },
    {
      name: 'Premium Plan',
      price: '$59/month',
      features: ['Access to all services', 'Unlimited bookings', '24/7 customer support', '20% discount on services', 'Personal account manager'],
      icon: 'faCheckCircle',
      color: 'text-yellow-500',
    },
  ];

  const reviews = [
    { name: 'Akil', review: 'Great service! Highly recommend!', rating: 5 },
    { name: 'Ram', review: 'Very satisfied with the quality of work.', rating: 4 },
    { name: 'Jk', review: 'Excellent customer support and services.', rating: 5 },
  ];

  const faqs = [
    { question: 'What services are included in the subscription?', answer: 'You can access all household care services depending on your plan.' },
    { question: 'How can I change my subscription plan?', answer: 'You can change your plan from your account settings at any time.' },
    { question: 'Is there a discount for yearly subscriptions?', answer: 'Yes, we offer a 15% discount for yearly subscriptions.' },
  ];

  return (
    <div className="mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 mt-20 font-serif text-indigo-800" data-aos="fade-up">Choose Your Subscription Plan</h2>
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="max-w-sm w-full rounded-lg shadow-lg p-6 bg-white transform hover:scale-105 transition-transform duration-300 flex flex-col"
            data-aos="fade-up"
            data-aos-delay={index * 100} // Stagger animations
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className={`${plan.color} mr-3 text-3xl`}
              />
              <h3 className="text-2xl font-bold">{plan.name}</h3>
            </div>
            <p className="text-xl font-semibold text-gray-700 mb-4">
              {plan.price}
            </p>
            <ul className="text-gray-700 mb-6 flex-grow">
              {plan.features.map((feature, index) => (
                <li key={index} className="mb-2 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mr-2"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <button
                className={`w-full py-2.5 text-sm font-semibold text-white rounded-md ${plan.color === 'text-yellow-500' ? 'bg-yellow-500' : plan.color === 'text-green-500' ? 'bg-green-500' : 'bg-blue-500'} hover:opacity-90`}
              >
                <Link to="/payment" className='no-underline text-white'>Subscribe Now</Link>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 p-8 rounded-lg mb-12" data-aos="fade-up">
        <h3 className="text-2xl font-bold text-center mb-4 font-serif text-indigo-800">Compare Plans</h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr>
                <th className="p-4 text-left">Features</th>
                {plans.map((plan, index) => (
                  <th key={index} className="p-4 text-center">{plan.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {plans[0].features.map((feature, i) => (
                <tr key={i} className="border-t">
                  <td className="p-4">{feature}</td>
                  {plans.map((plan, j) => (
                    <td key={j} className="p-4 text-center">
                      {plan.features.includes(feature) ? (
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                      ) : (
                        <FontAwesomeIcon icon={faTimesCircle} className="text-red-500" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-12" data-aos="fade-up">
        <h3 className="text-2xl font-bold text-center mb-4 font-serif text-indigo-800">Customer Reviews</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="max-w-sm w-full rounded-lg shadow-lg p-6 bg-white">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-indigo-500 w-12 h-12 flex items-center justify-center text-white font-bold text-2xl">
                  {review.name[0]}
                </div>
                <h4 className="ml-4 text-xl font-bold">{review.name}</h4>
              </div>
              <p className="text-gray-700 mb-4">{review.review}</p>
              <div className="flex">
                {Array(review.rating)
                  .fill()
                  .map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500 mr-1" />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
        <h3 className="text-2xl font-bold text-center mb-4 font-serif text-indigo-800">Frequently Asked Questions</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="max-w-md w-full rounded-lg shadow-lg p-6 bg-white">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-indigo-500 mr-3 text-2xl" />
                <h4 className="text-xl font-bold">{faq.question}</h4>
              </div>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-indigo-500 text-white text-center py-8 mt-12 rounded-lg shadow-lg" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-4">Subscribe now and enjoy our top-notch household services!</p>
        <button className="bg-white text-indigo-500 font-semibold py-2 px-8 rounded-lg hover:bg-gray-200">
            <Link to="/payment" className='no-underline '>Subscribe Now</Link>
        </button>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
