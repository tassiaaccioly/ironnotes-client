//dependencies
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

//contexts
import { AuthContext } from "../../../contexts/authContext";

//styled components
import {
  Nav,
  PullNavMobile,
  Logo,
  NavOptions,
  Options,
} from "../notestyles/nav.style";

//Components
import Quotes from "../quotes/Quotes";
import NotesList from "./NotesList";
import NavUp from "../../../components/navbar/NavUp";

//Importing images
import logoWhite from "../../../assets/images/LogoLight.svg";
import logoDark from "../../../assets/images/LogoDark.svg";

function Sidebar(props) {
  useContext(AuthContext);

  //state to control PopUp
  const [popUp, setPopUp] = useState(false);

  // //State para controlar barra lateral do modo mobile
  // const [nav, setNav] = useState({
  //   active: "-100%",
  // });

  // //Função para esconder ou puxar a barra de navegação
  // function Pull() {
  //   if (nav.active === "-100%") {
  //     setNav({ active: "0%" });
  //   } else {
  //     setNav({ active: "-100%" });
  //   }
  //   document.getElementById("Pull").style.right = nav.active;
  // }

  //Getting theme state from props
  const { theme, setTheme, font, setFont } = props;

  function toggleQuotes() {
    setPopUp(!popUp);
  }

  return (
    <>
      {popUp ? <Quotes popUp={popUp} setPopUp={setPopUp} /> : <></>}
      {/* <PullNavMobile onClick={Pull}>Menu</PullNavMobile> */}
      <NavUp
        theme={theme}
        setTheme={setTheme}
        font={font}
        setFont={setFont}
        toggleQuotes={toggleQuotes}
      />
      <Nav id="Pull">
        <Link to="/">
          <Logo src={theme === "light" ? logoDark : logoWhite} alt="logo" />
        </Link>
        <NotesList props={props} theme={theme} />
        <NavOptions>
          <Options>
            <Link to="/pages/newpage">+ New Note</Link>
          </Options>
        </NavOptions>
      </Nav>
    </>
  );
}

export default Sidebar;
