import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import DestinationOverview from './components/destinations/DestinationOverview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        } />
        <Route path="/destination/:id" element={
          <MainLayout>
            <DestinationOverview />
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App; 