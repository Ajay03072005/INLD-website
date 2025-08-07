import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import { AiFillHome, AiFillHeart } from 'react-icons/ai';
import { BsFillInfoCircleFill, BsPeopleFill, BsNewspaper } from 'react-icons/bs';
import { GiScrollUnfurled } from 'react-icons/gi';
import { MdPhotoLibrary, MdGroups, MdContactPhone, MdArticle, MdMoreHoriz } from 'react-icons/md';
import { RiAdminFill, RiFileTextFill } from 'react-icons/ri';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMoreMenu = () => {
    setIsMoreOpen(!isMoreOpen);
  };

  const closeMenus = () => {
    setIsOpen(false);
    setIsMoreOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMiDBg0T6c-XNVLF5aYUQ5gtzxWtp9IKat-w&s" alt="INLD Logo" className="navbar__logo-img" />
          <span>Indian National Lok Dal</span>
          <span>     </span>
        </Link>

        <div className="navbar__menu-icon" onClick={toggleMenu}>
          <span className={`menu-icon__bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`menu-icon__bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`menu-icon__bar ${isOpen ? 'open' : ''}`}></span>
        </div>

        <div className={`navbar__links ${isOpen ? 'active' : ''}`}>
          {/* Main Navigation Items - Always Visible */}
          <Link 
            to="/" 
            className={`navbar__link ${isActive('/') ? 'active' : ''}`} 
            onClick={closeMenus}
          >
            <AiFillHome className="navbar__icon" />
            <span>Home</span>
          </Link>
          <Link 
            to="/about" 
            className={`navbar__link ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMenus}
          >
            <BsFillInfoCircleFill className="navbar__icon" />
            <span>About</span>
          </Link>
          <Link 
            to="/news-events" 
            className={`navbar__link ${isActive('/news-events') ? 'active' : ''}`}
            onClick={closeMenus}
          >
            <BsNewspaper className="navbar__icon" />
            <span>News</span>
          </Link>
          <Link 
            to="/join" 
            className={`navbar__link ${isActive('/join') ? 'active' : ''}`}
            onClick={closeMenus}
          >
            <MdGroups className="navbar__icon" />
            <span>Join Us</span>
          </Link>
          <Link 
            to="/donate" 
            className={`navbar__link navbar__link--donate ${isActive('/donate') ? 'active' : ''}`}
            onClick={closeMenus}
          >
            <AiFillHeart className="navbar__icon" />
            <span>Donate</span>
          </Link>

          {/* More Menu - Desktop */}
          <div className="navbar__more-menu">
            <button 
              className="navbar__more-btn"
              onClick={toggleMoreMenu}
            >
              <MdMoreHoriz className="navbar__icon" />
              <span>More</span>
            </button>
            <div className={`navbar__dropdown ${isMoreOpen ? 'active' : ''}`}>
              <Link 
                to="/leadership" 
                className={`navbar__dropdown-link ${isActive('/leadership') ? 'active' : ''}`}
                onClick={closeMenus}
              >
                <BsPeopleFill className="navbar__icon" />
                <span>Leadership</span>
              </Link>
              <Link 
                to="/manifesto" 
                className={`navbar__dropdown-link ${isActive('/manifesto') ? 'active' : ''}`}
                onClick={closeMenus}
              >
                <GiScrollUnfurled className="navbar__icon" />
                <span>Manifesto</span>
              </Link>
              <Link 
                to="/gallery" 
                className={`navbar__dropdown-link ${isActive('/gallery') ? 'active' : ''}`}
                onClick={closeMenus}
              >
                <MdPhotoLibrary className="navbar__icon" />
                <span>Gallery</span>
              </Link>
              <Link 
                to="/blogs" 
                className={`navbar__dropdown-link ${isActive('/blogs') ? 'active' : ''}`}
                onClick={closeMenus}
              >
                <MdArticle className="navbar__icon" />
                <span>Blogs</span>
              </Link>
              <Link 
                to="/press-release" 
                className={`navbar__dropdown-link ${isActive('/press-release') ? 'active' : ''}`}
                onClick={closeMenus}
              >
                <RiFileTextFill className="navbar__icon" />
                <span>Press Release</span>
              </Link>
              <Link 
                to="/contact" 
                className={`navbar__dropdown-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={closeMenus}
              >
                <MdContactPhone className="navbar__icon" />
                <span>Contact</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Items - All items shown in mobile */}
          <div className="navbar__mobile-only">
            <Link 
              to="/leadership" 
              className={`navbar__link ${isActive('/leadership') ? 'active' : ''}`}
              onClick={closeMenus}
            >
              <BsPeopleFill className="navbar__icon" />
              <span>Leadership</span>
            </Link>
            <Link 
              to="/manifesto" 
              className={`navbar__link ${isActive('/manifesto') ? 'active' : ''}`}
              onClick={closeMenus}
            >
              <GiScrollUnfurled className="navbar__icon" />
              <span>Manifesto</span>
            </Link>
            <Link 
              to="/gallery" 
              className={`navbar__link ${isActive('/gallery') ? 'active' : ''}`}
              onClick={closeMenus}
            >
              <MdPhotoLibrary className="navbar__icon" />
              <span>Media Gallery</span>
            </Link>
            <Link 
              to="/blogs" 
              className={`navbar__link ${isActive('/blogs') ? 'active' : ''}`}
              onClick={closeMenus}
            >
              <MdArticle className="navbar__icon" />
              <span>Blogs</span>
            </Link>
            <Link 
              to="/press-release" 
              className={`navbar__link ${isActive('/press-release') ? 'active' : ''}`}
              onClick={closeMenus}
            >
              <RiFileTextFill className="navbar__icon" />
              <span>Press Release</span>
            </Link>
            <Link 
              to="/contact" 
              className={`navbar__link ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeMenus}
            >
              <MdContactPhone className="navbar__icon" />
              <span>Contact</span>
            </Link>
          </div>

          <Link to="/login" className="navbar__cta-button" onClick={closeMenus}>
            <RiAdminFill className="navbar__icon" />
            <span>Admin</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
