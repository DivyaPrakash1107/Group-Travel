import React from 'react';
import SearchBar from '../common/SearchBar';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-fixed" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')"
    }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center items-center pt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-4 drop-shadow-lg animate-fade-in">
          Explore, Connect, Travel
        </h1>
        <p className="text-xl md:text-2xl text-white text-center mb-12 max-w-2xl drop-shadow-lg animate-fade-in-delay">
          Your Ultimate Travel Companion for Unforgettable Adventures
        </p>
        <div className="w-full max-w-4xl animate-fade-in-delay-2">
          <SearchBar />
        </div>
        <div className="mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-delay-3">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            Find Your Perfect Trip
          </button>
          <button className="bg-white/90 backdrop-blur-sm text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-white transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Personalized Itinerary
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 