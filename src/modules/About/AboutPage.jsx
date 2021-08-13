import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import AboutCardComponent from "./Component/AboutCardComponent";
import AboutComponent from "./Component/AboutComponent";

const AboutPage = () => {
  return (
    <>
      <h1
        style={{
          display: "flex",
          flexDirection: "row",
          // justifyContent: "center",
          padding: "10px 20px",
        }}
      >
        ABout US
      </h1>
      <Card style={{ margin: "20px", paddingBottom: "20px" }}>
        <Row>
          <Col>
            <Row>
              <Col>
                <AboutComponent
                  description=" Our Motive is to convert ur idease into Technology All products
Discover the extensive range
We compare all products Try our search engine
And find the best provider Find out how much you can save "
                />

                <AboutComponent description="A software company develops and distributes computer software that may be used to learn, instruct, assess, calculate, entertain, or perform a multitude of other tasks. Software companies operate under a variety of business models, such as charging license fees, offering subscriptions, or charging by transactions." />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <AboutComponent description="An all-in-one prototyping tool for websites and mobile apps. Design, prototype, and share. Seamless collaboration across every step of the design process. Try Mockitt for Free now! Prototyping Anywhere. Sketch Integration. Real-time Collaboration. Developer-Friendly." />
                <AboutComponent description="A computer programmer, sometimes called a software developer, a programmer or more recently a coder, is a person who creates computer software. The term computer programmer can refer to a specialist in one area of computers, or to a generalist who writes code for many kinds of software" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <Row>
        <Col>
          <AboutCardComponent
            // color="Red"
            title="225"
            description="Happy Clients Success Ratio is 100%"
            subtitle="Find Out More"
          />
        </Col>
        <Col>
          <AboutCardComponent
            // color="green"
            title="521"
            description=" still organization is working on 521 more projects"
            subtitle="Find Out More"
          />
        </Col>
        <Col>
          <AboutCardComponent
            // color="purple"
            title="1463"
            description=" Hours Of Support our team is working 24/7 for ur help"
            subtitle="Find Out More"
          />
        </Col>
        <Col>
          <AboutCardComponent
            // color="gold"
            title="15"
            description=" Hard Workers we are available 24/7"
            subtitle="Find Out More"
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutPage;
