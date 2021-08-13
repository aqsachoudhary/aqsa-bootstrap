import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  Card,
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";

import HomeCardComponent from "./Components/HomeCardComponent";

const HomePage = (props) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Container
      fluid
      style={{ border: "solid black 1px", margin: 0, padding: 0 }}
    >
      <Row>
        <Col>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img className="d-block w-100" src="sft.jpg" alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="picture.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="app.jpeg" alt="Third slide" />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row style={{ paddingTop: "2.5rem" }}>
        <Col>
          <HomeCardComponent
            color="black"
            title="Fully Customized Project"
            description=" Our Technologies are Adapted to Your Business needs and not to opposite  ."
          />
        </Col>
        <Col>
          <HomeCardComponent
            color="pink"
            title="First Class Developer"
            description="  Our experienced Team create Digital experiences usins the latest technologies ."
          />
        </Col>
        <Col>
          <HomeCardComponent
            color="brown"
            title="We Build RelationShip"
            description="  Our Clients Trust Us to deliever what they need always on time with zero hassle."
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <HomeCardComponent
            color="gold"
            title="BUSINESS ANALYST"
            description=" Clarify requirements for requested change and new features, specify implementation Details for the development Team."
          />
        </Col>

        <Col>
          <HomeCardComponent
            color="tomato"
            title="UI/UX DESIGNER"
            description=" Design bsed on the Creative Direction agreed with you ,update the currently existing screens to match the new UI"
          />
        </Col>
        <Col>
          <HomeCardComponent
            color="purple"
            title="PROJECT MANAGER"
            description=" Team Management,technical Review and planing your main point of contact "
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <HomeCardComponent
            color="green"
            title="BACKEND DEVELOPER"
            description="  Design bsed on the Creative Direction agreed with you ,update the currently existing screens to match the new UI."
          />
        </Col>
        <Col>
          <HomeCardComponent
            color="red"
            title="QA ENGINER"
            description=" performs smoke performance and regression tests documents and all discovered issues and helps developers  ."
          />
        </Col>
        <Col>
          <HomeCardComponent
            color="blue"
            title="FRONTEND DEVELOPER"
            description=" implement the web/app functionalities work also on requested change,bug fixes,etc  ."
          />
        </Col>
      </Row>
    </Container>
  );
};
export default HomePage;
