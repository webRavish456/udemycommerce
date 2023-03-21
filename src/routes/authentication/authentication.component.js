import React from "react"
import SignUpForm from "../../components/sign-up/sign-up-form.js";
import SignInForm from "../../components/sign-in/sign-in-form.js";
import "./authentication.styles.scss";

const AuthIn=()=>
{

     return (
        <>

         <div className="authentication-container">
      
          <SignInForm/>
           <SignUpForm/>
         </div>
        </>
     )
}

export default AuthIn;