import React from 'react';
import Header from '../components/Header';
import ServiceSection from '../components/ServiceSection';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import '../styles/home.css';
import medImage from '../assets/med.png';
import Team from '../components/Team';


const Home = () => {
    return (
      <div>
      <Header />
      <main>
        <section className="hero-section">
          <h1>We are the best agency in the world</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="primary-button">Start a Project</button>
          <button className="secondary-button">Learn More</button>
        </section>
        <ServiceSection />
        <AboutUs />
        <Team />
        <Projects />
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
    </div>
      );
};

export default Home;