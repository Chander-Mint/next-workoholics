import React from 'react';

const BookingSection = () => {
  const handleBookNowClick = () => {
    const formSection = document.getElementById('form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center booking">
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
          BOOK YOUR SPACE AT WORKOHOLICS
        </h2>
        <p className="text-base sm:text-lg md:text-lg lg:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
          We believe that the future of modern economics lies in collaborative and cooperative cultural spaces.
        </p>
        <button
          onClick={handleBookNowClick}
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-3 font-semibold flex items-center mx-auto text-sm sm:text-base"
        >
          BOOK NOW
          <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BookingSection;