import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import HeaderLogo from '../assets/icons/header-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); 
  };

  return (
    <div>
      <header className="relative flex justify-between items-center py-3 md:py-4 text-white z-10 bg-transparent">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-11">
          <div className="flex items-center">
            <img
              src={HeaderLogo}
              alt="Header Logo"
              className="sm:h-12 md:h-14 lg:h-20 w-auto"
            />
          </div>

          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm lg:text-lg hover:text-yellow-400 transition"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-sm lg:text-lg hover:text-yellow-400 transition"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-sm lg:text-lg hover:text-yellow-400 transition"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm lg:text-lg hover:text-yellow-400 transition"
            >
              Facilities
            </button>
            <button
              onClick={() => scrollToSection('form')}
              className="text-sm lg:text-lg hover:text-yellow-400 transition"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-[15px] left-0 right-0 bg-transparent z-20 py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-yellow-400 py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-white hover:text-yellow-400 py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="text-white hover:text-yellow-400 py-2"
              >
                Location
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-yellow-400 py-2"
              >
                Facilities
              </button>
              <button
                onClick={() => scrollToSection('form')}
                className="text-white hover:text-yellow-400 py-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;