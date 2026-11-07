import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const roles = ['Computer Engineer', 'Full Stack Developer'];

const Hero = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    if (!isDeleting && index < currentRole.length) {
      setTimeout(() => {
        setText(currentRole.substring(0, index + 1));
        setIndex(index + 1);
      }, 100);
    } else if (isDeleting && index > 0) {
      setTimeout(() => {
        setText(currentRole.substring(0, index - 1));
        setIndex(index - 1);
      }, 50);
    } else if (!isDeleting && index === currentRole.length) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }
  }, [index, isDeleting, roleIndex]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Affan <span className="gradient-text">Ahmed</span>
          </motion.h1>
          <motion.h2
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </motion.h2>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            BS Computer Engineering graduate from Sir Syed University of Engineering & Technology.
            Passionate about building innovative web applications, IoT systems, and creating 
            seamless digital experiences with modern technologies.
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <motion.button
              className="btn btn-primary"
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
          </motion.div>
          <motion.div
            className="hero-social"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            {[
              { href: "https://github.com/affan-ahmed123", icon: <FaGithub />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/affan-ahmed", icon: <FaLinkedin />, label: "LinkedIn" },
              { href: "mailto:affan.codes01@gmail.com", icon: <FaEnvelope />, label: "Email" },
              { href: "tel:03432172162", icon: <FaPhone />, label: "Phone" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 60, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="image-wrapper">
            <img 
              src="/images/hello.png" 
              alt="Affan Ahmed - Computer Engineer" 
              className="profile-image"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
