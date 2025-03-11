import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import travelLogo from '../../assets/images/travel.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src={travelLogo} alt="Roamly" />
              <span className="ml-2 text-xl font-bold text-gray-900">Roamly</span>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link to="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-semibold transition-colors">
                Home
              </Link>
              <Link to="/destinations" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-semibold transition-colors">
                Destinations
              </Link>
              <Link to="/packages" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-semibold transition-colors">
                Packages
              </Link>
              <Link to="/community" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-semibold transition-colors">
                Community
              </Link>
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