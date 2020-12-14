import React from 'react';

import {PopUp, ContainerPopUp} from '../NoteStyles/events';
function SearchPopUp() {

  function ClosePopUp() {
    document.getElementById("PopUpUnicValue").style.display = "none";
    document.getElementById("PopUpUnicValueOne").style.display = "none";
}
    return (
        <>
        <PopUp id="PopUpUnicValue" onClick={ClosePopUp}>
            
        </PopUp>
        </>
    )
}

export default SearchPopUp;