//Bibliotecas
import React, { useState, useEffect, useContext } from "react";
import MDEditor from "@uiw/react-md-editor";
import api from "../../../../apis/pagesApi";
import { AuthContext } from "../../../../contexts/authContext";
import { useHistory } from "react-router-dom";

//CSS em componentes
import {
  PopUp,
  ContainerPopUp,
  FormPopUp,
  InputForm,
} from "../NoteStyles/events";
import { Button } from "../NoteStyles/page";
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
        console.log(id);
        const response = await api.get(`${id}`);
        console.log(response);
        setFile({ ...response.data });
        console.log(response);
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
      const response = await api.patch(`${id}`, file);
      window.location.reload();
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDelete(event) {
    event.preventDefault();
    try {
      const response = await api.delete(`${id}`);
      async function reloadPage() {
        const response = await api.get("/titles");
        const { _id } = response.data[response.data.length - 1];
        window.location.replace(`/pages/${_id}`);
      }
      reloadPage();
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <PopUp id="EditPagePopUp" onClick={ClosePopUp}></PopUp>
      <ContainerPopUp id="EditPagePopUpOne">
        <FormPopUp>
          <strong>Edit this note</strong>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginBottom: "2%",
            }}
          >
            <label htmlFor="pageTitle">Title:</label>
            <InputForm
              type="text"
              name="title"
              id="pageTitle"
              value={file.title}
              onChange={handleChange}
            />

            <label htmlFor="pageTags">Tags: </label>
            <div>
              <InputForm
                type="text"
                name="tags"
                id="pageTags"
                value={file.tags}
                onChange={handleChange}
              />
            </div>
          </div>

          <MDEditor
            value={file.text}
            onChange={textInput}
            height={350}
            width={400}
          />
          <div
            style={{
              width: "30%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button onClick={handleSubmit} type="submit">
              Save
            </Button>
            <Button onClick={handleDelete}>Delete</Button>
          </div>
        </FormPopUp>
      </ContainerPopUp>
    </>
  );
}

export default Page;
