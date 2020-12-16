import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { PopUp, ContainerPopUp } from "../NoteStyles/events";
import TextInput from "../../../../../components/TextInput";
import CheckInput from "../../../../../components/CheckInput";

import "./SearchPopUp.css";

function SearchPopUp(props) {
  const [state, setPopup] = useState();
  const [check, setCheck] = useState({
    tags: "",
    creator: "",
    title: "",
  });

  function ClosePopUp() {
    document.getElementById("SearchBarPopUp").style.display = "none";
    document.getElementById("SearchBarPopUpOne").style.display = "none";
  }

  return (
    <>
      <PopUp id="SearchBarPopUp" onClick={ClosePopUp}></PopUp>
      <ContainerPopUp id="SearchBarPopUpOne">
        <TextInput className="searchbar-input"></TextInput>
        <CheckInput
          name="title"
          id="searchCheckTitle"
          value={check.title}
          label="Title"
        />
        <CheckInput
          name="tags"
          id="searchCheckTags"
          value={check.tags}
          label="Tags"
        />
        <CheckInput
          name="creator"
          id="searchCheckCreator"
          value={check.creator}
          label="Creator"
        />
        {state.map((note) => {
          return (
            <Link to={`/page/${note._id}`} onClick={ClosePopUp}>
              {" "}
              <div key={note._id}>{note.title}</div>
            </Link>
          );
        })}
      </ContainerPopUp>
    </>
  );
}

export default SearchPopUp;
