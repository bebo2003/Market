// import React, { useEffect, useState } from 'react';
// import styles from "./Register.module.css";
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import ClipLoader from "react-spinners/ClipLoader";
// import { useNavigate } from 'react-router-dom';

// export default function Register() {
//     let [isCallingApI, setIsCallingApI] = useState(false);
//     let [apiError, setApiError] = useState(null);

//     let navigate = useNavigate();

//     const initialValues = {
//         name: '',
//         email: '',
//         password: '',
//         rePassword: '',
//         phone: '',
//     };

//     const validationSchema = Yup.object().shape({
//         name: Yup.string().min(3, "Min length is 3").max(15, "Max length is 15").required("Required"),
//         email: Yup.string().email("Invalid Email").required("Required"),
//         password: Yup.string().matches(new RegExp('^[A-Z][a-z0-9]{3,8}$'), 'Invalid password').required("Required"),
//         rePassword: Yup.string().oneOf([Yup.ref('password')], 'Repassword should match password').required("Required"),
//         phone: Yup.string().matches(new RegExp('^01[0125][0-9]{8}$'), 'Invalid phone').required("Required"),
//     });

//     async function callRegister(values) {
//         try {
//             setIsCallingApI(true);
//             setApiError(null);
//             let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values);
//             setIsCallingApI(false);
//             navigate("/login");
//         } catch (error) {
//             setApiError(error.response.data.message);
//             setIsCallingApI(false);
//         }
//     }

//     const registerFormik = useFormik({
//         initialValues,
//         validationSchema,
//         onSubmit: callRegister
//     });

//     return (
//         <form onSubmit={registerFormik.handleSubmit} className="w-[50%] mx-auto my-5">
//             <h1 className='text-4xl text-gray-600'>Register Now:</h1>
//             {apiError && <div className="p-2 mb-4 text-sm text-purple-800 rounded-lg bg-purple-50">{apiError}</div>}


//             {['name', 'email', 'password', 'rePassword', 'phone'].map((field, index) => (
//                 <div key={index} className="relative z-0 w-full mb-5 group">
//                     <input
//                         type={field.includes("password") ? "password" : field === "email" ? "email" : "text"}
//                         name={field}
//                         onBlur={registerFormik.handleBlur}
//                         value={registerFormik.values[field]}
//                         onChange={registerFormik.handleChange}
//                         id={`floating_${field}`}
//                         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-purple-500 peer"
//                         placeholder=" "
//                         required
//                     />
//                     <label htmlFor={`floating_${field}`} className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-purple-500">
//                         {field === "rePassword" ? "Re-enter Password" : field.charAt(0).toUpperCase() + field.slice(1)}
//                     </label>
//                     {registerFormik.errors[field] && registerFormik.touched[field] && (
//                         <div className="p-2 mb-4 text-sm text-purple-800 rounded-lg bg-purple-50">{registerFormik.errors[field]}</div>
//                     )}
//                 </div>
//             ))}


//             <button type="submit" className="text-white bg-purple-600 hover:bg-purple-700 block ml-auto px-5 py-2.5 rounded-lg">
//                 {isCallingApI ? <ClipLoader size={20} color="white" /> : "Submit"}
//             </button>
//         </form>
//     );
// }
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const RegisterForm = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         first_name: '',
//         last_name: '',
//         email: '',
//         password: '',
//         gender: 'M',
//         state: '',
//         city: '',
//         street: '',
//         score: 100,
//         phone_nums: ['', '']
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handlePhoneChange = (index, e) => {
//         const { value } = e.target;
//         const newPhoneNums = [...formData.phone_nums];
//         newPhoneNums[index] = value;
//         setFormData(prevState => ({
//             ...prevState,
//             phone_nums: newPhoneNums
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('https://lavender-eel-222276.hostingersite.com/api/register-customer', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });
//             const result = await response.json();

//             if (response.ok) {
//                 console.log(result);
//                 navigate('/login');
//             } else {
//                 console.error("Error:", result);
//             }
//         } catch (error) {
//             console.error("Error:", error);
//         }
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//             <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
//                 <h1 className="text-3xl text-purple-600 font-semibold text-center mb-6">Register</h1>

//                 <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-600">First Name</label>
//                     <input 
//                         type="text" 
//                         name="first_name" 
//                         value={formData.first_name} 
//                         onChange={handleChange} 
//                         className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
//                         required 
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-600">Last Name</label>
//                     <input 
//                         type="text" 
//                         name="last_name" 
//                         value={formData.last_name} 
//                         onChange={handleChange} 
//                         className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
//                         required 
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-600">Email</label>
//                     <input 
//                         type="email" 
//                         name="email" 
//                         value={formData.email} 
//                         onChange={handleChange} 
//                         className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
//                         required 
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-600">Password</label>
//                     <input 
//                         type="password" 
//                         name="password" 
//                         value={formData.password} 
//                         onChange={handleChange} 
//                         className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
//                         required 
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-600">Gender</label>
//                     <select 
//                         name="gender" 
//                         value={formData.gender} 
//                         onChange={handleChange} 
//                         className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
//                     >
//                         <option value="M">Male</option>
//                         <option value="F">Female</option>
//                     </select>
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-600">State</label>
//                     <input 
//                         type="text" 
//                         name="state" 
//                         value={formData.state} 
//                         onChange={handleChange} 
//                         className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
//                         required 
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-600">City</label>
//                     <input 
//                         type="text" 
//                         name="city" 
//                         value={formData.city} 
//                         onChange={handleChange} 
//                         className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
//                         required 
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-600">Street</label>
//                     <input 
//                         type="text" 
//                         name="street" 
//                         value={formData.street} 
//                         onChange={handleChange} 
//                         className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
//                         required 
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-600">Phone Number 1</label>
//                     <input 
//                         type="text" 
//                         value={formData.phone_nums[0]} 
//                         onChange={(e) => handlePhoneChange(0, e)} 
//                         className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
//                         required 
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-600">Phone Number 2</label>
//                     <input 
//                         type="text" 
//                         value={formData.phone_nums[1]} 
//                         onChange={(e) => handlePhoneChange(1, e)} 
//                         className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
//                     />
//                 </div>

//                 <button 
//                     type="submit" 
//                     className="w-full p-2 mt-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none"
//                 >
//                     Register
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default RegisterForm;
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // تعريف السكيمة
// const schema = yup.object().shape({
//   email: yup.string().email('Invalid email').required('Email is required'),
//   password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
//   fullName: yup.string().required('Full name is required'),
//   phoneNumber: yup.string().required('Phone number is required'),
// });

// export default function AuthForm() {
//   const [isLender, setIsLender] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });

//   const onSubmit = async (data) => {
//     setIsLoading(true);
//     const role = isLender ? 'lender' : 'customer';
//     const payload = { ...data, role };

//     try {
//       const res = await fetch(`https://your-api-url/${role}/register`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });
//       const result = await res.json();

//       if (!res.ok) {
//         const errorMessages = Object.values(result).map((m) => m[0]).join(', ');
//         toast.error(errorMessages);
//       } else {
//         toast.success(`${role.charAt(0).toUpperCase() + role.slice(1)} registered successfully!`);
//         reset();
//       }
//     } catch (err) {
//       toast.error('Something went wrong. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="section">
//       <ToastContainer />
//       <div className="container">
//         <div className="row full-height justify-content-center">
//           <div className="col-12 text-center align-self-center py-5">
//             <div className="section pb-5 pt-5 pt-sm-2 text-center">
//               <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
//               <input className="checkbox" type="checkbox" id="reg-log" onChange={() => setIsLender((prev) => !prev)} />
//               <label htmlFor="reg-log"></label>
//               <div className="card-3d-wrap mx-auto">
//                 <div className="card-3d-wrapper">
//                   {/* Front = Log In */}
//                   <div className={`card-front ${!isLender ? 'active' : ''}`}>
//                     <div className="center-wrap">
//                       <div className="section text-center">
//                         <h4 className="mb-4 pb-3">Log In</h4>
//                         <form onSubmit={handleSubmit(onSubmit)}>
//                           <div className="form-group">
//                             <input type="email" className="form-style" placeholder="Email" {...register("email")} />
//                             <i className="input-icon uil uil-at"></i>
//                             <p className="text-danger">{errors.email?.message}</p>
//                           </div>
//                           <div className="form-group mt-2">
//                             <input type="password" className="form-style" placeholder="Password" {...register("password")} />
//                             <i className="input-icon uil uil-lock-alt"></i>
//                             <p className="text-danger">{errors.password?.message}</p>
//                           </div>
//                           <button type="submit" className="btn mt-4" disabled={isLoading}>
//                             {isLoading ? (
//                               <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//                             ) : (
//                               'Login'
//                             )}
//                           </button>
//                         </form>
//                         <p className="mb-0 mt-4 text-center">
//                           <a href="https://www.web-leb.com/code" className="link">Forgot your password?</a>
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Back = Sign Up */}
//                   <div className={`card-back ${isLender ? 'active' : ''}`}>
//                     <div className="center-wrap">
//                       <div className="section text-center">
//                         <h4 className="mb-3 pb-3">Sign Up</h4>
//                         <form onSubmit={handleSubmit(onSubmit)}>
//                           <div className="form-group">
//                             <input type="text" className="form-style" placeholder="Full Name" {...register("fullName")} />
//                             <i className="input-icon uil uil-user"></i>
//                             <p className="text-danger">{errors.fullName?.message}</p>
//                           </div>
//                           <div className="form-group mt-2">
//                             <input type="tel" className="form-style" placeholder="Phone Number" {...register("phoneNumber")} />
//                             <i className="input-icon uil uil-phone"></i>
//                             <p className="text-danger">{errors.phoneNumber?.message}</p>
//                           </div>
//                           <div className="form-group mt-2">
//                             <input type="email" className="form-style" placeholder="Email" {...register("email")} />
//                             <i className="input-icon uil uil-at"></i>
//                             <p className="text-danger">{errors.email?.message}</p>
//                           </div>
//                           <div className="form-group mt-2">
//                             <input type="password" className="form-style" placeholder="Password" {...register("password")} />
//                             <i className="input-icon uil uil-lock-alt"></i>
//                             <p className="text-danger">{errors.password?.message}</p>
//                           </div>
//                           <button type="submit" className="btn mt-4" disabled={isLoading}>
//                             {isLoading ? (
//                               <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//                             ) : (
//                               'Register'
//                             )}
//                           </button>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import './style.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bebo from'../../assets/images/istockphoto-1420737263-640_adpp_is.mp4'
export default function Register() {
    const [customerFormData, setCustomerFormData] = useState({
        first_name: '',
        last_name: '',
        gender: '',
        email: '',
        password: '',
        phone_nums: [''],
        state: '',
        city: '',
        street: '',
        score: 100, // Get score from localStorage
    });

    const [lenderFormData, setLenderFormData] = useState({
        first_name: '',
        last_name: '',
        gender: '',
        email: '',
        password: '',
        phone_nums: [''],
        state: '',
        city: '',
        street: '',
        score: 100, // Get score from localStorage
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const handleChange = (e, type) => {
        const { name, value } = e.target;

        if (type === 'customer') {
            setCustomerFormData((prevData) => {
                if (name === 'phone_nums') {
                    return {
                        ...prevData,
                        phone_nums: [value], // نحافظ عليها كمصفوفة
                    };
                }
                return {
                    ...prevData,
                    [name]: value,
                };
            });
        } else {
            setLenderFormData((prevData) => {
                if (name === 'phone_nums') {
                    return {
                        ...prevData,
                        phone_nums: [value], // نفس الشيء للـ lender
                    };
                }
                return {
                    ...prevData,
                    [name]: value,
                };
            });
        }
    };


    const validateForm = (formData) => {
        const validationErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                validationErrors[key] = `${key.replace('_', ' ')} is required.`;
            }
        });
        return validationErrors;
    };


    const handleSubmit = async (e, type) => {
        e.preventDefault();

        setLoading(true);
        setErrors({});
        setMessage('');

        const formData = type === 'customer' ? customerFormData : lenderFormData;

        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);
            return;
        }

        const data = {
            ...formData,
            score: localStorage.getItem('score') || 100, // default fallback
        };

        const apiUrl = type === 'customer'
            ? 'https://lavender-eel-222276.hostingersite.com/api/register-customer'
            : 'https://lavender-eel-222276.hostingersite.com/api/register-lender';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();


            const customizeMessage = (msg) => {
                if (msg.includes('email has already been taken')) {
                    return '😡 الايميل يفلااح غيره';
                }
                if (msg.includes('phone_nums.0 has already been taken')) {
                    return ' 😡يبناااي منت لسا مدخل نفس الرقم ';
                }
                // افتراضي
                return msg;
            };

            const getRandomColor = () => {
                const colors = ['#f87171', '#facc15', '#34d399', '#60a5fa', '#c084fc'];
                return colors[Math.floor(Math.random() * colors.length)];
            };


            if (result.errors && typeof result.errors === 'object') {
                Object.entries(result.errors).forEach(([field, messages]) => {
                    if (Array.isArray(messages)) {
                        messages.forEach(msg => {
                            toast(customizeMessage(msg), {
                                style: {
                                    background: getRandomColor(),
                                    color: 'white',
                                },
                            });
                        });
                    } else {
                        toast(customizeMessage(messages), {
                            style: {
                                background: getRandomColor(),
                                color: 'white',
                            },
                        });
                    }
                });
            }



            if (result.success || result.status === 'Register successfully') {
                toast.success('Registration successful!');
                localStorage.setItem('token', result.token);

                  const userType = result.userType || 'customer'; 
                // Redirect to login after short delay
                setTimeout(() => {
                    if (userType === 'customer') {
                        window.location.href = '/login';  // صفحة تسجيل الدخول للعملاء
                    } else if (userType === 'lender') {
                        window.location.href = '/lender'; // صفحة تسجيل الدخول للمؤجرين
                    }
                }, 2000);
            }

        } catch (error) {
            console.error('Network error:', error);
            toast.error('Network error. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>

 
            <title>Webleb</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/css/styles.css" />
            <div className="section">
                <div className="container">
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
            {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div> */}


                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 className="mb-0 pb-3">
                                    <span>Customer </span><span>Lender</span>
                                </h6>
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label htmlFor="reg-log" />
                                <div className="card-3d-wrap mx-auto mt-20">
                                    <div className="card-3d-wrapper">
                                        {/* Customer Form */}
                                      <div className="card-front">
  <div className="center-wrap">
    <div className="section text-center">
      <form onSubmit={(e) => handleSubmit(e, 'customer')}>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <input
                type="text"
                name="first_name"
                value={customerFormData.first_name}
                onChange={(e) => handleChange(e, 'customer')}
                className="form-style"
                placeholder="First Name"
                style={{ width: '100%' }}
              />
              <i className="input-icon uil uil-user" />
              {errors.first_name && <span className="error">{errors.first_name}</span>}
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <input
                type="text"
                name="last_name"
                value={customerFormData.last_name}
                onChange={(e) => handleChange(e, 'customer')}
                className="form-style"
                placeholder="Last Name"
                style={{ width: '100%' }}
              />
              <i className="input-icon uil uil-user" />
              {errors.last_name && <span className="error">{errors.last_name}</span>}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <select
                name="gender"
                value={customerFormData.gender}
                onChange={(e) => handleChange(e, 'customer')}
                className="form-style"
                style={{ width: '100%' }}
              >
                <option value="">Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
              {errors.gender && <span className="error">{errors.gender}</span>}
              <i className="input-icon uil uil-user" />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={customerFormData.email}
                onChange={(e) => handleChange(e, 'customer')}
                className="form-style"
                placeholder="Email"
                style={{ width: '100%' }}
              />
              <i className="input-icon uil uil-envelope" />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={customerFormData.password}
                onChange={(e) => handleChange(e, 'customer')}
                className="form-style"
                placeholder="Password"
                style={{ width: '100%' }}
              />
              <i className="input-icon uil uil-lock" />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <input
                type="text"
                name="phone_nums"
                value={customerFormData.phone_nums}
                onChange={(e) => handleChange(e, 'customer')}
                className="form-style"
                placeholder="Phone Number"
                style={{ width: '100%' }}
              />
              <i className="input-icon uil uil-phone" />
              {errors.phone_nums && <span className="error">{errors.phone_nums}</span>}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <input
                type="text"
                name="state"
                value={customerFormData.state}
                onChange={(e) => handleChange(e, 'customer')}
                className="form-style"
                placeholder="State"
                style={{ width: '100%' }}
              />
              <i className="input-icon uil uil-map-marker" />
              {errors.state && <span className="error">{errors.state}</span>}
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <input
                type="text"
                name="city"
                value={customerFormData.city}
                onChange={(e) => handleChange(e, 'customer')}
                className="form-style"
                placeholder="City"
                style={{ width: '100%' }}
              />
              <i className="input-icon uil uil-building" />
              {errors.city && <span className="error">{errors.city}</span>}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <input
                type="text"
                name="street"
                value={customerFormData.street}
                onChange={(e) => handleChange(e, 'customer')}
                className="form-style"
                placeholder="Street"
                style={{ width: '100%' }}
              />
              <i className="input-icon uil uil-map-marker" />
              {errors.street && <span className="error">{errors.street}</span>}
            </div>
          </div>
          <div className="col-6 flex items-center justify-center">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-2xl shadow-lg transition duration-300 ease-in-out flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5 animate-bounce"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              {loading ? 'Loading...' : 'Submit'}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

                                        <input type="hidden" name="score" value={customerFormData.score} />
                                        {/* Lender Form */}
                                    <div className="card-back">
  <div className="center-wrap">
    <div className="section text-center">
      <form onSubmit={(e) => handleSubmit(e, 'lender')}>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <input
                type="text"
                name="first_name"
                value={lenderFormData.first_name}
                onChange={(e) => handleChange(e, 'lender')}
                className="form-style"
                placeholder="First Name"
                style={{ width: '100%' }}
              />
              <i className="input-icon uil uil-user" />
              {errors.first_name && <span className="error">{errors.first_name}</span>}
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <input
                type="text"
                name="last_name"
                value={lenderFormData.last_name}
                onChange={(e) => handleChange(e, 'lender')}
                className="form-style"
                placeholder="Last Name"
                style={{ width: '100%' }}
              />
              <i className="input-icon uil uil-user" />
              {errors.last_name && <span className="error">{errors.last_name}</span>}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <select
                name="gender"
                value={lenderFormData.gender}
                onChange={(e) => handleChange(e, 'lender')}
                className="form-style"
                style={{ width: '100%' }}
              >
                <option value="">Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
              {errors.gender && <span className="error">{errors.gender}</span>}
              <i className="input-icon uil uil-user" />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={lenderFormData.email}
                onChange={(e) => handleChange(e, 'lender')}
                className="form-style"
                placeholder="Email"
                style={{ width: '100%' }}
              />
              <i className="input-icon uil uil-envelope" />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={lenderFormData.password}
                onChange={(e) => handleChange(e, 'lender')}
                className="form-style"
                placeholder="Password"
                style={{ width: '100%' }}
              />
              <i className="input-icon uil uil-lock" />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <input
                type="text"
                name="phone_nums"
                value={lenderFormData.phone_nums}
                onChange={(e) => handleChange(e, 'lender')}
                className="form-style"
                placeholder="Phone Number"
                style={{ width: '100%' }}
              />
              <i className="input-icon uil uil-phone" />
              {errors.phone_nums && <span className="error">{errors.phone_nums}</span>}
            </div>
          </div>
          <input type="hidden" name="score" value={customerFormData.score} />
        </div>

        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <input
                type="text"
                name="state"
                value={lenderFormData.state}
                onChange={(e) => handleChange(e, 'lender')}
                className="form-style"
                placeholder="State"
                style={{ width: '100%' }}
              />
              <i className="input-icon uil uil-map-marker" />
              {errors.state && <span className="error">{errors.state}</span>}
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <input
                type="text"
                name="city"
                value={lenderFormData.city}
                onChange={(e) => handleChange(e, 'lender')}
                className="form-style"
                placeholder="City"
                style={{ width: '100%' }}
              />
              <i className="input-icon uil uil-building" />
              {errors.city && <span className="error">{errors.city}</span>}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <input
                type="text"
                name="street"
                value={lenderFormData.street}
                onChange={(e) => handleChange(e, 'lender')}
                className="form-style"
                placeholder="Street"
                style={{ width: '100%' }}
              />
              <i className="input-icon uil uil-map-marker" />
              {errors.street && <span className="error">{errors.street}</span>}
            </div>
          </div>
          <div className="col-6 flex items-center justify-center">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-2xl shadow-lg transition duration-300 ease-in-out flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5 animate-bounce"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              {loading ? 'Loading...' : 'Submit'}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
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
