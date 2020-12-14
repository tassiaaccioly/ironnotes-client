//import React from 'react';
//import {Link} from 'react-router-dom';
//
//import {PopUp, ContainerPopUp} from '../NoteStyles/events';
//function SearchPopUp(props) {
//
//  function ClosePopUp() {
//    document.getElementById("SearchBarPopUp").style.display = "none";
//    document.getElementById("SearchBarPopUpOne").style.display = "none";
//}
//    console.log(props.titles)
//    return (
//        <>
//        <PopUp id="SearchBarPopUp" onClick={ClosePopUp}>
//            
//        </PopUp>
//        <ContainerPopUp id="SearchBarPopUpOne">
//            <input style={{width: "100%", height:"4%", marginTop:"0%"}}></input>
//    {props.titles.map((el, i)=>{
//        return <Link to={`/page/${el._id}`} onClick={ClosePopUp}> <div key={i}>{el.title}</div></Link>
//    })}
//        </ContainerPopUp>
//        </>
//    )
//}
//
//export default SearchPopUp;