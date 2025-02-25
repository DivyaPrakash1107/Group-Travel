import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Adventure Enthusiast',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    quote: 'The personalized itinerary was perfect! Every detail was thoughtfully planned, making our family vacation truly unforgettable.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Traveler',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    quote: 'As a frequent business traveler, this platform has transformed how I plan my trips. The corporate travel features are exceptional.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Solo Traveler',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    quote: 'Found amazing local experiences and met wonderful people through the community features. Its more than just a booking platform!',
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from real travelers who've explored the world with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg transform transition-all hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              <div className="mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
              
              <blockquote className="text-gray-600 italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md hover:shadow-xl">
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 