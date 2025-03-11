import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

// Mock financial data
const mockFinancialData = {
  total_revenue: 1250000,
  pending_payments: 175000,
  net_profit: 450000,
  expenses: 625000,
  revenue_by_month: [
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
  revenue_by_package: [
    { name: 'Goa Beach Retreat', value: 350000 },
    { name: 'Himalayan Adventure', value: 280000 },
    { name: 'Kerala Backwaters', value: 220000 },
    { name: 'Rajasthan Heritage', value: 190000 },
    { name: 'Andaman Islands', value: 210000 },
  ],
  recent_transactions: [
    { id: 'TXN-1001', date: '2023-10-28T10:30:00Z', customer_name: 'Rahul Sharma', amount: 45000, status: 'completed' },
    { id: 'TXN-1002', date: '2023-10-25T14:15:00Z', customer_name: 'Priya Patel', amount: 32000, status: 'completed' },
    { id: 'TXN-1003', date: '2023-10-22T09:45:00Z', customer_name: 'Arjun Mehta', amount: 28000, status: 'pending' },
    { id: 'TXN-1004', date: '2023-10-20T16:30:00Z', customer_name: 'Neha Gupta', amount: 55000, status: 'completed' },
    { id: 'TXN-1005', date: '2023-10-18T11:20:00Z', customer_name: 'Vikram Singh', amount: 38000, status: 'pending' },
    { id: 'TXN-1006', date: '2023-10-15T13:10:00Z', customer_name: 'Ananya Reddy', amount: 42000, status: 'completed' },
    { id: 'TXN-1007', date: '2023-10-12T15:45:00Z', customer_name: 'Karthik Iyer', amount: 29000, status: 'completed' },
  ]
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const Financials = () => {
  const [timeRange, setTimeRange] = useState('all');
  
  // Mock query that returns the financial data
  const { data: financials, isLoading } = useQuery({
    queryKey: ['financials', timeRange],
    queryFn: async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      return mockFinancialData;
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
        <h1 className="text-3xl font-bold text-gray-900">Financial Management</h1>
        
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

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl">💰</span>
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">₹{financials.total_revenue.toLocaleString()}</div>
            <div className="text-white/80">Total Revenue</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
          className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl">⏳</span>
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">₹{financials.pending_payments.toLocaleString()}</div>
            <div className="text-white/80">Pending Payments</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
          className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl">📈</span>
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">₹{financials.net_profit.toLocaleString()}</div>
            <div className="text-white/80">Net Profit</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
          className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl">💸</span>
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">₹{financials.expenses.toLocaleString()}</div>
            <div className="text-white/80">Total Expenses</div>
          </div>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold mb-6">Monthly Revenue</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={financials.revenue_by_month}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Revenue']} />
                <Bar dataKey="revenue" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold mb-6">Revenue by Package</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={financials.revenue_by_package}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {financials.revenue_by_package.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Revenue']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Recent Transactions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Recent Transactions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {financials.recent_transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {transaction.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(transaction.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.customer_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ₹{transaction.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        transaction.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                    <button className="text-blue-600 hover:text-blue-900">Receipt</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Financials; 