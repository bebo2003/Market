import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../../Shared/Loader/Loader";

export default function NewCategories() {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    try {
      const { data } = await axios.get(`https://lavender-eel-222276.hostingersite.com/api/categories`);
      if (Array.isArray(data)) {
        setCategories(data);
      } else {
        console.error("Invalid data format:", data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error.response?.data || error.message);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      {categories.length > 0 ? (
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white my-8">
            Explore Our Categories
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 py-3">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center p-4"
              >
                <div className="w-full h-32 flex items-center justify-center">
                  <img
                    src="/default.jpg" // استبدلها بـ category.image لو متوفر
                    alt={category.name}
                    className="max-h-full w-full object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
                <h4 className="mt-4 text-base md:text-lg font-semibold text-gray-800 dark:text-white capitalize">
                  {category.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
