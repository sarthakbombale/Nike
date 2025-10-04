// src/components/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact"id='contact' >
      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Have questions or feedback? We'd love to hear from you.</p>
          <ul>
            <li><strong>Email:</strong> support@nike.com</li>
            <li><strong>Phone:</strong> +1 800 555 1234</li>
            <li><strong>Address:</strong> 1 Bowerman Drive, Beaverton, OR 97005</li>
          </ul>

          {/* Social Icons */}
          <div className="contact-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
