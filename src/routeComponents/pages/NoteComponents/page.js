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
} from "./NoteStyles/page";

function Page(props) {
  const authContext = useContext(AuthContext);
  //State para armazenar e fazer o render do conteúdo
  const [file, setFile] = useState({
    _id: "",
    title: "",
    text: "",
    tag: [""],
  });

  //Buscando o path(Caminho) da url para retirar o Id

  useEffect(() => {
    async function Text() {
      try {
        const { id } = props.match.params;
        const response = await api.get(`/pages/${id}`);
        setFile({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    Text();
  }, [props]);

  return (
    <>
      <Container>
        <Fix>
          <header>
            <Title>{file.title}</Title>
            <Tag>
              {file.tag.map((file, i) => {
                return <TagQueue key={i}>{file}</TagQueue>;
              })}
            </Tag>
          </header>
          {<MDEditor.Markdown source={file.text} />}
          <Button>Edit this note</Button>
        </Fix>
      </Container>
    </>
  );
}

export default Page;
