import React, { useEffect, useState } from 'react';
import styles from "./Register.module.css";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from 'react-router-dom';

export default function Register() {
    let [isCallingApI, setIsCallingApI] = useState(false);
    let [apiError, setApiError] = useState(null);

    let navigate = useNavigate();

    const initialValues = {
        name: '',
        email: '',
        password: '',
        rePassword: '',
        phone: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "Min length is 3").max(15, "Max length is 15").required("Required"),
        email: Yup.string().email("Invalid Email").required("Required"),
        password: Yup.string().matches(new RegExp('^[A-Z][a-z0-9]{3,8}$'), 'Invalid password').required("Required"),
        rePassword: Yup.string().oneOf([Yup.ref('password')], 'Repassword should match password').required("Required"),
        phone: Yup.string().matches(new RegExp('^01[0125][0-9]{8}$'), 'Invalid phone').required("Required"),
    });

    async function callRegister(values) {
        try {
            setIsCallingApI(true);
            setApiError(null);
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values);
            setIsCallingApI(false);
            navigate("/login");
        } catch (error) {
            setApiError(error.response.data.message);
            setIsCallingApI(false);
        }
    }

    const registerFormik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: callRegister
    });

    return (
        <form onSubmit={registerFormik.handleSubmit} className="w-[50%] mx-auto my-5">
            <h1 className='text-4xl text-gray-600'>Register Now:</h1>
            {apiError && <div className="p-2 mb-4 text-sm text-purple-800 rounded-lg bg-purple-50">{apiError}</div>}

            
            {['name', 'email', 'password', 'rePassword', 'phone'].map((field, index) => (
                <div key={index} className="relative z-0 w-full mb-5 group">
                    <input
                        type={field.includes("password") ? "password" : field === "email" ? "email" : "text"}
                        name={field}
                        onBlur={registerFormik.handleBlur}
                        value={registerFormik.values[field]}
                        onChange={registerFormik.handleChange}
                        id={`floating_${field}`}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-purple-500 peer"
                        placeholder=" "
                        required
                    />
                    <label htmlFor={`floating_${field}`} className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-purple-500">
                        {field === "rePassword" ? "Re-enter Password" : field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    {registerFormik.errors[field] && registerFormik.touched[field] && (
                        <div className="p-2 mb-4 text-sm text-purple-800 rounded-lg bg-purple-50">{registerFormik.errors[field]}</div>
                    )}
                </div>
            ))}


            <button type="submit" className="text-white bg-purple-600 hover:bg-purple-700 block ml-auto px-5 py-2.5 rounded-lg">
                {isCallingApI ? <ClipLoader size={20} color="white" /> : "Submit"}
            </button>
        </form>
    );
}