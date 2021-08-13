import React from "react";
import { Card, Form } from "react-bootstrap";
const AboutComponent = ({ title, subtitle, description }) => {
  return (
    <>
      <Form>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
          <Card.Text style={{ fontSize: "13px", textAlign: "justify" }}>
            {description}
          </Card.Text>
        </Card.Body>
      </Form>
    </>
  );
};
export default AboutComponent;
