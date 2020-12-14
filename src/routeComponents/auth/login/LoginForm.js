import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./LoginForm.css";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="formBox" controlId="email">
          <Form.Label className="labelName">Email:</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="formBox" controlId="password">
          <Form.Label className="labelName">Password:</Form.Label>
          <Form.Control className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className="buttonLogin" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </>
  );
}