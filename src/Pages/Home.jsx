import React from "react";
import { Link } from "react-router-dom";
import One from "../assets/one.jpg";
import Two from "../assets/Two.jpg";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-500 min-h-screen flex flex-col justify-center items-center text-white text-center px-4">
      <section className="w-full max-w-7xl mx-auto mt-[68px] pb-16 px-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg mt-15">
            Best Dental Practice Management Software for Dental Clinics & Hospitals
          </h1>

          {/* Images */}
          <div className="flex flex-col md:flex-row justify-center items-center mt-12 gap-10">
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={Two}
                alt="Doctor Left"
                className="w-full max-w-md md:max-w-xl rounded-3xl shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
            {/* Right Side - Image */}
            <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
              <img
                src={One}
                alt="Doctor Right"
                className="w-full max-w-md md:max-w-xl rounded-3xl shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>

          {/* Text and Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-12 mt-20">
            {/* DentalGuru Pro */}
            <div className="bg-white text-blue-600 p-10 rounded-3xl shadow-2xl flex flex-col justify-between max-w-md w-full hover:shadow-blue-300 transition-shadow duration-500">
              <div>
                <h2 className="text-2xl font-bold mb-4">DentalCare Pro</h2>
                <p className="text-base leading-relaxed">
                  Designed for clinics with multiple branches and a dedicated team, our Pro Plan ensures smooth operations, efficient staff management, and enhanced patient care. Perfect for practices with accountants, lab managers, admins, and multiple dentists.
                </p>
              </div>
              <Link
                to="/About Us"
                className="mt-6 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-md transition duration-300 ease-in-out"
              >
                Explore More →
              </Link>
            </div>

            {/* DentalGuru Lite */}
            <div className="bg-white text-blue-600 p-10 rounded-3xl shadow-2xl flex flex-col justify-between max-w-md w-full hover:shadow-blue-300 transition-shadow duration-500">
              <div>
                <h2 className="text-2xl font-bold mb-4">DentalCare Lite</h2>
                <p className="text-base leading-relaxed">
                  Ideal for solo dentists or clinics managed by a dentist and a receptionist. The Lite Plan keeps things simple, helping you focus on patient care while managing appointments and essential tasks with ease.
                </p>
              </div>
              <Link
                to="/About Us"
                className="mt-6 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-md transition duration-300 ease-in-out"
              >
                Explore More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
