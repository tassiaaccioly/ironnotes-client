//Bibliotecas
import { Link } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import api from "../../../apis/pagesApi";
import { AuthContext } from "../../../contexts/authContext";
//Componentes
import SearchPopUp from "./PageEvents/searchpopup";
import NewPage from "./PageEvents/newpage";
import { ModalProvider } from "styled-react-modal";
//CSS em componentes
import {
  Nav,
  SearchBar,
  ListItems,
  PullNavMobile,
  Logo,
  ListNavTitle,
  NavOptions,
  Options,
  NavRight,
  IconRight,
  IconListArrow,
} from "./NoteStyles/nav.style";

//Imagens
import logoWhite from "./images/LogoLight.svg";
import logoDark from "./images/LogoDark.svg";
import Dark from "./images/nights_stay-black-18dp.svg";
import Logout from "./images/logout.svg";
import Settings from "./images/settings-black-18dp.svg";
import About from "./images/icons8-about.svg";
import ArrowWhite from "./images/keyboard_arrow_right-white-18dp.svg";
import ArrowBlack from "./images/keyboard_arrow_right-black-18dp.svg";
import Sun from "./images/wb_sunny-black-18dp.svg";
import emoji from "./images/emoji.png";

function Sidebar(props) {
  const authContext = useContext(AuthContext);
  //State para guardar todos os resultados para montar a lista na barra de navegação
  const [list, setList] = useState([
    {
      _id: "",
      title: "",
    },
  ]);

  //useEffect para buscar dados na API
  useEffect(() => {
    async function Text() {
      try {
        const response = await api.get("/titles");
        setList([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    Text();
  }, []);

  //--------------------------------------------------------------------//

  //State para controlar barra lateral do modo mobile
  const [nav, setNav] = useState({
    active: "-100%",
  });

  //Função para esconder ou puxar a barra de navegação
  function Pull() {
    if (nav.active === "-100%") {
      setNav({ active: "0%" });
    } else {
      setNav({ active: "-100%" });
    }
    document.getElementById("Pull").style.right = nav.active;
  }

  //------------------------------------------------------------------//

  //Retirando das props o State de themas
  const theme = props.themes.theme[0];
  const setTheme = props.themes.theme[1];

  //Fazendo a troca de Tema para dark ou light
  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  //---------------------------------------------------------------------//

  const OpenSearch = () => {
    document.getElementById("SearchBarPopUp").style.display = "block";
    document.getElementById("SearchBarPopUpOne").style.display = "block";
  };

  const OpenNewPage = () => {
    document.getElementById("NewPagePopUp").style.display = "block";
    document.getElementById("NewPagePopUpOne").style.display = "block";
  };

  //---------------------------------------------------------------------//
  

  return (
    <>
      <SearchPopUp titles={[...list]} />
      <NewPage />
      <NavRight>
        <IconRight onClick={themeToggle} src={theme === "light" ? Dark : Sun} />
        <IconRight src={emoji} />
        <IconRight src={About} />
        <IconRight src={Settings} />
        <IconRight src={Logout} />
      </NavRight>
      <PullNavMobile onClick={Pull}>Menu</PullNavMobile>
      <Nav id="Pull">
        <Logo src={theme === "light" ? logoDark : logoWhite} alt="logo" />
        <SearchBar
          placeholder="Search for a title here"
          value=""
          onClick={OpenSearch}
        ></SearchBar>
        <strong
          style={{ marginTop: "15px", marginBottom: "10px", fontSize: "20px" }}
        >
          Notes
        </strong>
        <ListItems>
          {list.map((list) => (
            <Link
              key={list._id}
              to={`/pages/${list._id}`}
              style={{ textDecoration: "none" }}
            >
              <ListNavTitle>
                <IconListArrow
                  src={theme === "light" ? ArrowBlack : ArrowWhite}
                ></IconListArrow>{" "}
                {list.title}
              </ListNavTitle>
            </Link>
          ))}
        </ListItems>
        <NavOptions>
          <Options onClick={OpenNewPage}>+ New Note</Options>
        </NavOptions>
      </Nav>
    </>
  );
}

export default Sidebar;
