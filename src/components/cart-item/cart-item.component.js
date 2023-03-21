import React from "react"
import "./cart-item.styles.scss";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const CartItem=({cartItem})=>
{
    const {name, imageUrl, price, quantity} = cartItem;

    return(
        <>
         <div className="cart-item-container">
        <img src={imageUrl} alt= {`$ {name}`}/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x  <CurrencyRupeeIcon style={{position:"relative",top:"3px", fontSize:"18px"}}/>{price*45}</span>
            </div>
          
         </div>
        </>
    )
}

export default CartItem;