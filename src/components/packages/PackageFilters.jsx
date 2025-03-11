import React from 'react';

const PackageFilters = ({ filters, setFilters }) => {
  return (
    <div className="md:w-1/4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        
        {/* Price Range */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range (₹)
          </label>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="100000"
              value={filters.maxPrice}
              onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: parseInt(e.target.value) }))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>₹0</span>
              <span>₹{filters.maxPrice.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Duration */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Duration (Days)
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              min="0"
              value={filters.minDays}
              onChange={(e) => setFilters(prev => ({ ...prev, minDays: parseInt(e.target.value) }))}
              className="w-1/2 border rounded-md p-2"
              placeholder="Min"
            />
            <input
              type="number"
              max="30"
              value={filters.maxDays}
              onChange={(e) => setFilters(prev => ({ ...prev, maxDays: parseInt(e.target.value) }))}
              className="w-1/2 border rounded-md p-2"
              placeholder="Max"
            />
          </div>
        </div>

        {/* Rating */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Rating
          </label>
          <select
            value={filters.minRating}
            onChange={(e) => setFilters(prev => ({ ...prev, minRating: parseFloat(e.target.value) }))}
            className="w-full border rounded-md p-2"
          >
            <option value="0">All Ratings</option>
            <option value="3">3+ Stars</option>
            <option value="4">4+ Stars</option>
            <option value="4.5">4.5+ Stars</option>
          </select>
        </div>

        {/* Reset Filters */}
        <button
          onClick={() => setFilters({
            theme: '',
            minPrice: 0,
            maxPrice: 100000,
            minRating: 0,
            minDays: 0,
            maxDays: 30
          })}
          className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default PackageFilters; 