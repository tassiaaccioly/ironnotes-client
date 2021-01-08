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
  NavRight,
  IconRight,
} from "../notestyles/nav.style";

//Componentes
import Quotes from "../quotes/Quotes";
import NotesList from "./NotesList";

//Importing images
import logoWhite from "../../../assets/images/LogoLight.svg";
import logoDark from "../../../assets/images/LogoDark.svg";
import Dark from "../../../assets/icons/nights_stay-black-18dp.svg";
import LogoutBlack from "../../../assets/icons/power_black.svg";
import LogoutWhite from "../../../assets/icons/power_white.svg";
import SettingsBlack from "../../../assets/icons/settings_black.svg";
import SettingsWhite from "../../../assets/icons/settings_white.svg";
import AboutBlack from "../../../assets/icons/about_black.svg";
import AboutWhite from "../../../assets/icons/about_white.svg";
import Sun from "../../../assets/icons/wb_sunny-black-18dp.svg";
import EmojiBlack from "../../../assets/icons/tongue_black.svg";
import EmojiWhite from "../../../assets/icons/tongue_white.svg";

function Sidebar(props) {
  const authContext = useContext(AuthContext);

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

  //Function to logout
  function handleLogoutClick() {
    localStorage.clear();
    authContext.setLoggedInUser({ token: "", user: {} });
    props.history.push("/");
  }

  //Getting theme state from props
  const theme = props.themes.theme[0];
  const setTheme = props.themes.theme[1];

  //Theme toggle function
  function themeToggle() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  function toggleQuotes() {
    console.log(popUp);
    setPopUp(!popUp);
  }

  return (
    <>
      {popUp ? <Quotes popUp={popUp} setPopUp={setPopUp} /> : <></>}
      <NavRight>
        <IconRight onClick={themeToggle} src={theme === "light" ? Dark : Sun} />
        <IconRight
          onClick={toggleQuotes}
          src={theme === "light" ? EmojiBlack : EmojiWhite}
        />
        <Link to="/auth/about">
          <IconRight src={theme === "light" ? AboutBlack : AboutWhite} />
        </Link>
        <Link to="/auth/profile">
          <IconRight src={theme === "light" ? SettingsBlack : SettingsWhite} />
        </Link>
        <IconRight
          onClick={handleLogoutClick}
          src={theme === "light" ? LogoutBlack : LogoutWhite}
        />
      </NavRight>
      {/* <PullNavMobile onClick={Pull}>Menu</PullNavMobile> */}
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
