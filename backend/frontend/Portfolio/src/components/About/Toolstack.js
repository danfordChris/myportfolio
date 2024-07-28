import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiNpm,
  SiJenkins,
  SiLinux,
  SiDiscord,
  SiRender,
  SiSnyk,
} from "react-icons/si";
import {
 DiGit,
 
} from "react-icons/di";

function Toolstack() {
  const [hoveredTool, setHoveredTool] = useState("");

  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiSlack />, name: "Slack" },
    { icon: <SiDiscord />, name: "Discord" },
    { icon: <SiRender/>, name: "onRender"},
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiSnyk /> , name:"snyk"},
    { icon: <DiGit />, name: "Git" },
    { icon: <SiNpm />, name: "NPM" },
    { icon: <SiJenkins />, name: "Jenkins" },
    { icon: <SiLinux />, name: "Linux" },
    { icon: <SiMacos />, name: "macOS" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons"
          onMouseEnter={() => setHoveredTool(tool.name)}
          onMouseLeave={() => setHoveredTool("")}
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {tool.icon}
          {hoveredTool === tool.name && (
            <div
              style={{
                marginTop: "5px",
                fontSize: "14px",
                border: "2px solid black",
                padding: "2px 4px",
                borderRadius: "5px",
                backgroundColor: "black",
                position: "absolute",
                top: "90px",
              }}
            >
              {tool.name}
            </div>
          )}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
