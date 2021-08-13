import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
const CustomeNavBar = (props) => {
  return (
    <>
      <Row>
        <Col>
          <Navbar
            // bg="dark"
            // variant="dark"
            expand="lg"
            style={{
              padding: ".5rem",
              backgroundColor: "#193C5E",
              color: "white",
            }}
          >
            <Navbar.Brand href="/home" style={{ color: "white" }}>
              NESTL-IT
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/home" style={{ color: "white" }}>
                  Home
                </Nav.Link>
                <Nav.Link href="/servicepage" style={{ color: "white" }}>
                  Services
                </Nav.Link>
                <Nav.Link href="/portfolio" style={{ color: "white" }}>
                  Portfolio
                </Nav.Link>
                <Nav.Link href="/teampage" style={{ color: "white" }}>
                  Team
                </Nav.Link>
                <Nav.Link href="/contactus" style={{ color: "white" }}>
                  Contact
                </Nav.Link>
                <Nav.Link href="/aboutpage" style={{ color: "white" }}>
                  About
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </>
  );
};
export default CustomeNavBar;
