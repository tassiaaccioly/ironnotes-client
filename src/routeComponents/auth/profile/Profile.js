import React, { useState, useEffect, useContext } from "react";
import Avatar from "../../../assets/images/LogoDark.svg";
import BlueBtn from '../../../components/btns/BlueBtn';

import './Profile.css';

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
                
                    <img src={Avatar} style={{ width: '150px' }} alt="avatar picture" />
                    

                    <button className="edit-button">Edit</button>

                    <button className="delete-button">Delete</button>
                </div>

                <div className="lists">
                    <h1>Username</h1>
                    <hr></hr>
                    <ul>
                        <br></br>
                        <li>Cohort: </li>
                        <li>Email: </li>
                        <li className="pages">Pages: {/* list*/}</li>
                    </ul>
        </div>    
        </div>
    );
}



export default Profile;