import React, { useState, useContext } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useHistory } from "react-router-dom";

import {
  PopUp,
  ContainerPopUp,
  FormPopUp,
  InputForm,
} from "../NoteStyles/events";
import { Button } from "../NoteStyles/page";
import api from "../../../../apis/pagesApi";
import { AuthContext } from "../../../../contexts/authContext";

function NewPage(props) {
  const authContext = useContext(AuthContext);
  const [page, setPage] = useState({
    title: "",
    tags: "",
    text: "",
  });

  function handleChange(event) {
    setPage({ ...page, [event.target.name]: event.target.value });
    console.log(page);
  }

  function textInput(event) {
    setPage({ ...page, text: event });
  }

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post("/pages", page);

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

  function ClosePopUp() {
    document.getElementById("NewPagePopUp").style.display = "none";
    document.getElementById("NewPagePopUpOne").style.display = "none";
  }

  return (
    <>
      <PopUp id="NewPagePopUp" onClick={ClosePopUp}></PopUp>
      <ContainerPopUp id="NewPagePopUpOne">
        <FormPopUp>
          <strong>Create a new note</strong>
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
              value={page.title}
              onChange={handleChange}
            />

            <label htmlFor="pageTags">Tag</label>
            <div>
              <InputForm
                type="text"
                name="tags"
                id="pageTags"
                value={page.tags}
                onChange={handleChange}
              />
            </div>
          </div>

          <MDEditor
            value={page.text}
            onChange={textInput}
            height={350}
            width={100}
          />
          <Button onClick={handleSubmit} type="submit">
            Create
          </Button>
        </FormPopUp>
      </ContainerPopUp>
    </>
  );
}

export default NewPage;
