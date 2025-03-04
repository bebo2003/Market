
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

export default function PopularCategory() {
    const [categories, setCategories] = useState([]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    async function getCategories() {
        try {
            const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
            setCategories(data.data);
        } catch (error) {
            console.error("Error fetching categories", error);
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div className='py-20 px-5 bg-gray-100 overflow-hidden '>
            <h2 className='mb-8 text-3xl font-bold text-center text-gray-800'>Shop Popular Categories</h2>
            <Slider {...settings}>
                {categories.map(category => (
                    <div key={category._id} className='p-4'>
                        <div className='bg-white shadow-lg rounded-2xl overflow-hidden text-center transform transition duration-300 hover:scale-105'>
                            <img src={category.image} className='w-full h-48 object-cover' alt={category.name} />
                            <div className='p-4'>
                                <h4 className='text-lg font-semibold text-gray-700'>{category.name}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}