import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaYoutube,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <section id="footer">
          <ul className="footer_information">
            <li className="footer_info">
              <FaUser />
              <Link to="/">Malik Hadi</Link>
            </li>
            <li className="footer_info">
              <FaPhone />
              <a
                href="https://wa.me/923155878228"
                target="_blank"
                rel="noopener noreferrer"
              >
                +92 315-5878228
              </a>
            </li>
            <li className="footer_info">
              <FaEnvelope />
              <a
                href="mailto:malikhadizulfiqar@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                malikhadizulfiqar@gmail.com
              </a>
            </li>
            <li className="footer_info">
              <FaMapMarkerAlt />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rawalpindi%2C+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rawalpindi, Pakistan
              </a>
            </li>
          </ul>

          <ul className="footer_information">
            <li className="page_info">
              <Link to="/">Home</Link>
            </li>
            <li className="page_info">
              <Link to="/about">About</Link>
            </li>
            <li className="page_info">
              <Link to="/services">Services</Link>
            </li>
            <li className="page_info">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="page_info">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <ul className="social_icons">
            <li>
              <a
                href="https://www.youtube.com/@webnchill"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube id="youtube" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/TSxMURSHAD"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub id="github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/malikhadi.4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram id="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/hadi.malikhadi.1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook id="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@malikhadi456?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok id="tiktok" />
              </a>
            </li>
          </ul>
          <a href="#home">
            <img
              className="footer_logo"
              src="./images/logo.png"
              alt="logo"
              loading="lazy"
            />
          </a>
        </section>
        <p id="copyright">&copy; 2024 Malik Hadi. All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Footer;
