import style from "styled-components";

export const Container = style.div`
    background-color: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    transition: 1s;
    position: relative;
    left: 20%;
    height: 100%;
    font-size: clamp(10px, 1vw, 25px);
    @media(max-width: 767px) {
        left: 0;
        width: 100%;
        font-size: 5px;
    }
`;



export const Fix = style.div`
    margin-left:5%;
    margin-right:10%;
    text-align: center;
    margin-top: 5%;
`;

export const Button = style.button`
    margin-top: 20px;
    margin-bottom: 10px;
    width: 160px;
    height: 60px;
    background-color: ${({theme})=> theme.BottomButton};
    color: white;
    font-weight: bold;
    font-size: 20px;
    border-radius: 5px;
    border: solid  ${({theme})=> theme.BottomButton} 2px;
    cursor: pointer;
    :hover{
        background-color: ${({theme})=> theme.HoverButton};
    }
`;

export const Title = style.h1`
margin-left:5%;
    margin-right:10%;
    text-align: center;
    margin-top: 3%;
    margin-bottom: 5%;
@media(max-width: 767px) {
   font-size: 25px;
}
`;

export const Tag = style.div`
    color: white;
    position: relative;
    margin-bottom: 30px;
    display: flex;
`;

export const TagQueue = style.div`
    margin: 5px;
    background: #32C3FE;
    border-radius: 5px;
    font-size: 18px;
    padding: 5px;
`;

export const FixHTML = style.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: ${({theme})=>theme.FixColor};
    z-index: -20;
    transition: 1s;
`;

