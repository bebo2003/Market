import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Categories from './components/Categories/Categories'
import Brands from './components/Brands/Brands'
import Products from './components/Products/Products'
import Register from './components/Register/Register'
import Cart from './components/Cart/Cart'
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'
import { tokenContext } from './Context/tokenContext'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import AuthView from './components/AuthView/AuthView'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Checkout from './components/Checkout/Checkout'
import WishList from './components/WishList/WishList'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RecentProducts from './components/RecentProducts/RecentProducts'

function App() {
  const [count, setCount] = useState(0)
  let { setToken } = useContext(tokenContext)


  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setToken(localStorage.getItem("userToken"))
    }
  })

  const routes = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        {
          path: "home", element: <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        },
        { path: "categories", element: <ProtectedRoutes><Categories /></ProtectedRoutes> },
        { path: "brands", element: <ProtectedRoutes>  <Brands /> </ProtectedRoutes> },
        { path: "cart", element: <ProtectedRoutes> <Cart /></ProtectedRoutes> },
        { path: "productDetails/:id/:categoryId", element: <ProtectedRoutes><ProductDetails /></ProtectedRoutes> },
        {
          path: "products", element: <ProtectedRoutes>
            <Products />
          </ProtectedRoutes>
        },
        {
          path: "wishlist", element: <ProtectedRoutes>
            <WishList />
          </ProtectedRoutes>
        },
        {
          path: "recent", element: <ProtectedRoutes>
            <RecentProducts />
          </ProtectedRoutes>
        },


        {
          path: "checkout", element: <ProtectedRoutes>
            <Checkout />
          </ProtectedRoutes>
        },





        { path: "login", element: <AuthView><Login /></AuthView> },
        { path: "register", element: <AuthView><Register /></AuthView> },
        { path: "*", element: <NotFound /> },

      ]
    }
  ])
  return (
    <>

      <RouterProvider router={routes}>
        <ToastContainer />

      </RouterProvider>
    </>
  )
}

export default App




//routealexreact10@yahoo.com
//Tested  
