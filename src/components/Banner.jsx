import React, { useState, useEffect } from 'react';
import { lazy } from 'react';
const Header = lazy(() => import('./Header'));

import HeroImage1 from '../assets/images/heroImage1.webp';
import HeroImage2 from '../assets/images/heroImage2.webp';
import HeroImage3 from '../assets/images/heroImage3.webp';

const Banner = ({ id }) => {
    const backgroundImages = [HeroImage1, HeroImage2, HeroImage3];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    const scrollToSection = (sectionId) => {
        const attemptScroll = (retries = 10, delay = 200) => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            } else if (retries > 0) {
                setTimeout(() => attemptScroll(retries - 1, delay), delay);
            } else {
                console.error(`Section ${sectionId} not found after retries.`);
            }
        };

        attemptScroll();
    };

    return (
        <div id={id}>
            <div className="relative h-screen bg-cover bg-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
                        transition: 'background-image 1s ease-in-out',
                    }}
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <Header />
                <section className="absolute left-1/2 transform -translate-x-1/2 text-center text-white z-10
                    bottom-10 md:bottom-10 lg:top-1/2 lg:-translate-y-1/2">
                    <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        CO-WORKING SPACE IN <br /> CHANDIGARH
                    </h2>
                    <div className="mt-8 flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center space-y-4 sm:space-y-4 md:space-y-4 lg:space-y-0 lg:space-x-4">
                        <button
                            onClick={() => scrollToSection('form')}
                            className="bg-yellow-400 text-black px-4 py-2 sm:px-6 sm:py-3 font-semibold hover:bg-yellow-500 flex items-center text-sm sm:text-base"
                        >
                            BOOK YOUR SPACE
                            <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                        <a
                            href="tel:9501066666"
                            className="bg-transparent border border-white text-white px-4 py-2 sm:px-6 sm:py-3 font-semibold hover:bg-white hover:text-black flex items-center text-sm sm:text-base mb-4 lg:mb-0 md:ms-2"
                        >
                            CALL NOW
                            <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Banner;