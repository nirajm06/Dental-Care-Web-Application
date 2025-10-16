import React from "react";
import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react"; 
import logo from "../assets/logo.jpg"; 
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-24 flex flex-col justify-between min-h-[350px] ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left flex-grow">
        
        {/* Logo and Description */}
        <div>
          <img src={logo} alt="Dental Guru" className="mx-auto md:mx-0 h-20" />
          <p className="mt-6 text-sm leading-relaxed">
          Dental Care helps you engage with patients, fill your schedule, and optimize your dental practice—all in one easy-to-use platform.
          </p>
          
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <a href="#" className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition">
              <Linkedin className="h-5 w-5 text-white" />
            </a>
            <a href="#" className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition">
              <Facebook className="h-5 w-5 text-white" />
            </a>
            <a href="#" className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition">
              <Twitter className="h-5 w-5 text-white" />
            </a>
            <a href="#" className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition">
              <Instagram className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-semibold">Useful Links</h2>
          <ul className="mt-6 space-y-3 text-sm">
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">Refund & Cancellation Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">HIPPA</a></li>
            <li><a href="#" className="hover:text-gray-400">Dental Care Pro</a></li>
            <li><a href="#" className="hover:text-gray-400">Dental Care Lite</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h2 className="text-lg font-semibold">Get in Touch!</h2>
          <ul className="mt-6 space-y-3 text-sm">
            <li>Heritage Tower Geeta Bhawan Indore Madhya Pradesh</li>
            <li>+91-7440992424</li>
            <li>+91-7477253424</li>
            <li>info@doaguru.com</li>
          </ul>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="w-full text-center text-sm border-t border-gray-700 pt-6 mt-12">
        © 2025 Design & Develop with <span className="text-red-500">❤️</span> by DOAGuru InfoSystems.
      </div>
    </footer>
  );
};

export default Footer;
