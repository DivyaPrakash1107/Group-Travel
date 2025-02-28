import React from 'react';
import { useNavigate } from 'react-router-dom';

const destinations = [
  {
    id: 1,
    slug: 'rajasthan-india',
    name: 'Rajasthan, India',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41',
    rating: 4.8,
    price: 'From ₹25,000',
    description: 'Experience royal heritage, magnificent forts, and vibrant culture'
  },
  {
    id: 2,
    slug: 'kerala-india',
    name: 'Kerala, India',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944',
    rating: 4.9,
    price: 'From ₹20,000',
    description: 'Discover backwaters, tea plantations, and pristine beaches'
  },
  {
    id: 3,
    slug: 'ladakh-india',
    name: 'Ladakh, India',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23',
    rating: 4.7,
    price: 'From ₹30,000',
    description: 'Explore high-altitude deserts, monasteries, and stunning landscapes'
  },
  {
    id: 4,
    slug: 'goa-india',
    name: 'Goa, India',
    image: 'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3',
    rating: 4.6,
    price: 'From ₹15,000',
    description: 'Enjoy beaches, nightlife, and Portuguese heritage'
  }
];

const TrendingDestinations = () => {
  const navigate = useNavigate();

  const handleExplore = (slug) => {
    navigate(`/destination/${slug}`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trending Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover India's most enchanting destinations loved by travelers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1 text-sm font-semibold">{destination.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {destination.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {destination.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">
                    {destination.price}
                  </span>
                  <button 
                    onClick={() => handleExplore(destination.slug)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingDestinations; 