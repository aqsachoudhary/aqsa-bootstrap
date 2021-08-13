import React from "react";
import { Card } from "react-bootstrap";
const AboutCardComponent = ({ title, subtitle, description, color }) => {
  return (
    <Card
      style={{
        margin: "1rem",
        backgroundColor: "white",
        color: "black",
        // borderRadius: "10px",
        height: "90%",
        // boxshadow: "55px 10px red",
        boxshadow: "5px 10px 8px 10px #888888",
      }}
    >
      <Card.Body
      // style={{ borderTop: `6px solid ${color}`, borderRadius: "10px" }}
      >
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default AboutCardComponent;
