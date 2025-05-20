import { createContext, useContext, useState, useEffect } from "react";
import { tokenContext } from "./tokenContext";
import axios from "axios";

export const rentalContext = createContext();

export default function RentalContextProvider({ children }) {
  const { token } = useContext(tokenContext);
  const [rentalRequests, setRentalRequests] = useState([]);

  const headers = { token };
  const API_URL = `https://your-backend.com/api/v1/rentals`;

  // Send a rental request
  async function sendRentalRequest(itemId, lenderId) {
    try {
      const { data } = await axios.post(API_URL, { itemId, lenderId }, { headers });
      return data;
    } catch (error) {
      console.error("Error in sendRentalRequest:", error.response?.data || error.message);
    }
  }

  // Get rental requests for current lender
  async function getRequestsForLender() {
    try {
      const { data } = await axios.get(`${API_URL}/lender`, { headers });
      setRentalRequests(data.requests);
      return data;
    } catch (error) {
      console.error("Error in getRequestsForLender:", error.response?.data || error.message);
    }
  }

  // Approve or reject
  async function updateRequestStatus(requestId, status) {
    try {
      const { data } = await axios.put(`${API_URL}/${requestId}`, { status }, { headers });
      return data;
    } catch (error) {
      console.error("Error in updateRequestStatus:", error.response?.data || error.message);
    }
  }

  return (
    <rentalContext.Provider value={{
      sendRentalRequest,
      getRequestsForLender,
      updateRequestStatus,
      rentalRequests,
    }}>
      {children}
    </rentalContext.Provider>
  );
}
