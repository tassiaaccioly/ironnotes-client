import style from "styled-components";

export const PopUp = style.div`
    background: white;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 200;
    opacity: 0.5;

`;

export const ContainerPopUp = style.div`
    height: 70%;
    background: ${({ theme }) => theme.body};
    width: 70%;
    margin: 10% 15% 20% 15%;
    position: fixed;
    z-index: 201;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    oveflow-y: auto;
    overflow-x: hidden;
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
    width: 60%;
    height: 30px;
    padding: 0 10px;
    margin: 10px auto 8px;
    background-color: ${({ theme }) => theme.InputBackground};
    border: 0.5px solid ${({ theme }) => theme.text};
`;
