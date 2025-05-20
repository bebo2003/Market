import React from "react";


import "slick-carousel/slick/slick-theme.css";


export default function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-10 px-4 md:px-20 font-sans transition-colors duration-300">
      {/* Hero Section Styled Like Example */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between mb-16">
        {/* Left Text */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <span className="inline-block text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-full mb-4">
            INTRODUCING A
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">          Smart Renting Platform
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-base mb-6">
            The fastest way to find and rent premium apartments with interactive 3D viewing and real-time updates.
          </p>
          <div className="flex gap-4">
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Documentation
            </button>
            <button className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white px-6 py-2 rounded-full text-sm font-semibold">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Spline 3D */}

        <div className="w-full md:w-1/2 h-[400px] md:h-[500px]  overflow-hidden shadow-lg bg-white dark:bg-gray-800">
          <spline-viewer
            url="https://prod.spline.design/GWZBcFrHJhCwe2mF/scene.splinecode"
            style={{ width: '100%', height: '100%',visibility: 'hidden' ,background: '#111827' }}
          />
        </div>
      </div>

      {/* Slider and static images */}
 

      {/* Featured Listings */}
    

      {/* Call to Action */}
    
    </div>
  );
}
