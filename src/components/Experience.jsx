import React from 'react';
import ExperienceImage from '../assets/images/experience-section.webp';

const Experience = ({ id }) => {
  return (
    <section id={id} className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-12">
          {/* Text Content - Always comes first in column layout */}
          <div className="w-full lg:w-1/2">
            <div>
              <span className="block text-lg mb-3 md:mb-4">
                <span className="border-b-4 border-yellow-400 pb-1">Experience</span> The
              </span>
              <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight md:leading-snug uppercase">
                A collaborative workspace designed for visionaries, mentors, innovators, entrepreneurs, creators, and the next generation of startups.
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Step into the future of work at Workoholics – Chandigarh’s leading coworking destination. Whether you're a freelancer, startup, or established business, our inspiring and modern space is designed to fuel productivity and foster collaboration. Join a vibrant community and find the perfect workspace tailored to your goals.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Reserve your ideal workspace in Chandigarh today and elevate your work experience with Workoholics!
              </p>
            </div>
          </div>

          {/* Image - Always comes after text in column layout */}
          <div className="w-full lg:w-1/2">
            <img 
              src={ExperienceImage}
              alt="Coworking Space" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;