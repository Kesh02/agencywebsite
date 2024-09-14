import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <img src="logo.png" alt="Logo" className="footer-logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie nulla massa fringilla.</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-behance"></i></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Menu</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Blog Post</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Utility Pages</h3>
          <ul>
            <li><a href="#">Start Here</a></li>
            <li><a href="#">Styleguide</a></li>
            <li><a href="#">Password Protected</a></li>
            <li><a href="#">404 Not Found</a></li>
            <li><a href="#">Licenses</a></li>
          </ul>
        </div>

        <div className="footer-section newsletter-section">
          <h3>Subscribe to our newsletter</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit am dolor sit.</p>
          <form>
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
