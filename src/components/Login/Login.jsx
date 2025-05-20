// import React, { useState, useContext } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import ClipLoader from "react-spinners/ClipLoader";
// import { tokenContext } from '../../Context/tokenContext';
// import './Login.module.css'
// import { FaUser, FaPhoneAlt, FaLock, FaAt } from 'react-icons/fa';

// export default function Login() {
//     const [isCallingAPI, setIsCallingAPI] = useState(false);
//     const [apiError, setApiError] = useState(null);
//     let { setToken } = useContext(tokenContext);
//     let navigate = useNavigate();

//     const initialValues = {
//         email: '',
//         password: '',
//     };

//     const validationSchema = Yup.object({
//         email: Yup.string().email("Invalid Email").required("Required"),
//         password: Yup.string().required("Required"),
//     });

//     async function callLogin(values) {
//         try {
//             setIsCallingAPI(true);
//             setApiError(null);

//             let { data } = await axios.post(`https://lavender-eel-222276.hostingersite.com/api/login-customer`, values);

//             if (data.token) {
//                 // حفظ التوكن في localStorage
//                 localStorage.setItem("userToken", data.token);

//                 // تحديد نوع المستخدم (لنفترض أن الـ API تعيد هذا الحقل)
//                 const userType = data.userType || "customer";
//                 localStorage.setItem("customer", JSON.stringify({ email: values.email, type: userType }));

//                 // تحديث الـ Context بالتوكن
//                 setToken(data.token);

//                 // توجيه المستخدم إلى الصفحة الرئيسية بعد تسجيل الدخول
//                 navigate("/home");
//             }
//         } catch (error) {
//             setApiError(error.response?.data?.message || "Login failed");
//         } finally {
//             setIsCallingAPI(false);
//         }
//     }

//     const loginFormik = useFormik({
//         initialValues,
//         validationSchema,
//         onSubmit: callLogin
//     });

//     return (
//         // <form onSubmit={loginFormik.handleSubmit} className="w-[50%] mx-auto my-5">
//         //     <h1 className='text-4xl text-gray-600'>Login:</h1>

//         //     {apiError && <div className="p-2 mb-4 text-sm text-red-800 bg-red-50">{apiError}</div>}

//         //     {/* Email */}
//         //     <div className="mb-5">
//         //         <input
//         //             type="email"
//         //             name="email"
//         //             value={loginFormik.values.email}
//         //             onChange={loginFormik.handleChange}
//         //             placeholder="Email"
//         //             className="block w-full p-2 border border-gray-300 rounded"
//         //         />
//         //         {loginFormik.errors.email && <p className="text-red-500">{loginFormik.errors.email}</p>}
//         //     </div>

//         //     {/* Password */}
//         //     <div className="mb-5">
//         //         <input
//         //             type="password"
//         //             name="password"
//         //             value={loginFormik.values.password}
//         //             onChange={loginFormik.handleChange}
//         //             placeholder="Password"
//         //             className="block w-full p-2 border border-gray-300 rounded"
//         //         />
//         //         {loginFormik.errors.password && <p className="text-red-500">{loginFormik.errors.password}</p>}
//         //     </div>

//         //     <button type="submit" className="bg-purple-600 text-white p-2 rounded w-full">
//         //         {isCallingAPI ? <ClipLoader size={20} color="white" /> : "Login"}
//         //     </button>
//         // </form>


//     );
// }
import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { tokenContext } from '../../Context/tokenContext';
import './Login.module.css';
import { FaUser, FaPhoneAlt, FaLock, FaAt } from 'react-icons/fa';
import bebo from'../../assets/images/istockphoto-1420737263-640_adpp_is.mp4'
export default function Login() {
    const [isCallingAPI, setIsCallingAPI] = useState(false);
    const [apiError, setApiError] = useState(null);
    const [userType, setUserType] = useState("customer");
    let { setToken } = useContext(tokenContext);
    let navigate = useNavigate();

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid Email").required("Required"),
        password: Yup.string().required("Required"),
    });

    async function callLogin(values) {
        try {
            setIsCallingAPI(true);
            setApiError(null);

            const endpoint =
                userType === "customer"
                    ? `https://lavender-eel-222276.hostingersite.com/api/login-customer`
                    : `https://lavender-eel-222276.hostingersite.com/api/login-lender`;

            let { data } = await axios.post(endpoint, values);

            if (data.token) {
                localStorage.setItem("userToken", data.token);
                localStorage.setItem("userType", userType);

                localStorage.setItem(
                    "userData",
                    JSON.stringify({
                        email: values.email,
                        type: userType,
                        id: data.id,
                    })
                );

                setToken(data.token);
                navigate("/home");
            } else {
                setApiError("Login failed: no token received");
            }
        } catch (error) {
            setApiError(error.response?.data?.message || "Login failed");
        } finally {
            setIsCallingAPI(false);
        }
    }

    const loginFormik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: callLogin
    });

    const [isChecked, setIsChecked] = useState(false);
    const handleToggle = () => setIsChecked(!isChecked);

    return (
        <div className="relative min-h-screen overflow-hidden">

            {/* فيديو الخلفية */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src={bebo } type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* طبقة تعتيم فوق الفيديو */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>

            {/* محتوى الصفحة */}
            <div className="relative z-20">
                <div className="section">
                    <div className="container">
                        <div className="row full-height justify-content-center">
                            <div className="col-12 text-center align-self-center py-5">
                                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                    <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                                    <input className="checkbox" type="checkbox" id="reg-log" checked={isChecked} onChange={handleToggle} />
                                    <label htmlFor="reg-log"></label>
                                    <div className="card-3d-wrap mx-auto">
                                        <div className="card-3d-wrapper">
                                            <div className="card-front">
                                                <div className="center-wrap">
                                                    <div className="section text-center">
                                                        <h4 className="mb-4 pb-3">Log In</h4>

                                                        {/* اختيار نوع المستخدم */}
                                                        <div className="mb-3">
                                                            <label className="me-2">
                                                                <input
                                                                    type="radio"
                                                                    value="customer"
                                                                    checked={userType === "customer"}
                                                                    onChange={() => setUserType("customer")}
                                                                />
                                                                <span className="ms-1">Customer</span>
                                                            </label>
                                                            <label className="ms-4">
                                                                <input
                                                                    type="radio"
                                                                    value="lender"
                                                                    checked={userType === "lender"}
                                                                    onChange={() => setUserType("lender")}
                                                                />
                                                                <span className="ms-1">Lender</span>
                                                            </label>
                                                        </div>

                                                        {apiError && <div className="p-2 mb-4 text-sm text-red-800 bg-red-50">{apiError}</div>}

                                                        <form onSubmit={loginFormik.handleSubmit}>
                                                            <div className="form-group">
                                                                <input
                                                                    type="email"
                                                                    name="email"
                                                                    value={loginFormik.values.email}
                                                                    onChange={loginFormik.handleChange}
                                                                    placeholder="Email"
                                                                    className="form-style"
                                                                />
                                                                <FaAt className="input-icon" />
                                                                {loginFormik.errors.email && <p className="text-red-500">{loginFormik.errors.email}</p>}
                                                            </div>
                                                            <div className="form-group mt-2">
                                                                <input
                                                                    type="password"
                                                                    name="password"
                                                                    value={loginFormik.values.password}
                                                                    onChange={loginFormik.handleChange}
                                                                    placeholder="Password"
                                                                    className="form-style"
                                                                />
                                                                <FaLock className="input-icon" />
                                                                {loginFormik.errors.password && <p className="text-red-500">{loginFormik.errors.password}</p>}
                                                            </div>
                                                            <button type="submit" className="btn mt-4">
                                                                {isCallingAPI ? <ClipLoader size={20} color="white" /> : "Login"}
                                                            </button>
                                                        </form>

                                                        <p className="mb-0 mt-4 text-center"><a href="#" className="link">Forgot your password?</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* يمكن لاحقًا إضافة واجهة Sign Up */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}




// import React, { useState, useContext } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import ClipLoader from "react-spinners/ClipLoader";
// import { tokenContext } from "../../Context/tokenContext";

// export default function Login() {
//     const [isCallingAPI, setIsCallingAPI] = useState(false);
//     const [apiError, setApiError] = useState(null);
//     let { setToken } = useContext(tokenContext);
//     let navigate = useNavigate();

//     const initialValues = {
//         email: "",
//         password: "",
//     };

//     const validationSchema = Yup.object({
//         email: Yup.string().email("Invalid Email").required("Required"),
//         password: Yup.string().required("Required"),
//     });

//     async function callLogin(values) {
//         try {
//             setIsCallingAPI(true);
//             setApiError(null);

//             let { data } = await axios.post(
//                 "https://mediumturquoise-kingfisher-120725.hostingersite.com/api/guest_hotel/login",
//                 values
//             );

//             if (data.token) {
//                 // حفظ التوكن في localStorage
//                 localStorage.setItem("userToken", data.token);

//                 // تحديد نوع المستخدم
//                 const userType = data.userType || "user";
//                 localStorage.setItem("user", JSON.stringify({ email: values.email, type: userType }));

//                 // تحديث `Context` بالتوكن
//                 setToken(data.token);

//                 // إعادة التوجيه حسب نوع المستخدم
//                 if (userType === "admin") {
//                     navigate("/admin-dashboard"); // توجيه إلى لوحة التحكم إذا كان المدير
//                 } else {
//                     navigate("/home"); // توجيه إلى الصفحة الرئيسية للمستخدم العادي
//                 }
//             }
//         } catch (error) {
//             setApiError(error.response?.data?.message || "Login failed");
//         } finally {
//             setIsCallingAPI(false);
//         }
//     }

//     const loginFormik = useFormik({
//         initialValues,
//         validationSchema,
//         onSubmit: callLogin,
//     });

//     return (
//         <form onSubmit={loginFormik.handleSubmit} className="w-[50%] mx-auto my-5">
//             <h1 className="text-4xl text-gray-600">Login:</h1>

//             {apiError && <div className="p-2 mb-4 text-sm text-red-800 bg-red-50">{apiError}</div>}

//             {/* Email */}
//             <div className="mb-5">
//                 <input
//                     type="email"
//                     name="email"
//                     value={loginFormik.values.email}
//                     onChange={loginFormik.handleChange}
//                     placeholder="Email"
//                     className="block w-full p-2 border border-gray-300 rounded"
//                 />
//                 {loginFormik.errors.email && <p className="text-red-500">{loginFormik.errors.email}</p>}
//             </div>

//             {/* Password */}
//             <div className="mb-5">
//                 <input
//                     type="password"
//                     name="password"
//                     value={loginFormik.values.password}
//                     onChange={loginFormik.handleChange}
//                     placeholder="Password"
//                     className="block w-full p-2 border border-gray-300 rounded"
//                 />
//                 {loginFormik.errors.password && <p className="text-red-500">{loginFormik.errors.password}</p>}
//             </div>

//             <button type="submit" className="bg-purple-600 text-white p-2 rounded w-full">
//                 {isCallingAPI ? <ClipLoader size={20} color="white" /> : "Login"}
//             </button>
//         </form>
//     );
// }
