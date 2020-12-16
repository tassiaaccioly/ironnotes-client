import React from "react";

import "./CheckInput.css";

function CheckInput(props) {
  return (
    <>
      <input
        id={props.id}
        className={`checkbox-input ` + props.className}
        type="checkbox"
        name={props.name}
        checked={props.checked}
        onChange={props.onChange}
      ></input>
      <label className="checkbox-label" htmlFor={props.id}>
        {props.label}
      </label>
    </>
  );
}

export default CheckInput;
