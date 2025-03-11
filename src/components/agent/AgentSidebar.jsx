import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const menuItems = [
  { path: '/agent', icon: '📊', label: 'Dashboard' },
  { path: '/agent/trips', icon: '🗺️', label: 'Trips' },
  { path: '/agent/bookings', icon: '📅', label: 'Bookings' },
  { path: '/agent/reviews', icon: '⭐', label: 'Reviews' },
  { path: '/agent/financials', icon: '💰', label: 'Financials' },
  { path: '/agent/analytics', icon: '📈', label: 'Analytics' },
];

const AgentSidebar = () => {
  const location = useLocation();

  return (
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-64 bg-gradient-to-b from-blue-900 to-indigo-800 h-screen shadow-2xl fixed left-0 top-0 z-10 rounded-r-xl"
    >
      <div className="p-6 flex items-center space-x-3">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <span className="text-blue-800 text-xl">✈️</span>
        </div>
        <h1 className="text-2xl font-bold text-white">Agent Portal</h1>
      </div>
      
      <nav className="mt-8 px-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center px-4 py-3 my-2 rounded-xl transition-all duration-200
                ${location.pathname === item.path 
                  ? 'bg-white text-blue-800 shadow-lg' 
                  : 'text-white hover:bg-white/10'}`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3
                ${location.pathname === item.path 
                  ? 'bg-blue-100' 
                  : 'bg-white/10'}`}
              >
                <span className="text-xl">{item.icon}</span>
              </div>
              <span className="font-medium">{item.label}</span>
            </motion.div>
          </Link>
        ))}
      </nav>
      
      <div className="absolute bottom-8 left-0 right-0 px-6">
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="bg-white/10 rounded-xl p-4 backdrop-blur-sm"
        >
          <p className="text-white text-sm">Need help?</p>
          <button className="mt-2 w-full bg-white text-blue-800 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Contact Support
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AgentSidebar; 