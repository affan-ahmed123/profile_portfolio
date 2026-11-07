import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-content">
        <motion.div
          className="footer-logo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="logo-text">Affan</span>
          <span className="logo-dot">.</span>
        </motion.div>
        <motion.div
          className="footer-social"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { href: "https://github.com", icon: <FaGithub /> },
            { href: "https://linkedin.com", icon: <FaLinkedin /> },
            { href: "mailto:affan.codes01@gmail.com", icon: <FaEnvelope /> },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target={social.href.startsWith('http') ? "_blank" : undefined}
              rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
        <motion.p
          className="footer-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © 2026 Affan Ahmed. Made with <FaHeart className="footer-heart" /> and React
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
