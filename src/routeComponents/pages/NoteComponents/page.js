//Bibliotecas
import React, { useState, useEffect, useContext } from "react";
import MDEditor from "@uiw/react-md-editor";
import api from "../../../apis/pagesApi";
import { AuthContext } from "../../../contexts/authContext";

//CSS em componentes
import {
  Container,
  Fix,
  Button,
  Title,
  Tag,
  TagQueue,
  FixHTML,
} from "./NoteStyles/page";
import EditPage from "./PageEvents/editpage";

function Page(props) {
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
        const { id } = props.match.params;

        console.log(id);
        const response = await api.get(`/pages/${id}`);
        console.log(response);
        setFile({ ...response.data });
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    }
    Text();
  }, [props]);

  const OpenSearch = () => {
    document.getElementById("EditPagePopUp").style.display = "block";
    document.getElementById("EditPagePopUpOne").style.display = "block";
  };

  return (
    <>
      <EditPage />
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
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Button onClick={OpenSearch}>Edit Note</Button>
          </div>
        </Fix>
      </Container>
    </>
  );
}

export default Page;
