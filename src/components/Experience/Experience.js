import React from 'react';
import './Experience.css';
import { FaBriefcase, FaCode, FaLaptopCode } from 'react-icons/fa';

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

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        <p className="experience-subtitle">Professional and academic work experience</p>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-icon-wrapper">
                <div className="experience-icon">{exp.icon}</div>
              </div>
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
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
