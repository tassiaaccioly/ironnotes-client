import React from "react";

import {
  TableContainer,
  THead,
  TBody,
  Div1,
  TableLink,
} from "../pages/notestyles/searchpagestyles";

function ProfileNotesList(props) {
  const { user } = props;

  return (
    <TableContainer style={{ width: "40%", marginTop: "5rem" }}>
      <THead
        style={{
          width: "30vw",
          borderRadius: "10px 10px 0 0",
          minWidth: "200px",
        }}
      >
        <Div1 style={{ justifyContent: "center" }}>Pages</Div1>
      </THead>
      {user.pagesCreated.map((elem) => (
        <TBody key={elem._id} style={{ width: "30vw", minWidth: "200px" }}>
          <Div1 style={{ minWidth: "100%" }}>
            <TableLink to={`/pages/${elem._id}`}>{elem.title}</TableLink>
          </Div1>
        </TBody>
      ))}
    </TableContainer>
  );
}

export default ProfileNotesList;
