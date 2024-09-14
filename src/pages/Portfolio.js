import React from 'react';
import '../styles/portfolio.css';

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      {/* Header */}
      <header className="header">
        <div className="logo">Logoipsum</div>
        <nav className="navbar">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
          </ul>
        </nav>
        <a href="#" className="contact-btn">Contact</a>
      </header>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="portfolio-header">
          <h1>Our Portfolio</h1>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>
        <div className="portfolio-items">
          <div className="portfolio-item">
            <img src="image1.jpg" alt="Medical Website" />
            <h3>Medical Website</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#">Read more</a>
          </div>
          <div className="portfolio-item">
            <img src="image2.jpg" alt="Cryptocurrency Website" />
            <h3>Cryptocurrency Website</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#">Read more</a>
          </div>
          <div className="portfolio-item">
            <img src="image3.jpg" alt="Bitcoin Investment Website" />
            <h3>Bitcoin Investment Web</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#">Read more</a>
          </div>
          <div className="portfolio-item">
            <img src="image4.jpg" alt="Body Builder Website" />
            <h3>Body Builder Web</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#">Read more</a>
          </div>
          <div className="portfolio-item">
            <img src="image5.jpg" alt="Dental Website" />
            <h3>Dental Website</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#">Read more</a>
          </div>
        </div>
        <div className="see-all-btn">
          <a href="#">See All Portfolio</a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Do you have a project in mind?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet diam in est pharetra porttitor libero.</p>
        <div className="cta-buttons">
          <a href="#" className="cta-btn">Let's Talk</a>
          <a href="#" className="cta-btn">Learn More</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <img src="logo.png" alt="Logo" className="footer-logo" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="footer-section">
            <h3>Menu</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Utility Pages</h3>
            <ul>
              <li><a href="#">Start Here</a></li>
              <li><a href="#">404 Not Found</a></li>
              <li><a href="#">Licenses</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Subscribe to our Newsletter</h3>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;
