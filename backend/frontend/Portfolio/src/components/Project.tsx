import React from "react";
import mock01 from "../assets/images/ocean.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.jpg";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/ocean .png";
import "../assets/styles/Project.scss";



const projects = [
    {
      title: "Ocean E-commerce",
      description: "This is an e-commerce app that links the manufacturer of the products down to the end-user, simplifying the marketing process.",
      image: mock10,
      link: "",
    },
    {
      title: "Cypherz",
      description: "This is an agriculture platform that eliminates the middleman in agricultural products, linking sellers and buyers directly.",
      image: mock04,
      link: "",
    },
    {
      title: "Vikoba+",
      description: "A mobile app that simplifies money management for small-scale groups (Vikoba), making it easy to track expenses and income.",
      image: mock08,
      link: "",
    },
    {
      title: "Nasafiri",
      description: "A web application aimed at reducing the hassle of transport booking, saving time for passengers, and offering insurance options.",
      image: mock07,
      link: "",
    },
    {
      title: "Stock Management",
      description: "A mobile application designed to manage inventory, notify the owner about stock levels, and suggest products to increase annual gains.",
      image: mock05,
      link: "",
    },
    {
      title: "Youtube Downloader",
      description: "A web application using a simple Python library to allow users to download any YouTube video or complete playlist ad-free and fast.",
      image: mock06,
      link: "",
    },
  ];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <a href={project.link} target="_blank" rel="noreferrer">
              <img src={project.image} className="zoom" alt="thumbnail" width="100%" />
            </a>
            <a href={project.link} target="_blank" rel="noreferrer">
              <h2>{project.title}</h2>
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
