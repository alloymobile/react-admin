import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

function AppEmailInput({ appEmailInput, onChange }) {
  return (
    <FloatingLabel
      controlId={appEmailInput.id}
      label={appEmailInput.name}
      className="my-2"
    >
      <Form.Control
        type="email"
        placeholder="name@example.com"
        value={appEmailInput.value}
        onChange={onChange}
      />
    </FloatingLabel>
  )
}

export default AppEmailInput