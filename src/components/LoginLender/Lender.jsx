import React, { useState } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const ProductReview = ({ itemId }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [comment, setComment] = useState('');
  const [showModal, setShowModal] = useState(false);

  const token = localStorage.getItem("userToken");
  const userType = localStorage.getItem("userType");

  const handleSubmit = async () => {
    if (!token || userType !== "customer") {
      toast.error("Only customers can leave reviews.");
      return;
    }

    try {
      await axios.post(
        "https://lavender-eel-222276.hostingersite.com/api/rent/review",
        {
          item_id: itemId,
          comment,
          rating
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      toast.success("Review submitted successfully!");
      setRating(0);
      setComment('');
      setShowModal(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit review.");
    }
  };

  return (
    <>
      {/* Star icon that triggers modal */}
      <div className="flex justify-center cursor-pointer text-yellow-400 mb-2" onClick={() => setShowModal(true)} title="Leave a review">
        <FaStar size={26} />
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-2xl w-full max-w-md relative animate-fade-in">

            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              ×
            </button>

            <h2 className="text-xl font-semibold mb-4 text-center">Leave a Review</h2>

            {/* Star Rating */}
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => {
                const ratingValue = i + 1;
                return (
                  <label key={i}>
                    <input
                      type="radio"
                      className="hidden"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                    />
                    <FaStar
                      size={28}
                      className="cursor-pointer transition-colors"
                      color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>

            {/* Comment */}
            <textarea
              className="w-full border rounded-md p-2 mb-4"
              rows="4"
              placeholder="Write your review..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>

            {/* Submit Button */}
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded-md w-full font-bold hover:bg-yellow-600"
              onClick={handleSubmit}
            >
              Submit Review
            </button>
          </div>
        </div>
      )}
    </>
  );
};

ProductReview.propTypes = {
  itemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ProductReview;
