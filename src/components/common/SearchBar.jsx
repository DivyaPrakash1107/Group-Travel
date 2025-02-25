import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useState({
    destination: '',
    startDate: null,
    endDate: null,
    travelers: '',
    budget: ''
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

  return (
    <form onSubmit={handleSearch} className="w-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 transform transition-all hover:shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">
            Destination
          </label>
          <input
            type="text"
            placeholder="Where to?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            value={searchParams.destination}
            name="destination"
            onChange={handleChange}
          />
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">
            Dates
          </label>
          <div className="flex space-x-2">
            <DatePicker
              selected={searchParams.startDate}
              onChange={(date) => setSearchParams({ ...searchParams, startDate: date })}
              selectsStart
              startDate={searchParams.startDate}
              endDate={searchParams.endDate}
              placeholderText="Check-in"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              dateFormat="MMM dd, yyyy"
              minDate={new Date()}
            />
            <DatePicker
              selected={searchParams.endDate}
              onChange={(date) => setSearchParams({ ...searchParams, endDate: date })}
              selectsEnd
              startDate={searchParams.startDate}
              endDate={searchParams.endDate}
              minDate={searchParams.startDate}
              placeholderText="Check-out"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              dateFormat="MMM dd, yyyy"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">
            Travelers
          </label>
          <select
            name="travelers"
            value={searchParams.travelers}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white"
          >
            <option value="">Select travelers</option>
            <option value="1">1 Traveler</option>
            <option value="2">2 Travelers</option>
            <option value="3">3 Travelers</option>
            <option value="4">4 Travelers</option>
            <option value="5+">5+ Travelers</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none mt-7">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">
            Budget
          </label>
          <select
            name="budget"
            value={searchParams.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white"
          >
            <option value="">Select budget</option>
            <option value="0-1000">$0 - $1,000</option>
            <option value="1000-2000">$1,000 - $2,000</option>
            <option value="2000-5000">$2,000 - $5,000</option>
            <option value="5000+">$5,000+</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none mt-7">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
      >
        Search Adventures
      </button>
    </form>
  );
};

export default SearchBar; 