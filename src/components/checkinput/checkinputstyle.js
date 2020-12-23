import style from "styled-components";

export const CheckDiv = style.div`
    max-width: 13%;
    display: flex;
    align-items: center;
    margin: 0 1rem;
`;

export const CheckLabel = style.label`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
    margin: 0.5rem;
`;

export const CheckInputBar = style.input`
    z-index: 100; 
    color: ${({ theme }) => theme.FixColor};
`;
