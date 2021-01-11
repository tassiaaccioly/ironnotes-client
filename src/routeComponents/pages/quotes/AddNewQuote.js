//dependencies
import { React, useState, useContext } from "react";

//contexts
import api from "../../../apis/pagesApi";
import { AuthContext } from "../../../contexts/authContext";

//styled components
import { BlueButton } from "../../../components/styles/generalAssets";
import { InputForm } from "../notestyles/events";
import {
  QuotesContainer,
  QuotesSmallContainer,
} from "../notestyles/quotestyles";

function NewQuote(props) {
  useContext(AuthContext);

  const [quote, setQuote] = useState({
    said_by: "",
    quote: "",
  });

  function handleChange(event) {
    setQuote({ ...quote, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post("/quote", quote);
    } catch (err) {
      console.error(err);
    }
  }

  function backTrack() {
    props.setAddQuote(!props.addQuote);
  }

  return (
    <>
      {props.addQuote ? (
        <QuotesContainer>
          <InputForm
            placeholder="Who said it??"
            type="text"
            name="said_by"
            value={quote.said_by}
            onChange={handleChange}
          />
          <InputForm
            id="quote"
            placeholder="What did they say??"
            type="text"
            name="quote"
            value={quote.quote}
            onChange={handleChange}
          />
          <QuotesSmallContainer id="buttons">
            <BlueButton onClick={handleSubmit} type="submit">
              Save Quote
            </BlueButton>
            <BlueButton onClick={backTrack}>Back to Random Quote</BlueButton>
          </QuotesSmallContainer>
        </QuotesContainer>
      ) : (
        <></>
      )}
    </>
  );
}

export default NewQuote;
