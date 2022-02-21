import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

function AppPasswordInput({ appPasswordInput, onChange }) {
  return (
    <FloatingLabel
      controlId={appPasswordInput.id}
      label={appPasswordInput.name}
      className="my-2"
    >
      <Form.Control
        type="password"
        placeholder="name@example.com"
        value={appPasswordInput.value}
        onChange={onChange}
      />
    </FloatingLabel>
  )
}

export default AppPasswordInput