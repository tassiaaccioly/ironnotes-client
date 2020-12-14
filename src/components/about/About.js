import React from "react";

import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About</h1>
      <hr />
      <p>This web application was made using MERN.</p>
      <hr />
      <div className="profile-container">
        <div className="infos-container">
          <div className="avatar">
            <img src="./images/cartoonAvatarTassia.png" alt="Tassia" />
          </div>
          <h4>Tassia Accioly</h4>
          <p>
            Tassia is a WebDev student of Ironhack's 35th cohort, a previous
            movie industry worker and movie enthusiast and gamer on her off
            hours.
          </p>
          <div className="socials">
            <a className="socialicon" href="https://twitter.com/itsmetherogue">
              <img src="./images/twitter.svg" alt="Twitter" />
            </a>
            <a
              className="socialicon"
              href="https://linkedin.com/in/tassiaaccioly/"
            >
              <img src="./images/linkedin.svg" alt="Linkedin" />
            </a>
            <a className="socialicon" href="https://github.com/tassiaaccioly">
              <img src="./images/github.svg" alt="Github" />
            </a>
          </div>
        </div>
        <div className="infos-container">
          <div className="avatar">
            <img src="./images/avatarJuliana.png" alt="Ju" />
          </div>
          <h4>Juliana Mattar</h4>
          <p>
            The most lawyerly of Ironhack's 35th WebDev cohort, Jules is
            passionate about learning new things, creating useful solutions, and
            connecting to people.
          </p>
          <div className="socials">
            <a
              className="socialicon"
              href="https://www.linkedin.com/in/juliana-mttr/"
            >
              <img src="./images/linkedin.svg" alt="Linkedin" />
            </a>
            <a className="socialicon" href="https://github.com/JulianaMattar">
              <img src="./images/github.svg" alt="Github" />
            </a>
          </div>
        </div>
        <div className="infos-container">
          <div className="avatar">
            <img src="./images/cartoonAvatarLeo.png" alt="Leo" />
          </div>
          <h4>Leonardo Uezu</h4>
          <p>
            The youngest of Ironhack's 35th WebDev cohort, Leo is a curious
            night-owl who loves to test-drive new ideas and code them to
            fruition.
          </p>
          <div className="socials">
            <a
              className="socialicon"
              href="https://www.linkedin.com/in/leonardouezu/"
            >
              <img src="./images/linkedin.svg" alt="Linkedin" />
            </a>
            <a className="socialicon" href="https://github.com/luezu-42">
              <img src="./images/github.svg" alt="Github" />
            </a>
          </div>
        </div>
        <div className="infos-container">
          <div className="avatar">
            <img src="./images/avatarPatrick.png" alt="Patrick" />
          </div>
          <h4>Patrick Brito</h4>
          <p>
            The chillest of Ironhack's 35th WebDev cohort, Patrick is a a lover
            of front-end who is driven to create beautiful, functional,
            well-though-out products.
          </p>
          <div className="socials">
            <a
              className="socialicon"
              href="https://www.linkedin.com/in/patrickbrito95/"
            >
              <img src="./images/linkedin.svg" alt="Linkedin" />
            </a>
            <a className="socialicon" href="https://github.com/patrickbrito95">
              <img src="./images/github.svg" alt="Github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
