import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DashboardHome = () => {
  const { data: analytics, isLoading } = useQuery({
    queryKey: ['analytics'],
    queryFn: async () => {
      const response = await axios.get('/api/analytics/');
      return response.data;
    }
  });

  const stats = [
    { label: 'Total Trips', value: analytics?.total_trips || 0, icon: '🗺️', color: 'from-blue-500 to-blue-600' },
    { label: 'Active Bookings', value: analytics?.total_bookings || 0, icon: '📅', color: 'from-purple-500 to-purple-600' },
    { label: 'Revenue', value: `₹${(analytics?.total_revenue || 0).toLocaleString()}`, icon: '💰', color: 'from-green-500 to-green-600' },
    { label: 'Average Rating', value: (analytics?.average_rating || 0).toFixed(1), icon: '⭐', color: 'from-amber-500 to-amber-600' },
  ];

  // Sample data for the chart
  const revenueData = [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 5000 },
    { name: 'Apr', revenue: 8000 },
    { name: 'May', revenue: 7000 },
    { name: 'Jun', revenue: 9000 },
  ];

  // Sample recent activity data
  const recentActivity = [
    { id: 1, type: 'booking', message: 'New booking for Goa Beach Retreat', time: '2 hours ago', icon: '🏖️' },
    { id: 2, type: 'review', message: 'New 5-star review received', time: '5 hours ago', icon: '⭐' },
    { id: 3, type: 'payment', message: 'Payment of ₹25,000 received', time: '1 day ago', icon: '💸' },
    { id: 4, type: 'trip', message: 'New trip created: Himalayan Adventure', time: '2 days ago', icon: '🏔️' },
  ];

  if (isLoading) return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome Back, Agent</h1>
        <div className="bg-white p-2 rounded-xl shadow-md">
          <span className="text-sm text-gray-500">Today is </span>
          <span className="font-medium">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ 
              y: -5,
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
            className={`bg-gradient-to-r ${stat.color} rounded-2xl shadow-lg overflow-hidden`}
          >
            <div className="p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <span className="text-white/70 text-sm">Last 30 days</span>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Revenue Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="bg-white rounded-2xl shadow-lg p-6 mb-8"
      >
        <h2 className="text-xl font-semibold mb-6">Revenue Overview</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="#3B82F6" fillOpacity={1} fill="url(#colorRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
        </div>
        <div className="divide-y">
          {recentActivity.map((activity, index) => (
            <motion.div 
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
              className="p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-xl">{activity.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800">{activity.message}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
                <button className="text-blue-600 hover:text-blue-800">View</button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DashboardHome; 