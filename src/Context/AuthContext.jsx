import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// إنشاء Context للمصادقة
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("userToken") || null);
  const navigate = useNavigate();

  // تسجيل الدخول
  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "https://mediumturquoise-kingfisher-120725.hostingersite.com/api/guest_hotel/login",
        { email, password }
      );
      const userToken = response.data.token;

      // حفظ التوكن في الحالة والتخزين المحلي
      setToken(userToken);
      localStorage.setItem("userToken", userToken);

      // توجيه المستخدم بعد تسجيل الدخول
      navigate("/home");
    } catch (error) {
      throw new Error("فشل تسجيل الدخول! تأكد من البيانات.");
    }
  };

  // تسجيل الخروج
  const logout = () => {
    setToken(null);
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
