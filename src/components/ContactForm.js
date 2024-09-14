import React, { useState } from 'react';
// import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: 'Webflow',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Now Start Your Project</h2>
      <input 
        type="text" 
        name="fullName" 
        placeholder="Full Name" 
        value={formData.fullName} 
        onChange={handleChange} 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={formData.email} 
        onChange={handleChange} 
      />
      <div className="radio-group">
        <input 
          type="radio" 
          name="service" 
          value="Webflow" 
          checked={formData.service === 'Webflow'} 
          onChange={handleChange} 
        />
        <label>Webflow</label>
        <input 
          type="radio" 
          name="service" 
          value="UI/UX Design" 
          onChange={handleChange} 
        />
        <label>UI/UX Design</label>
        <input 
          type="radio" 
          name="service" 
          value="SEO" 
          onChange={handleChange} 
        />
        <label>SEO</label>
      </div>
      <textarea 
        name="message" 
        placeholder="Write your message" 
        value={formData.message} 
        onChange={handleChange} 
      />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;