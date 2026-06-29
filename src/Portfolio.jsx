// Task 8: Portfolio Component
import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React'];

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>Kanwal Shahid Student</h1>
        <p>Junior Developer & React Enthusiast</p>
      </header>

      <section className="portfolio-section">
        <h2>About Me</h2>
        <p>Hello! I am learning React and building cool web apps step by step.</p>
      </section>

      <section className="portfolio-section">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill-badge">{skill}</span>
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="https://via.placeholder.com/200x120?text=Project+1" alt="Project 1" className="project-img" />
            <h3>Click Counter App</h3>
            <p>A simple React app that counts clicks and resets.</p>
          </div>
          <div className="project-card">
            <img src="https://via.placeholder.com/200x120?text=Project+2" alt="Project 2" className="project-img" />
            <h3>Colour Changer</h3>
            <p>An interactive page that changes background colours.</p>
          </div>
        </div>
      </section>

      <footer className="portfolio-footer">
        <p>© 2026 Kanwal Shahid Student. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;
