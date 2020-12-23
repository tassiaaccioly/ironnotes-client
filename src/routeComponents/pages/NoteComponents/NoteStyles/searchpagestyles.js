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

export const TagSearch = style.span`
border: none;
margin: 0.5rem;
background-color: ${({ theme }) => theme.ButtonTheme};
padding: 0.3rem 1rem;
border-radius: 0.8rem;
font-weight: 600;
cursor: pointer;
text-decoration: none;
color: #fbfafa;
font-size: 1.3rem;
text-align: center;
:hover{
    animation: tagHover 0.5s ease forwards 1;
}

@keyframes tagHover {
  from {
    background-color: ${({ theme }) => theme.ButtonTheme};
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
