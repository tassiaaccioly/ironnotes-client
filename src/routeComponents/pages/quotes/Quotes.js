//dependencies
import { useEffect, useState, useContext, React } from "react";

//contexts
import api from "../../../apis/pagesApi";
import { AuthContext } from "../../../contexts/authContext";

//styled components
import { BlueButton } from "../../../components/styles/generalAssets";
import { PopUp, ContainerPopUp } from "../notestyles/events";
import {
  QuotesContainer,
  QuotesSmallContainer,
  QuoteH3,
  QuoteAuthor,
} from "../notestyles/quotestyles";

//components
import NewQuote from "./AddNewQuote";

function QuotesPopUp(props) {
  useContext(AuthContext);

  //State to store API response
  const [quote, setQuote] = useState({
    said_by: "",
    quote: "",
  });

  //State to regulate new requests from API
  const [randomQuote, setRandomQuote] = useState(false);

  //AddNewQuote State
  const [addQuote, setAddQuote] = useState(false);

  //useEffect para buscar dados na API
  useEffect(() => {
    async function fetchQuotes() {
      try {
        const response = await api.get("/quote");
        setQuote({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchQuotes();
  }, [randomQuote]);

  //function to request new quote from the API
  function handleClick() {
    setRandomQuote(!randomQuote);
  }

  //function to show or hide the AddNewQuote form
  function showForm() {
    setAddQuote(!addQuote);
  }

  function ClosePopUp() {
    props.setPopUp(!props.popUp);
  }

  return (
    <>
      <PopUp onClick={ClosePopUp}></PopUp>
      <ContainerPopUp>
        {!addQuote ? (
          <QuotesContainer>
            <QuoteH3>"{quote.quote}"</QuoteH3>
            <QuoteAuthor id="author">Said By: {quote.said_by}</QuoteAuthor>
            <QuotesSmallContainer>
              <BlueButton onClick={handleClick}>Random Quote</BlueButton>
              <BlueButton onClick={showForm}>Add a Quote</BlueButton>
            </QuotesSmallContainer>
          </QuotesContainer>
        ) : (
          <NewQuote addQuote={addQuote} setAddQuote={setAddQuote} />
        )}
      </ContainerPopUp>
    </>
  );
}

export default QuotesPopUp;
