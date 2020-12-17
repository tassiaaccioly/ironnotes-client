import style from "styled-components";

export const Container = style.div`
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    width: 85%;
    min-height: 100vh;
    transition: 1s;
    position: relative;
    left: 15%;
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
    font-size: 17px;
    border-radius: 5px;
    cursor: pointer;
    :hover{
        background-color: ${({ theme }) => theme.HoverButton};
        box-shadow: 1px 1px 5px black;
        color: #2a2e2f;
    }
`;

// border: solid  ${({ theme }) => theme.BottomButton} 2px;

export const Title = style.h1`
    text-align: center;
    margin: 5%;
    font-size: 30px;
@media(max-width: 767px) {
   font-size: 25px;
}
`;

export const Tag = style.div`
    color: white;
    position: relative;
    width: 100%;
    margin: 0 0 30px;
    display: flex;
    justify-content: center;
`;

export const TagQueue = style.div`
    margin: 5px;
    background: #2a2e2f;
    border-radius: 10px;
    font-size: 15px;
    padding: 5px 7px;
`;

export const FixHTML = style.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: ${({ theme }) => theme.FixColor};
    z-index: -20;
    transition: 1s;
`;
