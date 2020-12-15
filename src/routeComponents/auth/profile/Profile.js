import React, { useState, useEffect, useContext } from "react";
import Avatar from "../../../assets/images/LogoDark.svg";

import "./Profile.css";

import { AuthContext } from "../../../contexts/authContext";

import api from "../../../apis/pagesApi";

function Profile(props) {
  const authContext = useContext(AuthContext);

  // 1. Extrair o id do livro atual da URL
  const { id } = props.match.params;

  // 3. Definir o state no formato do Model no backend
  const [user, setUser] = useState({
    Name: "",
    Cohort: "",
    Pages: "",
  });

  useEffect(() => {
    async function fetchUser() {
      // 2. Buscar os detalhes do profile no nosso servidor (backend)
      try {
        const response = await api.get(`/book/${id}`);
        console.log(response);
        setUser({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchUser();
  }, [id]);

  // 4. "Encaixar" o state no JSX a ser renderizado pelo componente
  return (
    <div className="container">
      <div className="avatar-box">
        <img src={Avatar} style={{ width: "150px" }} alt="Avatar" />

        <button className="edit-button">Edit Profile</button>

        <button className="delete-button">Delete Profile</button>
      </div>

      <div className="pages-list">
        <h1>Username</h1>
        <hr></hr>
        <div className="infos-profile">
          <p>
            <strong>Cohort: </strong>
          </p>
          <p>
            <strong>E-mail: </strong>
          </p>
          <p className="pages">Pages: {/* list*/}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
