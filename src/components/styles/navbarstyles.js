import style from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = style.nav`
    width: 100vw;
    height: 7rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 0 2rem;
`;

export const NavLink = style(Link)`
    text-decoration: none;
`;

export const NavLogo = style.img`
    width: auto;
    height: 5.5rem;
`;

export const NavLogout = style.img`
    width: auto;
    height: 5rem;
`;

export const NavUl = style.ul`
    width: 30%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
`;

export const BurgerBtn = style.button`
    width: 5rem;
    height: 5rem;
    background: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    display: none;
    position: absolute;
  
  &:focus {
    outline: none;
  }

  @media (max-width: 576px) {
    display: block;
  }
  
  span {
    width: 3rem;
    height: 0.2rem;
    background: ${({ theme }) => theme.FixColor};
    border-radius: 50%;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    opacity: ${({ mobile }) => (mobile ? "0" : "1")};
      transform: ${({ mobile }) =>
        mobile ? "translateX(20px)" : "translateX(0)"};

    :before {
      width: 100%;
      height: 100%;
      content: "";
      background-color: 
      transform: ${({ mobile }) => (mobile ? "rotate(45deg)" : "rotate(0)")};
    }

    :after {
      transform: ${({ mobile }) => (mobile ? "rotate(-45deg)" : "rotate(0)")};
    }
`;

export const BurgerMenu = style.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

// :hover{
//   animation: tagHover 0.5s ease forwards 1;
// }

// @keyframes tagHover {
// from {
//   background: ${({ theme }) => theme.ButtonTheme};
//   box-shadow: 0 0 0 0;
//   color: #fbfafa;
// }
// to {
//   background-color: #fbfafa;
//   color: #2a2e2f;
//   box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2),
//     0 3px 5px 0 rgba(0, 0, 0, 0.19);
// }
// }
