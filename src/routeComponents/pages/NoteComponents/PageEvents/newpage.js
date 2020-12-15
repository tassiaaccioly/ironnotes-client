import React from "react";
import MDEditor from "@uiw/react-md-editor";

import { PopUp, ContainerPopUp } from "../NoteStyles/events";
function NewPage(props) {
  function ClosePopUp() {
    document.getElementById("NewPagePopUp").style.display = "none";
    document.getElementById("NewPagePopUpOne").style.display = "none";
  }
  console.log(props.titles);
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
            <label>Title:</label>
            <input />

            <label>Tag</label>
            <div>
              <input />
              <button>Add Tag</button>
            </div>
          </div>

          <MDEditor />
          <button>Create</button>
        </form>
      </ContainerPopUp>
    </>
  );
}

export default NewPage;
