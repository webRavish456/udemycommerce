import React from "react";
import "./button.styles.scss";
import styled from "styled-components";
import {SpinnerContainer} from "../spinner/spinner.styles"
export const BUTTON_TYPE_CLASSES = {

    google: "google-sign-in",
    inverted:"inverted"
}

const ButtonSpinner= styled(SpinnerContainer)`
  width:30px;
  height:30px;
  margin-Top:10px;
`


const Button =({children,buttonType, isLoading, ...otherProps})=>
{

    return (
     
        <button className={`button-container  ${BUTTON_TYPE_CLASSES[buttonType]}`} disabled={isLoading} {...otherProps}> {isLoading ?  <ButtonSpinner/> : children } </button>
      
    )
}
export default Button;