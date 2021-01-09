import style from "styled-components";

export const QuotesContainer = style.div`
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    display: block;
    z-index: 250;
    text-align: center;
`;

export const QuotesSmallContainer = style.div`
    width: clamp(250px, 30vw, 500px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto 3%;
`;

export const QuoteH3 = style.h3`
    color: ${({ theme }) => theme.text};
    font-style: italic;
    font-weight: 800;
    font-size: 3.5rem;
    margin: 2rem 4rem;
    padding: 0 3rem;
`;

export const QuoteAuthor = style.p`
    color: ${({ theme }) => theme.text};
    font-size: 1.8rem;
`;
