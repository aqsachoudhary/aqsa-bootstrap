import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CustomeNavBar from "../CustomeNavBar";

const MainLayOut = (props) => {
  console.log("props :>> ", props.children);
  return (
    <div>
      <CustomeNavBar />
      {props.children}
    </div>
  );
};
export default MainLayOut;
