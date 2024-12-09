import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2023 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Flutter Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ocean Tech Startup{" "}
            </h4>
            <p>
              <ul>
                <li>Developed an e-commerce application using Flutter</li>
                <li>
                  Integrated Firebase for authentication, real-time database,
                  and cloud storage
                </li>
                <li>Improved application performance and user experience</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022-Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Backend developer & DevOps engeener
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Trilabs Limited
            </h4>
            <p>
              <ul>
                <li>
                  Develop custom web design solutions and intergrate with AI{" "}
                </li>
                <li>
                  Intergrate the payment system to the online Transport booking
                  system
                </li>
                <li>
                  Develop the rest Api that with communicate with the
                  application for easy booking process
                </li>
                <li>
                  Ensure countinuous intergration and deployment to ensure early
                  delivery of the application
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Finhub community
            </h4>
            <p>
              <ul>
                <li>Develop custom web design solutions </li>
                <li>
                  Collaborated with corporations and helped them build powerful
                  websites{" "}
                </li>
                <li>Designed an e-commerce web app</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020-2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Developer & UI/UX Designer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Software development club{" "}
            </h4>
            <p>
              <ul>
                <li>Develop custom web design solutions </li>
                <li>Designed an e-commerce web app </li>
              </ul>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
