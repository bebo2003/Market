

import React, { useContext, useEffect, useState } from 'react';
import styles from './RecentProducts.module.css';
import axios from 'axios';
import ProductItem from '../../../Shared/ProductItem/ProductItem';
import Loader from '../../../Shared/Loader/Loader';
import { cartContext } from '../../../../Context/CartContext';
import { toast } from 'react-toastify';

export default function RecentProducts() {
    let [products, setProducts] = useState([]);
    let { addToCart } = useContext(cartContext);

    function getProducts() {
        axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
            .then(({ data }) => {
                console.log(data);
                setProducts(data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    async function addProductToCart(id) {
        let data = await addToCart(id);
        console.log(data);

       
    }

    async function addWishToCart(id) {
        let data = await addToWish(id);
        console.log(data);

       
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            {products.length !== 0 && (
               <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 overflow-hidden'>

                    {products.map(product => (
                        <div key={product.id} className='border border-gray-300 rounded-xl p-4 shadow-md'>
                            <ProductItem addWish={addWishToCart} addProductToCart={addProductToCart} product={product} />
                        </div>
                    ))}
                </div>
            )}
            {products.length === 0 && <Loader />}
        </>
    );
}
