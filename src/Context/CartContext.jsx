import React, { createContext, useState, useEffect } from "react";

// إنشاء Context بشكل صحيح
export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);  // لتخزين العناصر في العربة
    const [loading, setLoading] = useState(false);  // لتحديد حالة التحميل
    const [error, setError] = useState(null);  // لتخزين الأخطاء إن وجدت

    // تحميل الـ token من الـ localStorage أو من الـ Context
    const token = localStorage.getItem("userToken"); // تأكد من تخزين الـ token عند تسجيل الدخول

    // تحميل العناصر من الـ API عند تحميل الصفحة
    useEffect(() => {
        const getCart = async () => {
            setLoading(true); // تفعيل حالة التحميل
            try {
                const response = await fetch("https://lavender-eel-222276.hostingersite.com/api/lender/items", {
                    method: "GET",  // أو طريقة أخرى إذا كان الطلب POST أو PUT
                    headers: {
                        "Content-Type": "application/json",  // إذا كان الـ API يتطلب هذا
                        Authorization: `Bearer ${token}`,  // إضافة الـ token هنا
                    }
                });

                if (!response.ok) {
                    throw new Error("فشل في تحميل البيانات من الـ API");
                }

                const data = await response.json(); // تحويل البيانات إلى JSON
                setCartItems(data);  // تحديث حالة العناصر في العربة
            } catch (err) {
                setError(err.message);  // تعيين الخطأ في حال وجود مشكلة
            } finally {
                setLoading(false);  // إيقاف حالة التحميل
            }
        };

        getCart();  // استدعاء الـ API
    }, [token]);  // إذا تغير الـ token في المستقبل

    return (
        <CartContext.Provider value={{ cartItems,setCartItems, loading, error }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
