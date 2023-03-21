import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import { NavigationContainer,LogoContainer, NavLinksContainer ,Navlink, Menu } from "./navigation.styles.js"; 
import MenuIcon from '@mui/icons-material/Menu';

import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { selectCurrentUser } from "../../store/user/user.selector.js";

import {selectIsCartOpen} from "../../store/cart/cart.selector";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { useSelector } from "react-redux";

const Navigation=()=>
  {
      const currentUser = useSelector(selectCurrentUser);

      const isCartOpen = useSelector(selectIsCartOpen);
     
     const [showMediaIcons,setShowMediaIcons] = useState(true);

     return (
      <>
      
         <NavigationContainer>
         <LogoContainer className='logo-container' to="/">
         <CrownLogo className='logo'/>
         </LogoContainer>
      
       

      <NavLinksContainer>

            <Navlink to='/shop'>
                SHOP
            </Navlink>
            {
                 currentUser ? (
                    <Navlink as='span' onClick={signOutUser}>SIGN OUT</Navlink>
                 ): (<Navlink  to='/auth'>
                      SIGN IN
                     </Navlink>
            )}
           <CartIcon/>
           {isCartOpen &&  <CartDropdown/> } 
         </NavLinksContainer>
      
         </NavigationContainer>
         <Menu>
           <button onClick={()=>setShowMediaIcons(!showMediaIcons)}><MenuIcon/></button> 
         </Menu>
         <div className={!showMediaIcons ? "  mobile-menu-link" :  "menu-link"} >
       <ul>
        <li>
        <Navlink  to="/shop" onClick={()=>setShowMediaIcons(!showMediaIcons)}>SHOP</Navlink>
        </li>
        <li  onClick={()=>setShowMediaIcons(!showMediaIcons)}>
        {
                 currentUser ? (
                    <Navlink as='span' onClick={signOutUser}>SIGN OUT</Navlink>
                 ): (<Navlink  to='/auth'>
                      SIGN IN
                     </Navlink>
            )}
        </li>
        <li>
           <CartIcon  />
           {isCartOpen &&  <CartDropdown/> } 
        </li>
       </ul>
       </div> 
         
          <Outlet/>
       
      </>
     )
  }

export default Navigation