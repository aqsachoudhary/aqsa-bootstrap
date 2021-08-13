import React, { useState } from "react";
import ProjectList from "../../helper/ProjectList";
import { Row, Col } from "react-bootstrap";
import PortfolioComponent from "./Component/PortfolioComponent";
import ProjectCard from "./Component/ProjectCard";
import BedgeButton from "./Component/BedgeButton";
const Portfolio = () => {
  const [activebutton, setActiveButton] = useState("All");

  const [projects, setProjects] = useState(ProjectList);
  const handleTypeClick = (type) => {
    setActiveButton(type);
    const filterList = ProjectList.filter((project) => project.type == type);
    setProjects(filterList);
  };

  return (
    <>
      <h1
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "5px",
          justifyContent: "center",
        }}
      >
        PORTFOLIO
      </h1>
      <Row>
        <Col>
          <PortfolioComponent description="Transform Your Ideas Into Technology Over the past 4 years, Nestl-IT have worked with a number of web technologies like php, node.js, angular.js, MVC.net and Android app softwares" />
        </Col>
      </Row>
      <Row
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <BedgeButton
          name="All"
          onClick={() => {
            setActiveButton("All");
            setProjects(ProjectList);
          }}
          active={activebutton}
        />

        <BedgeButton
          name="App"
          onClick={() => handleTypeClick("App")}
          active={activebutton}
        />
        <BedgeButton
          name="Web"
          onClick={() => handleTypeClick("Web")}
          active={activebutton}
        />
        <BedgeButton
          name="Card"
          onClick={() => handleTypeClick("Card")}
          active={activebutton}
        />
      </Row>

      <Row style={{ padding: "0 40px" }}>
        {/* <Col> */}
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            type={p.type}
            title={p.title}
            description={p.description}
            image={p.image}
          />
        ))}
        {/* </Col> */}
      </Row>
    </>
  );
};
export default Portfolio;
