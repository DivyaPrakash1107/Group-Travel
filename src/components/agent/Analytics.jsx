import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Mock analytics data
const mockAnalyticsData = {
  bookingTrends: [
    { month: 'Jan', bookings: 45 },
    { month: 'Feb', bookings: 52 },
    { month: 'Mar', bookings: 68 },
    { month: 'Apr', bookings: 75 },
    { month: 'May', bookings: 92 },
    { month: 'Jun', bookings: 103 },
    { month: 'Jul', bookings: 120 },
    { month: 'Aug', bookings: 115 },
    { month: 'Sep', bookings: 98 },
    { month: 'Oct', bookings: 85 },
    { month: 'Nov', bookings: 0 },
    { month: 'Dec', bookings: 0 },
  ],
  revenueTrends: [
    { month: 'Jan', revenue: 85000 },
    { month: 'Feb', revenue: 95000 },
    { month: 'Mar', revenue: 120000 },
    { month: 'Apr', revenue: 110000 },
    { month: 'May', revenue: 130000 },
    { month: 'Jun', revenue: 150000 },
    { month: 'Jul', revenue: 170000 },
    { month: 'Aug', revenue: 160000 },
    { month: 'Sep', revenue: 140000 },
    { month: 'Oct', revenue: 90000 },
    { month: 'Nov', revenue: 0 },
    { month: 'Dec', revenue: 0 },
  ],
  customerDemographics: [
    { name: '18-24', value: 15 },
    { name: '25-34', value: 35 },
    { name: '35-44', value: 25 },
    { name: '45-54', value: 15 },
    { name: '55+', value: 10 },
  ],
  popularDestinations: [
    { name: 'Goa', value: 28 },
    { name: 'Himalayas', value: 22 },
    { name: 'Kerala', value: 18 },
    { name: 'Rajasthan', value: 16 },
    { name: 'Andaman', value: 16 },
  ],
  bookingChannels: [
    { name: 'Website', value: 45 },
    { name: 'Mobile App', value: 30 },
    { name: 'Phone', value: 15 },
    { name: 'Travel Partners', value: 10 },
  ],
  customerSatisfaction: [
    { month: 'Jan', rating: 4.2 },
    { month: 'Feb', rating: 4.3 },
    { month: 'Mar', rating: 4.4 },
    { month: 'Apr', rating: 4.5 },
    { month: 'May', rating: 4.6 },
    { month: 'Jun', rating: 4.7 },
    { month: 'Jul', rating: 4.8 },
    { month: 'Aug', rating: 4.7 },
    { month: 'Sep', rating: 4.6 },
    { month: 'Oct', rating: 4.5 },
    { month: 'Nov', rating: 0 },
    { month: 'Dec', rating: 0 },
  ],
  keyMetrics: [
    { name: 'Total Bookings', value: 853, icon: '📅', color: 'from-blue-500 to-blue-600' },
    { name: 'Conversion Rate', value: '12.4%', icon: '🎯', color: 'from-green-500 to-green-600' },
    { name: 'Avg. Booking Value', value: '₹42,500', icon: '💰', color: 'from-purple-500 to-purple-600' },
    { name: 'Repeat Customers', value: '38%', icon: '🔄', color: 'from-amber-500 to-amber-600' },
  ]
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('all');
  
  // Mock query that returns the analytics data
  const { data: analytics, isLoading } = useQuery({
    queryKey: ['analytics', timeRange],
    queryFn: async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      return mockAnalyticsData;
    }
  });

  if (isLoading) return (
    <div className="flex items-center justify-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
        
        <div className="flex space-x-2">
          {['all', 'year', 'quarter', 'month'].map(range => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1 rounded-lg text-sm font-medium capitalize ${
                timeRange === range 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {analytics.keyMetrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            className={`bg-gradient-to-r ${metric.color} rounded-2xl shadow-lg overflow-hidden`}
          >
            <div className="p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl">{metric.icon}</span>
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{metric.value}</div>
              <div className="text-white/80">{metric.name}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Booking Trends & Revenue */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold mb-6">Booking Trends</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={analytics.bookingTrends}>
                <defs>
                  <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip />
                <Area type="monotone" dataKey="bookings" stroke="#3B82F6" fillOpacity={1} fill="url(#colorBookings)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold mb-6">Revenue Trends</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analytics.revenueTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Revenue']} />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Customer Demographics & Popular Destinations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold mb-6">Customer Demographics</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={analytics.customerDemographics}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {analytics.customerDemographics.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold mb-6">Popular Destinations</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={analytics.popularDestinations}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" stroke="#9CA3AF" />
                <YAxis dataKey="name" type="category" stroke="#9CA3AF" />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" radius={[0, 4, 4, 0]}>
                  {analytics.popularDestinations.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Booking Channels & Customer Satisfaction */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.9 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold mb-6">Booking Channels</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={analytics.bookingChannels}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {analytics.bookingChannels.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.0 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold mb-6">Customer Satisfaction</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analytics.customerSatisfaction}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis domain={[3, 5]} stroke="#9CA3AF" />
                <Tooltip formatter={(value) => [`${value} / 5`, 'Rating']} />
                <Line type="monotone" dataKey="rating" stroke="#FF8042" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Insights Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.1 }}
        className="bg-white rounded-2xl shadow-lg p-6"
      >
        <h2 className="text-xl font-semibold mb-6">Key Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600">📈</span>
              </div>
              <h3 className="font-medium text-blue-800">Booking Growth</h3>
            </div>
            <p className="text-blue-700 text-sm">Bookings have increased by 24% compared to the previous quarter, with the highest growth in adventure packages.</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-xl border border-green-100">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-600">🔍</span>
              </div>
              <h3 className="font-medium text-green-800">Customer Behavior</h3>
            </div>
            <p className="text-green-700 text-sm">25-34 age group shows the highest engagement. Mobile app bookings have increased by 15% in the last month.</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-purple-600">💡</span>
              </div>
              <h3 className="font-medium text-purple-800">Recommendations</h3>
            </div>
            <p className="text-purple-700 text-sm">Consider expanding Goa and Himalayan packages due to high demand. Focus marketing efforts on the 25-34 age demographic.</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Analytics; 