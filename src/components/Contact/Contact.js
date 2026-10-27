import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'affan.codes01@gmail.com'
    };

    emailjs.send(
      'service_6invofh',       // EmailJS Service ID
      'template_ql7el9f',      // EmailJS Template ID
      templateParams,
      'FTBgEmG1JYHdbgAJA'      // EmailJS Public Key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    })
    .catch((error) => {
      console.error('FAILED...', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">Have a project in mind? Let's work together!</p>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-text">
              I'm always open to discussing new projects, creative ideas, freelance opportunities,
              or partnerships. Whether you need a website, an IoT solution, or just want to say hello,
              feel free to reach out!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div className="contact-item-content">
                  <h3>Email</h3>
                  <p><a href="mailto:affan.codes01@gmail.com">affan.codes01@gmail.com</a></p>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div className="contact-item-content">
                  <h3>Phone</h3>
                  <p><a href="tel:03432172162">03432172162</a></p>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div className="contact-item-content">
                  <h3>Location</h3>
                  <p>Karachi, Pakistan</p>
                </div>
              </div>
            </div>
            <div className="contact-social">
              <h3>Connect With Me</h3>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/affan-ahmed-14898625a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BXg9x9LGaTCKLcdErN2lXNw%3D%3D" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaLinkedin /> LinkedIn
                </a>
                <a href="https://github.com/affan-ahmed123" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project or inquiry..."
                rows="6"
              />
            </div>
            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? (
                <><span className="spinner"></span> Sending...</>
              ) : (
                <><FaPaperPlane /> Send Message</>
              )}
            </button>
            {status === 'success' && (
              <div className="form-status success">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="form-status error">
                ❌ Something went wrong. Please try again or email directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
