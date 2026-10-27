import React from 'react';
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
      featured: true
    },
    {
      title: 'Smart Headphone: Real-Time Translation & Deepfake Detection (FYP)',
      description: 'A wearable headphone system performing real-time multilingual speech translation (34 languages) and AI-generated deepfake voice detection. Features online/offline modes, 1-way & 2-way translation, voice recording with cloud backup, and ML-based deepfake detection using 9-model ensemble trained on ASVspoof 2019 dataset.',
      tech: ['Flutter', 'Python', 'Flask', 'Raspberry Pi', 'Machine Learning', 'NLP', 'Speech Recognition', 'Vosk', 'Whisper', 'scikit-learn', 'CatBoost'],
      github: 'https://github.com/affan-ahmed123/fyp_project-smart_headphone-',
      live: null,
      icon: <FaHeadphones />,
      featured: true
    },
    {
      title: 'Fit With AH - Gym Management System',
      description: 'A comprehensive gym management website featuring membership plans, trainer booking, workout tracking, and nutrition guidance. Built with modern web technologies for seamless user experience.',
      tech: ['React.js', 'JavaScript', 'CSS3', 'Responsive Design'],
      github: null,
      live: 'https://fit-with-ah.netlify.app/',
      icon: <FaDumbbell />,
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
      title: 'GYM Portfolio Website',
      description: 'A responsive gem website where the content is pulled dynamically from Firebase. Features modern design with real-time data updates and elegant UI.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Firebase'],
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

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="projects-subtitle">Showcasing my work in web development, IoT systems, and innovative solutions</p>
        
        {/* Featured Projects */}
        <div className="featured-projects">
          {projects.filter(p => p.featured).map((project, index) => (
            <div className="featured-project-card" key={index}>
              <div className="featured-project-icon">
                {project.icon}
              </div>
              <div className="featured-project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span className="tech-tag" key={techIndex}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub /> View Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="section-subtitle">Other Projects</h3>
        <div className="projects-grid">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span className="tech-tag" key={techIndex}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
