import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth > 600) {
      setIsNavbarOpen(false); // Close the navbar on large screens
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <nav>
        <Link to="/" id="logo">
          <img src="./images/logo.png" alt="logo" loading="lazy" /> MALIK HADI
        </Link>
        <button onClick={toggleNavbar}>
          {isNavbarOpen ? (
            <FaTimes style={{ color: "var(--bg_color)" }} />
          ) : (
            <FaBars style={{ color: "var(--bg_color)" }} />
          )}
        </button>
        <ul
          className={`navbar ${
            windowWidth <= 600 && !isNavbarOpen ? "hidebar" : ""
          }`}
        >
          <Link to="/">
            <li className="navItem">Home</li>
          </Link>
          <Link to="/about">
            <li className="navItem">About</li>
          </Link>
          <Link to="/services">
            <li className="navItem">Services</li>
          </Link>
          <Link to="/portfolio">
            <li className="navItem">Portfolio</li>
          </Link>
          <Link to="/contact">
            <li className="navItem">Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
