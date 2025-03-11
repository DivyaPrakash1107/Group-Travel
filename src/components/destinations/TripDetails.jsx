import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import rajasthanImage from '../../assets/images/rajasthan.jpg';
import raj1Image from '../../assets/images/raj1.jpg';
import raj2Image from '../../assets/images/raj2.jpg';

const tripDetails = {
  'rajasthan-royal-package': {
    title: "Rajasthan Royal Package",
    agentName: "Royal Rajasthan Tours",
    overview: "Step into the heart of Rajasthan's royal heritage with this exclusive package. Experience the majestic forts, vibrant culture, and the warmth of Indian hospitality.",
    duration: "5 days",
    location: "Jaipur & Udaipur, India",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Jaipur, visit Amber Fort",
        activity: "Arrive in Jaipur, visit Amber Fort",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
        details: "Explore the majestic Amber Fort, a UNESCO World Heritage site, and enjoy a traditional Rajasthani dinner.",
        meals: ["Welcome dinner"],
        activities: ["Guided tour of Amber Fort"]
      },
      {
        day: 2,
        title: "Explore City Palace and Hawa Mahal",
        activity: "Explore City Palace and Hawa Mahal",
        image: rajasthanImage,
        details: "Visit the iconic City Palace and the stunning Hawa Mahal, known for its unique architecture.",
        meals: ["Breakfast", "Lunch"],
        activities: ["City Palace tour", "Hawa Mahal visit"]
      },
      {
        day: 3,
        title: "Travel to Udaipur, visit City Palace",
        activity: "Travel to Udaipur, visit City Palace",
        image: "https://images.unsplash.com/photo-1586612438666-ffd0ae97ad36",
        details: "Enjoy a scenic drive to Udaipur and explore the beautiful City Palace, overlooking Lake Pichola.",
        meals: ["Breakfast", "Dinner"],
        activities: ["Scenic drive to Udaipur", "City Palace tour"]
      },
      {
        day: 4,
        title: "Relax at Lake Pichola",
        activity: "Relax at Lake Pichola, enjoy a boat ride",
        image: raj1Image,
        details: "Take a relaxing boat ride on Lake Pichola and enjoy the serene surroundings.",
        meals: ["Breakfast", "Lunch"],
        activities: ["Boat ride on Lake Pichola", "Free time for shopping"]
      },
      {
        day: 5,
        title: "Depart from Udaipur",
        activity: "Depart from Udaipur",
        image: raj2Image,
        details: "Conclude your journey with a farewell breakfast and depart from Udaipur.",
        meals: ["Breakfast"],
        activities: []
      }
    ],
    highlights: [
      "Exclusive tour of Amber Fort with a local historian",
      "Traditional Rajasthani cooking class",
      "Sunset boat ride on Lake Pichola",
      "Private cultural performance at City Palace"
    ],
    inclusions: [
      "4-Star Hotel Accommodation",
      "Daily Breakfast",
      "Welcome and Farewell Dinners",
      "Guided Tours",
      "All Transportation",
      "Entry Fees to Monuments"
    ],
    notIncluded: [
      "Flights to/from Jaipur and Udaipur",
      "Travel Insurance",
      "Personal Expenses",
      "Tips and Gratuities",
      "Meals not mentioned in the itinerary"
    ],
    reviews: [
      {
        name: "Amit Sharma",
        date: "Feb 20, 2024",
        comment: "Amazing experience! The hospitality and the cultural insights were top-notch."
      },
      {
        name: "Priya Verma",
        date: "Feb 15, 2024",
        comment: "A perfect itinerary with a great balance of sightseeing and leisure."
      }
    ],
    price: "₹25,000",
    validTill: "March 31, 2024",
    accommodation: "Stay at a stylish 4-star hotel located in the heart of Jaipur and a lakeside resort in Udaipur.",
    dateRange: "March 1, 2024 - March 5, 2024",
    packageOptions: [
      {
        title: "Standard Package",
        description: "Experience the beauty of Rajasthan with our standard package, including all guided tours and activities.",
        price: "₹25,000/Person",
        includes: ["Guided tours", "4-star accommodation", "Daily breakfast", "Welcome dinner"]
      },
    ]
  },
  // Add similar objects for other packages
};

const TripDetails = () => {
  const { id } = useParams();
  const trip = tripDetails[id];
  const [expandedDay, setExpandedDay] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPackage, setSelectedPackage] = useState(0);

  if (!trip) {
    return <div>Trip not found</div>;
  }

  const toggleDayDetails = (day) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  return (
    <div className="pt-16">
      {/* Title Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{trip.title}</h1>
        <p className="text-xl mb-2">Hosted by {trip.agentName}</p>
        <div className="flex items-center space-x-4 mt-4">
          <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">{trip.dateRange}</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">{trip.duration}</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">{trip.location}</span>
        </div>
      </div>

      {/* Image Gallery - 5 images at the top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid grid-cols-12 gap-2"> {/* Reduced height */}
          {/* Large main image */}
          <div className="col-span-12 md:col-span-6 lg:col-span-8 row-span-2">
            <img 
              src={trip.itinerary[0].image} 
              alt={trip.itinerary[0].title} 
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          
          {/* 4 smaller images */}
          {trip.itinerary.slice(1, 5).map((item, index) => (
            <div key={index} className="col-span-6 md:col-span-3 lg:col-span-2 row-span-1">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-[196px] object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {/* Navigation Tabs */}
            <div className="flex border-b mb-8 overflow-x-auto">
              <button 
                className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'overview' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'itinerary' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('itinerary')}
              >
                Itinerary
              </button>
              <button 
                className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'highlights' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('highlights')}
              >
                Highlights
              </button>
              <button 
                className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'cancellation' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('cancellation')}
              >
                Cancellation Policy
              </button>
              <button 
                className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'inclusions' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('inclusions')}
              >
                Inclusions
              </button>
              <button 
                className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'reviews' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div>
                <p className="text-gray-700 mb-6 text-lg">{trip.overview}</p>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  {trip.highlights.map((highlight, index) => (
                    <li key={index} className="text-gray-700">{highlight}</li>
                  ))}
                </ul>
                <p className="text-gray-700 mb-6">
                  This isn't just a trip—it's a journey into the heart of Rajasthan's royal heritage. From exploring majestic forts to experiencing vibrant local culture, every moment will leave its mark.
                </p>
                <p className="text-gray-700">
                  Immerse yourself in the rich history, the stunning architecture, and the warm hospitality that make Rajasthan the ultimate cultural destination. Secure your place now and be part of something unforgettable!
                </p>
              </div>
            )}

            {activeTab === 'itinerary' && (
              <div className="space-y-8">
                {trip.itinerary.map((item) => (
                  <div key={item.day} className="border-b pb-6">
                    <h3 className="text-xl font-bold mb-2">Day {item.day} – {item.title}</h3>
                    <p className="text-gray-700 mb-4">{item.details}</p>
                    
                    {item.meals.length > 0 && (
                      <div className="mb-3">
                        <h4 className="font-semibold mb-1">Included Meals</h4>
                        <ul className="list-disc list-inside">
                          {item.meals.map((meal, index) => (
                            <li key={index} className="text-gray-700">{meal}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {item.activities.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-1">Included Activities</h4>
                        <ul className="list-disc list-inside">
                          {item.activities.map((activity, index) => (
                            <li key={index} className="text-gray-700">{activity}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'highlights' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {trip.highlights.map((highlight, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-xl font-bold mb-3">{highlight}</h3>
                      <p className="text-gray-700">
                        Experience the magic of Rajasthan with our carefully curated highlights that showcase the best of the region's culture, history, and natural beauty.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'cancellation' && (
              <div>
              <h3 className="text-2xl font-bold mb-4">Cancellation Policy</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-lg font-semibold mb-2">Flexible Cancellation</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><span className="text-green-600">✔</span> Full refund if canceled 30+ days before departure</li>
                  <li><span className="text-yellow-500">⚠</span> 50% refund if canceled within 15-30 days</li>
                  <li><span className="text-red-600">✖</span> No refund if canceled within 14 days</li>
                </ul>
              </div>
            </div>
            )}

            {activeTab === 'inclusions' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">What's Included</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {trip.inclusions.map((inclusion, index) => (
                      <li key={index} className="text-gray-700">{inclusion}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">What's Not Included</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {trip.notIncluded.map((item, index) => (
                      <li key={index} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

          {activeTab === "reviews" && (
            <div>
              <h3 className="text-2xl font-bold mb-4">Traveler Reviews</h3>
              <div className="mb-6 flex items-center">
                <span className="text-3xl font-bold text-blue-600">4.5</span>
                <span className="ml-2 text-yellow-500 text-xl">★★★★★</span>
                <span className="ml-2 text-gray-500">(120 reviews)</span>
              </div>
              {trip.reviews && trip.reviews.length > 0 ? (
      trip.reviews.map((review, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
          <p className="text-lg font-semibold">{review.name}</p>
          <p className="text-gray-600">{review.date}</p>
          <p className="mt-2">{review.comment}</p>
        </div>
      ))
    ) : (
      <p className="text-gray-600">No reviews yet. Be the first to leave a review!</p>
    )}
            </div>
          )}
          </div>

          {/* Booking Section */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md sticky top-24">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold mb-4">{trip.dateRange}</h2>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-gray-700">{trip.duration}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700">{trip.location}</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">Trip Operator: {trip.agentName}</p>
              </div>

              {/* Package Options */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Package Options</h3>
                <div className="space-y-4">
                  {trip.packageOptions.map((pkg, index) => (
                    <div 
                      key={index}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${selectedPackage === index ? 'border-blue-600 bg-blue-50' : 'hover:border-gray-400'}`}
                      onClick={() => setSelectedPackage(index)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{pkg.title}</h4>
                        <span className="font-bold">{pkg.price}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{pkg.description}</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {pkg.includes.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <button className="bg-blue-600 text-white w-full py-3 rounded-lg font-semibold mt-6 hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Secure your spot with a deposit. Full payment due by {trip.validTill}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetails; 