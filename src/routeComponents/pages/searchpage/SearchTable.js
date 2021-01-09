//dependencies
import React from "react";

//Styled Components
import {
  TableContainer,
  TableLink,
  THead,
  TBody,
  Div1,
  Div2,
  Div3,
} from "../notestyles/searchpagestyles";
import { TagSearch } from "../notestyles/tagstyles";

function SearchTable(props) {
  return (
    <TableContainer>
      <THead>
        <Div1 style={{ justifyContent: "center" }}>Title</Div1>
        <Div2>Tags</Div2>
        <Div3>Creator</Div3>
      </THead>

      {props.notes.map((note, idx) => (
        <TBody key={idx}>
          <Div1>
            <TableLink to={`/pages/${note._id}`}>{note.title}</TableLink>
          </Div1>
          <Div2 style={{ textAlign: "center" }}>
            {note.tags.map((tag, i) => (
              <TableLink key={i} to={`/pages/tags/${tag}`}>
                <TagSearch>{tag}</TagSearch>
              </TableLink>
            ))}
          </Div2>
          <Div3 style={{ textAlign: "center" }}>
            {note.creatorUser.username}
          </Div3>
        </TBody>
      ))}
    </TableContainer>
  );
}

export default SearchTable;
