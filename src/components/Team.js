import React from 'react';
import '../styles/header.css';
// import medImage from '../assets/per1.png';
// import medImage from '../assets/per2.png';
// import medImage from '../assets/per3.png';

const teamMembers = [
  {
    name: "Jane Cooper",
    role: "Developer",
    image: "../assets/per1.jpg", 
  },
  // {
  //   name: "Brooklyn Simmons",
  //   role: "Designer",
  //   image: "https://via.placeholder.com/150",
  // },
  // {
  //   name: "Guy Hawkins",
  //   role: "Marketer",
  //   image: "https://via.placeholder.com/150",
  // },
  // {
  //   name: "Kristin Watson",
  //   role: "Photographer",
  //   image: "https://via.placeholder.com/150",
  // }
];

const Team = () => {
  return (
    <section className="team-section">
      <h2>Our Expert Members</h2>
      <p>Learn more about our talented, remarkable individuals. They fuel our company with expertise and innovative thinking.</p>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={`${member.name}`} className="team-image" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
