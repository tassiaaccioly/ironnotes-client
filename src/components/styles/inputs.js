import style from "styled-components";

export const Form = style.form`
    margin: 0 auto;
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media (max-width: 576px) {
      width: 80vw;
    }
`;

export const FormGroup = style.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 1rem 0;
`;

export const Label = style.label`
    color: ${({ theme }) => theme.text};
    width: 100%;
    margin: 0 0 8px;
    font-size: 1.1rem;
    text-align: left;
`;

export const Input = style.input`
    font-size: 1.1rem
    line-height: 2;
    width: 100%;
    border: none;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    border: 2px solid ${({ theme }) => theme.text};

    :focus {
      outline: none;
      border: 2px solid ${({ theme }) => theme.ButtonTheme};
    }
`;

export const InvalidFeedback = style.p`
    color: rgb(241, 57, 57);
    font-size: .9rem;
    font-weight: 500;
    margin: 5px auto 0;
    width: 80%;
`;

//Check Input

export const CheckDiv = style.div`
    max-width: 13%;
    display: flex;
    align-items: center;
    margin: 0 1rem;
`;

export const CheckLabel = style.label`
    font-size: 1.1rem;
    color: ${({ theme }) => theme.text};
    margin: 0.5rem;
`;

export const CheckInputBar = style.input`
    z-index: 100; 
    color: ${({ theme }) => theme.FixColor};
`;

//File Input

export const FInput = style.input.attrs({
  type: "file",
})`
    position: absolute;
    left: 36%;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 600px, 20px, 120px);
    border: 0;
    color: ${({ theme }) => theme.text};

    :focus {
      outline: none;
      border: 1px solid transparent;
    }
`;

export const FileLabel = style.label`
    font-size: .9rem;
    border: 2px solid #ccc;
    border-radius: 8px;
    display: inline-block;
    padding: 7px 12px;
    text-align: center;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
`;
