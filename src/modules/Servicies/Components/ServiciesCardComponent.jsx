import React from "react";
import { Card } from "react-bootstrap";
const ServiciesCardComponent = ({ title, subtitle, description, color }) => {
  return (
    <Card
      style={{
        margin: "1rem",
        backgroundColor: "white",
        justifyContent: "center",
        color: "black",
        borderRadius: "10px",
        height: "90%",
        // padding: "1rem",
        alignItems: "center",
      }}
    >
      {/* <Card.Header style={{ width: "100%" }}></Card.Header> */}
      <Card.Body
        style={{
          fontSize: "30px",
          borderTop: `4px solid ${color}`,
          borderRadius: "10px",
        }}
      >
        <Card.Title
        // style={{ fontSize: "30px", borderTop: `2px solid ${color}` }}
        >
          {title}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
        <Card.Text style={{ fontSize: "13px" }}>{description}</Card.Text>
        {/* <Card style={{ color: color }}> hi princess</Card> */}
      </Card.Body>
      <Card.Footer
        className="text-muted"
        style={{ width: "100%", display: "flex", flexDirection: "row-reverse" }}
      >
        <Card style={{ color: color }}>LEARN MORE </Card>
      </Card.Footer>
    </Card>
  );
};

export default ServiciesCardComponent;
