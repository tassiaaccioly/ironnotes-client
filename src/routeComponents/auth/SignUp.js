//dependencies
import React, { useState, useContext } from "react";

//contexts
import { AuthContext } from "../../contexts/authContext";
import api from "../../apis/pagesApi";

//components
import Logo from "../../components/Logo";
import SignUpForm from "./SignUpForm";

//styled Components
import { BigContainer, P, GLink } from "../../components/styles/generalAssets";

function Signup(props) {
  useContext(AuthContext);
  const { history, theme } = props;

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    cohort: "",
    avatar: "",
  });
  const [errors, setErrors] = useState({
    username: null,
    email: null,
    password: null,
    cohort: null,
  });

  function handleChange(event) {
    if (event.currentTarget.files) {
      return setUser({
        ...user,
        [event.currentTarget.name]: event.currentTarget.files[0],
      });
    }
    setUser({
      ...user,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleFileUpload(file) {
    try {
      const uploadData = new FormData();

      uploadData.append("avatar", file);

      const response = await api.post("/file-upload", uploadData);

      return response.data.fileUrl;
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (typeof user.avatar !== "string") {
        const uploadedImageUrl = await handleFileUpload(user.avatar);

        await api.post("/signup", {
          ...user,
          avatar: uploadedImageUrl,
        });
      } else {
        await api.post("/signup", { ...user });
      }

      setErrors({ username: "", password: "", email: "", cohort: "" });

      history.push("/auth/login");
    } catch (err) {
      console.error(err);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <BigContainer>
      <Logo theme={theme} />
      <SignUpForm
        state={user}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <P style={{ fontSize: ".9rem", margin: "0 auto" }}>
        Already have an account?{" "}
        <GLink style={{ fontSize: ".9rem" }} to="/auth/login">
          Login here
        </GLink>
        .
      </P>
    </BigContainer>
  );
}

export default Signup;
