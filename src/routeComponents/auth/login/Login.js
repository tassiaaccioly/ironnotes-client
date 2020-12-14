import React from "react";
import LoginForm from "../login/LoginForm";
import Logo from "../../../assets/images/LogoLight.svg";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img className="Logo" type="image/svg+xml" style={{width: '250px'}} src={Logo} alt="Logo" />
      <div>
      <LoginForm />
        </div>
    </div>
  );
}

export default Login;
