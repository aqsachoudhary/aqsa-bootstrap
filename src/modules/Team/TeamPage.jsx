import React from "react";
import { Col, Row } from "react-bootstrap";
import TeamCardComponent from "./Components/TeamCardComponent";
const TeamPage = () => {
  return (
    <>
      <Row>
        <Col>
          <TeamCardComponent
            title="Malik Zulquranin"
            description="CEO of NESL-IT"
            img="https://ca.slack-edge.com/TMAC064FR-UM253QB41-b3b70934d3c7-512"
          />
        </Col>
        <Col>
          <TeamCardComponent
            title="Rohullah Ramish"
            description="FOUNDER $ CTO of NESL-IT"
            img="https://ca.slack-edge.com/TMAC064FR-UQ21MV287-33d532e112ca-512"
          />
        </Col>

        <Col>
          <TeamCardComponent
            title="Faizan Khalique"
            description="Senior Developer"
            img="https://ca.slack-edge.com/TMAC064FR-UQ1RV67S9-7473a2fc5395-512"
          />
        </Col>
        <Col>
          <TeamCardComponent
            title="Sherjeel AQ"
            description="Senior Developer"
            img="sharjeel.jpg"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TeamCardComponent
            title="Muneeb Ur Rehman"
            description="Developer"
            img="https://ca.slack-edge.com/TMAC064FR-U01CAJVG9E1-e26d58b783dc-512"
          />
        </Col>
        <Col>
          <TeamCardComponent
            title="M Atif Khan"
            description=" web Chain Developer"
            img="atif.png"
          />
        </Col>
        <Col>
          <TeamCardComponent
            title="Sehrish munir"
            description=" Junior Developer"
            img="sehrish.jpg"
          />
        </Col>
        <Col>
          <TeamCardComponent
            title="Bilal Hassan "
            description=" Junior Developer"
            img="https://ca.slack-edge.com/TMAC064FR-U01HQS78ELE-5322ecfd2965-512"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TeamCardComponent
            title="Muhammad Ali Khan "
            description=" Junior Developer"
            img="ali.png"
          />
        </Col>
        <Col>
          <TeamCardComponent
            title="Tahreem Fatima "
            description=" Junior Developer"
            img="tahreem.png"
          />
        </Col>
        <Col>
          <TeamCardComponent
            title="Aqsa Choudhary "
            description="FrontEnd Developer"
            img="aqsa.jpg"
          />
        </Col>
        <Col>
          <TeamCardComponent
            title="Huma Shah"
            description="HR Manager"
            img="https://ca.slack-edge.com/TMAC064FR-U01UBKFEQUR-93ef01c73886-512"
          />
        </Col>
      </Row>
    </>
  );
};
export default TeamPage;
