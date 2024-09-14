import React from 'react';
import '../styles/projects.css';

// Dummy project data
const projects = [
  {
    title: 'Medical Website',
    description: 'A modern, fully responsive medical website.',
    image: '', 
    link: '#',
  },
  {
    title: 'Cryptocurrency Website',
    description: 'A website focused on the latest cryptocurrency trends.',
    image: 'https://via.placeholder.com/400x300', // Placeholder for image
    link: '#',
  },
  {
    title: 'Bitcoin Investment Web',
    description: 'A sleek design for a bitcoin investment platform.',
    image: 'https://via.placeholder.com/400x300', // Placeholder for image
    link: '#',
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>More Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link">Read more</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
