import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/images/freshcart-logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { tokenContext } from '../../Context/tokenContext';
import { cartContext } from '../../Context/CartContext';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function Navbar() {
    let { token, setToken } = useContext(tokenContext);
    let { numOfCartItems } = useContext(cartContext);
    let navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
    const [menuOpen, setMenuOpen] = useState(false); // ✅ حالة للتحكم في القائمة المنسدلة

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark:bg-gray-900', 'dark:text-white');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('dark:bg-gray-900', 'dark:text-white');
        }
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    function logOut() {
        localStorage.removeItem("userToken");
        setToken(null);
        navigate("/login");
    }

    function toggleDarkMode() {
        setDarkMode(!darkMode);
    }

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md p-4">
            <div className="max-w-screen-xl flex justify-between items-center mx-auto px-4 md:px-6">
            
                <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="/" className="flex items-center">
                        <img src={logo} width={'150px'} alt="Logo" />
                    </a>
                    
                  
                    <button 
                        className="text-gray-700 dark:text-white md:hidden focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

               
                <div className={`md:flex md:items-center md:space-x-6 w-full md:w-auto ${menuOpen ? 'block' : 'hidden'} md:block`}>
                    {token && (
                        <ul className="text-red-500 flex flex-col md:flex-row md:space-x-4 text-lg font-medium mt-4 md:mt-0">
                            <li><NavLink to={'home'} className="text-purple-500 nav-item">Home</NavLink></li>
                            <li><NavLink to={'cart'} className="text-purple-500 nav-item">Cart ({numOfCartItems})</NavLink></li>
                            <li><NavLink to={'products'} className="text-purple-500 nav-item">Products</NavLink></li>
                            <li><NavLink to={'categories'} className="text-purple-500 nav-item">Categories</NavLink></li>
                            <li><NavLink to={'brands'} className="text-purple-500 nav-item">Brands</NavLink></li>
                            <li><NavLink to={'wishlist'} className="text-purple-500 nav-item">WishList</NavLink></li>
                        </ul>
                    )}
                </div>

               
                <div className="flex items-center gap-4">
                    
                 
                    <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                        {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-900" />}
                    </button>

                    <ul className="flex gap-3">
                        {token ? (
                            <li>
                                <span onClick={logOut} className="cursor-pointer text-purple-600 dark:text-purple-400 hover:underline">Logout</span>
                            </li>
                        ) : (
                            <>
                                <li><NavLink to={'register'} className="text-black dark:text-white hover:underline">Register</NavLink></li>
                                <li><NavLink to={'login'} className="text-black dark:text-white hover:underline">Login</NavLink></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
