import React from "react";
import { Card } from "react-bootstrap";
const TeamCardComponent = ({ title, description, img }) => {
  return (
    <>
      <Card
        style={{
          margin: "1rem",
          //   backgroundColor: "white",
          justifyContent: "center",
          color: "black",
          borderRadius: "10px",
          height: "90%",
          // padding: "1rem",
          alignItems: "center",
        }}
      >
        <Card.Img
          variant="top"
          src={img}
          style={{ height: "80%", objectFit: "cover", width: "100%" }}
        />
        <Card.Body>
          <Card.Title
            style={{
              marginBottom: "-7.25rem",
              color: "black",
              fontSize: "25px",
              fontFamily: "sans serif",
            }}
          >
            {title}
          </Card.Title>
          <Card.Text
            style={{
              marginBottom: "-7.25rem",
              color: "white",
              fontSize: "20px",
              fontFamily: "sans serif",
            }}
          >
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default TeamCardComponent;
