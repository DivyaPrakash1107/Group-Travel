import React, { useState } from 'react';
import PackageFilters from './PackageFilters';
import PackageCard from './PackageCard';

const themes = [
  { id: 'culture', name: 'Culture Tour', icon: '🏛️' },
  { id: 'religious', name: 'Religious Tour', icon: '🕉️' },
  { id: 'wildlife', name: 'Wildlife Tour', icon: '🦁' },
  { id: 'ayurveda', name: 'Ayurveda & Yoga', icon: '🧘' },
  { id: 'festival', name: 'Fair & Festival', icon: '🎭' },
  { id: 'adventure', name: 'Adventure Tour', icon: '🏔️' },
  { id: 'trekking', name: 'Trekking', icon: '🥾' },
  { id: 'beach', name: 'Beach', icon: '🏖️' },
  { id: 'mountain', name: 'Mountains', icon: '⛰️' }
];

const packages = [
  {
    id: 1,
    name: 'Rajasthan Cultural Heritage',
    theme: 'culture',
    price: 25000,
    duration: 6,
    rating: 4.8,
    reviews: 245,
    image: '/assets/images/raj1.jpg',
    description: 'Explore the rich cultural heritage of Rajasthan',
    highlights: ['Jaipur', 'Udaipur', 'Jodhpur']
  },
  // Add more packages here
];

const PackagesPage = () => {
  const [filters, setFilters] = useState({
    theme: '',
    minPrice: 0,
    maxPrice: 100000,
    minRating: 0,
    minDays: 0,
    maxDays: 30
  });

  const filteredPackages = packages.filter(pkg => {
    return (
      (!filters.theme || pkg.theme === filters.theme) &&
      pkg.price >= filters.minPrice &&
      pkg.price <= filters.maxPrice &&
      pkg.rating >= filters.minRating &&
      pkg.duration >= filters.minDays &&
      pkg.duration <= filters.maxDays
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Theme Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore by Theme</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {themes.map(theme => (
              <button
                key={theme.id}
                onClick={() => setFilters(prev => ({ ...prev, theme: theme.id }))}
                className={`p-4 rounded-lg flex flex-col items-center justify-center transition-all
                  ${filters.theme === theme.id ? 'bg-blue-600 text-white' : 'bg-white hover:bg-blue-50'}`}
              >
                <span className="text-2xl mb-2">{theme.icon}</span>
                <span className="text-sm font-medium">{theme.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <PackageFilters filters={filters} setFilters={setFilters} />

          {/* Package Listings */}
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 gap-6">
              {filteredPackages.map(pkg => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesPage; 