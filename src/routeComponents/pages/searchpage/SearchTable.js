//dependencies
import React from "react";

//Styled Components
import {
  Table,
  TableLink,
  THead,
  TD,
  TH,
} from "../notestyles/searchpagestyles";
import { TagSearch } from "../notestyles/tagstyles";

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
      <tbody>
        {props.notes.map((note, idx) => (
          <tr key={idx}>
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
      </tbody>
    </Table>
  );
}

export default SearchTable;
