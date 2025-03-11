import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';

// Mock data for reviews
const mockReviews = [
  {
    id: 1,
    customer_name: "Rahul Sharma",
    trip_name: "Goa Beach Retreat",
    rating: 5,
    comment: "Amazing experience! The beaches were pristine and the hotel was top-notch. Our guide was very knowledgeable and friendly. Would definitely recommend this trip to anyone looking for a relaxing beach vacation.",
    created_at: "2023-10-15T10:30:00Z",
    images: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
    ]
  },
  {
    id: 2,
    customer_name: "Priya Patel",
    trip_name: "Himalayan Adventure",
    rating: 4,
    comment: "The mountains were breathtaking and the trekking experience was unforgettable. The only reason I'm giving 4 stars instead of 5 is because the accommodation was a bit basic, but I understand that's part of the mountain experience. Our guide was excellent and very safety-conscious.",
    created_at: "2023-09-28T14:15:00Z",
    images: [
      "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
    ]
  },
  {
    id: 3,
    customer_name: "Arjun Mehta",
    trip_name: "Kerala Backwaters Cruise",
    rating: 5,
    comment: "The houseboat experience was magical! Floating through the serene backwaters while enjoying delicious Kerala cuisine was a highlight of our trip. The staff was attentive and the natural beauty was stunning. Perfect for a honeymoon or romantic getaway.",
    created_at: "2023-11-05T09:45:00Z",
    images: [
      "https://images.unsplash.com/photo-1602301818347-c52e7a411d3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1623691478639-7e0ff86a3e11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1590689080414-2432e5ee36f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    ]
  },
  {
    id: 4,
    customer_name: "Neha Gupta",
    trip_name: "Rajasthan Heritage Tour",
    rating: 5,
    comment: "This tour exceeded all my expectations! The palaces and forts were magnificent, and our guide's knowledge of history made everything come alive. The desert safari was a unique experience, and the cultural performances were authentic and entertaining. Highly recommend!",
    created_at: "2023-10-22T16:30:00Z",
    images: []
  },
  {
    id: 5,
    customer_name: "Vikram Singh",
    trip_name: "Andaman Island Hopping",
    rating: 3,
    comment: "The islands and beaches were beautiful, but there were some organizational issues. Our boat was delayed twice, and one of the planned activities was cancelled without much explanation. The snorkeling experience was amazing though, and the seafood was delicious.",
    created_at: "2023-11-10T11:20:00Z",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ]
  }
];

const Reviews = () => {
  const [filterRating, setFilterRating] = useState(0);
  
  // Mock query that returns the reviews data
  const { data: reviews, isLoading } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      return mockReviews;
    }
  });

  if (isLoading) return (
    <div className="flex items-center justify-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  const filteredReviews = filterRating > 0 
    ? reviews.filter(review => review.rating === filterRating)
    : reviews;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Customer Reviews</h1>
        
        <div className="flex space-x-2">
          {[0, 5, 4, 3, 2, 1].map(rating => (
            <button
              key={rating}
              onClick={() => setFilterRating(rating)}
              className={`px-3 py-1 rounded-lg text-sm font-medium ${
                filterRating === rating 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {rating === 0 ? 'All' : `${rating} ★`}
            </button>
          ))}
        </div>
      </div>

      {filteredReviews.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl shadow-md">
          <div className="text-6xl mb-4">⭐</div>
          <p className="text-gray-500 text-xl">No reviews match your filter</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {filteredReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{review.customer_name}</h3>
                    <p className="text-sm text-blue-600">{review.trip_name}</p>
                  </div>
                  <div className="flex items-center bg-amber-50 px-3 py-1 rounded-full">
                    <span className="text-amber-500 mr-1">★</span>
                    <span className="font-semibold text-amber-700">{review.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{review.comment}</p>
                
                {review.images && review.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {review.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Review ${index + 1}`}
                        className="rounded-lg w-full h-32 object-cover"
                      />
                    ))}
                  </div>
                )}
                
                <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                  <span>{new Date(review.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                  
                  <div className="flex space-x-3">
                    <button className="text-blue-600 hover:text-blue-800 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path>
                      </svg>
                      Reply
                    </button>
                    <button className="text-gray-600 hover:text-gray-800 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                      </svg>
                      More
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Reviews; 