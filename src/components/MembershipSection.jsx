import React from 'react';

const MembershipSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-black text-center mb-12">
          <span className="border-b-4 border-yellow-400">MEMBERSHIP</span> PLANS
        </h2>
        {/* Membership Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Basic Plan */}
          <div className="md:w-1/3 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md hover:bg-yellow-400 hover:text-white transition-all duration-300">
            <h3 className="text-2xl font-bold text-black mb-4 hover:text-white">Dedicated Seat</h3>
            {/* <p className="text-3xl font-semibold text-black mb-4 hover:text-white">
              ₹5,000<span className="text-lg font-normal">/month</span>
            </p> */}
            <ul className="text-gray-600 mb-6 space-y-2 hover:text-white">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Dedicated Desk
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Access to Shared Workspace
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Rapid WiFi
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Limitless Tea/Coffee
              </li>
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="md:w-1/3 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md hover:bg-yellow-400 hover:text-white transition-all duration-300">
            <h3 className="text-2xl font-bold text-black mb-4 hover:text-white">Dedicated Cabin</h3>
            {/* <p className="text-3xl font-semibold text-black mb-4 hover:text-white">
              ₹10,000<span className="text-lg font-normal">/month</span>
            </p> */}
            <ul className="text-gray-600 mb-6 space-y-2 hover:text-white">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Dedicated Desk
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Access to Meeting Room
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                On Demand Printing
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                All Basic Plan Features
              </li>
            </ul>
          </div>

          {/* Premium Plan */}
          <div className="md:w-1/3 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md hover:bg-yellow-400 hover:text-white transition-all duration-300">
            <h3 className="text-2xl font-bold text-black mb-4 hover:text-white">Customized Plan</h3>
            {/* <p className="text-3xl font-semibold text-black mb-4 hover:text-white">
              ₹20,000<span className="text-lg font-normal">/month</span>
            </p> */}
            <ul className="text-gray-600 mb-6 space-y-2 hover:text-white">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Private Office
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Access to Board Room
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Valet Service
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                All Pro Plan Features
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;