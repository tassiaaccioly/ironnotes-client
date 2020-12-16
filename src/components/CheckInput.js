import React from "react";

import "./CheckInput.css";

function CheckInput(props) {
  return (
    <>
      <input
        id={props.id}
        className="checkbox-input"
        type="checkbox"
        name={props.name}
        value={props.value}
      ></input>
      <label className="checkbox-label" htmlFor={props.id}>
        {props.label}
      </label>
    </>
  );
}

export default CheckInput;
