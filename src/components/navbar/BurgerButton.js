import React from "react";
import { BurgerBtn } from "../styles/navbarstyles";

const BurgerButton = (props) => {
  return (
    <BurgerBtn onClick={props.OnClick}>
      <span />
    </BurgerBtn>
  );
};

export default BurgerButton;
