

import React, { useContext, useEffect, useState } from 'react';
import styles from "./Login.module.css";
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import { tokenContext } from '../../Context/tokenContext';

export default function Login() {
    const [isCallingApI, setIsCallingApI] = useState(false);
    const [apiError, setApiError] = useState(null);

    let { setToken } = useContext(tokenContext);
    let navigate = useNavigate();

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid Email").required("Required"),
        password: Yup.string().matches(new RegExp('^[A-Z][a-z0-9]{3,8}$'), 'Invalid password').required("Required"),
    });

    async function callLogin(values) {
        try {
            setIsCallingApI(true);
            setApiError(null);
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values);
            localStorage.setItem("userToken", data.token);
            setToken(data.token);
            setIsCallingApI(false);
            navigate("/");
        } catch (error) {
            setApiError(error.response.data.message, "Error");
            setIsCallingApI(false);
        }
    }

    const loginForm = useFormik({
        initialValues,
        validationSchema,
        onSubmit: callLogin
    });

    return (
        <form onSubmit={loginForm.handleSubmit} className="w-[50%] mx-auto my-5">
            <h1 className='text-4xl text-gray-600'>Login Now:</h1>

            {apiError ? <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                {apiError}
            </div> : ''}

            {/* Email Input */}
            <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="email" onBlur={loginForm.handleBlur} value={loginForm.values.email} onChange={loginForm.handleChange} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-purple-600">User Email</label>
            </div>

            {loginForm.errors.email && loginForm.touched.email ? <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                {loginForm.errors.email}
            </div> : ''}

            {/* Password Input */}
            <div className="relative z-0 w-full mb-5 group">
                <input type="password" name="password" onBlur={loginForm.handleBlur} value={loginForm.values.password} onChange={loginForm.handleChange} id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
                <label htmlFor="floating_password" className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-purple-600">User Password</label>
            </div>

            {loginForm.errors.password && loginForm.touched.password ? <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                {loginForm.errors.password}
            </div> : ''}

            {/* Submit Button */}
            {isCallingApI ? (
                <div className='w-auto flex justify-end'>
                    <div className='bg-purple-600 p-2 rounded-md'>
                        <ClipLoader className='text-white' size={20} />
                    </div>
                </div>
            ) : (
                <button type="submit" className="text-white bg-purple-600 hover:bg-purple-700 block ml-auto focus:ring-4 focus:outline-none focus:ring-purple-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                    Login
                </button>
            )}
        </form>
    );
}
