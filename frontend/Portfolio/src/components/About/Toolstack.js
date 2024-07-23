import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  const [hoveredTool, setHoveredTool] = useState("");

  const tools = [
    { icon: <SiMacos />, name: "macOS" },
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiSlack />, name: "Slack" },
    { icon: <SiVercel />, name: "Vercel" },
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
