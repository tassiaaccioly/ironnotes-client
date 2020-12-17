import React, { useState, useContext } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useHistory } from "react-router-dom";

import { InputForm } from "../NoteStyles/events";
import {
  Button,
  Container,
  Fix,
  FixHTML,
  Title,
  TitleH3,
} from "../NoteStyles/page";
import api from "../../../../apis/pagesApi";
import { AuthContext } from "../../../../contexts/authContext";

function NewPage(props) {
  const authContext = useContext(AuthContext);
  const [page, setPage] = useState({
    title: "",
    tags: "",
    text: "",
  });

  function handleChange(event) {
    setPage({ ...page, [event.target.name]: event.target.value });
    console.log(page);
  }

  function textInput(event) {
    setPage({ ...page, text: event });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post("/pages", page);

      async function reloadPage() {
        const response = await api.get("/titles");
        const { _id } = response.data[response.data.length - 1];
        window.location.replace(`/pages/${_id}`);
      }
      reloadPage();
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <FixHTML></FixHTML>
      <Container id="NewPagePopUp">
        <Fix>
          <Title>Create a New Note</Title>
          <div
            style={{
              width: "100%",
              margin: "3% auto",
            }}
          >
            <label htmlFor="pageTitle">
              <TitleH3>Title:</TitleH3>
            </label>
            <InputForm
              type="text"
              name="title"
              id="pageTitle"
              value={page.title}
              onChange={handleChange}
            />

            <label htmlFor="pageTags">
              <TitleH3>Tags:</TitleH3>
            </label>
            <div>
              <InputForm
                type="text"
                name="tags"
                id="pageTags"
                value={page.tags}
                onChange={handleChange}
              />
            </div>
          </div>

          <MDEditor
            value={page.text}
            onChange={textInput}
            height={350}
            width={300}
          />
          <div
            style={{
              width: "30%",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button onClick={handleSubmit} type="submit">
              Create
            </Button>
          </div>
        </Fix>
      </Container>
    </>
  );
}

export default NewPage;
