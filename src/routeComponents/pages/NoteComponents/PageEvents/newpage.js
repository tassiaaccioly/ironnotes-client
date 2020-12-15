import React, { useState, useContext } from "react";
import MDEditor from "@uiw/react-md-editor";

import { PopUp, ContainerPopUp } from "../NoteStyles/events";
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

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post("/pages", page );

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
              value={page.title}
              onChange={handleChange}
            />

            <label htmlFor="pageTag">Tag</label>
            <div>
              <input
                type="text"
                name="tags"
                id="pageTags"
                value={page.tags}
                onChange={handleChange}
              />
            </div>
          </div>

          <MDEditor value={page.text} onChange={textInput} />
          <button onClick={handleSubmit} type="submit">
            Create
          </button>
        </form>
      </ContainerPopUp>
    </>
  );
}

export default NewPage;
