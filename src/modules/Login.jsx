import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || email <= 3) {
      setEmailError("please Enter Your Email");
      return;
    } else {
      setEmailError("");
    }

    if (password === "" || password.length <= 3) {
      setPasswordError("Please Enter Your Password");
      return;
    } else {
      setPasswordError("");
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
          <h1 style={{ color: "white" }}>LOGIN</h1>
          <Form
            action=""
            onSubmit={handleSubmit}
            // style={{
            //   display: "flex",
            //   flexDirection: "column",
            //   width: "80%",
            // }}
          >
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
              {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
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
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button
              type="submit"
              style={{
                backgroundColor: "white",
                color: "black",
                border: "none",
                width: "100%",
              }}
            >
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};
export default Login;
