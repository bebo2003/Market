// import { useWishlist } from "../../Context/wishlistContext";
// import { Link } from "react-router-dom";

// export default function WishlistPage() {
//   const { wishlist, toggleWishlist } = useWishlist();

//   if (wishlist.length === 0) {
//     return (
//       <div className="text-center my-10">
//         <h1 className="text-2xl font-semibold text-gray-700 dark:text-white">
//           Your Wishlist is Empty 💔
//         </h1>
//         <p className="text-gray-500 dark:text-gray-400 mt-2">
//           Start adding your favorite products!
//         </p>
//         <Link
//           to="/products"
//           className="mt-4 inline-block bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-700 transition"
//         >
//           Browse Products
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h2 className="text-3xl font-semibold mb-6 flex items-center">
//         💖 Wishlist
//       </h2>

//       <div className="overflow-x-auto shadow-md rounded-lg">
//         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//               <th className="px-4 md:px-6 py-3">Product</th>
//               <th className="px-4 md:px-6 py-3">Price</th>
//               <th className="px-4 md:px-6 py-3">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {wishlist.map((product) => (
//               <tr
//                 key={product.id}
//                 className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
//               >
//                 <td className="flex items-center gap-3 px-4 py-3">
//                   <img
//                     src={product.imageCover}
//                     className="w-16 h-16 object-cover rounded-md"
//                     alt={product.title}
//                     loading="lazy"
//                   />
//                   <span className="font-medium text-gray-900 dark:text-white">
//                     {product.title}
//                   </span>
//                 </td>
//                 <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
//                   {product.price} EGP
//                 </td>
//                 <td className="px-4 py-3">
//                   <button
//                     onClick={() => toggleWishlist(product)}
//                     className="text-red-600 dark:text-red-500 hover:underline flex items-center gap-1"
//                   >
//                     🗑 Remove
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Shared/Loader/Loader';
import { toast } from 'react-toastify';

export default function RentRequestPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [changingId, setChangingId] = useState(null);

  const userType = localStorage.getItem('userType');   // يجب أن يكون "lender"
  const token = localStorage.getItem('userToken');

  /* ───────────────────────────────
     جلب الطلبات عند تحميل الصفحة
  ─────────────────────────────── */
  useEffect(() => {
    fetchRequests();
  }, []);

  async function fetchRequests() {
    try {
      setLoading(true);

      if (userType !== 'lender') {
        toast.error('فقط المؤجّر يمكنه عرض هذه الصفحة', { theme: 'dark' });
        setLoading(false);
        return;
      }

      const { data } = await axios.get(
        'https://lavender-eel-222276.hostingersite.com/api/requests',
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setRequests(data.pending_requests || []);
    } catch (err) {
      toast.error('فشل في جلب الطلبات', { theme: 'dark' });
    } finally {
      setLoading(false);
    }
  }

  /* ───────────────────────────────
     قبول أو رفض الطلب
  ─────────────────────────────── */
  async function handleApprove(rentId) {
    try {
      setChangingId(rentId);
      console.log('Approving rentId:', rentId);  // إضافة تسجيل الـ rentId

      const endpoint = `https://lavender-eel-222276.hostingersite.com/api/requests/${rentId}/approve`;

      // استخدام POST بدلاً من GET
      const response = await axios.post(endpoint, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Response from API:', response);  // تسجيل الرد من الـ API

      toast.success('بحبك وبحب مين يحبك ', { theme: 'dark' });
      fetchRequests(); // إعادة تحميل الطلبات
    } catch (err) {
      console.log('Error during approval:', err);  // تسجيل الخطأ
      toast.error('جووم يسليماان جوووم', { theme: 'dark' });
    } finally {
      setChangingId(null);
    }
  }

  async function handleReject(rentId) {
    try {
      setChangingId(rentId);
      console.log('Rejecting rentId:', rentId);  // إضافة تسجيل الـ rentId

      const endpoint = `https://lavender-eel-222276.hostingersite.com/api/requests/${rentId}/reject`;

      // استخدام POST بدلاً من GET
      const response = await axios.post(endpoint, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Response from API:', response);  // تسجيل الرد من الـ API

      toast.success('اناا زعلتك ف حاااجة طب اي ي lender هياا', {theme: 'dark' });
      fetchRequests(); // إعادة تحميل الطلبات
    } catch (err) {
      console.log('Error during rejection:', err);  // تسجيل الخطأ
      toast.error('فشل في تحديث الطلب', { theme: 'dark' });
    } finally {
      setChangingId(null);
    }
  }

  /* ───────────────────────────────
     حالة التحميل أو عدم وجود بيانات
  ─────────────────────────────── */
  if (loading) return <Loader />;

  if (requests.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-semibold dark:text-white">
          There are no  requests at the moment.
        </h2>
      </div>
    );
  }

  /* ───────────────────────────────
     عرض الجدول
  ─────────────────────────────── */
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">ٌRent Requests</h1>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-4 py-3">Customer&nbsp;ID</th>
              <th className="px-4 py-3">Item&nbsp;ID</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Rented&nbsp;Time</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((req) => (
              <tr
                key={req.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-4 py-3">{req.customer.id}</td>
                <td className="px-4 py-3">{req.item_id}</td>
                <td className="px-4 py-3 font-semibold capitalize text-yellow-500">
                  {req.rental_status}
                </td>
                <td className="px-4 py-3 text-sm">
                  {new Date(req.rented_time).toLocaleString()}
                </td>

                <td className="px-4 py-3 text-center space-x-2">
                  {req.rental_status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleApprove(req.id)}
                        disabled={changingId === req.id}
                        className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                          changingId === req.id
                            ? 'bg-green-300 cursor-not-allowed text-white'
                            : 'bg-green-600 hover:bg-green-700 text-white'
                        }`}
                      >
                        {changingId === req.id ? 'Accepting…' : 'Accept'}
                      </button>

                      <button
                        onClick={() => handleReject(req.id)}
                        disabled={changingId === req.id}
                        className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                          changingId === req.id
                            ? 'bg-red-300 cursor-not-allowed text-white'
                            : 'bg-red-600 hover:bg-red-700 text-white'
                        }`}
                      >
                        {changingId === req.id ? 'Rejecting…' : 'Reject'}
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
