import React, { useState } from "react";
import "./Navbar.css";
import { FaUserFriends, FaCalendarAlt, FaFileAlt, FaImages, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Leadership"); // default active

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // close menu on mobile after click
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <span className="logo-circle">INLD</span>
          <div className="logo-text">
            <h2>Indian National Lok Dal</h2>
            <p>Serving the Nation</p>
          </div>
        </div>
      </div>

      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a href="#" onClick={() => handleLinkClick("Home")} className={activeLink === "Home" ? "active" : ""}>Home</a>
        <a href="#" onClick={() => handleLinkClick("About INLD")} className={activeLink === "About INLD" ? "active" : ""}>About INLD</a>
        <a href="#" onClick={() => handleLinkClick("Leadership")} className={activeLink === "Leadership" ? "active" : ""}>
          <FaUserFriends className="icon" /> Leadership
        </a>
        <a href="#" onClick={() => handleLinkClick("News & Events")} className={activeLink === "News & Events" ? "active" : ""}>
          <FaCalendarAlt className="icon" /> News & Events
        </a>
        <a href="#" onClick={() => handleLinkClick("Manifesto")} className={activeLink === "Manifesto" ? "active" : ""}>
          <FaFileAlt className="icon" /> Manifesto
        </a>
        <a href="#" onClick={() => handleLinkClick("Media Gallery")} className={activeLink === "Media Gallery" ? "active" : ""}>
          <FaImages className="icon" /> Media Gallery
        </a>
        <a href="#" onClick={() => handleLinkClick("Join Movement")} className={activeLink === "Join Movement" ? "active" : ""}>Join Movement</a>
        <a href="#" onClick={() => handleLinkClick("Contact")} className={activeLink === "Contact" ? "active" : ""}>
          <FaPhoneAlt className="icon" /> Contact
        </a>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
