// import React, { useContext, useEffect, useState } from 'react';
// import { cartContext } from '../../Context/CartContext';
// import { Link } from 'react-router-dom';
// import Loader from '../Shared/Loader/Loader';

// export default function Cart() {
//     const { cartDetails, removeProduct, updateCount } = useContext(cartContext);
//     const [cart, setCart] = useState(null);

//     // ✅ تحديث السلة عند أي تغيير في cartDetails
//     useEffect(() => {
//         setCart(cartDetails);
//     }, [cartDetails]);  // 👈 تحديث عند تغيير بيانات السلة

//     async function deleteProduct(id) {
//         await removeProduct(id);
//     }

//     async function updateItems(id, count) {
//         if (count > 0) {
//             await updateCount(id, count);
//         }
//     }

//     if (!cart) {
//         return <Loader />;
//     }

//     if (cart?.data?.products?.length === 0) {
//         return (
//             <div className="text-center my-10">
//                 <h1 className="text-2xl font-semibold text-gray-700 dark:text-white">Your Cart is Empty 🛒</h1>
//                 <p className="text-gray-500 dark:text-gray-400 mt-2">Start shopping now!</p>
//                 <Link to="/products" className="mt-4 inline-block bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-700">
//                     Browse Products
//                 </Link>
//             </div>
//         );
//     }

//     return (
//         <div className="container mx-auto px-4 py-6">
//             <div className="flex flex-col md:flex-row justify-between items-center my-7">
//                 <h2 className="text-2xl font-semibold">Total Items: <span className="text-purple-600">{cart.numOfCartItems}</span></h2>
//                 <h2 className="text-2xl font-semibold">Total Price: <span className="text-purple-600">${cart.data.totalCartPrice}</span></h2>
//             </div>

//             <div className="overflow-x-auto shadow-md rounded-lg">
//                 <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                     <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-100">
//                         <tr>
//                             <th className="px-4 md:px-6 py-3">Product</th>
                    
//                             <th className="px-4 md:px-6 py-3">Price</th>
//                             <th className="px-4 md:px-6 py-3">Reject</th>
//                             <th className="px-4 md:px-6 py-3">Accept</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {cart.data.products.map((product) => (
//                             <tr key={product.product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                                 <td className="flex items-center gap-3 px-4 py-3">
//                                     <img src={product.product.imageCover} className="w-16 h-16 object-cover rounded-md" alt="Product" loading="lazy" />
//                                     <span className="font-medium text-gray-900 dark:text-white">{product.product.title}</span>
//                                 </td>
//                                 {/* <td className="px-4 py-3">
//                                     <div className="flex items-center">
//                                         <button 
//                                             onClick={() => updateItems(product.product._id, product.count - 1)} 
//                                             className="h-8 w-8 flex items-center justify-center text-gray-500 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
//                                             -
//                                         </button>
//                                         <span className="mx-4 text-lg">{product.count}</span>
//                                         <button 
//                                             onClick={() => updateItems(product.product._id, product.count + 1)} 
//                                             className="h-8 w-8 flex items-center justify-center text-gray-500 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
//                                             +
//                                         </button>
//                                     </div>
//                                 </td> */}
//                                 <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">${product.price}</td>
//                                 <td className="px-4 py-3">
//                                     <button onClick={() => deleteProduct(product.product._id)} className="text-red-600 dark:text-red-500 hover:underline">
//                                         Reject
//                                     </button>
//                                 </td>

//                                 <td className="px-4 py-3">
//                                     <button onClick={() => deleteProduct(product.product._id)} className="text-red-600 dark:text-red-500 hover:underline">
//                                         Accept
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             <Link to="/checkout" className="block text-center bg-purple-600 text-white p-3 rounded-md my-6 hover:bg-purple-700">
//                 Proceed to Checkout
//             </Link>
//         </div>
//     );
// }

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Loader from '../Shared/Loader/Loader';
// import { toast } from 'react-toastify';

// export default function RentRequestPage() {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const userType = localStorage.getItem('userType'); // "customer" or "lender"
//   const userId = localStorage.getItem('userId');

//   // Fetch requests when page loads
//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   async function fetchRequests() {
//     try {
//       setLoading(true);
//       let endpoint = '';

//       if (userType === 'customer') {
//         endpoint = `/api/rent-requests/customer/${userId}`;
//       } else if (userType === 'lender') {
//         endpoint = `/api/rent-requests/lender/${userId}`;
//       }

//       const { data } = await axios.get(endpoint);
//       setRequests(data.requests || []);
//     } catch (err) {
//       toast.error("حدث خطأ أثناء جلب البيانات", { theme: "dark" });
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function handleStatusChange(requestId, status) {
//     try {
//       await axios.patch(`/api/rent-requests/${requestId}`, { status });
//       toast.success(`تم ${status === 'accepted' ? 'قبول' : 'رفض'} الطلب`, { theme: 'dark' });
//       fetchRequests(); // إعادة تحميل الطلبات بعد التحديث
//     } catch (err) {
//       toast.error("فشل في تحديث الطلب", { theme: "dark" });
//     }
//   }

//   if (loading) return <Loader />;

//   if (requests.length === 0) {
//     return (
//       <div className="text-center mt-10">
//         <h2 className="text-xl font-semibold dark:text-white">
//           لا توجد طلبات {userType === 'user' ? 'قمت بها' : 'جديدة من العملاء'}.
//         </h2>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h1 className="text-2xl font-bold mb-6 dark:text-white">طلبات الإيجار</h1>

//       <div className="grid gap-6">
//         {requests.map((req) => (
//           <div key={req._id} className="p-4 rounded-lg shadow-md bg-white dark:bg-gray-800">
//             <h2 className="text-xl font-semibold dark:text-white mb-2">{req.productTitle}</h2>
//             <p className="text-gray-700 dark:text-gray-300">من: {req.customerName}</p>
//             <p className="text-gray-700 dark:text-gray-300">الحالة: 
//               <span className={`font-bold ml-2 ${
//                 req.status === 'pending' ? 'text-yellow-500' :
//                 req.status === 'accepted' ? 'text-green-500' : 'text-red-500'
//               }`}>
//                 {req.status}
//               </span>
//             </p>

//             {/* Buttons only for lender */}
//             {userType === 'lender' && req.status === 'pending' && (
//               <div className="mt-4 flex space-x-4">
//                 <button 
//                   onClick={() => handleStatusChange(req._id, 'accepted')}
//                   className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
//                 >
//                   Accept
//                 </button>
//                 <button 
//                   onClick={() => handleStatusChange(req._id, 'rejected')}
//                   className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
//                 >
//                   Reject
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Shared/Loader/Loader';
import { toast } from 'react-toastify';

export default function MyRentRequestsTable() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cancelingId, setCancelingId] = useState(null);
  const token = localStorage.getItem('userToken');

  useEffect(() => {
    fetchRequests();
  }, []);

  async function fetchRequests() {
    try {
      setLoading(true);
      const { data } = await axios.get(
        'https://lavender-eel-222276.hostingersite.com/api/rent/pending-requests',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRequests(data.pending_requests || []);
    } catch (err) {
      toast.error('فشل في تحميل الطلبات', { theme: 'dark' });
    } finally {
      setLoading(false);
    }
  }

  function confirmCancelPopup(rentId) {
    toast.info(
      ({ closeToast }) => (
        <div className="flex flex-col gap-2">
          <p>دا مش حدانا ف البلد بس ماشي </p>
          <div className="flex justify-end gap-3">
            <button
              onClick={() => {
                cancelRequest(rentId);
                closeToast();
              }}
              className="px-3 py-1 rounded-md text-sm font-medium bg-red-600 hover:bg-red-700 text-white"
            >
             مبلاااش
            </button>
            <button
              onClick={closeToast}
              className="px-3 py-1 rounded-md text-sm font-medium bg-gray-400 hover:bg-gray-500 text-white"
            >
              بحبك
            </button>
          </div>
        </div>
      ),
      {
        position: 'top-center',
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
        draggable: false,
        theme: 'dark',
      }
    );
  }

  async function cancelRequest(rentId) {
    try {
      setCancelingId(rentId);
      await axios.delete(
        `https://lavender-eel-222276.hostingersite.com/api/rent/cancel-request/${rentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(' ماااشي يفلااح✅', { theme: 'dark' });
      fetchRequests();
    } catch (err) {
      toast.error(' احسسسسسسسسن❌', { theme: 'dark' });
    } finally {
      setCancelingId(null);
    }
  }

  if (loading) return <Loader />;

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-semibold mb-6 flex items-center">
        My Rent Requests
      </h2>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-4 py-3">Proudcut</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr
                key={req.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-4 py-3 font-medium">{req.item?.title}</td>
                <td className="px-4 py-3">{req.item?.description}</td>
                <td className="px-4 py-3">{req.item?.price} EGP</td>
                <td className="px-4 py-3 font-semibold text-yellow-500">
                  {req.rental_status}
                </td>
                <td className="px-4 py-3 text-sm">
                  {new Date(req.rented_time).toLocaleString()}
                </td>
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => confirmCancelPopup(req.id)}
                    disabled={cancelingId === req.id}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition duration-200 ${
                      cancelingId === req.id
                        ? 'bg-red-300 cursor-not-allowed text-white'
                        : 'bg-red-600 hover:bg-red-700 text-white'
                    }`}
                  >
                    {cancelingId === req.id ? 'Canlling...' : 'Cancel'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
