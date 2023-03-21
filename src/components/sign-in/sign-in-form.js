import React, {useState} from "react"
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";
import {signInWithGooglePopup,  signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils.js'


const defaultForm = {

    email:"",
    password:"",
  
}

const SignInForm =()=>
{
     const [formFields, setFormFields]= useState(defaultForm);
     const { email, password } = formFields;

     const signInWithGoogle = async () => {

        await  signInWithGooglePopup();
     
      
    }

     const handleSubmit= async (event)=>
     {
         event.preventDefault();
          
         try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
          

            setFormFields({email:"",password:""})
         }catch (error) {
            switch(error.code)
            {
               case 'auth/wrong-password':
                alert('Please enter correct password'); 
                break; 

               case 'auth/user-not-found':
                alert ('no user associated with this email');
                break;

                default:
                     console.log(error)
            }
            
         }
       
       
     };

     const handleChange=(event)=>
     {
         const {name,value}=event.target;
         setFormFields({...formFields, [name]:value});

     };

    return (
        <>
            <div className="sign-in-container">

              <h2>Already have an account?</h2>
              <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
               

                   <FormInput label = "Email" type="email" required onChange={handleChange} name="email" value={email}/>

                   <FormInput label = "Password" type="password" required onChange={handleChange} name="password" value={password}/>
                 
                   <div className="btn-container">
                   <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType= "google" onClick={signInWithGoogle}>Google sign in</Button>
                   </div>
         
                </form>
            </div>
        </>
    )
}

export default  SignInForm;