import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: 'BS, Computer Engineering',
      institution: 'Sir Syed University of Engineering & Technology',
      location: 'Karachi, Pakistan',
      period: '2022 - 2026',
      icon: <FaGraduationCap />,
      details: [
        'Specialized in Computer Engineering with focus on IoT, Machine Learning, and Web Development',
        'Final Year Project: Smart Headphone - Real-Time Translation & Deepfake Detection System',
        'Completed coursework in Data Structures, Algorithms, Computer Networks, Digital Signal Processing',
        'Hands-on experience with hardware design, embedded systems, and software development'
      ]
    },
    {
      degree: 'Intermediate (Pre-Engineering)',
      institution: 'SRE Majeed Govt Degree College Stadium Road Karachi',
      location: 'Karachi, Pakistan',
      period: '2020 - 2022',
      icon: <FaUniversity />,
      details: [
        'Focused on Mathematics, Physics, and Chemistry',
        'Built strong foundation in analytical and problem-solving skills',
        'Developed interest in engineering and technology'
      ]
    },
    {
      degree: 'Matriculation (Science)',
      institution: 'City Public School',
      location: 'Karachi, Pakistan',
      period: '2018 - 2020',
      icon: <FaSchool />,
      details: [
        'Completed secondary education with focus on Science and Mathematics',
        'Built strong foundational knowledge and analytical skills'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Web Development',
      issuer: 'Global Computer Institute',
      description: 'Comprehensive web development training covering HTML, CSS, JavaScript, and modern frameworks',
      link: 'https://www.google.com/search?q=web+development'
    },
    {
      title: 'React JS - Bano Qabil 2.0',
      issuer: 'Bano Qabil Program',
      description: 'Advanced React.js training covering components, hooks, state management, and modern React patterns',
      link: 'https://www.google.com/search?q=bano+qabil+react'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const certVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section className="education" id="education">
      <div className="education-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Education & Certifications
        </motion.h2>
        
        {/* Education Section */}
        <div className="education-section">
          <motion.h3
            className="subsection-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Education
          </motion.h3>
          <motion.div
            className="education-timeline"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {education.map((edu, index) => (
              <motion.div
                className="education-item"
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="education-icon-wrapper"
                  whileHover={{ scale: 1.15 }}
                >
                  <div className="education-icon">{edu.icon}</div>
                </motion.div>
                <div className="education-content">
                  <h4 className="education-degree">{edu.degree}</h4>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-meta">
                    <span className="education-location">{edu.location}</span>
                    <span className="education-period">{edu.period}</span>
                  </p>
                  <ul className="education-details">
                    {edu.details.map((detail, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications Section */}
        <div className="certifications-section">
          <motion.h3
            className="subsection-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Certifications
          </motion.h3>
          <motion.div
            className="certifications-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                className="certification-card"
                key={index}
                variants={certVariants}
                whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }}
              >
                <motion.div
                  className="certification-icon"
                  whileHover={{ rotate: 15 }}
                >
                  <FaGraduationCap />
                </motion.div>
                <h4 className="certification-title">{cert.title}</h4>
                <p className="certification-issuer">{cert.issuer}</p>
                <p className="certification-description">{cert.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Languages Section */}
        <div className="languages-section">
          <motion.h3
            className="subsection-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Languages
          </motion.h3>
          <motion.div
            className="languages-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="language-item"
              whileHover={{ scale: 1.05 }}
            >
              <div className="language-name">English</div>
              <div className="language-level">Fluent</div>
            </motion.div>
            <motion.div
              className="language-item"
              whileHover={{ scale: 1.05 }}
            >
              <div className="language-name">Urdu</div>
              <div className="language-level">Fluent</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
