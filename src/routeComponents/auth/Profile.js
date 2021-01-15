//dependencies
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

//contexts
import { AuthContext } from "../../contexts/authContext";
import api from "../../apis/pagesApi";

//styled components
import {
  BigContainer,
  MediumContainer,
  SmallContainer,
  ProfileContainer,
  BlueButtonLink,
  RedButtonLink,
} from "../../components/styles/generalAssets";

//Components
import ProfileNotesList from "./ProfileNotesList";

function Profile(props) {
  useContext(AuthContext);

  const [user, setUser] = useState({
    username: "",
    cohort: "",
    pagesCreated: [],
    email: "",
    avatar: "",
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

  // 4. "Encaixar" o state no JSX a ser renderizado pelo componente
  return (
    <BigContainer>
      <MediumContainer>
        <SmallContainer>
          <img src={user.avatar} alt="Avatar" />
          <BlueButtonLink>
            <Link to={`/auth/profile/edit`}>Edit Profile</Link>
          </BlueButtonLink>

          <RedButtonLink>
            <Link to={`/auth/delete/${user._id}`}>Delete Profile</Link>
          </RedButtonLink>
        </SmallContainer>

        <ProfileContainer>
          <h1>{user.username}</h1>
          <hr></hr>
          <p>
            <strong>E-mail: </strong>
            {user.email}
          </p>
          <p>
            <strong>Cohort: </strong>
            {user.cohort}
          </p>
          <ProfileNotesList user={user} />
        </ProfileContainer>
      </MediumContainer>
    </BigContainer>
  );
}

export default Profile;
