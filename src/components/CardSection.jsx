import React from 'react';
import CoWorkingImage from '../assets/images/co-working-image.webp';

const CardSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24">
        <div className="flex flex-col lg:flex-row items-stretch gap-6 md:gap-8">
          {/* Image Column - Full width on mobile, 1/3 on desktop */}
          <div className="w-full lg:w-1/3">
            <div className="h-full">
              <img 
                src={CoWorkingImage} 
                alt="Coworking Space" 
                className="w-full h-auto md:h-[350px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Cards Container - Stacks on mobile, side by side on desktop */}
          <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-6 md:gap-8">
            {/* First Text Card */}
            <div className="flex-1 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md hover:bg-yellow-400 hover:text-white transition-all duration-300 group">
              <h3 className="text-lg sm:text-xl font-bold leading-tight uppercase">
                Our space is driven by creative leadership and built around a thoughtfully curated community.
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed group-hover:text-white">
                Join us to entrepreneur, mentor, and collaborate with a wavelength that inspires. At Workoholics, we believe success is amplified by shared energy. Whether you're launching a startup, sharing your expertise, or co-creating something new, you’ll find your rhythm here—with people who get it.
              </p>
              <div className="mt-4 h-1 w-16 bg-yellow-400 group-hover:bg-white"></div>
            </div>

            {/* Second Text Card */}
            <div className="flex-1 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md hover:bg-gray-800 hover:text-white transition-all duration-300 group">
              <h3 className="text-lg sm:text-xl font-bold leading-tight">
                ELEVATE YOUR PRODUCTIVITY IN OUR MODERN, BRIGHT COWORKING SPACE IN COLLABORATION AND CREATIVITY.
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed group-hover:text-white">
                Whether you're scaling your startup, freelancing full-time, or mentoring the next wave of talent, our coworking space is built around your goals. Private offices for deep work, shared spaces for networking, and everything in between. All within a vibrant, supportive community that grows with you.
              </p>
              <div className="mt-4 h-1 w-16 bg-gray-800 group-hover:bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;