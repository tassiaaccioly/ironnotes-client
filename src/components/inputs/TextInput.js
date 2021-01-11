import React from "react";

//styled Components
import { FormGroup, Label, Input, InvalidFeedback } from "../styles/inputs";

function TextInput(props) {
  return (
    <FormGroup>
      <Label htmlFor={props.id}>{props.label}</Label>
      <Input
        style={{ fontSize: "1rem" }}
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error ? <InvalidFeedback>{props.error}</InvalidFeedback> : null}
    </FormGroup>
  );
}

export default TextInput;
