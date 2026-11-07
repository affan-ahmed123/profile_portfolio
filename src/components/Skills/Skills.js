import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import { FaReact, FaNode, FaMicrochip, FaTools } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      icon: <FaReact />,
      title: 'Frontend & Mobile Development',
      skills: ['Next.js', 'React.js', 'Flutter', 'Dart', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'jQuery', 'Responsive Design']
    },
    {
      icon: <FaNode />,
      title: 'Backend & Database',
      skills: ['Node.js', 'Express.js', 'Python', 'Flask', 'Java', 'C++', 'PHP', 'MongoDB', 'PostgreSQL', 'MySQL', 'REST APIs','GraphQL','Sockets','Prisma', 'Firebase']
    },
    {
      icon: <FaMicrochip />,
      title: 'IoT & Machine Learning',
      skills: ['Raspberry Pi', 'Arduino', 'ESP32', 'Embedded Systems', 'MATLAB', 'Simulink']
    },
    {
      icon: <FaTools />,
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code','Cisco Packet Tracer', 'Web Development', 'Digital Design', 'Linux','Postman']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>
        <motion.p
          className="skills-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Technologies and tools I work with to build amazing solutions
        </motion.p>
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              className="skill-category"
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="category-header">
                <motion.div
                  className="category-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <motion.div
                className="skills-list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    className="skill-item"
                    key={skillIndex}
                    variants={skillItemVariants}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
