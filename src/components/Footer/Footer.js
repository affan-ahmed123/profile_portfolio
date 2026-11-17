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
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-content">
        <motion.div
          className="footer-logo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <span className="logo-text">Affan</span>
          <span className="logo-dot">.</span>
        </motion.div>
        <motion.div
          className="footer-social"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {[
            { href: "https://github.com/affan-ahmed123", icon: <FaGithub /> },
            { href: "https://www.linkedin.com/in/affan-ahmed-14898625a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BXg9x9LGaTCKLcdErN2lXNw%3D%3D", icon: <FaLinkedin /> },
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
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          © 2026 Affan Ahmed. Made with <FaHeart className="footer-heart" /> and React
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
