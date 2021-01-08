import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/pagesApi";
import { AuthContext } from "../../contexts/authContext";

//Styled Components
import { Container, Fix, Button, Title, FixHTML } from "./NoteStyles/page";

//components
import TagTable from "./TagTable";

function TagPage(props) {
  useContext(AuthContext);

  const [texts, setTexts] = useState([]);

  console.log(props);

  const { tag } = props.match.params;

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await api.get(`/tag/${tag}`);

        console.log(response);

        setTexts([...response.data]);
      } catch (err) {}
    };
    fetchTags();
  }, [tag]);

  function uppercaseTag() {
    return tag.slice(0, 1).toUpperCase() + tag.slice(1);
  }

  return (
    <>
      <FixHTML></FixHTML>
      <Container>
        <Fix>
          <header>
            <Title>{uppercaseTag()}</Title>
          </header>
          <TagTable notes={texts} />
        </Fix>
      </Container>
    </>
  );
}

export default TagPage;
