import React, { useState, useContext } from "react";

import { Form, Button } from "react-bootstrap";

import api from "../../../apis/pagesApi";

import { AuthContext } from "../../../contexts/authContext";

import "./LoginForm.css";

export default function Login(props) {
  const authContext = useContext(AuthContext);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: null,
    password: null,
  });

  function handleChange(event) {
    setLogin({
      ...login,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  console.log(localStorage);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/login", login);
      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setError({ password: "", email: "" });
      props.history.push("/pages");
    } catch (err) {
      console.error(err);
      // setError({ ...err.response.data.errors });
    }
  }

  console.log(props);

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="formBox" controlId="email">
          <Form.Label className="labelName">Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            name="email"
            value={login.email}
            onChange={handleChange}
          />
          {error.email ? (
            <p className="invalid-feedback">{error.email}</p>
          ) : null}
        </Form.Group>
        <Form.Group className="formBox" controlId="password">
          <Form.Label className="labelName">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={login.password}
            onChange={handleChange}
          />
          {error.password ? (
            <p className="invalid-feedback">{error.password}</p>
          ) : null}
        </Form.Group>
        <Button
          className="buttonLogin"
          type="submit"
          // disabled={error.password || error.email}
        >
          Login
        </Button>
      </Form>
    </div>
  );
}
