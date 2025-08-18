import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMiDBg0T6c-XNVLF5aYUQ5gtzxWtp9IKat-w&s" alt="INLD" className="logo" />
            <div className="logo-text">
              <h2>Indian National Lok Dal</h2>
              <p>Serving the Nation</p>
            </div>
          </div>
          <p className="footer-description">
            Committed to building a prosperous, inclusive, and sustainable India where every citizen has equal opportunities to grow and contribute.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About INLD</a></li>
            <li><a href="/manifesto">Our Manifesto</a></li>
            <li><a href="/leadership">Leadership</a></li>
            <li><a href="/news">News & Events</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>123 Janpath, New Delhi</p>
          <p>Phone: +91-11-2345 6789</p>
          <p>Email: info@inld.org.in</p>
          <div className="social-links">
            <span>Follow us:</span>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon twitter" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="social-icon youtube" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 Indian National Lok Dal. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/disclaimer">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
