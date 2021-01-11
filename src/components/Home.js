//dependencies
import React, { useContext } from "react";
import { Link } from "react-router-dom";

//contexts
import { AuthContext } from "../contexts/authContext";

//styled components
import {
  BigContainer,
  BlueButtonLink,
  H3,
  P,
  GLink,
} from "./styles/generalAssets";

//components
import Logo from "./Logo";

//images
import LogoLight from "../assets/images/LogoLight.svg";
import LogoDark from "../assets/images/LogoDark.svg";

function Home(props) {
  useContext(AuthContext);

  const { history } = props;
  const theme = props.themes.theme[0];

  let haveToken = localStorage.getItem("loggedInUser");

  if (!haveToken) {
    return (
      <BigContainer>
        <Logo theme={theme} />
        <H3>All your cohort's notes in one place!</H3>
        <BlueButtonLink>
          <Link to="/auth/signup">Sign Up</Link>
        </BlueButtonLink>
        <P style={{ fontSize: ".9rem" }}>
          Already have an account?{" "}
          <GLink style={{ fontSize: ".9rem" }} to="auth/login">
            Login here
          </GLink>
          .
        </P>
      </BigContainer>
    );
  } else {
    return <main>{history.push("/pages")}</main>;
  }
}

export default Home;
