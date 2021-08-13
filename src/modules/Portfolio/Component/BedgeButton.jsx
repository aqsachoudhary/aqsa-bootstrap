import React, { useState } from "react";
import { Badge } from "react-bootstrap";
const BedgeButton = ({ name, onClick, active }) => {
  return (
    <>
      <Badge
        pill
        variant={active == name ? "primary" : "light"}
        style={{ cursor: "pointer" }}
        onClick={onClick}
      >
        {name}
      </Badge>
    </>
  );
};
export default BedgeButton;
