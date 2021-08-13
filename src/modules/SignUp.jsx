import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
const SignUp = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [conformPasswordError, setConformPasswordError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || name <= 3) {
      setNameError("please enter ur name && character more then 3");
      return;
    } else {
      setNameError("");
    }
    if (lastName === "" || lastName <= 3) {
      setLastNameError("please enter ur lastName && character more then 3");
      return;
    } else {
      setLastNameError("");
    }
    if (email === "") {
      setEmailError("please enter ur email");
      return;
    } else {
      setEmailError("");
    }
    if (password === "" || password <= 3) {
      setPasswordError("please enter ur password && Number must more then 6");
      return;
    } else {
      setPasswordError("");
    }
    if (conformPassword === "" || conformPassword <= 3) {
      setConformPasswordError(
        "please enter ur Conformpassword && Number must more then 6"
      );
      return;
    } else {
      setConformPasswordError("");
    }
  };
  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <div
          className="maincontainer"
          style={{
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            backgroundColor: "#193C5E",
            width: "50%",
            flexDirection: "column",
            padding: "30px 30px",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <h1>SIGNUP</h1>
          <Form action="" onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  placeholder="Name"
                  type="text"
                  value={name}
                  error={nameError}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  onBlur={() => {
                    if (name === "" || name <= 3) {
                      setNameError(
                        "please enter ur name && character more then 3"
                      );
                    } else {
                      setNameError("");
                    }
                  }}
                />
                <p>{nameError}</p>
                <Form.Label> Last Name</Form.Label>
                <Form.Control
                  placeholder="lastName"
                  type="text"
                  value={lastName}
                  error={lastNameError}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  onBlur={() => {
                    if (lastName === "" || lastName <= 3) {
                      setLastNameError(
                        "please enter ur lastName && character more then 3"
                      );
                    } else {
                      setLastNameError("");
                    }
                  }}
                />
                <p>{lastNameError}</p>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email </Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    placeholder="Enter email"
                    error={emailError}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    onBlur={() => {
                      if (email === "") {
                        setEmailError("Enter Your Email");
                      } else {
                        setEmailError("");
                      }
                    }}
                  />
                  <p>{emailError}</p>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    error={passwordError}
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    onBlur={() => {
                      if (password === "") {
                        setPasswordError("Enter your password");
                      } else {
                        setPasswordError("");
                      }
                    }}
                  />
                  <p>{passwordError}</p>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label> Conform Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={conformPassword}
                    error={conformPasswordError}
                    placeholder="Conform Password"
                    onChange={(e) => {
                      setConformPassword(e.target.value);
                    }}
                    onBlur={() => {
                      if (password === "") {
                        setConformPasswordError("Enter your password");
                      } else {
                        setConformPasswordError("");
                      }
                    }}
                  />
                  <p>{conformPasswordError}</p>
                </Form.Group>

                <Button
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "none",
                    width: "100%",
                  }}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </>
  );
};
export default SignUp;
