import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Shared/Loader/Loader';

export default function NewBrands() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getBrands() {
    try {
      const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
      setBrands(data.data);
    } catch (error) {
      console.error("Sorry, try again", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getBrands();
  }, []);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white my-6">
      
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 py-3">
        {brands.map((brand) => (
          <div 
            key={brand._id} 
            className="border p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            <img 
              src={brand.image} 
              alt={brand.name} 
              className="w-full h-32 object-contain rounded-md mx-auto" 
              loading="lazy"
            />
            <h4 className="text-lg font-semibold mt-3 text-center text-gray-900 dark:text-white">
              {brand.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
