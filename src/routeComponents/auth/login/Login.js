import React from "react";
import LoginForm from "../login/LoginForm";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img src="./images/LogoLight.svg" alt="Logo" />
      <LoginForm />
    </div>
  );
}

export default Login;
