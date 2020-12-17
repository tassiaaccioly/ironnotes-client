import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Fix,
  FixHTML,
  TagQueue,
  Button,
} from "../../NoteStyles/page";
import { InputForm } from "../../NoteStyles/events";

function SearchPopUp(props) {
  const [state, setPopup] = useState();

  function ClosePopUp() {
    document.getElementById("SearchBarPopUp").style.display = "none";
    document.getElementById("SearchBarPopUpOne").style.display = "none";
  }
  console.log(props.titles);
  return (
    <>
      <FixHTML></FixHTML>
      <Container>
        <Fix>
          <InputForm
            style={{
              width: "90%",
              height: "4%",
              marginTop: "10%",
              borderRadius: "10px",
            }}
          ></InputForm>
          {state.map((note) => {
            return (
              <Link to={`/page/${note._id}`} onClick={ClosePopUp}>
                {" "}
                <div key={note._id}>{note.title}</div>
              </Link>
            );
          })}
        </Fix>
      </Container>
    </>
  );
}

export default SearchPopUp;
