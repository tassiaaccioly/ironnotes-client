//dependencies
import React, { useState, useContext } from "react";
import MDEditor from "@uiw/react-md-editor";

//styled components
import {
  Button,
  Container,
  Fix,
  FixHTML,
  Title,
  LabelH3,
} from "../notestyles/page";
import { TagPillsContainer, TitleInput } from "../notestyles/tagstyles";

//components
import TagPills from "../TagPills";

//server-link components
import api from "../../../apis/pagesApi";
import { AuthContext } from "../../../contexts/authContext";

function NewPage(props) {
  useContext(AuthContext);
  const [page, setPage] = useState({
    title: "",
    tags: "",
    text: "",
  });

  const [tags, setTags] = useState([]);

  function titleHandleChange(event) {
    setPage({ ...page, [event.target.name]: event.target.value });
  }

  function textInput(event) {
    setPage({ ...page, text: event });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post("/pages", page);

      const response = await api.get("/titles");
      const { _id } = response.data[response.data.length - 1];
      props.history.push(`/pages/${_id}`);
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
            <TagPillsContainer>
              <LabelH3 htmlFor="pageTitle">Title:</LabelH3>
              <TitleInput
                type="text"
                name="title"
                id="pageTitle"
                value={page.title}
                onChange={titleHandleChange}
              />
            </TagPillsContainer>

            <TagPills
              tags={tags}
              setTags={setTags}
              page={page}
              setPage={setPage}
            />

            {/* <label htmlFor="pageTags">
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
            </div> */}
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
