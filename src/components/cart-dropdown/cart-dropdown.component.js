import React from "react";
import { useSelector } from "react-redux";
import './cart-dropdown.styles.scss';
import CartItem from "../cart-item/cart-item.component.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";

import { useNavigate } from "react-router-dom";

const CartDropdown = ()=>
{

    const cartItems = useSelector(selectCartItems);
     const  navigate= useNavigate();
     


     const goToCheckoutHandler = ()=>
     {
         navigate('/checkout');   
     }
      
    return (
        <>
         <div className="cart-dropdown-container">
              <div className="cart-items">
                { cartItems.length ? (
                  cartItems.map((item)=>(<CartItem  key={item.id} cartItem={item}/>))
                ): (
                    <span className="empty-message">Your cart is empty</span>
                )
                }
              </div>
              <button className="button" onClick={goToCheckoutHandler}>GO TO CHECKOUT</button>
            </div>
          
        </>
    )
}
export default CartDropdown;