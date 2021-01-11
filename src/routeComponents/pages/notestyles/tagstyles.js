import style from "styled-components";
import { Link } from "react-router-dom";

export const TagContainer = style.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 30px;
    max-height: 100px;
`;

export const TagPillsContainer = style(TagContainer)`
    margin: 0 auto;
    width: 60%;
`;

export const TitleInput = style.input`
    border-radius: 5px;
    border: none;
    font-size: 1.2rem;
    width: 85%;
    height: 35px;
    padding: 0 10px;
    margin: 10px auto 8px;
    background-color: ${({ theme }) => theme.InputBackground};
    border: 0.5px solid ${({ theme }) => theme.text};
`;

export const TagSearch = style.span`
    border: none;
    margin: 0.5rem;
    background: ${({ theme }) => theme.ButtonTheme};
    padding: 0.4rem 1rem;
    border-radius: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    color: #fbfafa;
    font-size: 1rem;
    text-align: center;
    :hover{
        animation: tagHover 0.5s ease forwards 1;
    }

    @keyframes tagHover {
      from {
        background: ${({ theme }) => theme.ButtonTheme};
        box-shadow: 0 0 0 0;
        color: #fbfafa;
      }
      to {
        background-color: #fbfafa;
        color: #2a2e2f;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2),
          0 3px 5px 0 rgba(0, 0, 0, 0.19);
      }
    }
`;

export const Tag = style.div`
    color: white;
    position: relative;
    width: 70%;
    margin: 0 auto 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const TagQueue = style.div`
    margin: 5px;
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.FixColor};
    border-radius: 10px;
    font-size: 15px;
    padding: 5px 7px;
`;

export const TagLink = style(Link)`
    font-size: 1.5rem;
    line-height: 3rem;
    color: ${({ theme }) => theme.text};
`;

export const TagButton = style.button`
    margin: 1rem auto;
    padding: 10px;
    background-color: ${({ theme }) => theme.BottomButton};
    color: white;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    border-radius: .5rem;
    cursor: pointer;
    :hover{
        background-color: ${({ theme }) => theme.HoverButton};
        box-shadow: 1px 1px 5px black;
        color: #2a2e2f;
    }
`;

export const TagDiv = style.div`
    margin: 0 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
