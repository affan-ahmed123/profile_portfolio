import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaDumbbell, FaHeadphones, FaTasks } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Projexa - Project Management Tool',
      description: 'A collaborative full-stack project management platform featuring interactive Kanban boards, Gantt charts, and dynamic project timelines. Built with real-time WebSocket communication, scalable REST APIs, and a modern responsive interface.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB Atlas', 'WebSockets', 'REST APIs'],
      github: null,
      live: 'https://projexa-workspace.vercel.app/',
      icon: <FaTasks />,
      image: '/images/projects/projexa.png',
      featured: true
    },
    {
      title: 'Smart Headphone: Real-Time Translation & Deepfake Detection (FYP)',
      description: 'A wearable headphone system performing real-time multilingual speech translation (34 languages) and AI-generated deepfake voice detection. Features online/offline modes, 1-way & 2-way translation, voice recording with cloud backup, and ML-based deepfake detection using 9-model ensemble trained on ASVspoof 2019 dataset.',
      tech: ['Flutter', 'Python', 'Flask', 'Raspberry Pi', 'Machine Learning', 'NLP', 'Speech Recognition', 'Vosk', 'Whisper', 'scikit-learn', 'CatBoost'],
      github: 'https://github.com/affan-ahmed123/fyp_project-smart_headphone-',
      live: null,
      icon: <FaHeadphones />,
      image: '/images/projects/smartheadphone.png',
      featured: true
    },
    {
      title: 'Gym Portfolio',
      description: 'A comprehensive gym management website featuring membership plans, trainer booking, workout tracking, and nutrition guidance. Built with modern web technologies for seamless user experience.',
      tech: ['React.js', 'JavaScript', 'CSS3', 'Responsive Design'],
      github: null,
      live: 'https://fit-with-ah.netlify.app/',
      icon: <FaDumbbell />,
      image: '/images/projects/gymportfolio.png',
      featured: true
    },
    {
      title: 'Inventory Management System',
      description: 'A full-stack inventory management system for tracking stock and inventory. Built with modern web technologies, features real-time updates and comprehensive reporting capabilities.',
      tech: ['HTML', 'CSS', 'Java Script', 'php'],
      github: null,
      live: null,
      featured: false
    },
    {
      title: 'Front-View Project - ML Face Recognition',
      description: 'A multilingual system using ML to detect speech in real-time and run on checks of ML models being used in real or not. Features ensemble learning with multiple ML models for accurate detection.',
      tech: ['Machine Learning', 'Python', 'NLP', 'Speech Recognition', 'scikit-learn'],
      github: null,
      live: null,
      featured: false
    },
    {
      title: 'Digital Signature Verification with RSA & DSA',
      description: 'RSA and DSA from scratch in MATLAB to generate and check digital signatures. Secure document signing and verification with cryptographic techniques ensuring data integrity.',
      tech: ['MATLAB', 'Cryptography', 'DSA', 'RSA', 'Digital Security'],
      github: null,
      live: null,
      featured: false
    },
    {
      title: 'Floating Point Calculator',
      description: 'A Python app that performs floating-point calculations. Handles complex mathematical operations with precision and user-friendly interface.',
      tech: ['verilog', 'TestBench', 'Mathematical Computing'],
      github: null,
      live: null,
      featured: false
    },
    {
      title: 'Tic-Tac-Toe Game',
      description: 'Console-based two-player Tic-Tac-Toe. Features turn-based play with a clean, intuitive interface and winner detection logic.',
      tech: ['C++', 'Game Logic', 'Console Application'],
      github: null,
      live: null,
      featured: false
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const featuredVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="projects-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Showcasing my work in web development, IoT systems, and innovative solutions
        </motion.p>

        {/* Featured Projects */}
        <motion.div
          className="featured-projects"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              className="featured-project-card"
              key={index}
              variants={featuredVariants}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Background Image Preview */}
              <div className="featured-project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="featured-image"
                />
                <div className="featured-image-overlay">
                  <motion.div
                    className="featured-project-icon"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {project.icon}
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="featured-project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      className="tech-tag"
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: techIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub /> View Code
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live-demo-link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.h3
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Other Projects
        </motion.h3>
        <motion.div
          className="projects-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }}
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span className="tech-tag" key={techIndex}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
