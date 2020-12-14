import style from 'styled-components'

export const PopUp = style.div`
    background: white;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 200;
    display: none;
    opacity: 0.5;

`;

export const ContainerPopUp = style.div`
    height: 80%;
    background: white;
    width: 80%;
    margin-left: 10%;
    margin-top: 5%;
    margin-bottom: 20%;
    margin-right: 10%;
    position: fixed;
    z-index: 201;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    oveflow: scroll;
    display: none;
`;