//dependencies
import React from "react";

//styled components
import {
  BigContainer,
  AboutContainer,
  InfosContainer,
  SocialsContainer,
  H1,
  H3,
  H4,
  AboutHR,
  P,
  InfosP,
} from "./styles/generalAssets";

//images
import AvatarTassia from "../assets/images/cartoonAvatarTassia.png";
import AvatarLeo from "../assets/images/cartoonAvatarLeo.png";
import AvatarPatrick from "../assets/images/avatarPatrick.png";
import AvatarJu from "../assets/images/avatarJuliana.png";
import GithubBlack from "../assets/icons/socials/github_black.svg";
import GithubWhite from "../assets/icons/socials/github_white.svg";
import TwitterBlack from "../assets/icons/socials/twitter_black.svg";
import TwitterWhite from "../assets/icons/socials/twitter_white.svg";
import LinkedinBlack from "../assets/icons/socials/linkedin_black.svg";
import LinkedinWhite from "../assets/icons/socials/linkedin_white.svg";

function About(props) {
  const theme = props.themes.theme[0];

  return (
    <BigContainer>
      <H1>About</H1>
      <AboutHR />
      <H3>This web application was made using MERN and Styled Components.</H3>
      <P>
        IronNotes is a collective notebook for online classes. It allows
        students to share notes, links, images, videos and everything that may
        be usefull when taking online classes.
      </P>
      <AboutHR />
      <AboutContainer>
        <InfosContainer>
          <img src={AvatarTassia} alt="Tassia" />
          <H4>Tassia Accioly</H4>
          <InfosP>
            Tassia is a WebDev student of Ironhack's 35th cohort, a previous
            movie industry worker and movie enthusiast and gamer on her off
            hours.
          </InfosP>
          <SocialsContainer>
            <a href="https://twitter.com/itsmetherogue">
              <img
                src={theme === "light" ? TwitterBlack : TwitterWhite}
                alt="Twitter"
              />
            </a>
            <a href="https://linkedin.com/in/tassiaaccioly/">
              <img
                src={theme === "light" ? LinkedinBlack : LinkedinWhite}
                alt="Linkedin"
              />
            </a>
            <a href="https://github.com/tassiaaccioly">
              <img
                src={theme === "light" ? GithubBlack : GithubWhite}
                alt="Github"
              />
            </a>
          </SocialsContainer>
        </InfosContainer>
        <InfosContainer>
          <img src={AvatarJu} alt="Ju" />
          <H4>Juliana Mattar</H4>
          <InfosP>
            The most lawyerly of Ironhack's 35th WebDev cohort, Jules is
            passionate about learning new things, creating useful solutions, and
            connecting to people.
          </InfosP>
          <SocialsContainer>
            <a href="https://www.linkedin.com/in/juliana-mttr/">
              <img
                src={theme === "light" ? LinkedinBlack : LinkedinWhite}
                alt="Linkedin"
              />
            </a>
            <a href="https://github.com/JulianaMattar">
              <img
                src={theme === "light" ? GithubBlack : GithubWhite}
                alt="Github"
              />
            </a>
          </SocialsContainer>
        </InfosContainer>
        <InfosContainer>
          <img src={AvatarLeo} alt="Leo" />
          <H4>Leonardo Uezu</H4>
          <InfosP>
            The youngest of Ironhack's 35th WebDev cohort, Leo is a curious
            night-owl who loves to test-drive new ideas and code them to
            fruition.
          </InfosP>
          <SocialsContainer>
            <a href="https://www.linkedin.com/in/leonardouezu/">
              <img
                src={theme === "light" ? LinkedinBlack : LinkedinWhite}
                alt="Linkedin"
              />
            </a>
            <a href="https://github.com/luezu-42">
              <img
                src={theme === "light" ? GithubBlack : GithubWhite}
                alt="Github"
              />
            </a>
          </SocialsContainer>
        </InfosContainer>
        <InfosContainer>
          <img
            style={{ backgroundColor: "#fafbfb" }}
            src={AvatarPatrick}
            alt="Patrick"
          />
          <H4>Patrick Brito</H4>
          <InfosP>
            The chillest of Ironhack's 35th WebDev cohort, Patrick is a a lover
            of front-end who is driven to create beautiful, functional,
            well-though-out products.
          </InfosP>
          <SocialsContainer>
            <a href="https://www.linkedin.com/in/patrickbrito95/">
              <img
                src={theme === "light" ? LinkedinBlack : LinkedinWhite}
                alt="Linkedin"
              />
            </a>
            <a href="https://github.com/patrickbrito95">
              <img
                src={theme === "light" ? GithubBlack : GithubWhite}
                alt="Github"
              />
            </a>
          </SocialsContainer>
        </InfosContainer>
      </AboutContainer>
    </BigContainer>
  );
}

export default About;
