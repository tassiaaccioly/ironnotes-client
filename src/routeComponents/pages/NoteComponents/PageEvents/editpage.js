//Bibliotecas
import React, { useState, useEffect, useContext } from "react";
import MDEditor from "@uiw/react-md-editor";
import api from "../../../../apis/pagesApi";
import { AuthContext } from "../../../../contexts/authContext";
import {useHistory} from 'react-router-dom'

//CSS em componentes
import {
    Container,
    Fix,
    Button,
    Title,
    Tag,
    TagQueue,
  } from "../NoteStyles/page";
  import { PopUp, ContainerPopUp } from "../NoteStyles/events";
function Page(props) {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  //State para armazenar e fazer o render do conteúdo
  const [file, setFile] = useState({
    _id: "",
    title: "",
    text: "",
    tags: [""],
  });

  //Buscando o path(Caminho) da url para retirar o Id
 const id = history.location.pathname;
  useEffect(() => {
    async function Text() {
      try {
       


console.log(id)
        const response = await api.get(`${id}`);
        console.log(response)
        setFile({ ...response.data });
        console.log(response)
      } catch (err) {
        console.error(err);
      }
    }
    Text();
  }, [history.location.pathname]);

  
  function ClosePopUp() {
    document.getElementById("EditPagePopUp").style.display = "none";
    document.getElementById("EditPagePopUpOne").style.display = "none";
  }

  function handleChange(event) {
    setFile({ ...file, [event.target.name]: event.target.value });
    console.log(file);
  }

  function textInput(event) {
    setFile({ ...file, text: event });
    
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
        
      const response = await api.patch(`${id}`, file );

      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDelete(event) {
    event.preventDefault();
    try {
        
      const response = await api.delete(`${id}`);

      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }


  return (
    <>
      <PopUp id="EditPagePopUp" onClick={ClosePopUp}></PopUp>
      <ContainerPopUp id="EditPagePopUpOne">
      <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <strong>Create a new note</strong>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="pageTitle">Title:</label>
            <input
              type="text"
              name="title"
              id="pageTitle"
              value={file.title}
              onChange={handleChange}
            />

            <label htmlFor="pageTag">Tag</label>
            <div>
              <input
                type="text"
                name="tags"
                id="pageTags"
                value={file.tags}
                onChange={handleChange}
              />
            </div>
          </div>

          <MDEditor value={file.text} onChange={textInput} />
          <button onClick={handleSubmit} type="submit">
            Create
          </button>
          <button onClick={handleDelete}>Delete this page</button>
        </form>
      </ContainerPopUp>
    </>
  
  );
}

export default Page;
