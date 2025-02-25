import React from 'react';
import { useNavigate } from 'react-router-dom';

const destinations = [
  {
    id: 1,
    slug: 'bali-indonesia',
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    rating: 4.8,
    price: 'From $899',
    description: 'Experience paradise on Earth with pristine beaches and rich culture'
  },
  {
    id: 2,
    slug: 'santorini-greece',
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
    rating: 4.9,
    price: 'From $1299',
    description: 'Iconic white buildings and breathtaking Mediterranean sunsets'
  },
  {
    id: 3,
    slug: 'swiss-alps',
    name: 'Swiss Alps',
    image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e',
    rating: 4.7,
    price: 'From $1499',
    description: 'Majestic mountains and world-class skiing adventures'
  },
  {
    id: 4,
    slug: 'machu-picchu-peru',
    name: 'Machu Picchu, Peru',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1',
    rating: 4.9,
    price: 'From $1699',
    description: 'Ancient Incan citadel set high in the Andes Mountains'
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
            Discover the most popular destinations loved by travelers worldwide
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