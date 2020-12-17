import { useEffect, useState, useContext, React } from "react";
import { Link } from "react-router-dom";
import api from "../../../../apis/pagesApi";
import BlueBtn from "../../../../components/btns/BlueBtn";
import { AuthContext } from "../../../../contexts/authContext";

import { PopUp, ContainerPopUp } from "../NoteStyles/events";
import "./Quote.css";

function QuotesPopUp(props) {
  function ClosePopUp() {
    document.getElementById("QuotesPopUp").style.display = "none";
    document.getElementById("QuotesPopUpOne").style.display = "none";
  }

  const authContext = useContext(AuthContext);

  //State para puxar os quotes
  const [quote, setQuote] = useState({
    said_by: "",
    quote: "",
  });

  const [random, setRandom] = useState(false);

  //useEffect para buscar dados na API
  useEffect(() => {
    async function fetchQuotes() {
      try {
        const response = await api.get("/quote");
        console.log(response);
        setQuote({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchQuotes();
  }, [random]);

  function handleClick() {
    setRandom(!random);
  }

  return (
    <>
      <PopUp id="QuotesPopUp" onClick={ClosePopUp}></PopUp>
      <ContainerPopUp id="QuotesPopUpOne" closeButton>
        <div>
          <h3>{quote.quote}</h3>
          <p>{quote.said_by}</p>
        </div>
        <BlueBtn onClick={handleClick}>Random Quote</BlueBtn>
        <BlueBtn>
          <Link to=""> Add a Quote </Link>
        </BlueBtn>
      </ContainerPopUp>
    </>
  );
}

export default QuotesPopUp;
