import { useContext, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { tokenContext } from "./Context/tokenContext";

import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Categories from "./components/Categories/Categories";
import Brands from "./components/Brands/Brands";
import Products from "./components/Products/Products";
import Register from "./components/Register/Register";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import AuthView from "./components/AuthView/AuthView";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Checkout from "./components/Checkout/Checkout";
import WishList from "./components/WishList/WishList";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pento from "./components/Pento/default/pento";
// import Watch from "./components/Watch/Watch/precisionandcraft.qodeinteractive.com/watch-store/Watch";
import ProfileForm from "./components/Pento/default/Profile/Profile";
import Lender from "./components/LoginLender/Lender";
import ChatPage from "./components/ChatPage/ChatPage";
import CarCategory from "./components/cars/cars_site/car";
import LandPage from "./components/LandPage/LandPage";
import TeamSection from "./components/About/About";
import About from "./components/About/About";


function App() {
  let { setToken } = useContext(tokenContext);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      setToken(userToken);
    }
  }, []); // ✅ إضافة [] لمنع التكرار غير الضروري

  const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "home", element: <ProtectedRoutes><Home /></ProtectedRoutes> },
      { path: "about", element: <ProtectedRoutes><About/></ProtectedRoutes> },
      { path: "categories", element: <ProtectedRoutes><Categories /></ProtectedRoutes> },
      { path: "brands", element: <ProtectedRoutes><Brands /></ProtectedRoutes> },
      { path: "rent", element: <ProtectedRoutes><Cart /></ProtectedRoutes> },
      { path: "pento", element: <ProtectedRoutes><Pento/></ProtectedRoutes> },
      { path: "profile", element: <ProtectedRoutes><ProfileForm/></ProtectedRoutes> },
      { path: "lender", element: <ProtectedRoutes><Lender/></ProtectedRoutes> },
      { path: "car", element: <ProtectedRoutes><CarCategory/></ProtectedRoutes> },
      { path: "product", element: <ProtectedRoutes><ProductDetails /></ProtectedRoutes> },
      { path: "products", element: <ProtectedRoutes><Products /></ProtectedRoutes> },
      { path: "wishlist", element: <ProtectedRoutes><WishList /></ProtectedRoutes> },
      { path: "chatpage/:conversationId", element: <ProtectedRoutes><ChatPage/></ProtectedRoutes> },  // <-- هنا
      { path: "chatpage", element: <ProtectedRoutes><ChatPage/></ProtectedRoutes> },  // <-- هنا
      { path: "checkout", element: <ProtectedRoutes><Checkout /></ProtectedRoutes> },
      { path: "login", element: <AuthView><Login /></AuthView> },
      { path: "bebo", element: <AuthView><LandPage /></AuthView> },
      { path: "register", element: <AuthView><Register /></AuthView> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

  return (
    <>
      <ToastContainer /> {/* ✅ نقلها هنا حتى تعمل في جميع الصفحات */}
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
