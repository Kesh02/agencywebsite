import React from 'react';
// import './ProjectCard.css';

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default ProjectCard;
