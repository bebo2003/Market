import React, { useContext, useEffect, useState } from 'react';
import { cartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import Loader from '../Shared/Loader/Loader';

export default function Cart() {
    const { cartDetails, removeProduct, updateCount } = useContext(cartContext);
    const [cart, setCart] = useState(null);

    // ✅ تحديث السلة عند أي تغيير في cartDetails
    useEffect(() => {
        setCart(cartDetails);
    }, [cartDetails]);  // 👈 تحديث عند تغيير بيانات السلة

    async function deleteProduct(id) {
        await removeProduct(id);
    }

    async function updateItems(id, count) {
        if (count > 0) {
            await updateCount(id, count);
        }
    }

    if (!cart) {
        return <Loader />;
    }

    if (cart?.data?.products?.length === 0) {
        return (
            <div className="text-center my-10">
                <h1 className="text-2xl font-semibold text-gray-700 dark:text-white">Your Cart is Empty 🛒</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Start shopping now!</p>
                <Link to="/products" className="mt-4 inline-block bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-700">
                    Browse Products
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center my-7">
                <h2 className="text-2xl font-semibold">Total Items: <span className="text-purple-600">{cart.numOfCartItems}</span></h2>
                <h2 className="text-2xl font-semibold">Total Price: <span className="text-purple-600">${cart.data.totalCartPrice}</span></h2>
            </div>

            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-4 md:px-6 py-3">Product</th>
                            <th className="px-4 md:px-6 py-3">Quantity</th>
                            <th className="px-4 md:px-6 py-3">Price</th>
                            <th className="px-4 md:px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.data.products.map((product) => (
                            <tr key={product.product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="flex items-center gap-3 px-4 py-3">
                                    <img src={product.product.imageCover} className="w-16 h-16 object-cover rounded-md" alt="Product" loading="lazy" />
                                    <span className="font-medium text-gray-900 dark:text-white">{product.product.title}</span>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center">
                                        <button 
                                            onClick={() => updateItems(product.product._id, product.count - 1)} 
                                            className="h-8 w-8 flex items-center justify-center text-gray-500 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                                            -
                                        </button>
                                        <span className="mx-4 text-lg">{product.count}</span>
                                        <button 
                                            onClick={() => updateItems(product.product._id, product.count + 1)} 
                                            className="h-8 w-8 flex items-center justify-center text-gray-500 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">${product.price}</td>
                                <td className="px-4 py-3">
                                    <button onClick={() => deleteProduct(product.product._id)} className="text-red-600 dark:text-red-500 hover:underline">
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Link to="/checkout" className="block text-center bg-purple-600 text-white p-3 rounded-md my-6 hover:bg-purple-700">
                Proceed to Checkout
            </Link>
        </div>
    );
}
