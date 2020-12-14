import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  const [mobile, setMobile] = useState(false);

  function handleClick() {
    setMobile(!mobile);
  }

  return (
    <nav className={!mobile ? "" : "nav-active"}>
      <Link className="logo" to="/">
        <img type="image/svg+xml" src="./images/N_LogoDark.svg" alt="Home" />
      </Link>

      <ul className="nav-links">
        <li className={!mobile ? "" : "link-active"}>
          <Link to="/profile">Profile</Link>
        </li>
        <li className={!mobile ? "" : "link-active"}>
          <Link to="/about">About</Link>
        </li>
        <li className={!mobile ? "" : "link-active"}>
          <a href="https://ironhack.com">Ironhack</a>
        </li>
        <li className={!mobile ? "" : "link-active"}>
          <Link to="/logout">
            <img
              type="image/svg+xml"
              src="./images/power-button.svg"
              alt="Logout"
            />
          </Link>
        </li>
      </ul>
      <div onClick={handleClick} className="burger">
        <div className={mobile ? `line 1 toggle` : `line 1`}></div>
        <div className={mobile ? `line 2 toggle` : `line 2`}></div>
        <div className={mobile ? `line 3 toggle` : `line 3`}></div>
      </div>
    </nav>
  );
}

export default NavBar;
