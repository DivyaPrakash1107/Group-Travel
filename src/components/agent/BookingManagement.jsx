import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const BookingManagement = () => {
  console.log('BookingManagement component rendered');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const queryClient = useQueryClient();

  const { data: bookings, isLoading, error } = useQuery({
    queryKey: ['bookings', selectedStatus],
    queryFn: async () => {
      try {
        const response = await axios.get(`/api/bookings/?status=${selectedStatus}`);
        console.log('API Response:', response.data);
        return Array.isArray(response.data) ? response.data : [];
      } catch (error) {
        console.error('API Error:', error);
        throw error;
      }
    }
  });

  const updateBookingStatus = useMutation({
    mutationFn: ({ id, status }) => 
      axios.post(`/api/bookings/${id}/update_status/`, { status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    }
  });

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
    completed: 'bg-blue-100 text-blue-800',
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading bookings: {error.message}</div>;

  const bookingsData = bookings || [];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Booking Management</h1>

      {/* Status Filter */}
      <div className="mb-6 flex space-x-4">
        {['all', 'pending', 'confirmed', 'cancelled', 'completed'].map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={`px-4 py-2 rounded-lg capitalize ${
              selectedStatus === status
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Bookings Table */}
      {bookingsData.length === 0 ? (
        <div className="text-center py-8 bg-white rounded-lg shadow-md">
          <p className="text-gray-500">No bookings available.</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Booking ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trip
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
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
              {bookingsData.map((booking) => (
                <tr key={booking.id}>
                  <td className="px-6 py-4 whitespace-nowrap">#{booking.id}</td>
                  <td className="px-6 py-4">{booking.trip_title}</td>
                  <td className="px-6 py-4">{booking.customer_name}</td>
                  <td className="px-6 py-4">{new Date(booking.booking_date).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-sm ${statusColors[booking.status]}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={booking.status}
                      onChange={(e) =>
                        updateBookingStatus.mutate({ id: booking.id, status: e.target.value })
                      }
                      className="border rounded px-2 py-1"
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="cancelled">Cancelled</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookingManagement; 