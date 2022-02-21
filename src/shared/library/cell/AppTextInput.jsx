import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

function AppTextInput({ appTextInput, onChange }) {
  return (
    <FloatingLabel
      controlId={appTextInput.id}
      label={appTextInput.name}
      className="my-2"
    >
      <Form.Control
        type="text"
        placeholder="name@example.com"
        value={appTextInput.value}
        onChange={onChange}
        required
      />
    </FloatingLabel>
  );
}

export default AppTextInput;
