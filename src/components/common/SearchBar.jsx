import React, { useState } from 'react';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useState({
    destination: '',
    duration: '',
    month: ''
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search params:', searchParams);
  };

  const handleChange = (e) => {
    setSearchParams({
      ...searchParams,
      [e.target.name]: e.target.value
    });
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <form onSubmit={handleSearch} className="w-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 transform transition-all hover:shadow-2xl">
      <div className="grid grid-cols-12 gap-4">
        {/* Destination Field */}
        <div className="col-span-12 md:col-span-3">
          <input
            type="text"
            placeholder="Where to?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            value={searchParams.destination}
            name="destination"
            onChange={handleChange}
          />
        </div>

        {/* Duration Field */}
        <div className="col-span-12 md:col-span-3">
          <select
            name="duration"
            value={searchParams.duration}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white"
          >
            <option value="">Duration</option>
            <option value="1-3">1-3 Days</option>
            <option value="4-7">4-7 Days</option>
            <option value="8-14">8-14 Days</option>
            <option value="15+">15+ Days</option>
          </select>
        </div>

        {/* Month Field */}
        <div className="col-span-12 md:col-span-3">
          <select
            name="month"
            value={searchParams.month}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white"
          >
            <option value="">Month</option>
            {months.map((month) => (
              <option key={month} value={month.toLowerCase()}>
                {month}
              </option>
            ))}
          </select>
        </div>

        {/* Explore Button */}
        <div className="col-span-12 md:col-span-3 flex items-end">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Explore
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar; 