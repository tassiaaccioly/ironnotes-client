//dependencies
import React from "react";
import { Link } from "react-router-dom";

//styled Components
import { BigContainer, BlueButtonLink } from "./styles/generalAssets";

function NoMatch() {
  return (
    <BigContainer>
      <img
        src="https://nerdweb.com.br/uploads/1578511646-cropit-.jpg"
        alt="Page not found"
      />
      <BlueButtonLink>
        <Link to="/">Back to Homepage</Link>
      </BlueButtonLink>
    </BigContainer>
  );
}

export default NoMatch;
