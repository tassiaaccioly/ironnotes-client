//dependencies
import React, { useState, useEffect, useContext } from "react";

//context
import { AuthContext } from "../../contexts/authContext";
import api from "../../apis/pagesApi";

//styled components
import {
  BigContainer,
  MediumContainer,
  SmallContainer,
  ProfileContainer,
  BlueButton,
} from "../../components/styles/generalAssets";
import { InputForm } from "../pages/notestyles/events";
import { LabelH3 } from "../pages/notestyles/page";

//components
import FileInput from "../../components/inputs/FileInput";

function Profile(props) {
  useContext(AuthContext);

  const { history } = props;

  const [user, setUser] = useState({
    username: "",
    cohort: "",
    pagesCreated: [],
    email: "",
    avatar: "",
    _id: "",
  });

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get("/profile");
        setUser({ ...response.data.user });
      } catch (err) {
        console.error(err);
      }
    }
    fetchUser();
  }, []);

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

  async function handleClick() {
    try {
      if (typeof user.avatar !== "string") {
        const uploadedImageUrl = await handleFileUpload(user.avatar);

        await api.patch(`/profile/${user._id}`, {
          ...user,
          avatar: uploadedImageUrl,
        });
      }

      await api.patch(`/profile/${user._id}`, { ...user });

      history.push("/auth/profile");
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }

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

  // 4. "Encaixar" o state no JSX a ser renderizado pelo componente
  return (
    <BigContainer>
      <MediumContainer>
        <SmallContainer>
          <img src={user.avatar} alt="Avatar" />
          <BlueButton onClick={handleClick} className="edit-button">
            Save Profile
          </BlueButton>
        </SmallContainer>

        <ProfileContainer style={{ alignItems: "center" }}>
          <h1>Edit Profile</h1>
          <hr></hr>
          <LabelH3>Username:</LabelH3>
          <InputForm
            style={{ width: "100%", marginBottom: "1.5rem" }}
            id="username"
            name="username"
            type="text"
            value={user.username}
            onChange={handleChange}
          />
          <LabelH3>E-mail:</LabelH3>
          <InputForm
            style={{ width: "100%", marginBottom: "1.5rem" }}
            id="email"
            name="email"
            type="text"
            value={user.email}
            onChange={handleChange}
          />
          <LabelH3>Avatar</LabelH3>
          <FileInput
            label="Choose an avatar or photo"
            name="avatar"
            id="signupFormAvatar"
            value={user.avatar}
            onChange={handleChange}
          />
        </ProfileContainer>
      </MediumContainer>
    </BigContainer>
  );
}

export default Profile;
