//Bibliotecas
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";

//CSS em componentes
import {
  Container,
  Fix,
  Button,
  Title,
  Tag,
  TagQueue,
} from "./NoteStyles/page";

function Page() {

  //State para armazenar e fazer o render do conteúdo
  const [file, setFile] = useState({
    _id: "",
    title: "",
    text: "",
    tag: [""],
  });

  //Buscando o path(Caminho) da url para retirar o Id
  const history = useHistory();
  //const id = history.location.pathname;
  //useEffect(() => {
  //  async function Text() {
  //    try {
  //      const response = await axios.get(`http://localhost:2000/api${id}`);
  //      setFile({ ...response.data });
  //    } catch (err) {
  //      console.error(err);
  //    }
  //  }
  //  Text();
  //}, [id]);

  return (
    <>
      <Container>
        <Fix>
          <header>
            <Title>{//file.title
                    //  
                      }</Title>
            <Tag>
              {//file.tag.map((file, i) => {
               // return <TagQueue key={i}>{file}</TagQueue>;
               // })
              }
            </Tag>
          </header>
          {//<MDEditor.Markdown source={file.text} />
          }
          <Button>Edit this note</Button>
        </Fix>
      </Container>
    </>
  );
}

export default Page;
