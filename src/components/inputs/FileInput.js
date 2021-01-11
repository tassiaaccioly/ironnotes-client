//dependencies
import React from "react";

//styled components
import { FormGroup, FInput, FileLabel } from "../styles/inputs";

function FileInput(props) {
  return (
    <FormGroup>
      <div style={{ height: "25px" }}></div>
      <FileLabel htmlFor={props.id}>{props.label}</FileLabel>
      <FInput
        type="file"
        id={props.id}
        name={props.name}
        onChange={props.onChange}
      />
    </FormGroup>
  );
}

export default FileInput;
