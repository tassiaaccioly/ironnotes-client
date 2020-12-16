import style from "styled-components";

export const PopUp = style.div`
    background: white;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 20;
    display: none;
    opacity: 0.5;

`;

export const ContainerPopUp = style.div`
    height: 80%;
    background: ${({ theme }) => theme.body};
    width: 80%;
    margin-left: 10%;
    margin-top: 5%;
    margin-bottom: 20%;
    margin-right: 10%;
    position: fixed;
    z-index: 21;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    oveflow: scroll;
    display: none;
    border: 1px black solid;
`;

export const FormPopUp = style.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    font-size: 20px;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
    overflow: hidden;
    margin-top: 3%;
`;

export const InputForm = style.input`
    border-radius: 5px;
    border: none;
    width: 100%;
    height: 2vw;
    margin-bottom: 8px;
    border: 0.5px solid ${({ theme }) => theme.text};
    margin-top: 10px;
`;
