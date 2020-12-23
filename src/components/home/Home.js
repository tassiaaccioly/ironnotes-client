import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

import "./Home.css";

import BlueBtn from "../btns/BlueBtn";
import LogoLight from "../../assets/images/LogoLight.svg";

function Home() {
  useContext(AuthContext);
  let history = useHistory();

  let haveToken = localStorage.getItem("loggedInUser");

  if (!haveToken) {
    return (
      <main className="home">
        <img src={LogoLight} alt="Logo" />
        <div className="home-container">
          <h3>All your cohort's notes in one place!</h3>
          <BlueBtn>
            <Link to="/auth/signup">Sign Up</Link>
          </BlueBtn>
          <p>
            Already have an account? <Link to="auth/login">Login here</Link>.
          </p>
        </div>
      </main>
    );
  } else {
    return <main className="home">{history.push("/pages")}</main>;
  }
}

export default Home;
