//dependencies
import React from "react";

//Styled Components
import {
  Table,
  TableLink,
  THead,
  TD,
  TH,
} from "../../NoteStyles/searchpagestyles";
import { TagSearch } from "../../NoteStyles/tagstyles";

function SearchTable(props) {
  return (
    <Table>
      <THead>
        <tr>
          <TH>Title</TH>
          <TH>Tags</TH>
          <TH>Creator</TH>
        </tr>
      </THead>
      {props.notes.map((note) => (
        <tr>
          <TD>
            <TableLink to={`/pages/${note._id}`}>{note.title}</TableLink>
          </TD>
          <TD style={{ textAlign: "center" }}>
            {note.tags.map((tag, i) => (
              <TableLink key={i} to={`/pages/tags/${tag}`}>
                <TagSearch>{tag}</TagSearch>
              </TableLink>
            ))}
          </TD>
          <TD style={{ textAlign: "center" }}>{note.creatorUser.username}</TD>
        </tr>
      ))}
    </Table>
  );
}

export default SearchTable;
