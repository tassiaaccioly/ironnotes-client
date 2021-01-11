import React from "react";

import LogoLight from "../assets/images/LogoLight.svg";
import LogoDark from "../assets/images/LogoDark.svg";

function Logo(props) {
  const { theme } = props;

  return (
    <img
      className="Logo"
      type="image/svg+xml"
      style={{ width: "25%", marginBottom: "2rem" }}
      src={theme === "light" ? LogoDark : LogoLight}
      alt="Logo"
    />
  );
}

export default Logo;
