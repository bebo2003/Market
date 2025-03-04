import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import axios from 'axios';
import Loader from '../Shared/Loader/Loader';
import { cartContext } from '../../Context/CartContext';
import { toast } from 'react-toastify';

export default function ProductDetails() {
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  const { addToCart } = useContext(cartContext);
  const [wishlist, setWishlist] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  async function addProductToCart(productId) {
    let data = await addToCart(productId);
    if (data.status === "success") {
      toast("bteeee5 🛒", { theme: "dark", type: "success" });
    }
  }

  function addToWishList(product) {
    if (!wishlist.some(item => item.id === product.id)) {
      setWishlist([...wishlist, product]);
      toast("قشطة 💖", { theme: "dark", type: "info" });
    } else {
      toast("  دا مش حدانا في البلد بس ماشي ❤️", { theme: "dark", type: "warning" });
    }
  }

  async function getProductDetails() {
    try {
      const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
      setDetails(data.data);
      fetchRelatedProducts(data.data.category._id); // جلب المنتجات المشابهة بعد الحصول على المنتج الأساسي
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchRelatedProducts(categoryId) {
    try {
      const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?category=${categoryId}`);
      setRelatedProducts(data.data.filter(product => product.id !== id)); // لا تُظهر المنتج الحالي في القائمة
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProductDetails();
  }, [id]);

  function handleProductClick(newProduct) {
    setRelatedProducts([details, ...relatedProducts.filter(p => p.id !== newProduct.id)]);
    setDetails(newProduct);
    fetchRelatedProducts(newProduct.category._id);
  }

  return (
    <>
      {details ? (
        <div className="main-layout flex flex-col md:flex-row items-center py-16">
          <div className="w-full sm:w-4/12 px-4">
            <Slider {...settings}>
              {details?.images.map((src, index) => (
                <img key={index} src={src} alt={details?.title} className="w-full rounded-lg shadow-md" />
              ))}
            </Slider>
          </div>
          
          <div className="w-full sm:w-8/12 px-4 mt-6 md:mt-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">{details?.title}</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{details?.description}</p>
            <span className="text-purple-600 font-semibold">{details?.category?.name}</span>

            <div className="flex justify-between items-center my-4">
              <p className="text-lg font-bold text-purple-600">{details?.price} EGP</p>
              <p className="text-lg flex items-center">
                <i className="fa fa-star text-yellow-500 mr-1"></i> {details?.ratingsAverage}
              </p>
            </div>

            <div className="flex space-x-4">
              <button 
                onClick={() => addProductToCart(details.id)} 
                className="bg-purple-600 hover:bg-purple-700 w-full p-3 text-center text-white rounded-md transition duration-300 ease-in-out"
              >
                Add to Cart
              </button>

              <button 
                onClick={() => addToWishList(details)} 
                className="bg-gray-200 hover:bg-gray-300 p-3 rounded-md transition duration-300 ease-in-out flex items-center"
              >
                <i className={`fa fa-heart text-${wishlist.some(item => item.id === details.id) ? 'red' : 'gray'}-500 text-xl`}></i>
              </button>
            </div>
          </div>
        </div>
      ) : <Loader />}

      <h2 className="text-3xl sm:text-4xl font-bold text-center my-10 text-gray-800 dark:text-white">Related Products</h2>
      
      {relatedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {relatedProducts.map((product) => (
            <div 
              key={product.id} 
              onClick={() => handleProductClick(product)} 
              className="cursor-pointer bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-2">{product.title}</h3>
              <p className="text-purple-600 font-bold">{product.price} EGP</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400">No related products available.</p>
      )}
    </>
  );
}
