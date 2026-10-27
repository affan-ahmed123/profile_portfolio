import React, { useEffect, useState } from 'react';
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
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">
            Affan <span className="gradient-text">Ahmed</span>
          </h1>
          <h2 className="hero-title">
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            BS Computer Engineering graduate from Sir Syed University of Engineering & Technology.
            Passionate about building innovative web applications, IoT systems, and creating 
            seamless digital experiences with modern technologies.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get In Touch
            </button>
            <button className="btn btn-secondary" onClick={scrollToProjects}>
              View My Work
            </button>
          </div>
          <div className="hero-social">
            <a href="https://github.com/affan-ahmed123" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/affan-ahmed" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:affan.codes01@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="tel:03432172162" aria-label="Phone">
              <FaPhone />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img 
              src="/images/hello.png" 
              alt="Affan Ahmed - Computer Engineer" 
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
