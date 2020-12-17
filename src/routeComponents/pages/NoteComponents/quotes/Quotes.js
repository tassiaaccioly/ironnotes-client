import React from "react";

import "./Quote.css";

import { PopUp, ContainerPopUp } from "../NoteStyles/events";
function SearchPopUp(props) {
  function ClosePopUp() {
    document.getElementById("QuotesPopUp").style.display = "none";
    document.getElementById("QuotesPopUpOne").style.display = "none";
  }
  return (
    <>
      <PopUp id="QuotesPopUp" onClick={ClosePopUp}></PopUp>
      <ContainerPopUp id="QuotesPopUpOne">{/* aqui */}</ContainerPopUp>
    </>
  );
}

export default SearchPopUp;
