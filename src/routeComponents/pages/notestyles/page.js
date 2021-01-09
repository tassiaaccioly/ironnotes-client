import style from "styled-components";
import { Link } from "react-router-dom";

export const Container = style.div`
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    width: 80%;
    min-height: 100vh;
    transition: 1s;
    position: relative;
    left: 20%;
    height: 100%;
    z-index: 100;
    font-size: clamp(10px, 1vw, 25px);
    @media(max-width: 767px) {
        left: 0;
        width: 100%;
        font-size: 5px;
    }
`;

export const Fix = style.div`
    margin-left:10%;
    margin-right:10%;
    text-align: justify;
    margin-top: 5%;
`;

export const Button = style.button`
    margin: 60px auto;
    padding: 10px;
    background-color: ${({ theme }) => theme.BottomButton};
    color: white;
    border: none;
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    :hover{
        background-color: ${({ theme }) => theme.HoverButton};
        box-shadow: 1px 1px 5px black;
        color: #2a2e2f;
    }
`;

export const RedButton = style.button`
    margin: 60px auto;
    padding: 10px;
    background-color: #C70039;
    color: white;
    border: none;
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    :hover{
        background-color: ${({ theme }) => theme.HoverButton};
        box-shadow: 1px 1px 5px black;
        color: #2a2e2f;
    }
`;

export const BtnLink = style(Link)`
    margin: 0 auto;
`;

export const FormButton = style.button`
    margin: 6rem auto;
    padding: 7px;
    background-color: ${({ theme }) => theme.BottomButton};
    color: white;
    border: none;
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: .5rem;
    cursor: pointer;
    :hover{
        background-color: ${({ theme }) => theme.HoverButton};
        box-shadow: 1px 1px 5px black;
        color: #2a2e2f;
    }
`;

export const Title = style.h1`
    text-align: center;
    margin: 5%;
    font-size: 30px;
@media(max-width: 767px) {
   font-size: 25px;
}
`;

export const TitleH3 = style.h3`
    text-align: left;
    font-size: 17px;
@media(max-width: 767px) {
   font-size: 15px;
}
`;

export const LabelH3 = style.label`
    font-size: 1.7rem;
@media(max-width: 767px) {
   font-size: 1.5rem;
   margin-right: 3rem;
}
`;

export const FixHTML = style.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: ${({ theme }) => theme.FixColor};
    z-index: -20;
    transition: 1s;
`;

export const BtnDiv = style.div`
    width: 30%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;
