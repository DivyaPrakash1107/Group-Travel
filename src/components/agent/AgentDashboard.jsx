import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import AgentSidebar from './AgentSidebar';
import DashboardHome from './DashboardHome';
import TripManagement from './TripManagement';
import BookingManagement from './BookingManagement';
import Analytics from './Analytics';
import Reviews from './Reviews';
import Financials from './Financials';

const AgentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AgentSidebar />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 p-8 ml-64 pt-6"
      >
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/trips" element={<TripManagement />} />
          <Route path="/bookings" element={<BookingManagement />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/financials" element={<Financials />} />
        </Routes>
      </motion.div>
    </div>
  );
};

export default AgentDashboard; 