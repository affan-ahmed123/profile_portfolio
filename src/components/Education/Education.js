import React from 'react';
import './Education.css';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: 'BS, Computer Engineering (In-Progress)',
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
      institution: 'Sir Syed Majeed Government Degree College, Stadium Road',
      location: 'Karachi, Pakistan',
      period: '2020 - 2022',
      icon: <FaUniversity />,
      details: [
        'Focused on Mathematics, Physics, and Chemistry',
        'Built strong foundation in analytical and problem-solving skills',
        'Developed interest in engineering and technology'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Web Development - Udacity',
      issuer: 'Global Computer Institute',
      description: 'Comprehensive web development training covering HTML, CSS, JavaScript, and modern frameworks',
      link: 'https://www.google.com/search?q=udacity+web+development'
    },
    {
      title: 'React JS - Bano Qabil 2.0',
      issuer: 'Bano Qabil Program',
      description: 'Advanced React.js training covering components, hooks, state management, and modern React patterns',
      link: 'https://www.google.com/search?q=bano+qabil+react'
    }
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2 className="section-title">Education & Certifications</h2>
        
        {/* Education Section */}
        <div className="education-section">
          <h3 className="subsection-title">Education</h3>
          <div className="education-timeline">
            {education.map((edu, index) => (
              <div className="education-item" key={index}>
                <div className="education-icon-wrapper">
                  <div className="education-icon">{edu.icon}</div>
                </div>
                <div className="education-content">
                  <h4 className="education-degree">{edu.degree}</h4>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-meta">
                    <span className="education-location">{edu.location}</span>
                    <span className="education-period">{edu.period}</span>
                  </p>
                  <ul className="education-details">
                    {edu.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="certifications-section">
          <h3 className="subsection-title">Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div className="certification-card" key={index}>
                <div className="certification-icon">
                  <FaGraduationCap />
                </div>
                <h4 className="certification-title">{cert.title}</h4>
                <p className="certification-issuer">{cert.issuer}</p>
                <p className="certification-description">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div className="languages-section">
          <h3 className="subsection-title">Languages</h3>
          <div className="languages-grid">
            <div className="language-item">
              <div className="language-name">English</div>
              <div className="language-level">Fluent</div>
            </div>
            <div className="language-item">
              <div className="language-name">Urdu</div>
              <div className="language-level">Fluent</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
