import { useEffect, useState, useContext, React } from "react";
import { Link } from "react-router-dom";
import api from "../../../../apis/pagesApi";
import BlueBtn from "../../../../components/btns/BlueBtn";
import { AuthContext } from "../../../../contexts/authContext";

import { PopUp, ContainerPopUp } from "../NoteStyles/events";
import "./quote.css";

function SearchPopUp(props) {
  function ClosePopUp() {
    document.getElementById("QuotesPopUp").style.display = "none";
    document.getElementById("QuotesPopUpOne").style.display = "none";
  }

  const authContext = useContext(AuthContext);

  //State para puxar os quotes
  const [quote, setQuote] = useState([
    {
      said_by: "",
      quote: "",
    },
  ]);

  //useEffect para buscar dados na API
  useEffect(() => {
    async function Quotes() {
      try {
        const response = await api.get("/quote");
        setQuote([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    Quotes();
  }, []);

  return (
    <>
      <PopUp id="QuotesPopUp" onClick={ClosePopUp}></PopUp>
      <ContainerPopUp id="QuotesPopUpOne" closeButton>
      <div></div>
        <BlueBtn>
          <Link to=""> Random Quote </Link>
        </BlueBtn>
        <BlueBtn>
          <Link to=""> Add a Quote </Link>
        </BlueBtn>
      </ContainerPopUp>
    </>
  );
}

export default SearchPopUp;
