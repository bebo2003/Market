// import React, { useContext, useEffect, useState } from 'react';
// import logo from '../../assets/images/freshcart-logo.svg';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { tokenContext } from '../../Context/tokenContext';
// import { cartContext } from '../../Context/CartContext';
// import { Moon, Sun, Menu, X } from 'lucide-react';

// export default function Navbar() {
//     let { token, setToken } = useContext(tokenContext);
//     let { numOfCartItems } = useContext(cartContext);
//     let navigate = useNavigate();
//     const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
//     const [menuOpen, setMenuOpen] = useState(false); // ✅ حالة للتحكم في القائمة المنسدلة

//     useEffect(() => {
//         if (darkMode) {
//             document.documentElement.classList.add('dark');
//             document.body.classList.add('dark:bg-gray-900', 'dark:text-white');
//         } else {
//             document.documentElement.classList.remove('dark');
//             document.body.classList.remove('dark:bg-gray-900', 'dark:text-white');
//         }
//         localStorage.setItem("darkMode", darkMode);
//     }, [darkMode]);

//     function logOut() {
//         localStorage.removeItem("userToken");
//         setToken(null);
//         navigate("/login");
//     }

//     function toggleDarkMode() {
//         setDarkMode(!darkMode);
//     }

//     return (
//         <nav className="bg-white dark:bg-gray-900 shadow-md p-4">
//             <div className="max-w-screen-xl flex justify-between items-center mx-auto px-4 md:px-6">

//                 <div className="flex items-center justify-between w-full md:w-auto">
//                     <a href="/" className="flex items-center">
//                         <img src={logo} width={'150px'} alt="Logo" />
//                     </a>


//                     <button 
//                         className="text-gray-700 dark:text-white md:hidden focus:outline-none"
//                         onClick={() => setMenuOpen(!menuOpen)}
//                     >
//                         {menuOpen ? <X size={28} /> : <Menu size={28} />}
//                     </button>
//                 </div>


//                 <div className={`md:flex md:items-center md:space-x-6 w-full md:w-auto ${menuOpen ? 'block' : 'hidden'} md:block`}>
//                     {token && (
//                         <ul className="text-red-500 flex flex-col md:flex-row md:space-x-4 text-lg font-medium mt-4 md:mt-0">
//                             <li><NavLink to={'home'} className="text-purple-500 nav-item">Home</NavLink></li>
//                             <li><NavLink to={'cart'} className="text-purple-500 nav-item">Cart ({numOfCartItems})</NavLink></li>
//                             <li><NavLink to={'products'} className="text-purple-500 nav-item">Products</NavLink></li>
//                             <li><NavLink to={'categories'} className="text-purple-500 nav-item">Categories</NavLink></li>
//                             <li><NavLink to={'brands'} className="text-purple-500 nav-item">Brands</NavLink></li>
//                             <li><NavLink to={'wishlist'} className="text-purple-500 nav-item">WishList</NavLink></li>
//                             <li><NavLink to={'recent'} className="text-purple-500 nav-item">Recent</NavLink></li>
//                         </ul>
//                     )}
//                 </div>


//                 <div className="flex items-center gap-4">


//                     <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
//                         {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-900" />}
//                     </button>

//                     <ul className="flex gap-3">
//                         {token ? (
//                             <li>
//                                 <span onClick={logOut} className="cursor-pointer text-purple-600 dark:text-purple-400 hover:underline">Logout</span>
//                             </li>
//                         ) : (
//                             <>
//                                 <li><NavLink to={'register'} className="text-black dark:text-white hover:underline">Register</NavLink></li>
//                                 <li><NavLink to={'login'} className="text-black dark:text-white hover:underline">Login</NavLink></li>
//                             </>
//                         )}
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }
// import React, { useContext, useEffect, useState } from 'react';
// import logo from '../../assets/images/rentify_logo_no_bg.png';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { tokenContext } from '../../Context/tokenContext';
// import { CartContext } from '../../Context/CartContext';
// import { Moon, Sun, Menu, X, User, Briefcase } from 'lucide-react';

// export default function Navbar() {
//     let { token, setToken } = useContext(tokenContext);
//     let { numOfCartItems } = useContext(CartContext);
//     let navigate = useNavigate();
//     const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [userType, setUserType] = useState(localStorage.getItem("userType"));

//     useEffect(() => {
//         if (darkMode) {
//             document.documentElement.classList.add('dark');
//             document.body.classList.add('dark:bg-gray-900', 'dark:text-white');
//         } else {
//             document.documentElement.classList.remove('dark');
//             document.body.classList.remove('dark:bg-gray-900', 'dark:text-white');
//         }
//         localStorage.setItem("darkMode", darkMode);
//     }, [darkMode]);

//     useEffect(() => {
//         const userData = JSON.parse(localStorage.getItem("customer" ));
//         if (userData && userData.type) {
//             setUserType(userData.type);
//             localStorage.setItem("userType", userData.type);
//         }

//     }, [token]);

//     function logOut() {
//         localStorage.removeItem("userToken");
//         localStorage.removeItem("customer" );
//         localStorage.removeItem("userType");
//         setToken(null);
//         setUserType(null);
//         navigate("/login");
//     }

//     function toggleDarkMode() {
//         setDarkMode(!darkMode);
//     }

//     return (
//         <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-gray-700 p-4 top-0 left-0 right-0 z-50 sticky">
//             <div className="max-w-screen-xl flex justify-between items-center mx-auto px-4 md:px-6">
//                 {/* Logo */}
//                 <div className="flex items-center justify-between w-full md:w-auto">
//                     <a href="/" className="flex items-center gap-2">
//                         <img src={logo} width="100px" alt="Logo" />
//                     </a>
//                     <button
//                         className="text-gray-700 dark:text-white md:hidden focus:outline-none"
//                         onClick={() => setMenuOpen(!menuOpen)}
//                     >
//                         {menuOpen ? <X size={28} /> : <Menu size={28} />}
//                     </button>
//                 </div>

//                 {/* Links */}
//                 <div className={`md:flex md:items-center md:space-x-6 w-full md:w-auto ${menuOpen ? 'block' : 'hidden'} md:block`}>
//                     {token && (
//                         <ul className="flex flex-col md:flex-row md:space-x-6 text-md font-medium mt-4 md:mt-0">
//                             {[
//                                 { to: 'home', label: 'Home' },
//                                 { to: 'rent', label: `Rent (${numOfCartItems})` },
//                                 { to: 'products', label: 'Products' },
//                                 { to: 'categories', label: 'Categories' },
//                                 { to: 'brands', label: 'Brands' },
//                                 { to: 'wishlist', label: 'WishList' },
//                                 { to: 'pento', label: 'My proudcut' }
//                             ].map(link => (
//                                 <li key={link.to}>
//                                     <NavLink
//                                         to={link.to}
//                                         className={({ isActive }) =>
//                                             `transition duration-200 px-2 py-1 rounded-md ${isActive
//                                                 ? "text-purple-700 dark:text-purple-300 font-bold border-b-2 border-purple-600"
//                                                 : "text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-white"
//                                             }`
//                                         }
//                                     >
//                                         {link.label}
//                                     </NavLink>
//                                 </li>
//                             ))}
//                         </ul>

//                     )}
//                 </div>

//                 {/* Right Icons & User Info */}
//                 <div className="flex items-center gap-4">
//                     {/* User Badge */}
//                     {userType && (
//                         <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-xs font-bold shadow-md uppercase tracking-wide bg-gradient-to-r from-purple-600 to-indigo-700 animate-pulse">
//                             {userType === "customer" ? <User size={14} /> : <Briefcase size={14} />}
//                             {userType}
//                         </div>
//                     )}

//                     {/* Dark Mode Toggle */}
//                     <button
//                         onClick={toggleDarkMode}
//                         className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 shadow hover:scale-105 transition"
//                     >
//                         {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-900 dark:text-white" />}
//                     </button>

//                     {/* Auth */}
//                     <ul className="flex gap-3 items-center">
//                         {token ? (
//                             <li>
//                                 <span onClick={logOut} className="cursor-pointer text-purple-700 dark:text-purple-300 hover:underline font-medium">Logout</span>
//                             </li>
//                         ) : (
//                             <>
//                                 <li>
//                                     <NavLink
//                                         to="register"
//                                         className="bg-purple-600 text-white px-4 py-1.5 rounded-full text-sm hover:bg-purple-700 transition"
//                                     >
//                                         Register
//                                     </NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink
//                                         to="login"
//                                         className="bg-gray-800 text-white px-4 py-1.5 rounded-full text-sm hover:bg-gray-900 transition"
//                                     >
//                                         Login
//                                     </NavLink>
//                                 </li>
//                             </>
//                         )}
//                     </ul>
//                 </div>
//             </div>
//         </nav>


//     );
// }
import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/images/rentify_logo_no_bg.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { tokenContext } from '../../Context/tokenContext';
import { CartContext } from '../../Context/CartContext';
import { Moon, Sun, Menu, X, User, Briefcase } from 'lucide-react';

export default function Navbar() {
    let { token, setToken } = useContext(tokenContext);
    let { numOfCartItems } = useContext(CartContext);
    let navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
    const [menuOpen, setMenuOpen] = useState(false);
    const [userType, setUserType] = useState(localStorage.getItem("userType"));

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

    useEffect(() => {
        const storedUserType = localStorage.getItem("userType");
        if (storedUserType === "customer" || storedUserType === "lender") {
            setUserType(storedUserType);
        }
    }, [token]);

    function logOut() {
        localStorage.removeItem("userToken");
        localStorage.removeItem("customer");
        localStorage.removeItem("lender");
        localStorage.removeItem("userType");
        setToken(null);
        setUserType(null);
        navigate("/login");
    }

    function toggleDarkMode() {
        setDarkMode(!darkMode);
    }

    return (
 <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-gray-700 p-3 md:p-4 top-0 left-0 right-0 z-50 ">
  <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto px-4 md:px-6">
    {/* Logo and Toggle */}
    <div className="flex items-center justify-between w-full md:w-auto">
      <a href="/" className="flex items-center gap-2">
        <img src={logo} width="130" alt="Logo" />
      </a>
      <button
        className="text-gray-700 dark:text-white md:hidden focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>

    {/* Links */}
    <div className={`w-full md:flex md:items-center md:space-x-6 md:w-auto ${menuOpen ? 'block' : 'hidden'}`}>
      {token && (
        <ul className="flex flex-col md:flex-row gap-2 md:gap-6 mt-4 md:mt-0 text-md font-medium">
          {[
            { to: 'home', label: 'Home', show: true },
            { to: 'about', label: 'About', show: true },
            { to: 'rent', label: `Rent`, show: userType !== 'lender' },
            { to: 'products', label: 'Products', show: true },
            { to: 'categories', label: 'Categories', show: true },
            { to: 'brands', label: 'Histor', show: userType !== 'lender' },
            { to: 'wishlist', label: 'Lender', show: userType !== 'customer' },
            { to: 'chatpage', label: 'Chat', show: true },
            { to: 'pento', label: 'My product', show: userType !== 'customer' },
          ]
            .filter(link => link.show)
            .map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `transition duration-200 px-2 py-1 rounded-md block ${
                      isActive
                        ? "text-purple-700 dark:text-purple-300 font-bold border-b-2 border-purple-600"
                        : "text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
        </ul>
      )}
    </div>

    {/* Right Icons & User Info */}
    <div className="flex items-center gap-3 mt-4 md:mt-0">
      {userType && (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-xs font-bold shadow-md uppercase tracking-wide bg-gradient-to-r from-purple-600 to-indigo-700 animate-pulse">
          {userType === "lender" ? <Briefcase size={14} /> : <User size={14} />}
          {userType}
        </div>
      )}

      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 shadow hover:scale-105 transition"
      >
        {darkMode ? (
          <Sun size={20} className="text-yellow-500" />
        ) : (
          <Moon size={20} className="text-gray-900 dark:text-white" />
        )}
      </button>

      <ul className="flex flex-col md:flex-row gap-2 md:gap-3 items-start md:items-center text-sm font-medium">
        {token ? (
          <li>
            <span
              onClick={logOut}
              className="cursor-pointer text-purple-700 dark:text-purple-300 hover:underline"
            >
              Logout
            </span>
          </li>
        ) : (
          <>
            <li>
              <NavLink
                to="register"
                className="bg-purple-600 text-white px-4 py-1.5 rounded-full hover:bg-purple-700 transition"
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="login"
                className="bg-gray-800 text-white px-4 py-1.5 rounded-full hover:bg-gray-900 transition"
              >
                Login
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  </div>
</nav>

    );
}
