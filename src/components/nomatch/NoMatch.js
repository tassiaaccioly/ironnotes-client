import React from "react";
import { Link } from "react-router-dom";

import BlueBtn from "../btns/BlueBtn";

function NoMatch() {
  return (
    <main>
      <img
        src="https://nerdweb.com.br/uploads/1578511646-cropit-.jpg"
        alt="Page not found"
      />
      <BlueBtn>
        <Link to="/">Back to Homepage</Link>
      </BlueBtn>
    </main>
  );
}

export default NoMatch;
