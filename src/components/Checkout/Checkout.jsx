import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ClipLoader from 'react-spinners/ClipLoader';
import { toast } from 'react-toastify';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51RJkblDAuyRtx6Il19fwT1KZa69jmf3qhUTFvvy4qg3D6v3A4OGk26UtVEBKto9UBvHwBZEPb1FiCaxdbMxpTjvg00d2sBaOrR');

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { order } = location.state || {};

  const [isCallingApi, setIsCallingApi] = useState(false);

  const token = localStorage.getItem('userToken');

  const initialValues = {
    item_id: order?.item?.id || '',
    start_date: '',
    end_date: '',
    delivery_address: order?.delivery_address || '',
  };

  const validationSchema = Yup.object().shape({
    item_id: Yup.number().required('Item ID is required'),
    start_date: Yup.string().required('Start date is required'),
    end_date: Yup.string().required('End date is required'),
    delivery_address: Yup.string().required('Delivery address is required'),
  });

  const shippingForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  async function handleSubmit(values) {
    if (!token) {
      toast.error('User not authenticated. Please login again.', { autoClose: 3000 });
      return;
    }

    setIsCallingApi(true);

    try {
      // ارسال بيانات الطلب لتسجيل الإيجار
      const { data } = await axios.post(
        'https://lavender-eel-222276.hostingersite.com/api/rent',
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('Rent API response:', data);

      const rental_id = data.rent?.id;
      const item_id = data.rent?.item_id;

      if (!rental_id || !item_id) {
        toast.error('Rental ID or Item ID is missing in API response. Please try again.', { autoClose: 3000 });
        setIsCallingApi(false);
        return;
      }

      toast.success('Request sent successfully!', { autoClose: 2000 });

      // طلب إنشاء جلسة Stripe مع الحقول الصحيحة rental_id و item_id
      const sessionResponse = await axios.post(
        'https://lavender-eel-222276.hostingersite.com/api/rent/session',
        {
          rental_id: rental_id,
          item_id: item_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('Stripe session response:', sessionResponse);

      const sessionId = sessionResponse.data.session_id;

      if (!sessionId) {
        toast.error('Session ID is missing from Stripe response.', { autoClose: 3000 });
        setIsCallingApi(false);
        return;
      }

      // تحويل المستخدم إلى صفحة الدفع الخاصة بـ Stripe
      const stripe = await stripePromise;
      const result = await stripe.redirectToCheckout({ sessionId });

      if (result.error) {
        toast.error(result.error.message, { autoClose: 3000 });
      }
    } catch (error) {
      console.error('Payment error:', error);

      if (error.response?.data?.message) {
        toast.error(error.response.data.message, { autoClose: 3000 });
      } else if (error.message) {
        toast.error(error.message, { autoClose: 3000 });
      } else {
        toast.error('Something went wrong. Please try again.', { autoClose: 3000 });
      }
    } finally {
      setIsCallingApi(false);
    }
  }

  return (
    <form
      onSubmit={shippingForm.handleSubmit}
      className="w-full max-w-lg mx-auto my-5 p-6 border border-gray-300 rounded-lg shadow-lg bg-white dark:bg-gray-900"
    >
      <h1 className="text-3xl text-center text-gray-800 dark:text-gray-200 mb-6">Rent an Item</h1>

      <div className="mb-4">
        <label htmlFor="item_id" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Item
        </label>
        <input
          type="text"
          name="item_id"
          id="item_id"
          value={order?.item?.title || ''}
          disabled
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />
      </div>

      {['start_date', 'end_date', 'delivery_address'].map((field) => (
        <div key={field} className="mb-4">
          <label
            htmlFor={field}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 capitalize"
          >
            {field.replace('_', ' ')}
          </label>
          <input
            type={field.includes('date') ? 'date' : 'text'}
            name={field}
            id={field}
            value={shippingForm.values[field]}
            onChange={shippingForm.handleChange}
            onBlur={shippingForm.handleBlur}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />
          {shippingForm.errors[field] && shippingForm.touched[field] && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{shippingForm.errors[field]}</p>
          )}
        </div>
      ))}

      {isCallingApi ? (
        <div className="w-full flex justify-center">
          <div className="bg-purple-600 p-3 rounded-md flex items-center">
            <ClipLoader className="text-purple-500" size={20} />
          </div>
        </div>
      ) : (
        <button
          type="submit"
          className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          disabled={isCallingApi}
        >
          Submit Rent Request
        </button>
      )}
    </form>
  );
}
