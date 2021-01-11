//dependencies
import React, { useState, useContext, useEffect } from "react";

//components
import TextInput from "../../components/inputs/TextInput";
import Logo from "../../components/Logo";

//styled components
import {
  BigContainer,
  BlueButton,
} from "../../components/styles/generalAssets";
import { Form } from "../../components/styles/inputs";

//contexts
import api from "../../apis/pagesApi";
import { AuthContext } from "../../contexts/authContext";

function Login(props) {
  const authContext = useContext(AuthContext);
  const { history, theme } = props;

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {}, [error]);

  function handleChange(event) {
    setLogin({
      ...login,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/login", login);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setError("");
      history.push("/pages");
      window.location.reload();
    } catch (err) {
      setError(err.response.data.msg);
    }
  }

  return (
    <BigContainer>
      <Logo theme={theme} />
      <Form onSubmit={handleSubmit}>
        <TextInput
          autoFocus
          placeholder="email@email.com"
          type="email"
          id="loginFormEmail"
          name="email"
          label="E-mail: "
          value={login.email}
          onChange={handleChange}
        />

        <TextInput
          autoFocus
          type="password"
          placeholder="password"
          id="loginFormPassword"
          name="password"
          label="Password: "
          value={login.password}
          error={error}
          onChange={handleChange}
        />

        <BlueButton className="buttonLogin" type="submit" disabled={error}>
          Login
        </BlueButton>
      </Form>
    </BigContainer>
  );
}

export default Login;
