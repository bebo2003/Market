import { useWishlist } from "../../Context/wishlistContext";
import { Link } from "react-router-dom";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="text-center my-10">
        <h1 className="text-2xl font-semibold text-gray-700 dark:text-white">
          Your Wishlist is Empty 💔
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Start adding your favorite products!
        </p>
        <Link
          to="/products"
          className="mt-4 inline-block bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-700 transition"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-semibold mb-6 flex items-center">
        💖 Wishlist
      </h2>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-4 md:px-6 py-3">Product</th>
              <th className="px-4 md:px-6 py-3">Price</th>
              <th className="px-4 md:px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((product) => (
              <tr
                key={product.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="flex items-center gap-3 px-4 py-3">
                  <img
                    src={product.imageCover}
                    className="w-16 h-16 object-cover rounded-md"
                    alt={product.title}
                    loading="lazy"
                  />
                  <span className="font-medium text-gray-900 dark:text-white">
                    {product.title}
                  </span>
                </td>
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                  {product.price} EGP
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => toggleWishlist(product)}
                    className="text-red-600 dark:text-red-500 hover:underline flex items-center gap-1"
                  >
                    🗑 Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
