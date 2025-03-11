import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import DestinationOverview from './components/destinations/DestinationOverview';
import TripDetails from './components/destinations/TripDetails';
import CommunityPage from './pages/CommunityPage';
import PackagesPage from './components/packages/PackagesPage';
import AgentDashboard from './components/agent/AgentDashboard';

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
        <Route path="/trip/:id" element={
          <MainLayout>
            <TripDetails />
          </MainLayout>
        } />
        <Route path="/community" element={
          <MainLayout>
            <CommunityPage />
          </MainLayout>
        } />
        <Route path="/packages" element={
          <MainLayout>
            <PackagesPage />
          </MainLayout>
        } />
        <Route path="/agent/*" element={<AgentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App; 