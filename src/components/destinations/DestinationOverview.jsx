import React from 'react';
import { useParams } from 'react-router-dom';
import TravelAgentListings from './TravelAgentListings';

const destinationDetails = {
  'rajasthan-india': {
    name: 'Rajasthan, India',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41',
    rating: 4.8,
    price: 'From ₹25,000',
    description: 'Experience royal heritage, magnificent forts, and vibrant culture',
    longDescription: 'Discover the magic of Rajasthan, where majestic forts and palaces tell tales of a royal past. Experience the vibrant culture, colorful festivals, and warm hospitality of this desert state.',
    highlights: [
      'Visit the magnificent Amber Fort',
      'Experience desert safari in Jaisalmer',
      'Explore the blue city of Jodhpur',
      'Visit the romantic city of Udaipur'
    ],
    activities: [
      {
        name: 'Palace Tour',
        duration: '8 hours',
        price: '₹2,500',
        image: 'https://images.unsplash.com/photo-1590059390047-8a6ab9914d91'
      },
      {
        name: 'Desert Safari',
        duration: '4 hours',
        price: '₹1,800',
        image: 'https://images.unsplash.com/photo-1586612438666-ffd0ae97ad36'
      },
      {
        name: 'Cultural Show',
        duration: '3 hours',
        price: '₹1,200',
        image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f'
      }
    ],
    weather: {
      bestTime: 'October to March',
      temperature: '15-35°C'
    }
  },
  'kerala-india': {
    name: 'Kerala, India',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944',
    rating: 4.9,
    price: 'From ₹20,000',
    description: 'Discover backwaters, tea plantations, and pristine beaches',
    longDescription: 'Kerala, Gods Own Country, offers serene backwaters, lush hill stations, pristine beaches, and rich cultural heritage. Experience the unique blend of nature and tradition.',
    highlights: [
      'Cruise through backwaters',
      'Visit tea gardens in Munnar',
      'Relax on Kovalam beach',
      'Experience Ayurvedic treatments'
    ],
    activities: [
      {
        name: 'Houseboat Tour',
        duration: '24 hours',
        price: '₹8,000',
        image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2'
      },
      {
        name: 'Tea Plantation Visit',
        duration: '6 hours',
        price: '₹1,500',
        image: 'https://images.unsplash.com/photo-1598322972069-11f3f435b6b2'
      },
      {
        name: 'Kathakali Show',
        duration: '2 hours',
        price: '₹1,000',
        image: 'https://images.unsplash.com/photo-1582646774882-c31c06ae4a34'
      }
    ],
    weather: {
      bestTime: 'September to March',
      temperature: '23-33°C'
    }
  },
  'ladakh-india': {
    name: 'Ladakh, India',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23',
    rating: 4.7,
    price: 'From ₹30,000',
    description: 'Explore high-altitude deserts, monasteries, and stunning landscapes',
    longDescription: 'Ladakh, the land of high passes, offers breathtaking landscapes, ancient Buddhist monasteries, and unique culture. Experience the raw beauty of the Himalayas.',
    highlights: [
      'Visit Pangong Lake',
      'Explore Leh Palace',
      'Experience Nubra Valley',
      'Visit ancient monasteries'
    ],
    activities: [
      {
        name: 'Pangong Lake Tour',
        duration: '2 days',
        price: '₹12,000',
        image: 'https://images.unsplash.com/photo-1593181629936-11c609b8db9b'
      },
      {
        name: 'Monastery Tour',
        duration: '8 hours',
        price: '₹2,500',
        image: 'https://images.unsplash.com/photo-1589556264800-08294d4643e9'
      },
      {
        name: 'River Rafting',
        duration: '4 hours',
        price: '₹2,000',
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23'
      }
    ],
    weather: {
      bestTime: 'June to September',
      temperature: '0-25°C'
    }
  },
  'goa-india': {
    name: 'Goa, India',
    image: 'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3',
    rating: 4.6,
    price: 'From ₹15,000',
    description: 'Enjoy beaches, nightlife, and Portuguese heritage',
    longDescription: 'Goa offers the perfect blend of beaches, parties, and cultural heritage. Experience Portuguese architecture, water sports, vibrant nightlife, and delicious cuisine.',
    highlights: [
      'Relax on Calangute Beach',
      'Visit Old Goa churches',
      'Experience water sports',
      'Enjoy nightlife'
    ],
    activities: [
      {
        name: 'Beach Hopping',
        duration: '8 hours',
        price: '₹2,000',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2'
      },
      {
        name: 'Water Sports',
        duration: '4 hours',
        price: '₹1,500',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5'
      },
      {
        name: 'Heritage Tour',
        duration: '6 hours',
        price: '₹1,800',
        image: 'https://images.unsplash.com/photo-1590050752117-2c9a54a2464c'
      }
    ],
    weather: {
      bestTime: 'November to February',
      temperature: '24-32°C'
    }
  }
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

      {/* Travel Agent Listings */}
      <TravelAgentListings destinationSlug={id} />
    </div>
  );
};

export default DestinationOverview; 