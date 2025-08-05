import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill, BsPeopleFill, BsNewspaper } from 'react-icons/bs';
import { GiScrollUnfurled } from 'react-icons/gi';
import { MdPhotoLibrary, MdGroups, MdContactPhone } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMiDBg0T6c-XNVLF5aYUQ5gtzxWtp9IKat-w&s" alt="INLD Logo" className="navbar__logo-img" />
          <span>INLD</span>
        </Link>

        <div className="navbar__menu-icon" onClick={toggleMenu}>
          <span className={`menu-icon__bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`menu-icon__bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`menu-icon__bar ${isOpen ? 'open' : ''}`}></span>
        </div>

        <div className={`navbar__links ${isOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`navbar__link ${isActive('/') ? 'active' : ''}`} 
            onClick={() => setIsOpen(false)}
          >
            <AiFillHome className="navbar__icon" />
            <span>Home</span>
          </Link>
          <Link 
            to="/about" 
            className={`navbar__link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            <BsFillInfoCircleFill className="navbar__icon" />
            <span>About INLD</span>
          </Link>
          <Link 
            to="/leadership" 
            className={`navbar__link ${isActive('/leadership') ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            <BsPeopleFill className="navbar__icon" />
            <span>Leadership</span>
          </Link>
          <Link 
            to="/news-events" 
            className={`navbar__link ${isActive('/news-events') ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            <BsNewspaper className="navbar__icon" />
            <span>News & Events</span>
          </Link>
          <Link 
            to="/manifesto" 
            className={`navbar__link ${isActive('/manifesto') ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            <GiScrollUnfurled className="navbar__icon" />
            <span>Manifesto</span>
          </Link>
          <Link 
            to="/gallery" 
            className={`navbar__link ${isActive('/gallery') ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            <MdPhotoLibrary className="navbar__icon" />
            <span>Media Gallery</span>
          </Link>
          <Link 
            to="/join" 
            className={`navbar__link ${isActive('/join') ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            <MdGroups className="navbar__icon" />
            <span>Join Movement</span>
          </Link>
          <Link 
            to="/contact" 
            className={`navbar__link ${isActive('/contact') ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            <MdContactPhone className="navbar__icon" />
            <span>Contact</span>
          </Link>
          <Link to="/admin" className="navbar__cta-button" onClick={() => setIsOpen(false)}>
            <RiAdminFill className="navbar__icon" />
            <span>Admin</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
