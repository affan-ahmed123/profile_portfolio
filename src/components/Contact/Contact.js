import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

  const contactItems = [
    { icon: <FaEnvelope className="contact-icon" />, title: 'Email', content: <a href="mailto:affan.codes01@gmail.com">affan.codes01@gmail.com</a> },
    { icon: <FaPhone className="contact-icon" />, title: 'Phone', content: <a href="tel:03432172162">03432172162</a> },
    { icon: <FaMapMarkerAlt className="contact-icon" />, title: 'Location', content: 'Karachi, Pakistan' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="contact-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Have a project in mind? Let's work together!
        </motion.p>
        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="contact-text">
              I'm always open to discussing new projects, creative ideas, freelance opportunities,
              or partnerships. Whether you need a website, an IoT solution, or just want to say hello,
              feel free to reach out!
            </p>
            <motion.div
              className="contact-details"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactItems.map((item, index) => (
                <motion.div
                  className="contact-item"
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {item.icon}
                  <div className="contact-item-content">
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="contact-social"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3>Connect With Me</h3>
              <div className="social-links">
                <motion.a
                  href="https://www.linkedin.com/in/affan-ahmed-14898625a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BXg9x9LGaTCKLcdErN2lXNw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin /> LinkedIn
                </motion.a>
                <motion.a
                  href="https://github.com/affan-ahmed123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub /> GitHub
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
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
            <motion.button
              type="submit"
              className="submit-btn"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {status === 'sending' ? (
                <><span className="spinner"></span> Sending...</>
              ) : (
                <><FaPaperPlane /> Send Message</>
              )}
            </motion.button>
            {status === 'success' && (
              <motion.div
                className="form-status success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✅ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                className="form-status error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ❌ Something went wrong. Please try again or email directly.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
