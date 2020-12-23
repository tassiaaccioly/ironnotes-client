import React from "react";

import { CheckInputBar, CheckLabel, CheckDiv } from "./checkinputstyle";

function CheckInput(props) {
  return (
    <CheckDiv className="checkinput-container">
      <CheckInputBar
        id={props.id}
        className={`checkbox-input ` + props.className}
        type="checkbox"
        name={props.name}
        checked={props.checked}
        onChange={props.onChange}
      ></CheckInputBar>
      <CheckLabel className="checkbox-label" htmlFor={props.id}>
        {props.label}
      </CheckLabel>
    </CheckDiv>
  );
}

export default CheckInput;
