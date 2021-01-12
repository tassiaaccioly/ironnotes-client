import style from "styled-components";
import { Link } from "react-router-dom";

export const BigContainer = style.main`
    width: 90vw;
    min-width: 500px;
    margin: 6rem auto;
    font-size: clamp(1.1rem, 1vw, 1.4rem);
    line-height: 1.3;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const MediumContainer = style.div`
    background-color: ${({ theme }) => theme.navColor};
    min-height: 600px;
    min-width: 500px;
    padding: 3rem 2rem;
    width: 70%;
    margin-top: 3%;
    border-radius: 2%;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: row;

    @media (max-width: 576px) {
      flex-direction: column;
    }
`;

export const SmallContainer = style.div`
    min-width: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    img {
      width: clamp(130px, 18vw, 200px);
      margin-bottom: 2rem;
      border-radius: 5%;
    }
`;

export const ProfileContainer = style.div`
    margin: 0 auto 2rem;
    padding-top: 3rem;
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    p {
      text-align: left;
      font-size: 1.1rem;
      color: ${({ theme }) => theme.text};
      margin: 15px 0;
    }

    h1 {
      text-align: center;
      font-size: 2.5rem;
      color: ${({ theme }) => theme.text};
    }

    hr {
      margin-bottom: 10%;
      width: 100%;
      height: 3px;
      border: none;
      background-color: ${({ theme }) => theme.text};
    }
`;

export const H1 = style.h1`
    font-size: clamp(2.5rem, 2.5%, 3rem);
    margin: 20px auto;
    color: ${({ theme }) => theme.text};
`;

export const H3 = style(H1)`
    font-size: clamp(1.3rem, 1vw, 1.8rem);
    width: 65vw;
`;

export const H4 = style.h4`
    font-size: clamp(1.2rem, 1vw, 1.5rem);
    margin: 10px 0 10px 0;
    color: ${({ theme }) => theme.text};
`;

export const P = style.p`
    margin: 0 auto;
    width: 65vw;
    color: ${({ theme }) => theme.text};
`;

export const SmallP = style.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;

    p {
      text-align: center;
      fontSize: 12px;
      color: #32c3ff;
    }
    
`;

export const GLink = style(Link)`
    color: ${({ theme }) => theme.ButtonTheme};
    font-size: clamp(1.1rem, 1vw, 1.4rem);

    :hover {
      color: ${({ theme }) => theme.FixColor};
      text-shadow: 0 0 5px ${({ theme }) => theme.text};
    }
`;

export const NLink = style(Link)`
    color: ${({ theme }) => theme.text};
`;

export const BlueButton = style.button`
    border: none;
    margin: .5rem auto 1rem;
    background-color: #32c3ff;
    padding: .8rem 1.5rem;
    border-radius: 0.8rem;
    color: #fbfafa;
    font-weight: 600;
    cursor: pointer;
    font-size: 1rem;

    :focus {
      outline: none;
      border: 2px solid ${({ theme }) => theme.BlueButton}
    }

    :hover {
      animation: onHover 0.5s ease forwards 1;
    }

    @keyframes onHover {
      from {
        background-color: #32c3ff;
        box-shadow: 0 0 0 0;
        color: #fbfafa;
      }
      to {
        background-color: #fbfafa;
        color: #2a2e2f;
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
`;

export const BlueButtonLink = style(BlueButton)`
  padding: .8rem 0;

    a {
      width: 200%;
      height: 200%;
      padding: .8rem 1.5rem;
      border-radius: 0.8rem;
      text-decoration: none;
      color: #fbfafa;
      font-size: 1rem;
      font-weight: 600;
    }

    a:hover {
      animation: onHoverA 0.5s ease forwards 1;
    }

    @keyframes onHoverA {
      from {
        color: #fbfafa;
      }
      to {
        color: #2a2e2f;
      }
    }
}
`;

export const RedButtonLink = style(BlueButtonLink)`

    :hover {
      animation: onHoverRed 0.5s ease forwards 1;
    }

    a:hover {
      animation: onHoverARed 0.5s ease forwards 1;
    }

    @keyframes onHoverRed {
      from {
        background-color: #32c3ff;
      }
      to {
        background-color: #C70039;
      }
    }
    @keyframes onHoverARed {
      from {
        color: #fbfafa;
      }
      to {
        color: #fbfafa;
      }
`;

//About Section

export const InfosP = style(P)`
    width: 90%;
`;

export const AboutHR = style.hr`
  width: 70vw;
  height: clamp(1px, 1vw, 3px);
  background-color: ${({ theme }) => theme.text};
  margin: 10px auto 10px;
`;

export const AboutContainer = style.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    margin: 20px 0;
    color: ${({ theme }) => theme.text};
`;

export const InfosContainer = style.div`
    margin: 20px 2rem;
    width: 30vw;
    min-width: 300px;

    img {
      width: 70px;
    }
`;

export const SocialsContainer = style.div`
    margin: 10px;

    a {
      margin: 0 10px;
    }

    img {
      width: 40px;
      margin-top: 10px;
    }
`;
