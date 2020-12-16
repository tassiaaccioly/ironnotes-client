import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

import BlueBtn from "../btns/BlueBtn";
import CheckInput from "../CheckInput.js";

function Home() {
  const [check, setCheck] = useState({
    tags: false,
    creator: false,
    title: false,
  });

  function handleCheckChange(event) {
    console.log(event);
    console.log(check);
    setCheck({
      ...check,
      [event.currentTarget.name]: event.currentTarget.checked,
    });
    console.log(check);
  }

  return (
    <main className="home">
      <img src="./images/javascript.jpg" alt="Logo" />
      <div className="home-container">
        <h3>All your cohort's notes in one place!</h3>
        <BlueBtn>
          <Link to="auth/signup">Sign Up</Link>
        </BlueBtn>
        <p>
          Already have an account? <Link to="auth/login">Login here</Link>.
        </p>
        <CheckInput
          className="checkinput"
          name="creator"
          id="searchCheckCreator"
          checked={check.creator}
          label="Creator"
          onChange={handleCheckChange}
        />
      </div>
    </main>
  );
}

export default Home;
