import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "F",
    score: 0,
    state: "",
    city: "",
    street: "",
    phone_numbers: [{ lender_id: "", phone_num: "" }],
  });

  useEffect(() => {
    // Fetch profile data from the API
    axios
      .get("https://lavender-eel-222276.hostingersite.com/api/lender/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      })
      .then((response) => {
        setProfile(response.data); // Set profile data into state
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
        toast.error("Failed to load profile data.");
      });
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">My Profile</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              value={profile.first_name}
              disabled
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              value={profile.last_name}
              disabled
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={profile.email}
              disabled
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <input
              type="text"
              value={profile.gender === "F" ? "Female" : "Male"}
              disabled
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">State</label>
            <input
              type="text"
              value={profile.state}
              disabled
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              value={profile.city}
              disabled
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Street</label>
            <input
              type="text"
              value={profile.street}
              disabled
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {profile.phone_numbers && profile.phone_numbers.map((phone, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number {index + 1}
              </label>
              <input
                type="text"
                value={phone.phone_num}
                disabled
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
