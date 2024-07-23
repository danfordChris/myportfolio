import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  const [hoveredTech, setHoveredTech] = useState("");

  const techs = [
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <TbBrandGolang />, name: "Golang" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <SiSolidity />, name: "Solidity" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiRedis />, name: "Redis" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJava />, name: "Java" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons"
          onMouseEnter={() => setHoveredTech(tech.name)}
          onMouseLeave={() => setHoveredTech("")}
          style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
        >
          {tech.icon}
          {hoveredTech === tech.name && (
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
              {tech.name}
            </div>
          )}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
