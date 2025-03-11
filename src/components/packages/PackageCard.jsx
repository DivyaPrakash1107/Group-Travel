import React from 'react';
import { Link } from 'react-router-dom';

const PackageCard = ({ package: pkg }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img 
            src={pkg.image}
            alt={pkg.name}
            className="h-64 w-full object-cover"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{pkg.name}</h3>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 font-semibold">{pkg.rating}</span>
            <span className="ml-1 text-gray-500">({pkg.reviews} reviews)</span>
          </div>
          <p className="text-gray-600 mb-4">{pkg.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {pkg.highlights.map((highlight, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {highlight}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-2xl font-bold text-blue-600">₹{pkg.price.toLocaleString()}</span>
              <span className="text-gray-500 ml-2">/ person</span>
            </div>
            <Link
              to={`/packages/${pkg.id}`}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard; 