import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("userToken"); // استرجاع التوكن من localStorage

    axios
      .get("https://lavender-eel-222276.hostingersite.com/api/rent/customer/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("Response:", res.data);  // اطبع الـ response كله للتأكد من الشكل

        const rentals = res.data.rentals;

        // فلترة الأوردرات الي حالتها approved
        const approvedOrders = rentals.filter(
          (order) => order.rental_status === "approved"
        );

        setOrders(approvedOrders);  // حفظ البيانات في ال state
      })
      .catch((err) => {
        console.error("Error fetching orders:", err.response?.data || err.message);
      });
  }, []);

  // دالة للانتقال إلى صفحة checkout مع إرسال order كـ prop
  const handleCheckout = (order) => {
    navigate("/checkout", { state: { order } });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-semibold mb-6 flex items-center">
        Approved Orders
      </h2>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-4 md:px-6 py-3">Product</th>
              <th className="px-4 md:px-6 py-3">Description</th>
              <th className="px-4 md:px-6 py-3">Price</th>
              <th className="px-4 md:px-6 py-3">Delivery Address</th>
              <th className="px-4 md:px-6 py-3">Start Date</th>
              <th className="px-4 md:px-6 py-3">End Date</th>
              <th className="px-4 md:px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="flex items-center gap-4 px-4 py-3">
                  <img
                    src={order.item.images?.[0]?.url || "/loading-image.jpg"}
                    className="w-16 h-16 object-cover rounded-md"
                    alt={order.item.title}
                  />
                  <span className="text-sm font-medium">{order.item.title}</span>
                </td>
                <td className="px-4 py-3 text-sm">
                  {order.item.description}
                </td>
                <td className="px-4 py-3 text-sm font-medium">
                  {`${order.item.price} EGP`}
                </td>
                <td className="px-4 py-3 text-sm font-medium">{order.delivery_address || "N/A"}</td>
                <td className="px-4 py-3 text-sm font-medium">
                  {order.start_date ? order.start_date.split("T")[0] : "N/A"}
                </td>
                <td className="px-4 py-3 text-sm font-medium">
                  {order.end_date ? order.end_date.split("T")[0] : "N/A"}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-3">
                    {order.rental_status === "approved" ? (
                      <button
                        onClick={() => handleCheckout(order)} // ارسال order كـ prop
                        className="px-3 py-1 rounded-md text-sm font-medium bg-green-600 hover:bg-green-700 text-white"
                      >
                        Check Out
                      </button>
                    ) : (
                      <span className="text-red-600">{order.item_status}</span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
