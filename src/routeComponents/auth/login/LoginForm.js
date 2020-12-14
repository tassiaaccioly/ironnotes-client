import React, { useState, useContext } from "react";

import TextInput from "../../../components/TextInput";
import BlueBtn from "../../../components/btns/BlueBtn";

import api from "../../../apis/pagesApi";

import { AuthContext } from "../../../contexts/authContext";

import "./LoginForm.css";

function LoginForm(props) {
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
      setError({ ...err.response.data.errors });
    }
  }

  console.log(props);

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <TextInput
          autoFocus
          type="email"
          id="loginFormEmail"
          name="email"
          label="E-mail: "
          value={login.email}
          error={error.email}
          onChange={handleChange}
        />

        <TextInput
          autoFocus
          type="password"
          id="loginFormPassword"
          name="password"
          label="Password: "
          value={login.email}
          error={error.email}
          onChange={handleChange}
        />

        <BlueBtn
          className="buttonLogin"
          type="submit"
          disabled={error.password || error.email}
        >
          Login
        </BlueBtn>
      </form>
    </>
  );
}

export default LoginForm;
