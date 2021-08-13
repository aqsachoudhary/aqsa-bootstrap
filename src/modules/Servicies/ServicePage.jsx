import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import ServiciesCardComponent from "./Components/ServiciesCardComponent";
const ServicePage = () => {
  return (
    <>
      <Row>
        <Col>
          <ServiciesCardComponent
            color="red"
            title="Mobile App Development"
            description=" For years we have been perfecting the art of Ios and Android Apps. we ensure to deliever innovative and high quality mobile application  ."
          />
        </Col>
        <Col>
          <ServiciesCardComponent
            color="purple"
            title="WEB Development"
            description=" We have extensive experience mastering the skills to create fully Customized websites for companies providing a flexible and consistant user experience in any platform ."
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ServiciesCardComponent
            color="blue"
            title="UX/UI DESIGN"
            description=" We Keep in mind that the user interface and user Experience Remains at the center of the Development of smart application for mobile or web.Achieve higher user addoption and success rate ."
          />
        </Col>
        <Col>
          <ServiciesCardComponent
            color="green"
            title="TECHNOLOGY CONSULTING SERVICE"
            description=" In every phase of businesses IT consulting is smart and profitable investment for Long term profit.It can be just a minor Shift in the existing system or a fresh development from the scratch.We anticipate the outcome of the technology and provide advice on how to achieve your goal with minimal investment ."
          />
        </Col>
      </Row>
    </>
  );
};
export default ServicePage;
