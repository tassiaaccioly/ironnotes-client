import React from "react";

import {
  TagSearch,
  Table,
  TableLink,
  THead,
  TD,
  TH,
} from "./NoteStyles/searchpagestyles";

function SearchTable(props) {
  return (
    <Table>
      <THead>
        <tr>
          <TH>Title</TH>
          <TH>Creator</TH>
          <TH>Tags</TH>
        </tr>
      </THead>
      {props.notes.map((note) => (
        <tr>
          <TD>
            <TableLink to={`/pages/${note._id}`}>{note.title}</TableLink>
          </TD>
          <TD style={{ textAlign: "center" }}>{note.creatorUser.username}</TD>
          <TD style={{ textAlign: "center" }}>
            {note.tags.map((tag, i) => (
              <TableLink key={i} to={`/pages/tags/${tag}`}>
                <TagSearch>{tag}</TagSearch>
              </TableLink>
            ))}
          </TD>
        </tr>
      ))}
    </Table>
  );
}

export default SearchTable;
