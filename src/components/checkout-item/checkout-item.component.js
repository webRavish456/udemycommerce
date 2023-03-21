import React  from "react";
import "./checkout-item.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "../../store/cart/cart.action";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Checkoutitem=({cartItem})=>
{
    const {name, imageUrl, price, quantity} = cartItem;
     
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    
     const clearItemHandler=()=>dispatch(clearItemFromCart(cartItems, cartItem));
     const addItemHandler=()=>dispatch(addItemToCart(cartItems, cartItem));
     const removeItemHandler=()=>dispatch(removeItemFromCart(cartItems, cartItem));
      
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt= {`$ {name}`}/>
            </div>
            <span className="name"> {name}</span>
            <span className="quantity">
              <div className="arrow" onClick={removeItemHandler}>
                 &#10094;
              </div>
              <span className="value">{quantity}</span>
              <div className="arrow" onClick={addItemHandler}>
                &#10095;
              </div>
            </span>
            <CurrencyRupeeIcon style={{position:"relative",top:"-3px"}}/>
            <span className="price">{price*45}</span>
            <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default Checkoutitem;