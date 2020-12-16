import React from "react";
import { Link } from "react-router-dom";
import {Modal, Button} from "react-bootstrap"
import './quote.css'

import { PopUp, ContainerPopUp } from "../NoteStyles/events";
function SearchPopUp(props) {
  function ClosePopUp() {
    document.getElementById("QuotesPopUp").style.display = "none";
    document.getElementById("QuotesPopUpOne").style.display = "none";
  }
  console.log(props.titles);
  return (
    <>
      <PopUp id="QuotesPopUp" onClick={ClosePopUp}></PopUp>
      <ContainerPopUp id="QuotesPopUpOne">

      {/* aqui */}

      </ContainerPopUp>
    </>
  );
}

export default SearchPopUp;
