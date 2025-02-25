import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrendingDestinations from '../components/home/TrendingDestinations';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactUs from '../components/home/ContactUs';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TrendingDestinations />
      <TestimonialsSection />
      <ContactUs />
    </>
  );
};

export default HomePage; 