// import React, { useEffect, useState } from 'react';
// import styles from "./Footer.module.css";

// export default function Footer() {
//     const [count, useCount] = useState(0);
//     return (
//         <footer className='bg-[rgb(242,242,242)] py-6'>
//             <div className="container w-full">
//                 <h2 className='text-3xl text-[#212529]'>Get the freshCart App</h2>
//                 <p className='text-[#6d767e] font-light mb-4'>Enjoy a seamless shopping experience with our app!</p>
//                 <div className="flex mb-5">
//                     <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block grow me-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Enter your email" required />
//                     <button className='bg-purple-600 text-white rounded-md p-2 hover:bg-purple-700'>Share App Link</button>
//                 </div>

//                 <div className="partner flex justify-between py-6 border-y-2">
//                     <div className="payment">
//                         <h2 className='text-purple-600 font-semibold'>Payment Partners</h2>
//                     </div>
//                     <div className="app">
//                         <p className='text-purple-600'>Get with freshCart</p>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-[#fafafa] py-10 border-t border-gray-200 dark:bg-gray-900 dark:border-gray-700'>
      <div className="container mx-auto px-6">

        {/* Section: App Promo */}
        <div className="text-center mb-10">
          <h2 className='text-3xl font-bold text-[#212529] dark:text-white'>Get the Rentify App</h2>
          <p className='text-[#6d767e] dark:text-gray-300 font-light mt-2'>
            Enjoy a seamless rental experience with our mobile app!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-4 gap-3">
            <input
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 w-full md:w-1/3 p-2.5"
              placeholder="Enter your email"
              required
            />
            <button className='bg-purple-600 text-white rounded-md px-4 py-2 hover:bg-purple-700 transition-all'>
              Share App Link
            </button>
          </div>
        </div>

        {/* Section: Payment + Social */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-gray-200 dark:border-gray-700">

          {/* Payment Partners */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className='text-lg text-purple-600 font-semibold'>Payment Partners</h2>
            <div className="flex gap-4 mt-3 justify-center md:justify-start flex-wrap">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="w-10 md:w-12" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" className="w-10 md:w-12" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="w-10 md:w-12" />
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h2 className='text-lg text-purple-600 font-semibold'>Follow Us</h2>
            <div className="flex gap-4 mt-3 justify-center">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 transition">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 transition">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 transition">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Section: Copyright */}
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-8">
          &copy; {new Date().getFullYear()} Rentify. Crafted with 💜 by Abdelrahman Mohamed.
        </div>
      </div>
    </footer>
  );
}
