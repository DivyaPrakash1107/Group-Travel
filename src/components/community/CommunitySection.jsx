import React, { useState } from 'react';

const CommunitySection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'John Doe',
      comment: 'I had an amazing time in Rajasthan! The culture and heritage are truly mesmerizing.',
      date: '2023-10-01'
    },
    {
      id: 2,
      name: 'Jane Smith',
      comment: 'Kerala is a paradise on earth. The backwaters and the food were incredible!',
      date: '2023-09-25'
    }
  ]);

  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj = {
        id: comments.length + 1,
        name: 'Anonymous', // You can replace this with a user name from authentication
        comment: newComment,
        date: new Date().toISOString().split('T')[0]
      };
      setComments([newCommentObj, ...comments]);
      setNewComment('');
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Community Experiences
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Share your travel stories and read about others' adventures.
          </p>
        </div>

        <form onSubmit={handleCommentSubmit} className="mb-8">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your experience..."
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
            rows="4"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Post Comment
          </button>
        </form>

        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-900">{comment.name}</h3>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p className="text-gray-700">{comment.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection; 