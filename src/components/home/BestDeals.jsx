import React from 'react';

const deals = [
  {
    id: 1,
    title: "Rajasthan Royal Package",
    agentName: "Royal Rajasthan Tours",
    originalPrice: "₹35,000",
    discountedPrice: "₹25,000",
    discount: "28%",
    duration: "6 Days",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    inclusions: ["5-Star Hotels", "All Meals", "Guided Tours", "Transport"],
    validTill: "March 31, 2024"
  },
  {
    id: 2,
    title: "Kerala Backwater Special",
    agentName: "Kerala Adventures",
    originalPrice: "₹28,000",
    discountedPrice: "₹20,000",
    discount: "29%",
    duration: "5 Days",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    inclusions: ["Houseboat Stay", "All Meals", "Ayurvedic Spa", "Transfers"],
    validTill: "April 15, 2024"
  },
  {
    id: 3,
    title: "Ladakh Adventure Deal",
    agentName: "Himalayan Explorers",
    originalPrice: "₹42,000",
    discountedPrice: "₹30,000",
    discount: "29%",
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
    inclusions: ["Camping", "All Meals", "Oxygen Support", "Safari"],
    validTill: "May 30, 2024"
  },
  {
    id: 4,
    title: "Goa Beach Package",
    agentName: "Goa Getaways",
    originalPrice: "₹22,000",
    discountedPrice: "₹15,000",
    discount: "32%",
    duration: "4 Days",
    image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3",
    inclusions: ["Beach Resort", "Breakfast", "Water Sports", "Nightlife Tour"],
    validTill: "March 31, 2024"
  }
];

const BestDeals = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Best Deals for You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Exclusive offers from top-rated travel agents with amazing discounts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {deals.map((deal) => (
            <div 
              key={deal.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-lg font-semibold">
                  {deal.discount} OFF
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {deal.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">by {deal.agentName}</p>
                
                <div className="flex items-center mb-3">
                  <span className="text-2xl font-bold text-blue-600">
                    {deal.discountedPrice}
                  </span>
                  <span className="ml-2 text-sm text-gray-500 line-through">
                    {deal.originalPrice}
                  </span>
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <svg className="w-5 h-5 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {deal.duration}
                </div>

                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Inclusions:</div>
                  <div className="flex flex-wrap gap-2">
                    {deal.inclusions.map((inclusion, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                      >
                        {inclusion}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Valid till: {deal.validTill}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                    Book Now
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

export default BestDeals; 