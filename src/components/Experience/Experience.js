import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';
import { FaBriefcase, FaLaptopCode } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'MERN Stack Intern',
      company: 'Coderatory Revolution & Innovation',
      location: 'Karachi, Pakistan',
      period: '3 months (2026)',
      type: 'Internship',
      icon: <FaBriefcase />,
      responsibilities: [
        'Developed and maintained web applications using Type Script, Next JS , MongoDB, Express.js, React.js, and Node.js',
        'Collaborated with senior developers on client projects',
        'Implemented responsive UI components and RESTful APIs , GraphQL , Sockets, prisma',
        'Participated in code reviews and agile development practices'
      ]
    },
    {
      title: 'Semester Project Development',
      company: 'Academic Coursework',
      location: 'Sir Syed University',
      period: 'Semester Projects',
      type: 'Academic Project',
      icon: <FaLaptopCode />,
      responsibilities: [
        'Worked on several semester projects involving hardware design, IoT, and embedded systems',
        'Developed projects using Python, Arduino, and microcontrollers',
        'Built hardware, software, and networking systems working with design and cutting-edge tools',
        'Collaborated with team to integrate hardware and software components'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' }
    }
  };

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <motion.p
          className="experience-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Professional and academic work experience
        </motion.p>
        
        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              className="experience-item"
              key={index}
              variants={itemVariants}
              whileHover={{ x: 8 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="experience-icon-wrapper"
                whileHover={{ scale: 1.15 }}
              >
                <div className="experience-icon">{exp.icon}</div>
              </motion.div>
              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-period">{exp.period}</span>
                    <span className="experience-type">{exp.type}</span>
                  </div>
                </div>
                <p className="experience-location">{exp.location}</p>
                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                    >
                      {responsibility}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
