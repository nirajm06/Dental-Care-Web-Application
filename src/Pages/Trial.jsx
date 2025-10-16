import React from "react";
import { motion } from "framer-motion";
import "animate.css";

const Trial = () => {
  const handleChange = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This is a demo form. Backend functionality is disabled.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-lg p-8 backdrop-blur-md bg-white/80 shadow-2xl rounded-3xl border border-gray-200"
      >
        <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-8">
          🦷 Book a 15-Day Dental Trial Session
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="clientName"
            placeholder="Enter your name"
            required
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-300 transition duration-200"
          />
          <input
            type="text"
            name="doctorName"
            placeholder="Doctor's Name"
            required
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-300 transition duration-200"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            required
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-300 transition duration-200"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-300 transition duration-200"
          />
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            required
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-300 transition duration-200"
          />

          <div className="flex items-center space-x-3 text-sm text-gray-700">
            <input
              type="checkbox"
              name="termsAccepted"
              onChange={handleChange}
              className="accent-blue-500 w-4 h-4"
            />
            <label>I agree to the Terms & Conditions</label>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-700">
            <input
              type="checkbox"
              name="consentGiven"
              onChange={handleChange}
              className="accent-blue-500 w-4 h-4"
            />
            <label>I consent to receive reminders</label>
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold p-3 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            ✅ Book Trial Session
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Trial;
