//dependencies
import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

//contexts
import { AuthContext } from "../../contexts/authContext";

//styled components
import {
  NavRight,
  IconRight,
} from "../../routeComponents/pages/notestyles/nav.style";

//icons
import Dark from "../../assets/icons/navbar/bulb_black.svg";
import Light from "../../assets/icons/navbar/bulb_white.svg";
import LogoutBlack from "../../assets/icons/navbar/power_black.svg";
import LogoutWhite from "../../assets/icons/navbar/power_white.svg";
import LoginBlack from "../../assets/icons/navbar/login_black.svg";
import LoginWhite from "../../assets/icons/navbar/login_white.svg";
import SettingsBlack from "../../assets/icons/navbar/settings_black.svg";
import SettingsWhite from "../../assets/icons/navbar/settings_white.svg";
import AboutBlack from "../../assets/icons/navbar/about_black.svg";
import AboutWhite from "../../assets/icons/navbar/about_white.svg";
import EmojiBlack from "../../assets/icons/navbar/laugh_black.svg";
import EmojiWhite from "../../assets/icons/navbar/laugh_white.svg";
import NotepadBlack from "../../assets/icons/navbar/notepad_black.svg";
import NotepadWhite from "../../assets/icons/navbar/notepad_white.svg";
import NLogoBlack from "../../assets/images/N_LogoDark.svg";
import NLogoWhite from "../../assets/images/N_LogoLight.svg";
import FontBlack from "../../assets/icons/navbar/font_black.svg";
import FontWhite from "../../assets/icons/navbar/font_white.svg";

function NavUp(props) {
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const { theme, setTheme, toggleQuotes } = props;

  const logged = localStorage.getItem("loggedInUser");

  const path = window.location.pathname;

  const pagesURL = path.includes("pages");

  // const errorURL = window.location.pathname.includes("error");

  //Function to logout
  function handleLogoutClick() {
    localStorage.clear();
    authContext.setLoggedInUser({ token: "", user: {} });
    history.push("/");
  }

  function themeToggle() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  // function fontToggle() {
  //   theme === "sans-serif" ? setTheme("serif") : setTheme("sans-serif");
  // }

  return (
    <NavRight>
      <IconRight onClick={themeToggle} src={theme === "light" ? Dark : Light} />
      {/* <IconRight
        onClick={fontToggle}
        src={font === "sans-serif" ? Sun : Dark}
      /> */}
      <Link to="/pages">
        <IconRight src={theme === "light" ? NotepadBlack : NotepadWhite} />
      </Link>
      {logged ? (
        <>
          {pagesURL ? (
            <IconRight
              onClick={toggleQuotes}
              src={theme === "light" ? EmojiBlack : EmojiWhite}
            />
          ) : (
            <></>
          )}
          <Link to="/about">
            <IconRight src={theme === "light" ? AboutBlack : AboutWhite} />
          </Link>
          <Link to="/auth/profile">
            <IconRight
              src={theme === "light" ? SettingsBlack : SettingsWhite}
            />
          </Link>
          <IconRight
            onClick={handleLogoutClick}
            src={theme === "light" ? LogoutBlack : LogoutWhite}
          />
        </>
      ) : (
        <>
          <Link to="/about">
            <IconRight src={theme === "light" ? AboutBlack : AboutWhite} />
          </Link>
          <Link to="/">
            <IconRight src={theme === "light" ? NLogoBlack : NLogoWhite} />
          </Link>
          <Link to="/auth/login">
            <IconRight src={theme === "light" ? LoginBlack : LoginWhite} />
          </Link>
        </>
      )}
    </NavRight>
  );
}

export default NavUp;
