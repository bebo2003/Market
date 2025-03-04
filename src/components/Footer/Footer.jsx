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

import React, { useEffect, useState } from 'react';
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className='bg-[rgb(242,242,242)] py-10 border-t-2 border-gray-300'>
      <div className="container mx-auto px-6">


        <div className="text-center mb-8">
          <h2 className='text-3xl font-bold text-[#212529]'>Get the freshCart App</h2>
          <p className='text-[#6d767e] font-light mt-2'>
            Enjoy a seamless shopping experience with our app!
          </p>
          <div className="flex justify-center mt-4">
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 w-1/3 p-2.5"
              placeholder="Enter your email"
              required
            />
            <button className='bg-purple-600 text-white rounded-md p-2 ml-3 hover:bg-purple-700'>
              Share App Link
            </button>
          </div>
        </div>


        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t-2">


          <div className="mb-4 md:mb-0">
            <h2 className='text-lg text-purple-600 font-semibold'>Payment Partners</h2>
            <div className="flex gap-4 mt-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="w-12" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" className="w-12" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="w-12" />

            </div>
          </div>


          <div>
            <h2 className='text-lg text-purple-600 font-semibold'>Follow Us</h2>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-gray-500 hover:text-purple-600">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Section: Copyright */}
        <div className="text-center text-gray-500 text-sm mt-6">
          &copy; 2024 FreshCart. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
