import React from 'react';

const LocationSection = ({ id }) => {
  return (
    <section id={id} className="py-16 bg-yellow-400">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-black mb-6">
          <span className="border-b-4 border-black">OUR</span> LOCATION
        </h2>
        <p className="text-lg text-black mb-8">
          Visit us at Workoholics Coworking Space | Best Coworking Space in Chandigarh, Plot No 78, near Elante Mall, Industrial Area Phase I, Chandigarh, 160002. We're easily accessible and ready to welcome you to our vibrant coworking community.
        </p>
        <div className="mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0987654321098!2d76.80308631520727!3d30.710055798065174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQyJzM2LjIiTiA3NsKwNDgnMTkuMCJF!5e0!3m2!1sen!2sus!4v1698771234567!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Workoholics Coworking Space Location"
          ></iframe>
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.google.com/maps/dir//Workoholics+Plot+no.+78,+Industrial+Area+Phase+I,+Chandigarh,+160002/@30.7099597,76.7228783,24387m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x390fed006b47d5f1:0xa5b71d2b37e6e021!2m2!1d76.8052796!2d30.7099857?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 flex items-center"
          >
            LOCATE US
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </a>
          <button
            className="bg-transparent border-2 border-black text-black px-6 py-3 font-semibold hover:bg-black hover:text-white flex items-center"
            onClick={() => window.location.href = 'tel:9501066666'}
          >
            CALL NOW
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;