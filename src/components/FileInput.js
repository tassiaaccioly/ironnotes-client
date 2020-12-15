import React from "react";
import "./FileInput.css";

function FileInput(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>
        {props.label}
        <input
          type={props.type}
          className="sign-input"
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </label>
    </div>
  );
}

export default FileInput;
