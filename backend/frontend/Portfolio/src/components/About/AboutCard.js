import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">DANFORD CHRISTOPHER </span>
            from <span className="purple"> Dar-es-salaa, Tanzania.</span>
            <br />
            I am currently a student but working as a software developer as a freelancer.
            <br />
            I am taking bachelor of computer science at University of Dar-es-salaam expecting to graduate in 2025.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new things in Technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching people about technology
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "There is a place for everything, and everythingin its place!"{" "}
          </p>
          <footer className="blockquote-footer">Danford</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
