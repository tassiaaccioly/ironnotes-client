//dependencies
import React from "react";

//components
import TextInput from "../../components/inputs/TextInput";
import FileInput from "../../components/inputs/FileInput";

//styled components
import { BlueButton } from "../../components/styles/generalAssets";
import { Form } from "../../components/styles/inputs";

function SignUpForm(props) {
  const { state, errors, onChange, onSubmit } = props;

  return (
    <Form onSubmit={onSubmit}>
      <TextInput
        type="text"
        label="Username: "
        name="username"
        id="signupFormName"
        value={state.name}
        error={errors.name}
        onChange={onChange}
      />

      <TextInput
        type="text"
        label="Cohort: "
        name="cohort"
        id="signupFormCohort"
        value={state.cohort}
        error={errors.cohort}
        onChange={onChange}
      />

      <TextInput
        type="email"
        label="E-mail: "
        name="email"
        id="signupFormEmail"
        value={state.email}
        error={errors.email}
        onChange={onChange}
      />

      <TextInput
        type="password"
        label="Password: "
        name="password"
        id="signupFormPassword"
        value={state.password}
        error={errors.password}
        onChange={onChange}
      />

      <FileInput
        label="Choose an avatar or photo"
        name="avatar"
        id="signupFormAvatar"
        value={state.avatar}
        onChange={onChange}
      />

      <BlueButton type="submit">Signup!</BlueButton>
    </Form>
  );
}

export default SignUpForm;
