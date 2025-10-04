// src/components/Footer.jsx
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">NIKE</div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Nike. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
