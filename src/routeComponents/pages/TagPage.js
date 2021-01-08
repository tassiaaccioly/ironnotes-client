import React, { useState, useEffect, useContext } from "react";
import api from "../../apis/pagesApi";
import { AuthContext } from "../../contexts/authContext";

//Styled Components
import { Container, Fix, Title, FixHTML } from "./NoteStyles/page";

//components
import SearchTable from "./PageEvents/searchpage/SearchTable";

function TagPage(props) {
  useContext(AuthContext);

  const [texts, setTexts] = useState([]);

  const { tag } = props.match.params;

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await api.get(`/tag/${tag}`);

        setTexts([...response.data]);
      } catch (err) {}
    };
    fetchTags();
  }, [tag]);

  return (
    <>
      <FixHTML></FixHTML>
      <Container>
        <Fix>
          <header>
            <Title>{tag}</Title>
          </header>
          <SearchTable notes={texts} />
        </Fix>
      </Container>
    </>
  );
}

export default TagPage;
