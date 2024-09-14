import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logoipsum</div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <a href="/contact" className="contact-button">Contact</a>
    </header>
  );
};

export default Header;