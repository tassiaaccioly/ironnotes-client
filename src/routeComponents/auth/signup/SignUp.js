import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../apis/pagesApi";

import TextInput from "../../../components/TextInput";

function Signup(props) {
  const [state, setState] = useState({
    username: "",
    password: "",
    email: "",
    cohort: "",
  });
  const [errors, setErrors] = useState({
    username: null,
    email: null,
    password: null,
    cohort: null,
  });

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post("/signup", state);
      console.log(event);
      console.log(response);
      setErrors({ username: "", password: "", email: "", cohort: "" });
      // props.history.push("/auth/login");
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup!</h1>

      <TextInput
        type="text"
        label="Your Name"
        name="username"
        id="signupFormName"
        value={state.name}
        error={errors.name}
        onChange={handleChange}
      />

      <TextInput
        type="text"
        label="Your Cohort"
        name="cohort"
        id="signupFormCohort"
        value={state.cohort}
        error={errors.cohort}
        onChange={handleChange}
      />

      <TextInput
        type="email"
        label="E-mail Address"
        name="email"
        id="signupFormEmail"
        value={state.email}
        error={errors.email}
        onChange={handleChange}
      />

      <TextInput
        type="password"
        label="Password"
        name="password"
        id="signupFormPassword"
        value={state.password}
        error={errors.password}
        onChange={handleChange}
      />

      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Signup!
        </button>

        <Link to="auth/login">
          Already have an account? Click here to login.
        </Link>
      </div>
    </form>
  );
}

export default Signup;
