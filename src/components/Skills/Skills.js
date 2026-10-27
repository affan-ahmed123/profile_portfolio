import React from 'react';
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

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="skills-subtitle">Technologies and tools I work with to build amazing solutions</p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span className="skill-item" key={skillIndex}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
