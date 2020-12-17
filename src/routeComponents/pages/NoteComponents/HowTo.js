import React from "react";
import { Link } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";

import {
  Container,
  FixHTML,
  Fix,
  Title,
  Tag,
  TagQueue,
  Button,
} from "./NoteStyles/page";

function HowTo() {
  return (
    <>
      <FixHTML></FixHTML>
      <Container>
        <Fix>
          <header>
            <Title>Getting Started</Title>
            <Tag>
              <TagQueue>Help</TagQueue>
              <TagQueue>Start</TagQueue>
              <TagQueue>Welcome</TagQueue>
            </Tag>
          </header>
          <MDEditor.Markdown
            source="
            <h2>Welcome to IronNotes</h2>
            <p>
              Welcome to our collective notebook! Here you can create new notes
              that you automatically share with your cohort at Ironhack!
            </p>
            <h3>Where to Begin?</h3>
            <p>
              To start creating notes it's easy! Just click on the blue button
              on the left bottom corner that says 'New Note', this will open
              the notes editor!
            </p>
            <h3>How to edit?</h3>
            <p>
              In the editor you can choose to use markdown laguage or the own
              editor's text formatting tools.
            </p>
            <p>
              First add a Title, then some tags so you can finlar notes later
              and finally write down your notes in the editor's window! Simple
              as that!
            </p>
            <h3>How can I find my notes?</h3>
            <p></p>"
          />
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Link to="/pages/newpage">
              <Button>New Page</Button>
            </Link>
          </div>
        </Fix>
      </Container>
    </>
  );
}

export default HowTo;
