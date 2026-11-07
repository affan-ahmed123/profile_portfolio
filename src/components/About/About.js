import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import { FaCode, FaLaptopCode, FaMicrochip, FaServer } from 'react-icons/fa';

const About = () => {
  const cards = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Building responsive and performant web applications using React, HTML5, CSS3, and modern JavaScript frameworks.'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Frontend & Mobile Development',
      description: 'Creating beautiful user interfaces and mobile applications with React.js, Flutter, TypeScript, and modern CSS frameworks like Tailwind and Bootstrap.'
    },
    {
      icon: <FaMicrochip />,
      title: 'IoT & Machine Learning',
      description: 'Experience with Raspberry Pi, Arduino, ESP32, and developing intelligent systems using ML, NLP, speech recognition, and deepfake detection algorithms.'
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Developing robust server-side applications with Python, Flask, Node.js, Express, MongoDB, PostgreSQL, and RESTful APIs.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="about-intro">
              I'm <span className="highlight">Affan Ahmed</span>, a passionate Computer Engineer who graduated
              with a BS in Computer Engineering from Sir Syed University of Engineering & Technology.
              I specialize in building innovative web applications and IoT systems that solve real-world problems.
            </p>
            <p className="about-description">
              With expertise in full-stack development, mobile applications, and IoT systems, I bring ideas to life through
              clean code and elegant solutions. From developing a complete Gym Management System to creating
              an advanced real-time translation and deepfake detection headphone system, I love working on projects that make a difference.
            </p>
            <p className="about-description">
              I have hands-on experience with React.js, Flutter, Python, Flask, Node.js, MongoDB, IoT platforms (Raspberry Pi, ESP32),
              machine learning (scikit-learn, CatBoost), and NLP technologies. I'm constantly learning new technologies and staying current with
              industry best practices to deliver high-quality, innovative solutions.
            </p>
            <motion.div
              className="about-stats"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                className="stat"
                whileHover={{ scale: 1.05 }}
              >
                <h3>2026</h3>
                <p>BS Graduate</p>
              </motion.div>
              <motion.div
                className="stat"
                whileHover={{ scale: 1.05 }}
              >
                <h3>10+</h3>
                <p>Projects Completed</p>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="about-cards"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {cards.map((card, index) => (
              <motion.div
                className="about-card"
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 12px 32px rgba(0,0,0,0.12)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="card-icon">{card.icon}</div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
