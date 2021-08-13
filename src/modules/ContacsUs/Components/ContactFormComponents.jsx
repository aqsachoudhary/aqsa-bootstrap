import { findAllByPlaceholderText } from "@testing-library/dom";
import React from "react";
import { Form } from "react-bootstrap";
const ContactFormComponent = ({
  placeholder,
  type,
  onChange,
  value,
  label,
  controlId,
}) => {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};
export default ContactFormComponent;
