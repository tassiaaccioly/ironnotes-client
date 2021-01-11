import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, 
    *:after, *:before,
    html, 
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", Helvetica, Arial, sans-serif;
    }

    html,
    body {
        background: ${({ theme }) => theme.body};
        transition: 1s;
    }

    #root{
        margin: 0;
        padding: 0;
        font-size: 10px;
        background: ${({ theme }) => theme.body};
        transition: 1s;
        }
    .wmde-markdown{
        ${
          "" /* font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; */
        }
        font-family: "Roboto", Helvetica, Arial, sans-serif;
        font-size: clamp(1rem, 1vw, 2rem);
            text-align: justify;
            margin-bottom: 6%;
            margin-top: 4%;
        @media(max-width: 767px) {
            font-size: 18px;
            margin-top: 10px;
            text-align: justify;
        }
    }
    .w-md-editor{
        width: 100%;
        ${
          "" /* font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; */
        }
        font-family: "Roboto", Helvetica, Arial, sans-serif;
        font-size: clamp(1rem, 1vw, 2rem);
    }

`;
