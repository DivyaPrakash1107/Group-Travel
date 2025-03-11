import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateTripForm = ({ onSubmit, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    destination: '',
    duration: '',
    price: '',
    max_participants: '',
    overview: '',
    highlights: ['', '', ''],
    itinerary: [{ day: 1, title: '', description: '' }],
    inclusions: ['', '', ''],
    exclusions: ['', '', ''],
    cancellation_policy: '',
    start_date: new Date(),
    featured_image: null,
    gallery_images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value === '' ? '' : Number(value) });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, start_date: date });
  };

  const handleHighlightChange = (index, value) => {
    const newHighlights = [...formData.highlights];
    newHighlights[index] = value;
    setFormData({ ...formData, highlights: newHighlights });
  };

  const addHighlight = () => {
    setFormData({ ...formData, highlights: [...formData.highlights, ''] });
  };

  const removeHighlight = (index) => {
    const newHighlights = [...formData.highlights];
    newHighlights.splice(index, 1);
    setFormData({ ...formData, highlights: newHighlights });
  };

  const handleItineraryChange = (index, field, value) => {
    const newItinerary = [...formData.itinerary];
    newItinerary[index] = { ...newItinerary[index], [field]: value };
    setFormData({ ...formData, itinerary: newItinerary });
  };

  const addItineraryDay = () => {
    const newDay = formData.itinerary.length + 1;
    setFormData({
      ...formData,
      itinerary: [...formData.itinerary, { day: newDay, title: '', description: '' }]
    });
  };

  const removeItineraryDay = (index) => {
    const newItinerary = [...formData.itinerary];
    newItinerary.splice(index, 1);
    // Renumber days
    newItinerary.forEach((item, idx) => {
      item.day = idx + 1;
    });
    setFormData({ ...formData, itinerary: newItinerary });
  };

  const handleInclusionChange = (index, value) => {
    const newInclusions = [...formData.inclusions];
    newInclusions[index] = value;
    setFormData({ ...formData, inclusions: newInclusions });
  };

  const addInclusion = () => {
    setFormData({ ...formData, inclusions: [...formData.inclusions, ''] });
  };

  const removeInclusion = (index) => {
    const newInclusions = [...formData.inclusions];
    newInclusions.splice(index, 1);
    setFormData({ ...formData, inclusions: newInclusions });
  };

  const handleExclusionChange = (index, value) => {
    const newExclusions = [...formData.exclusions];
    newExclusions[index] = value;
    setFormData({ ...formData, exclusions: newExclusions });
  };

  const addExclusion = () => {
    setFormData({ ...formData, exclusions: [...formData.exclusions, ''] });
  };

  const removeExclusion = (index) => {
    const newExclusions = [...formData.exclusions];
    newExclusions.splice(index, 1);
    setFormData({ ...formData, exclusions: newExclusions });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, featured_image: e.target.files[0] });
    }
  };

  const handleGalleryImagesChange = (e) => {
    if (e.target.files) {
      setFormData({ ...formData, gallery_images: Array.from(e.target.files) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Form validation for each step
  const validateStep1 = () => {
    return formData.title && formData.destination && formData.duration && 
           formData.price && formData.max_participants;
  };

  const validateStep2 = () => {
    return formData.overview && formData.highlights.some(h => h.trim() !== '');
  };

  const validateStep3 = () => {
    return formData.itinerary.every(day => day.title && day.description);
  };

  return (
    <div className="p-6">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {['Basic Info', 'Overview & Highlights', 'Itinerary', 'Inclusions & Policy'].map((step, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index + 1)}
              className={`text-sm font-medium ${
                currentStep === index + 1 ? 'text-blue-600' : 'text-gray-500'
              }`}
            >
              {step}
            </button>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <motion.div
            initial={{ width: `${(currentStep - 1) * 25}%` }}
            animate={{ width: `${currentStep * 25}%` }}
            transition={{ duration: 0.3 }}
            className="h-full bg-blue-600 rounded-full"
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Basic Information */}
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6">Basic Trip Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Trip Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g. Goa Beach Retreat"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g. Goa, India"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration (days)</label>
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleNumberChange}
                  min="1"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleNumberChange}
                  min="0"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Max Participants</label>
                <input
                  type="number"
                  name="max_participants"
                  value={formData.max_participants}
                  onChange={handleNumberChange}
                  min="1"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <DatePicker
                  selected={formData.start_date}
                  onChange={handleDateChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  dateFormat="MMMM d, yyyy"
                  minDate={new Date()}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Featured Image</label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  accept="image/*"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Gallery Images</label>
              <input
                type="file"
                multiple
                onChange={handleGalleryImagesChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                accept="image/*"
              />
              <p className="text-xs text-gray-500 mt-1">You can select multiple images</p>
            </div>
          </motion.div>
        )}

        {/* Step 2: Overview & Highlights */}
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6">Trip Overview & Highlights</h3>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Trip Overview</label>
              <textarea
                name="overview"
                value={formData.overview}
                onChange={handleChange}
                rows="6"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Provide a detailed description of the trip..."
                required
              ></textarea>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">Trip Highlights</label>
                <button
                  type="button"
                  onClick={addHighlight}
                  className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  Add Highlight
                </button>
              </div>
              
              {formData.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center mb-3">
                  <input
                    type="text"
                    value={highlight}
                    onChange={(e) => handleHighlightChange(index, e.target.value)}
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={`Highlight ${index + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() => removeHighlight(index)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 3: Itinerary */}
        {currentStep === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Trip Itinerary</h3>
              <button
                type="button"
                onClick={addItineraryDay}
                className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Add Day
              </button>
            </div>
            
            {formData.itinerary.map((day, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="mb-6 p-4 border border-gray-200 rounded-lg bg-white shadow-sm"
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium text-lg">Day {day.day}</h4>
                  <button
                    type="button"
                    onClick={() => removeItineraryDay(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                </div>
                
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={day.title}
                    onChange={(e) => handleItineraryChange(index, 'title', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. Arrival and Welcome Dinner"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={day.description}
                    onChange={(e) => handleItineraryChange(index, 'description', e.target.value)}
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describe the activities for this day..."
                    required
                  ></textarea>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Step 4: Inclusions, Exclusions & Policies */}
        {currentStep === 4 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6">Inclusions, Exclusions & Policies</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">Inclusions</label>
                  <button
                    type="button"
                    onClick={addInclusion}
                    className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    Add
                  </button>
                </div>
                
                {formData.inclusions.map((inclusion, index) => (
                  <div key={index} className="flex items-center mb-3">
                    <input
                      type="text"
                      value={inclusion}
                      onChange={(e) => handleInclusionChange(index, e.target.value)}
                      className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder={`e.g. Accommodation`}
                    />
                    <button
                      type="button"
                      onClick={() => removeInclusion(index)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">Exclusions</label>
                  <button
                    type="button"
                    onClick={addExclusion}
                    className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    Add
                  </button>
                </div>
                
                {formData.exclusions.map((exclusion, index) => (
                  <div key={index} className="flex items-center mb-3">
                    <input
                      type="text"
                      value={exclusion}
                      onChange={(e) => handleExclusionChange(index, e.target.value)}
                      className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder={`e.g. Flight tickets`}
                    />
                    <button
                      type="button"
                      onClick={() => removeExclusion(index)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Cancellation Policy</label>
              <textarea
                name="cancellation_policy"
                value={formData.cancellation_policy}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe your cancellation policy..."
              ></textarea>
            </div>
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {currentStep > 1 ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={prevStep}
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Previous
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={onCancel}
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </motion.button>
          )}
          
          {currentStep < 4 ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={nextStep}
              disabled={
                (currentStep === 1 && !validateStep1()) ||
                (currentStep === 2 && !validateStep2()) ||
                (currentStep === 3 && !validateStep3())
              }
              className={`px-6 py-2 bg-blue-600 text-white rounded-lg transition-colors ${
                ((currentStep === 1 && !validateStep1()) ||
                (currentStep === 2 && !validateStep2()) ||
                (currentStep === 3 && !validateStep3()))
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-blue-700'
              }`}
            >
              Next
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Create Trip
            </motion.button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateTripForm; 