import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-black py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base">
          Copyright © 2016-{currentYear} | All Rights Reserved by: Workoholics
        </p>
      </div>
    </footer>
  );
};

export default Footer;