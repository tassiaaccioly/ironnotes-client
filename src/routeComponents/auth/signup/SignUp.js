//dependencies
import React, { useState } from "react";
import { Link } from "react-router-dom";

//axios
import api from "../../../apis/pagesApi";

//images
import Logo from "../../../assets/images/LogoLight.svg";

//css
import "./SignUp.css";

//components
import TextInput from "../../../components/TextInput";
import BlueBtn from "../../../components/btns/BlueBtn";

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
      props.history.push("/auth/login");
    } catch (err) {
      console.error(err);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="image">
        <img type="image/svg+xml" src={Logo} alt="Logo" />
      </div>

      <div className="form-div">
        <TextInput
          type="text"
          label="Username: "
          name="username"
          id="signupFormName"
          value={state.name}
          error={errors.name}
          onChange={handleChange}
        />

        <TextInput
          type="text"
          label="Cohort: "
          name="cohort"
          id="signupFormCohort"
          value={state.cohort}
          error={errors.cohort}
          onChange={handleChange}
        />

        <TextInput
          type="email"
          label="E-mail: "
          name="email"
          id="signupFormEmail"
          value={state.email}
          error={errors.email}
          onChange={handleChange}
        />

        <TextInput
          type="password"
          label="Password: "
          name="password"
          id="signupFormPassword"
          value={state.password}
          error={errors.password}
          onChange={handleChange}
        />

        <div className="btn-signup">
          <BlueBtn type="submit">Signup!</BlueBtn>
        </div>

        <div className="link">
          <p>
            Already have an account?{" "}
            <Link className="click-here" to="/auth/login">
              {" "}
              Click here to login.
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Signup;
