import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger & Close icons
import logo from "../assets/logo.jpg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img src={logo} alt="DentalGuru Logo" className="h-14 mr-3" />
          <span className="text-black text-2xl font-bold">Dentalcare</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-black font-medium text-lg">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <Link to="/About Us" className="hover:text-gray-600">About Us</Link>
          <Link to="/pricing" className="hover:text-gray-600">Pricing</Link>
          <Link to="/trial" className="hover:text-gray-600">Free Trial</Link>
          <Link to="/demo" className="hover:text-gray-600">Demo</Link>
        </nav>

        {/* Hamburger Menu Button */}
        <div className="md:hidden text-3xl text-black cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4 text-black font-medium text-lg">
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/About Us" onClick={closeMenu}>About Us</Link>
            <Link to="/pricing" onClick={closeMenu}>Pricing</Link>
            <Link to="/trial" onClick={closeMenu}>Free Trial</Link>
            <Link to="/demo" onClick={closeMenu}>Demo</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
