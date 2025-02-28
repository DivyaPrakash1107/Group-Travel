import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src="/logo.svg" alt="Travel Platform" />
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <a href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-semibold transition-colors">
                Home
              </a>
              <a href="/destinations" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-semibold transition-colors">
                Destinations
              </a>
              <a href="/packages" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-semibold transition-colors">
                Packages
              </a>
              <a href="/community" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-semibold transition-colors">
                Community
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-semibold transition-colors">
              Sign In
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 