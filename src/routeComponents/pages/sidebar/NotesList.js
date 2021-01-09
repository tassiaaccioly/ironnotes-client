//dependencies
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

//contexts
import api from "../../../apis/pagesApi";
import { AuthContext } from "../../../contexts/authContext";

//styled components
import {
  ListItems,
  ListNavTitle,
  IconListArrow,
  SearchBar,
} from "../notestyles/nav.style";

//images
import ArrowWhite from "../../../assets/icons/keyboard_arrow_right-white-18dp.svg";
import ArrowBlack from "../../../assets/icons/keyboard_arrow_right-black-18dp.svg";

function NotesList(props) {
  useContext(AuthContext);

  //State to store results from the API (Notes Titles)
  const [list, setList] = useState([
    {
      _id: "",
      title: "",
    },
  ]);

  //To fetch data from the API
  useEffect(() => {
    async function fetchTitles() {
      try {
        const response = await api.get("/titles");
        setList([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchTitles();
  }, [props.location]);

  return (
    <>
      <Link
        to="/pages/search"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <SearchBar>Search here</SearchBar>
      </Link>
      <ListItems>
        <Link key={list._id} to={`/pages`} style={{ textDecoration: "none" }}>
          <ListNavTitle>
            <IconListArrow
              src={props.theme === "light" ? ArrowBlack : ArrowWhite}
            ></IconListArrow>{" "}
            Getting Started
          </ListNavTitle>
        </Link>
        {list.reverse().map((list) => (
          <Link
            key={list._id}
            to={`/pages/${list._id}`}
            style={{ textDecoration: "none" }}
          >
            <ListNavTitle>
              <IconListArrow
                src={props.theme === "light" ? ArrowBlack : ArrowWhite}
              ></IconListArrow>{" "}
              {list.title}
            </ListNavTitle>
          </Link>
        ))}
      </ListItems>
    </>
  );
}

export default NotesList;
