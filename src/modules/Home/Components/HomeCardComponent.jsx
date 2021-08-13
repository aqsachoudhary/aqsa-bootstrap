import React from "react";
import { Card } from "react-bootstrap";
const HomeCardComponent = ({ title, subtitle, description, color }) => {
  return (
    <Card
      style={{
        margin: "1rem",
        backgroundColor: "white",
        color: "black",
        borderRadius: "10px",
        height: "90%",
      }}
    >
      <Card.Body
        style={{ borderTop: `6px solid ${color}`, borderRadius: "10px" }}
      >
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HomeCardComponent;
