//Bibliotecas
import React, { useState, useEffect, useContext } from "react";
import MDEditor from "@uiw/react-md-editor";
import api from "../../../apis/pagesApi";
import { AuthContext } from "../../../contexts/authContext";
import { useHistory } from "react-router-dom";


//CSS em componentes
import {
  Container,
  Fix,
  Button,
  Title,
  Tag,
  TagQueue,
  FixHTML
} from "./NoteStyles/page";
import EditPage from "./PageEvents/editpage";

function Page(props) {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  //State para armazenar e fazer o render do conteúdo
  const [file, setFile] = useState({
    _id: "",
    title: "",
    text: "",
    tags: [""],
  });

  //Buscando o path(Caminho) da url para retirar o Id

  useEffect(() => {
    async function Text() {
      try {
        const id = history.location.pathname;

        console.log(id);
        const response = await api.get(`${id}`);
        console.log(response);
        setFile({ ...response.data });
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    }
    Text();
  }, [history.location.pathname]);

  const OpenSearch = () => {
    document.getElementById("EditPagePopUp").style.display = "block";
    document.getElementById("EditPagePopUpOne").style.display = "block";
  };

  return (
    <>
    <EditPage/>
    <FixHTML></FixHTML>
      <Container>
        <Fix>
          <header>
            <Title>{file.title}</Title>
            <Tag>
              {file.tags.map((file, i) => {
                return <TagQueue key={i}>{file}</TagQueue>;
              })}
            </Tag>
          </header>
          <MDEditor.Markdown source={file.text} />
          <Button onClick={OpenSearch}>Edit this note</Button>
        </Fix>
      </Container>
    </>
  );
}

export default Page;
