//Dependencies
import React, { useState, useEffect, useContext } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Link } from "react-router-dom";

//Axios
import api from "../../../apis/pagesApi";

//Authentication
import { AuthContext } from "../../../contexts/authContext";

//Styled Components
import {
  Button,
  RedButton,
  Container,
  Fix,
  FixHTML,
  Title,
  LabelH3,
  BtnDiv,
} from "../notestyles/page";
import { TagPillsContainer, TitleInput } from "../notestyles/tagstyles";

//components
import TagPills from "../TagPills";

function Page(props) {
  useContext(AuthContext);
  //State para armazenar e fazer o render do conteúdo
  const [file, setFile] = useState({
    _id: "",
    title: "",
    text: "",
    tags: [""],
  });

  const [tags, setTags] = useState([]);

  //Buscando o path(Caminho) da url para retirar o Id
  const { id } = props.match.params;
  useEffect(() => {
    async function Text() {
      try {
        const response = await api.get(`/pages/${id}`);
        setTags([...response.data.tags]);
        setFile({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    Text();
  }, [id]);

  function handleChange(event) {
    setFile({ ...file, [event.currentTarget.name]: event.currentTarget.value });
  }

  function textInput(event) {
    setFile({ ...file, text: event });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.patch(`/pages/${id}`, { ...file, tags: tags });
      props.history.push(`/pages/${id}`);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <FixHTML></FixHTML>
      <Container id="EditPagePopUpOne">
        <Fix>
          <Title>Edit this note</Title>
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
                value={file.title}
                onChange={handleChange}
              />
            </TagPillsContainer>

            <TagPills
              tags={tags}
              setTags={setTags}
              page={file}
              setPage={setFile}
            />
          </div>

          <MDEditor
            value={file.text}
            onChange={textInput}
            height={350}
            width={300}
          />
          <BtnDiv>
            <Button onClick={handleSubmit} type="submit">
              Save
            </Button>
            <Link to={`/pages/${id}`}>
              <Button>Cancel</Button>
            </Link>
            <Link style={{ margin: "0 auto" }} to={`/pages/delete/${id}`}>
              <RedButton>Delete Note</RedButton>
            </Link>
          </BtnDiv>
        </Fix>
      </Container>
    </>
  );
}

export default Page;
