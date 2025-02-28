import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrendingDestinations from '../components/home/TrendingDestinations';
import BestDeals from '../components/home/BestDeals';
import TestimonialsSection from '../components/home/TestimonialsSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TrendingDestinations />
      <BestDeals />
      <TestimonialsSection />
    </>
  );
};

export default HomePage; 