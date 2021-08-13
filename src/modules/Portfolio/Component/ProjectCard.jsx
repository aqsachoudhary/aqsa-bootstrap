import React from "react";
import { Card, Badge, Form } from "react-bootstrap";
const ProjectCard = ({ description, image, title, type }) => {
  return (
    <>
      <Card
        border="secondary"
        style={{ width: "25rem", margin: "1rem", height: "25rem" }}
      >
        <Card.Img
          variant="top"
          src={image}
          style={{
            objectFit: "fill",
            width: "100%",
            height: "60%",
          }}
        />
        <Card.Body style={{ padding: "0.25rem" }}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default ProjectCard;
