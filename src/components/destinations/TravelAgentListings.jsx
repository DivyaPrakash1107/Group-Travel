import React from 'react';

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
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41'
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
      image: 'https://images.unsplash.com/photo-1590059390047-8a6ab9914d91'
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Travel Packages</h2>
      <div className="grid grid-cols-1 gap-8">
        {agents.map((agent) => (
          <div key={agent.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img 
                  src={agent.image} 
                  alt={agent.name}
                  className="h-64 w-full object-cover"
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
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelAgentListings; 