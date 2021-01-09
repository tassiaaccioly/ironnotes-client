import style from "styled-components";
import { Link } from "react-router-dom";

export const SearchContainer = style.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    max-height: 100px;
`;

export const CheckContainer = style.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const SearchInput = style.input`
  border-radius: 5px;
  border: none;
  width: 60%;
  height: 30px;
  padding: 0 10px;
  margin: 10px auto 8px;
  color: ${({ theme }) => theme.text};
  border: 0.5px solid ${({ theme }) => theme.text};
  width: 90%;
    margin: 10% auto 3%;
    display: flex;
    justify-content: center;
`;

export const TableContainer = style.div`
    width: 90%;
    font-size: 1.5rem;
    line-height: 5rem;
    color: ${({ theme }) => theme.text};
    margin: 5rem auto 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    jusitify-content: center;
`;

export const TableLink = style(Link)`
    font-size: 1.5rem;
    line-height: 5rem;
    color: ${({ theme }) => theme.text};
`;

export const THead = style.section`
    width: 65vw;
    min-width: 500px;
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.FixColor};
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const TBody = style.section`
    width: 65vw;
    min-width: 500px;
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.FixColor};
    color: ${({ theme }) => theme.text};
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid ${({ theme }) => theme.text};
`;

export const Div1 = style.div`
    width: 30%;
    overflow: auto;
    min-width: 150px;
    max-width: 300px;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const Div2 = style.div`
    text-wrap: break;
    word-wrap: normal;
    width: 50%;
    min-width: 200px;
    max-width: 500px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export const Div3 = style.div`
    width: 20%;
    overflow: auto;
    min-width: 150px;
    max-width: 300px;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
