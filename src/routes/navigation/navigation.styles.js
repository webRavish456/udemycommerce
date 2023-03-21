import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "./navigation.css";

export const NavigationContainer = styled.div `
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const LogoContainer = styled(NavLink)`
  
     height:100%;
     width:70px;
     padding:25px;
`

export const NavLinksContainer = styled.div`

  width:90%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:flex-end;

  @media screen and (max-width:500px)
  {
      display:none;
  }
`
export const Navlink= styled(NavLink)`
    
     padding:10px 15px;
     cursor:pointer;
 `
 export const Menu = styled.div`

   display:none;
   button{
     background:none;
     border:none;
     cursor:pointer;
   }
    @media screen and (max-width:500px)
    {
          width:90%;
          height:100%;
          display:flex;
          align-items:center;
          justify-content:flex-end;
          margin-top:-60px;
          padding-bottom:30px;
    }

 `