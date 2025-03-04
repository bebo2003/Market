import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../../Context/wishlistContext";
import { toast } from "react-toastify";

export default function ProductItem(props) {
  const { wishlist, toggleWishlist } = useWishlist();
  const product = props.product;
  const { imageCover, title, category, price, ratingsAverage, id } = product;
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const [loadingCart, setLoadingCart] = useState(false);
  const [loadingWish, setLoadingWish] = useState(false);

  async function handleAddToCart() {
    setLoadingCart(true);
    props.addProductToCart(id);
    setTimeout(() => {
      toast.success("bteeee5 🛒", { style: { backgroundColor: "purple", color: "white" } });
      setLoadingCart(false);
    }, 1000);
  }

  async function handleToggleWishlist() {
    setLoadingWish(true);
    toggleWishlist(product);
    setTimeout(() => {
      toast.info(isInWishlist ? "  دا مش حدانا في البلد بس ماشي ❤️" : "قشطة 💖", { style: { backgroundColor: "red", color: "white" } });
      setLoadingWish(false);
    }, 1000);
  }

  return (
    <div className="w-1/1 px-3 mb-3">
      <div className="product">
        <Link to={`/productDetails/${id}/${category._id}`}>
          <img src={imageCover} className="w-full h-48 object-cover rounded-lg" alt={title} />
          <span className="text-purple-600">{category.name}</span>
          <h2 className="mb-4 text-purple-600 font-medium">{title.split(" ").splice(0, 2).join(" ")}</h2>
          <div className="flex justify-between mb-4">
            <p className="text-purple-500">{price}  EGP</p>
            <p>
              <i className="fa fa-star rating-color  "></i>
             <span className="text-yellow-300">{ratingsAverage }</span> 
            </p>
          </div>
        </Link>

        <button 
          onClick={handleAddToCart} 
          className="btn bg-purple-600 w-full p-2 text-center text-white rounded-md"
        >
          {loadingCart ? "⌛" : "Add to Cart"}
        </button>

        <button 
          onClick={handleToggleWishlist} 
          className="w-full p-2 text-center"
          disabled={loadingWish}
        >
          {loadingWish ? "⌛" : (isInWishlist ? "❤️" : "🤍")}
        </button>
      </div>
    </div>
  );
}