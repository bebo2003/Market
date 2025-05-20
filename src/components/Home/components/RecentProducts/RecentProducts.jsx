import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaRegCalendarAlt, FaComments, FaStar, FaPlus } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const gradientStyles = [
  'from-blue-800 via-blue-600 to-blue-400',
  'from-purple-800 via-fuchsia-600 to-pink-500',
  'from-orange-700 via-orange-600 to-yellow-500'
];

export default function EcommercePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // لإدارة ظهور نافذة الريفيوز
  const [showReviewsPopup, setShowReviewsPopup] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [reviewsForProduct, setReviewsForProduct] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(false);

  // لإدارة إضافة مراجعة جديدة
  const [addReviewMode, setAddReviewMode] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });
  const [submittingReview, setSubmittingReview] = useState(false);

  const token = localStorage.getItem("userToken");
  const userRole = localStorage.getItem("userType");
  const userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://lavender-eel-222276.hostingersite.com/api/items/category/1')
      .then(response => {
        const fetchedProducts = response.data.data;
        if (Array.isArray(fetchedProducts)) {
          setProducts(fetchedProducts);
        } else {
          console.error('Products are not in the expected array format');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // دالة إرسال طلب الحجز
  const handleBooking = async (productId) => {
    if (!token) {
      toast.error("Please login to book this item.");
      return;
    }

    try {
      setLoading(true);
      await axios.post(
        'https://lavender-eel-222276.hostingersite.com/api/rent/request',
        { item_id: productId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Booking request sent successfully!");
    } catch (error) {
      console.error("Booking error:", error.response ? error.response.data : error.message);
      toast.error("Failed to send booking request.");
    } finally {
      setLoading(false);
    }
  };

  // جلب الريفيوز الخاصة بالمنتج المختار
  const fetchReviews = async (productId) => {
    setReviewsLoading(true);
    try {
      const res = await axios.get(`https://lavender-eel-222276.hostingersite.com/api/items/${productId}/reviewers`);
      const reviewsArray = Object.values(res.data || {});
      setReviewsForProduct(reviewsArray);
    } catch (error) {
      console.error("Error loading reviews:", error);
      toast.error("Failed to load reviews.");
      setReviewsForProduct([]);
    } finally {
      setReviewsLoading(false);
    }
  };

  const handleShowReviews = (productId) => {
    setSelectedProductId(productId);
    setShowReviewsPopup(true);
    setAddReviewMode(false);
    setNewReview({ rating: 5, comment: '' });
    fetchReviews(productId);
  };

  const closeReviewsPopup = () => {
    setShowReviewsPopup(false);
    setSelectedProductId(null);
    setReviewsForProduct([]);
    setAddReviewMode(false);
    setNewReview({ rating: 5, comment: '' });
  };

  // إرسال مراجعة جديدة
  const submitNewReview = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("Please login to add a review.");
      return;
    }

    if (!newReview.rating || !newReview.comment.trim()) {
      toast.error("Please provide a rating and comment.");
      return;
    }

    setSubmittingReview(true);

    try {
      await axios.post(
        `https://lavender-eel-222276.hostingersite.com/api/rent/review`,
        {
          item_id: selectedProductId,
          rating: newReview.rating,
          comment: newReview.comment,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success("Review added successfully!");

      // تحديث الريفيوز بعد الإضافة
      fetchReviews(selectedProductId);

      setAddReviewMode(false);
      setNewReview({
        rating: 5,
        comment: '',
      });
    } catch (error) {
      console.error("Error adding review:", error.response ? error.response.data : error.message);
      toast.error("Failed to add review.");
    } finally {
      setSubmittingReview(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-10 px-4 relative">
      <ToastContainer />
      <h1 className="text-4xl text-white font-bold text-center mb-10">Luxury Items</h1>

      {loading ? (
        <p className="text-white text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product, index) => {
              const imageUrl =
                product.images && product.images.length > 0
                  ? product.images[0].url
                  : '/default-image.png';

              const gradient = gradientStyles[index % gradientStyles.length];

              return (
                <div
                  key={product.id}
                  className={`bg-gradient-to-b ${gradient} rounded-2xl text-white shadow-2xl relative overflow-hidden transition-transform hover:scale-105`}
                >
                  <div className="p-6 flex flex-col justify-center items-center">
      <img
  src={imageUrl}
  alt={product.title}
  className="w-full h-56 object-cover mb-4 rounded-lg"
/>


                    <span className="absolute top-4 left-4 bg-white text-black px-3 py-1 rounded-full text-sm font-bold">
                      {product.price} EGP
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                    <p className="text-sm text-gray-200 mb-4 line-clamp-3">
                      {product.description}
                    </p>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>

                    {product.item_status === 'unavailable' ? (
                      <span className="bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                        Unavailable
                      </span>
                    ) : (
                      <div className="flex gap-6 items-center justify-center mb-4">
                        {userRole === 'customer' && (
                          <button
                            onClick={() => handleBooking(product.id)}
                            className="flex flex-col items-center text-white hover:text-yellow-400 transition"
                            title="Book Now"
                          >
                            <FaRegCalendarAlt size={26} />
                            <span className="text-xs mt-1 font-semibold">Book</span>
                          </button>
                        )}

                        {(userRole === 'customer' || userRole === 'lender') && (
                          <>
                            <button
                              className="flex flex-col items-center text-white hover:text-yellow-400 transition"
                              title="Chat"
                              onClick={() => {
                                toast.info("Chat feature not implemented here.");
                              }}
                            >
                              <FaComments size={26} />
                              <span className="text-xs mt-1 font-semibold">Chat</span>
                            </button>

                            {/* زر عرض الريفيوز */}
                            <button
                              onClick={() => handleShowReviews(product.id)}
                              className="flex flex-col items-center text-white hover:text-yellow-400 transition"
                              title="Show Reviews"
                            >
                              <FaStar size={26} />
                              <span className="text-xs mt-1 font-semibold">Reviews</span>
                            </button>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-white text-center">No products available.</p>
          )}
        </div>
      )}

      {/* Popup الريفيوز */}
      {showReviewsPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-start pt-20 z-50">
          <div className="bg-white rounded-lg max-w-xl w-full max-h-[80vh] overflow-y-auto p-6 relative shadow-lg">
            <button
              onClick={closeReviewsPopup}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              title="Close"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4">Reviews</h2>

            {reviewsLoading ? (
              <p>Loading reviews...</p>
            ) : reviewsForProduct.length === 0 ? (
              <p>No reviews yet.</p>
            ) : (
              <div className="space-y-4 mb-6 max-h-96 overflow-y-auto pr-2">
                {reviewsForProduct.map((review, idx) => (
                  <div key={idx} className="border-b pb-3 flex gap-3 items-start">
                    <img
                      src={`https://i.pravatar.cc/150?u=${review.customer_id}`}
                      alt="User avatar"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{review.customer_name || "Anonymous"}</p>
                      <p className="text-yellow-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </p>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* زر إضافة مراجعة جديدة */}
            {!addReviewMode ? (
              <button
                onClick={() => setAddReviewMode(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Add Review
              </button>
            ) : (
              <form onSubmit={submitNewReview} className="space-y-4">
                <label className="block">
                  Rating:
                  <select
                    value={newReview.rating}
                    onChange={e => setNewReview(prev => ({ ...prev, rating: Number(e.target.value) }))}
                    className="w-full mt-1 p-2 border rounded"
                    required
                  >
                    {[5,4,3,2,1].map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  Comment:
                  <textarea
                    value={newReview.comment}
                    onChange={e => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                    rows={4}
                    className="w-full mt-1 p-2 border rounded"
                    required
                  />
                </label>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={submittingReview}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                  >
                    {submittingReview ? "Submitting..." : "Submit Review"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setAddReviewMode(false)}
                    className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
