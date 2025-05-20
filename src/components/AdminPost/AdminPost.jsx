import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
let deferredPrompt;
export default function AdminPost() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userType, setUserType] = useState('');
      const [showInstallButton, setShowInstallButton] = useState(false);

    useEffect(() => {
        const type = localStorage.getItem('userType');
        setUserType(type);
    }, []);

    const handleImageChange = (event) => {
        const files = event.target.files;
        setImages([...images, ...files]);
    };

    const handleAddProduct = async () => {
        if (!title || !description || !price || !category) {
            toast.error("All fields are required!");
            return;
        }

        setLoading(true);

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', parseFloat(price));
        formData.append('category_ids[]', category);
        for (const image of images) {
            if (image.size > 2 * 1024 * 1024) {
                toast.error("Each image must be less than 2MB.");
                setLoading(false);
                return;
            }
            formData.append('images[]', image);
        }

        try {
            const token = localStorage.getItem('userToken');
            const response = await axios.post('https://lavender-eel-222276.hostingersite.com/api/items/add', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200 || response.status === 201) {
                toast.success("Product added successfully!");
                setTitle('');
                setDescription('');
                setPrice('');
                setCategory('');
                setImages([]);
            }
        } catch (error) {
    setLoading(false);

    if (error.response) {
        console.log("🔥 Full error response:", error.response);

        const status = error.response.status;
        const data = error.response.data;

        // لو فيه رسائل تحقق من الباك اند
        if (status === 422 && data.errors) {
            const validationErrors = data.errors;
            const errorMsg = Object.values(validationErrors).flat().join('\n');
            toast.error(`Validation Error:\n${errorMsg}`);
        }
        // لو فيه رسالة عامة من الباك اند
        else if (data.message) {
            toast.error(`Server Message: ${data.message}`);
        } else {
            toast.error(`Unexpected Error: ${JSON.stringify(data)}`);
        }

    } else if (error.request) {
        console.log("⚠️ No response from server:", error.request);
        toast.error("No response from server.");
    } else {
        console.log("❌ Request setup error:", error.message);
        toast.error(`Error: ${error.message}`);
    }
}}

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault(); // تمنع النافذة الافتراضية
            deferredPrompt = e;
            setShowInstallButton(true);
        });
    }, []);

    // 👇 شرط إظهار الصفحة فقط إذا كان userType = lender
    if (userType !== 'lender') {
        return (
          <></>
        );
    }

    const androidApp = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
            setShowInstallButton(false);
        }
    };


    return (
    <div className="flex flex-col md:flex-row gap-10 p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
  {/* FORM SIDE */}
  <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
    <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Add New Product</h2>

    <div className="space-y-5">
      <div>
        <label className="block text-gray-600 dark:text-gray-300 mb-1 font-medium">Title</label>
        <input
          type="text"
          className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-gray-600 dark:text-gray-300 mb-1 font-medium">Description</label>
        <textarea
          rows={4}
          className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-gray-600 dark:text-gray-300 mb-1 font-medium">Price (EGP)</label>
        <input
          type="number"
          className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-gray-600 dark:text-gray-300 mb-1 font-medium">Category</label>
        <select
          className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="1">Cars</option>
          <option value="5">Watches</option>
          {/* Add more categories here */}
        </select>
      </div>

      <div>
        <label className="block text-gray-600 dark:text-gray-300 mb-1 font-medium">Upload Images</label>
        <input
          type="file"
          multiple
          onChange={handleImageChange}
          className="w-full text-sm text-gray-500 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 dark:file:bg-gray-700 file:text-blue-700 dark:file:text-white hover:file:bg-blue-100 dark:hover:file:bg-gray-600"
        />
      </div>

      <button
        onClick={handleAddProduct}
        className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl transition duration-300"
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add Product'}
      </button>
    </div>
  </div>

  {/* PREVIEW SIDE */}
  <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Live Preview</h3>
    <div className="border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 p-4">
      {images?.length > 0 ? (
        <img
          src={URL.createObjectURL(images[0])}
          alt="Preview"
          className="w-full h-64 object-cover rounded-xl mb-4"
        />
      ) : (
        <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-xl mb-4 flex items-center justify-center text-gray-500">
          No Image Selected
        </div>
      )}

      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{title || "Product Title"}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        {description || "Product description goes here..."}
      </p>
      <div className="mt-2 text-blue-600 dark:text-blue-400 text-lg font-medium">
        {price ? `${price} EGP` : "Price"}
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        {category ? `Category: ${category}` : "Select a category"}
      </div>
    </div>
  </div>

    {showInstallButton && (
                <button
                    onClick={androidApp}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                   install
                </button>
            )}
</div>

    );
}
