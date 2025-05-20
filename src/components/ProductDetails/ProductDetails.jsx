import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

export default function ReviewList({ itemId }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!itemId) return;

    axios
      .get(`https://lavender-eel-222276.hostingersite.com/api/items/${itemId}/reviewers`)
      .then(res => {
        const rawData = res.data;
        // نحول الـ Object إلى Array من القيم
        const reviewsArray = Object.values(rawData || {});
        setReviews(reviewsArray);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading reviews:", err);
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div className="p-4 bg-white rounded-xl shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Reviews</h2>
      {loading ? (
        <p>Loading reviews...</p>
      ) : reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="flex gap-4 items-start border-b pb-4">
              <img
                src={`https://i.pravatar.cc/150?u=${review.customer_id}`}
                alt="User avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-bold">{review.first_name} {review.last_name}</div>
                <div className="flex items-center text-yellow-500 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className={i < Math.round(parseFloat(review.rating)) ? 'text-yellow-500' : 'text-gray-300'} />
                  ))}
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

ReviewList.propTypes = {
  itemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
