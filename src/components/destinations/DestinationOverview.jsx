import React from 'react';
import { useParams } from 'react-router-dom';

const destinationDetails = {
  'bali-indonesia': {
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    rating: 4.8,
    price: 'From $899',
    description: 'Experience paradise on Earth with pristine beaches and rich culture',
    longDescription: 'Discover the magic of Bali, where ancient temples meet pristine beaches and lush landscapes. This Indonesian paradise offers everything from spiritual retreats to thrilling water sports.',
    highlights: [
      'Visit the sacred Uluwatu Temple',
      'Relax on Nusa Duas pristine beaches',
      'Explore the rice terraces of Tegalalang',
      'Experience traditional Balinese culture'
    ],
    activities: [
      {
        name: 'Temple Hopping Tour',
        duration: '8 hours',
        price: '$89',
        image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47'
      },
      {
        name: 'Surf Lessons in Kuta',
        duration: '3 hours',
        price: '$45',
        image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f'
      },
      {
        name: 'Ubud Art Markets',
        duration: '4 hours',
        price: '$30',
        image: 'https://images.unsplash.com/photo-1583321500900-82807e458f3c'
      }
    ],
    weather: {
      bestTime: 'April to October',
      temperature: '26-32°C year-round'
    }
  },
  // Add other destinations similarly
};

const DestinationOverview = () => {
  const { id } = useParams();
  const destination = destinationDetails[id];

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{
        backgroundImage: `url(${destination.image})`
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {destination.name}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            {destination.description}
          </p>
          <div className="mt-6 flex items-center space-x-4">
            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg">
              <span className="text-yellow-500">★</span>
              <span className="ml-1 font-semibold">{destination.rating}</span>
            </span>
            <span className="text-white font-semibold">{destination.price}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <section className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">About {destination.name}</h2>
              <p className="text-gray-600 mb-6">{destination.longDescription}</p>
              
              <h3 className="text-xl font-semibold mb-4">Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-blue-600 mr-2">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Popular Activities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {destination.activities.map((activity, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <img 
                      src={activity.image} 
                      alt={activity.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{activity.name}</h3>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{activity.duration}</span>
                        <span className="font-semibold">{activity.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
              <h3 className="text-xl font-bold mb-4">Plan Your Trip</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                <p className="text-gray-600">{destination.weather.bestTime}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Weather</h4>
                <p className="text-gray-600">{destination.weather.temperature}</p>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4">
                Book Now
              </button>
              
              <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Contact Travel Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationOverview; 