import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ClipLoader from 'react-spinners/ClipLoader';
import { cartContext } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Checkout() {
  const [isCallingApI, setIsCallingApI] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const navigate = useNavigate();
  
  let { cashOnDelivery, onlinePayment } = useContext(cartContext);

  const initialValues = {
    details: '',
    phone: '',
    city: '',
  };

  const validationSchema = Yup.object().shape({
    details: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
  });

  const shippingForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: callPayment,
  });

  async function callPayment(values) {
    try {
      setIsCallingApI(true);
      if (paymentMethod === 'online') {
        let response = await onlinePayment(values);
        window.location.href = response.session.url;
      } else if (paymentMethod === 'cash') {
        await cashOnDelivery(values);
        toast.success('Payment successful!', { position: 'top-right', autoClose: 2000 });
        setTimeout(() => navigate('/'), 2000);
      }
    } catch (error) {
      setIsCallingApI(false);
      setApiError('Payment failed. Please try again.');
    }
  }

  return (
    <form onSubmit={shippingForm.handleSubmit} className="w-full max-w-lg mx-auto my-5 p-6 border border-gray-300 rounded-lg shadow-lg bg-white dark:bg-gray-900">
      <h1 className='text-3xl sm:text-4xl text-gray-700 dark:text-gray-300 mb-6 text-center'>Shipping Info</h1>
      {apiError && (
        <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {apiError}
        </div>
      )}
      
      {['details', 'phone', 'city'].map((field) => (
        <div key={field} className="relative z-0 w-full mb-5 group">
          <input 
            type="text"
            name={field}
            onBlur={shippingForm.handleBlur}
            value={shippingForm.values[field]}
            onChange={shippingForm.handleChange}
            id={field}
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-md appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
            placeholder=" "
            required
          />
          <label htmlFor={field} className="absolute text-sm text-gray-500 dark:text-gray-400 top-3 left-3 transform scale-100 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-purple-600">
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          {shippingForm.errors[field] && shippingForm.touched[field] && (
            <div className="p-2 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
              {shippingForm.errors[field]}
            </div>
          )}
        </div>
      ))}
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-5">
        <label className="flex items-center cursor-pointer">
          <input type="radio" name="payment" value="online" onChange={() => setPaymentMethod('online')} className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
          <span className='ml-3 text-gray-700 dark:text-gray-300'>Online Payment</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input type="radio" name="payment" value="cash" onChange={() => setPaymentMethod('cash')} className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
          <span className='ml-3 text-gray-700 dark:text-gray-300'>Cash on Delivery</span>
        </label>
      </div>
      
      {isCallingApI ? (
        <div className='w-full flex justify-center'>
          <div className='bg-purple-600 p-3 rounded-md flex items-center'>
            <ClipLoader className='text-purple-500' size={20} />
          </div>
        </div>
      ) : (
        <button type="submit" disabled={!paymentMethod} className="text-white bg-purple-600 hover:bg-purple-700 block mx-auto font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800">
          Pay Now
        </button>
      )}
    </form>
  );
}
