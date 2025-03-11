import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import rajasthanImage from '../../assets/images/rajasthan.jpg';
import raj2Image from '../../assets/images/raj2.jpg';
import raj1Image from '../../assets/images/raj1.jpg';

const travelAgents = {
  'rajasthan-india': [
    {
      id: 1,
      name: 'Royal Rajasthan Tours',
      rating: 4.8,
      reviews: 245,
      price: '₹25,000',
      duration: '6 Days',
      highlights: ['Jaipur', 'Udaipur', 'Jodhpur'],
      inclusions: ['Hotel', 'Transport', 'Meals', 'Guide'],
      image: raj1Image,
      tripId: 'rajasthan-royal-package'
    },
    {
      id: 2,
      name: 'Heritage India Travels',
      rating: 4.7,
      reviews: 189,
      price: '₹28,000',
      duration: '7 Days',
      highlights: ['Jaipur', 'Jaisalmer', 'Udaipur'],
      inclusions: ['5-Star Hotels', 'AC Transport', 'All Meals'],
      image: rajasthanImage, // Use the imported image
      tripId: 'heritage-india-package'
    },
    {
      id: 3,
      name: 'Desert Adventures',
      rating: 4.9,
      reviews: 156,
      price: '₹32,000',
      duration: '8 Days',
      highlights: ['Pushkar', 'Jodhpur', 'Jaisalmer'],
      inclusions: ['Luxury Camps', 'Safari', 'Traditional Shows'],
      image: 'https://images.unsplash.com/photo-1586612438666-ffd0ae97ad36'
    }
  ],
  // Add similar arrays for other destinations
};

const TravelAgentListings = ({ destinationSlug }) => {
  const agents = travelAgents[destinationSlug] || [];
  const navigate = useNavigate();

  // Filter states
  const [priceRange, setPriceRange] = useState(50000);
  const [minRating, setMinRating] = useState(0);

  // Filtered agents based on selected criteria
  const filteredAgents = agents.filter(agent => {
    const price = parseInt(agent.price.replace('₹', '').replace(',', ''));
    return price <= priceRange && agent.rating >= minRating;
  });

  // Destination image based on slug
  const destinationImages = {
    'rajasthan-india': raj2Image,
    // Add more destination images here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Destination Image */}
      <div className="mb-8">
        <img 
          src={destinationImages[destinationSlug]} 
          alt="Destination" 
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">Rajasthan Packages</h2>
      <div className="flex flex-col md:flex-row">
        {/* Sidebar for Filters */}
        <div className="md:w-1/4 mb-8 md:mb-0 md:mr-8">
          <h3 className="text-lg font-semibold mb-4">Filters</h3>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range: Up to ₹{priceRange.toLocaleString()}
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="10000"
                  max="100000"
                  step="1000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(priceRange - 10000) / (100000 - 10000) * 100}%, #e5e7eb ${(priceRange - 10000) / (100000 - 10000) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹10,000</span>
                  <span>₹100,000</span>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Rating</label>
              <select
                value={minRating}
                onChange={(e) => setMinRating(parseFloat(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="0">All Ratings</option>
                <option value="4">4 Stars & Up</option>
                <option value="4.5">4.5 Stars & Up</option>
                <option value="5">5 Stars Only</option>
              </select>
            </div>
            
            {/* Additional filters can be added here */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <button 
                onClick={() => {
                  setPriceRange(50000);
                  setMinRating(0);
                }}
                className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Travel Agent Listings */}
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 gap-8">
            {filteredAgents.length > 0 ? (
              filteredAgents.map((agent) => (
                <div key={agent.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img 
                        src={agent.image} 
                        alt={agent.name}
                        className="h-80 w-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{agent.name}</h3>
                          <div className="flex items-center mt-1">
                            <span className="text-yellow-500">★</span>
                            <span className="ml-1 text-sm font-semibold">{agent.rating}</span>
                            <span className="ml-1 text-sm text-gray-500">({agent.reviews} reviews)</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">{agent.price}</div>
                          <div className="text-sm text-gray-500">per person</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm font-semibold text-gray-700 mb-2">Duration: {agent.duration}</div>
                        <div className="flex flex-wrap gap-2">
                          {agent.highlights.map((highlight, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="text-sm font-semibold text-gray-700 mb-2">Inclusions:</div>
                        <div className="flex flex-wrap gap-2">
                          {agent.inclusions.map((inclusion, index) => (
                            <span 
                              key={index}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              {inclusion}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <button className="text-blue-600 hover:text-blue-800 font-semibold">
                          View Details
                        </button>
                        <button 
                          onClick={() => navigate(`/trip/${agent.tripId}`)}
                          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No packages found</h3>
                <p className="text-gray-500">Try adjusting your filters to find available packages.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelAgentListings; 