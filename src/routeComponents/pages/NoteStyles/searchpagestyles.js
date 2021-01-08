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

export const Table = style.table`
    width: 90%;
    font-size: 1.5rem;
    line-height: 5rem;
    color: ${({ theme }) => theme.text};
    border-collapse: collapse;
    margin-top: 50px;
`;

export const TableLink = style(Link)`
    font-size: 1.5rem;
    line-height: 5rem;
    color: ${({ theme }) => theme.text};
`;

export const THead = style.thead`
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.FixColor};
    text-align: center;
`;

export const TD = style.td`
    border-bottom: 2px solid ${({ theme }) => theme.text};
    overflow: auto;
    min-width: 100px;
    padding: 0 20px;
`;

export const TH = style.th`
    border-bottom: 2px solid ${({ theme }) => theme.text};
    overflow: auto;
    min-width: 100px;
    padding: 0 20px;
`;
