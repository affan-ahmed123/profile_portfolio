import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-text">Affan</span>
          <span className="logo-dot">.</span>
        </div>
        <div className="footer-social">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:affan.codes01@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <p className="footer-text">
          © 2026 Affan Ahmed. Made with <FaHeart className="footer-heart" /> and React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
