import React, { useState } from "react";
import ClientList from "../../helper/ClientList";
import { Col, Row, Form, Button, Card } from "react-bootstrap";
import ContactUsComponents from "./Components/ContactUsComponents";
import ContactFormComponents from "./Components/ContactFormComponents";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      subject,
      message,
    };
    ClientList.push(newUser);
    alert("Requset Submittied Successfully");
    console.log("ClientList :>> ", ClientList);
  };

  return (
    <>
      <h1
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          // padding: "10px 10px",
        }}
      >
        CONTACT
      </h1>

      <Row>
        <Col>
          <Card
            style={{
              backgroundColor: "#efefef",
              textAlign: "justify",
              width: "80%",
              justifyContent: "space-around",
              border: "none",
              margin: "1rem",
            }}
          >
            <Row>
              <Col>
                <ContactUsComponents
                  title="Motive"
                  description="Transform Your Ideas Into Technology"
                />

                <ContactUsComponents
                  title="Software Company"
                  description="Over the past 4 years, Nestl-IT have worked with a number of web technologies like php, node.js, angular.js, MVC.net and Android app softwares"
                />

                <ContactUsComponents
                  title="LOCATION"
                  description="
               3rd Floor, Meridian Software Technology Park, Main Murree Road Opp Rehmanabad Metro Station, Rawalpindi Rawalpindi,"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <ContactUsComponents
                  title="Email"
                  description="thenestit@gmail.com"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <ContactUsComponents title="CALL" description="0336 5243025" />
              </Col>
            </Row>
          </Card>
        </Col>
        <Card
          style={{
            backgroundColor: "#efefef",
            width: "45%",
            border: "none",
            margin: "1rem",
          }}
        >
          <Col>
            <Form action="" onSubmit={handleSubmit}>
              <ContactFormComponents
                label="Name"
                controlId="Name"
                placeholder="Name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <ContactFormComponents
                label="Email"
                controlId="Email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <ContactFormComponents
                label="Subject"
                controlId="subject"
                placeholder="Subject"
                type="text"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
              <Form.Control
                as="textarea"
                placeholder="Message"
                type="text"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <Button
                type="submit"
                style={{
                  marginTop: "10px",
                }}
              >
                Send Message
              </Button>
            </Form>
          </Col>
        </Card>
      </Row>
    </>
  );
};
export default ContactUs;
