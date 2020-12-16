import style from 'styled-components';

export const Nav = style.div`
    color: white;
    position: fixed;
    height: 100%;
    background: ${({theme})=> theme.navColor};
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition:  1s;
    box-shadow: 10px 1px 30px white ;
    @media(max-width: 767px) {
        width: 100%;
        z-index: 2;
        right: -100%;
    }
    
    `;
export const SearchBar = style.input`
    margin-top: 30px;
    border-radius: 5px;
    border: none;
    height: 30px;
    width: 80%;
    font-size: 15px;
    text-align: center;
    :focus{
        border: none;
        outline: 0;
    }
`;


export const PullNavMobile = style.button`
   display: none;
    @media(max-width: 767px) {
        color: white;
        font-weight: bold;
        border: none;
        height: 30px;
        width: 90px;
        background: #0098b6;
        transform: rotate(270deg);
        z-index: 40;
        left: -6%;
        display: inline;
        margin-top: 20%;
        position:fixed;
        font-size: 18px;
    }
`;

export const Logo = style.img`
    height: 150px;
    width: 150px;
    margin-top: 20px;
    transition: 5s;
    transform: ${({theme})=>theme.Rotate};
`;


export const ListNavTitle = style.div`
    color: white;
    margin-top: 10px;
    font-size: 18px;
    width: 100%;
    margin-bottom: 10px;
    border-bottom: 1px solid white;
    overflow: hidden;
    :hover{
        font-weight: bold;
        border-bottom: 1.2px solid white;
    }
`;
export const ListItems = style.div`
    max-width: 80%;
    overflow: scroll;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 20px;
    ::-webkit-scrollbar{
        width: 2px;
    }
    ::-webkit-scrollbar-thumb {
        background: white; 
    }
`;

export const NavOptions = style.div`
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top: 1%;
    width: 70%;
    margin-bottom: 10px;
`;

export const Options = style.div`
    margin: 10px;
    background: ${({theme}) => theme.ButtonTheme};
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    text-align: center;
    box-shadow: 1px 1px 5px black;
    font-weight: bold;
    :hover{
        background: rgba(51,216,255,1);
        }
    `;

export const DarkM = style.img`
height: 20px;
width: 20px;
`;

export const NavRight = style.nav`
    position: fixed;
    z-index: 180;
    right: 0%;
    top: 2%;
    background: ${({theme})=> theme.navColor};
    border-radius: 5px;
    display: flex;
`;
export const IconRight = style.img`
    height: 30px;
    width: 30px;
    margin-left: 10px;
    background: white;
    margin: 10px;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px black;
    cursor: pointer;
    :hover{
    background: rgba(51,216,255,1);
    }
`;

export const IconListArrow =  style.img`
    height: 20px;
    width: 20px;
`;
