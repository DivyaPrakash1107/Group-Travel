import React from 'react';
import Navbar from '../common/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        {children}
      </main>
      {/* Footer will be added later */}
    </div>
  );
};

export default MainLayout; 