import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../../../apis/pagesApi";

import { PopUp, ContainerPopUp } from "../../NoteStyles/events";
import TextInput from "../../../../../components/TextInput";
import CheckInput from "../../../../../components/CheckInput";
import Tag from "../../tags/Tags";
import BlueBtn from "../../../../../components/btns/BlueBtn";

import "./SearchPopUp.css";

function SearchPopUp(props) {
  const [notes, setNotes] = useState([
    {
      tags: [],
      title: "",
      _id: "",
      creatorUser: {},
    },
  ]);
  const [notesFiltered, setNotesFiltered] = useState([
    {
      tags: [],
      title: "",
      _id: "",
      creatorUser: {},
    },
  ]);
  const [check, setCheck] = useState({
    tags: false,
    creator: false,
    title: false,
  });

  const [userSearch, setUserSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/pages");

        console.log(response);

        setNotes([...response.data]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  function handleChange(event) {
    setUserSearch(event.currentTarget.value);
  }

  console.log(check);

  function handleCheckChange(event) {
    console.log(event);
    console.log(check);
    setCheck({
      ...check,
      [event.currentTarget.name]: event.currentTarget.checked,
    });
    console.log(check);
  }

  async function handleClick() {
    try {
      const response = await api.get("/pages");

      console.log("This is the response: ", response);

      if (response) {
        if (check.tags) {
          let tagFilter = response.data.filter((elem) =>
            elem.tags.includes(userSearch)
          );
          setNotesFiltered([...notesFiltered, ...tagFilter]);
        }

        if (check.title) {
          let titleFilter = response.data.filter((elem) =>
            elem.title.includes(userSearch)
          );
          setNotesFiltered([...notesFiltered, ...titleFilter]);
        }

        if (check.creator) {
          let creatorFilter = response.data.filter(
            (elem) => elem.creatorUser.username === userSearch
          );
          setNotesFiltered([...notesFiltered, ...creatorFilter]);
        }
      }
    } catch (err) {
      console.error(err);
    }
  }

  function ClosePopUp() {
    document.getElementById("SearchBarPopUp").style.display = "none";
    document.getElementById("SearchBarPopUpOne").style.display = "none";
  }

  return (
    <>
      <ContainerPopUp id="SearchBarPopUpOne">
        <div className="searchbar-input">
          <input
            type="text"
            name="searchbar-input"
            id="searchbar-input"
            placeholder="Enter your search..."
            value={userSearch}
            onChange={handleChange}
          />
          <label htmlFor="searchbar-input"></label>
        </div>
        <div className="check-container">
          <CheckInput
            className="checkinput"
            name="title"
            id="searchCheckTitle"
            checked={check.title}
            label="Title"
            onChange={handleCheckChange}
          />
          <CheckInput
            className="checkinput"
            name="tags"
            id="searchCheckTags"
            checked={check.tags}
            label="Tags"
            onChange={handleCheckChange}
          />
          <CheckInput
            className="checkinput"
            name="creator"
            id="searchCheckCreator"
            checked={check.creator}
            label="Creator"
            onChange={handleCheckChange}
          />

          <button className="search-btn" onClick={handleClick}>
            Search
          </button>
        </div>
        <div className="searchtable-container">
          <table className="search-table">
            <thead>
              <tr>
                <th>Title:</th>
                <th>Tags:</th>
                <th>Created by:</th>
              </tr>
            </thead>
            {notes.map((note) => (
              <tr key={note._id}>
                <td>
                  <Link
                    className="table-link"
                    to={`/page/${note._id}`}
                    onClick={ClosePopUp}
                  >
                    {note.title}
                  </Link>
                </td>
                <td>
                  {note.tags.map((tag) => (
                    <Tag tag={tag} />
                  ))}
                </td>
                <td>{note.creatorUser.username}</td>
              </tr>
            ))}
          </table>
        </div>
      </ContainerPopUp>
      <PopUp id="SearchBarPopUp" onClick={ClosePopUp}></PopUp>
    </>
  );
}

export default SearchPopUp;
