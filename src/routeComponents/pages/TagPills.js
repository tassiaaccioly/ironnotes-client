import React, { useState } from "react";

import { Container, FixHTML, Fix, FormButton } from "./NoteStyles/page";
import { TagContainer } from "./NoteStyles/searchpagestyles";
import { InputForm } from "./NoteStyles/events";

function TagPills() {
  const [tag, SetTag] = useState([]);

  function handleClick(event) {
    event.preventDefault();

    return;
  }

  return (
    <>
      <FixHTML />
      <Container>
        <Fix>
          <TagContainer>
            <label htmlFor="tagInput">Add a Tag:</label>
            <InputForm
              type="text"
              name="tagInput"
              id="tagInput"
              placeholder="add a tag"
            />
            <FormButton style={{ marginLeft: "-40px" }} onClick={handleClick}>
              Add
            </FormButton>
          </TagContainer>
        </Fix>
      </Container>
    </>
  );
}

export default TagPills;
