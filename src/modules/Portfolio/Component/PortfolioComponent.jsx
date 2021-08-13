import React from "react";
import { Card, Form } from "react-bootstrap";
const PortfolioComponent = ({ description, Name }) => {
  return (
    <>
      <Form>
        <Card.Body>
          <Card.Text
            style={{
              color: "black",
              fontSize: "20px",
              fontFamily: "sans serif",
              padding: "1rem",
              textAlign: "center",
            }}
          >
            {description}
          </Card.Text>
        </Card.Body>
      </Form>
    </>
  );
};
export default PortfolioComponent;
