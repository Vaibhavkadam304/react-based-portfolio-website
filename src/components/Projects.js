import React from "react";
import "../styles/projects.css";

const projects = [
  {
    name: "Secure Login System",
    description: "A secure user authentication system with advanced encryption.",
    link: "https://github.com/Vaibhavkadam304/secure-login-system",
  },


  {
    name: "Movie Recommendation Chatbot",
    description: "An AI chatbot recommending movies based on user preferences.",
    link: "https://github.com/Vaibhavkadam304/Movie_Recommendation_Chatbot",
  },
  {
    name: "Todo List Application",
    description: "A simple and elegant to-do list app to manage tasks effectively.",
    link: "https://github.com/Vaibhavkadam304/Todo-List-Application",
  },
  {
    name: "Google Clone Using Next.js",
    description: "A functional clone of Google Search built using Next.js.",
    link: "https://github.com/Vaibhavkadam304/Google-Clone-Using-NextJS",
  },
  {
    name: "Product Details Page",
    description: "A user-friendly product details page for e-commerce websites.",
    link: "https://github.com/Vaibhavkadam304/Product_Details",
  },
  {
    name: "Django Notes Application",
    description: "A full-stack notes management system built with Django and React.",
    link: "https://github.com/Vaibhavkadam304/DjangoNotsApplication",
  },
  {
    name: "CRUD Application",
    description: "React based Create, Read, Update, Delete app with REST API.",
    link: "https://github.com/Vaibhavkadam304/CURD_Application",
  },
  {
    name: "Smart Advertising Application",
    description: "A Java-based app web scrpping applicationwith ad showing using web scraping.",
    link: "https://github.com/Vaibhavkadam304/Smart-Advertising-Application-Using-Java",
  },
  {
    name: "Slot Machine Game",
    description: "A fun slot machine game built to simulate casino gameplay build using python and pygame with ml integration.",
    link: "https://github.com/Vaibhavkadam304/Slot-Machine",
  },
  
  
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
