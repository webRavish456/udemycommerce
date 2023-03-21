import React from "react";
import { useDispatch } from "react-redux";
import { Route, Routes} from "react-router-dom";
import './App.css';
import  {useEffect} from 'react';
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigaton.component";
import AuthIn from "./routes/authentication/authentication.component.js";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { onAuthStateChangedListener,  createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";

function App ()
{
   
   const dispatch = useDispatch();

   useEffect(()=>{

      const unsubscribe= onAuthStateChangedListener((user)=>{
      
          if(user) {
              createUserDocumentFromAuth(user);
          }
  
          dispatch(setCurrentUser(user));
      })
       
       return unsubscribe;
    },[])

   return (
    <>
       <Routes>
       <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='auth' element={<AuthIn/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        </Route>
       </Routes>
    </>
   )

}

export default App;
