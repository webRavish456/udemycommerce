import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import './product-card.styles.scss'
import Button from "../button/button.component";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const ProductCard=({product})=>
{
    const {name, price, imageUrl}=product;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

     const addProductToCart=()=> dispatch(addItemToCart(cartItems, product));
     
    return (
        <>
            <div className="product-card-container">
        <img src={imageUrl}  alt = {`${name}`}/>
        <div className="footer">
            <span className="name">{name}</span>
            <CurrencyRupeeIcon style={{position:"relative",top:"-3px"}}/>
            <span className="price">{price*45}</span>
        </div>
        <Button buttonType='inverted' onClick={addProductToCart}>Add to Cart</Button>
       </div>
        </>
    )
    
}

export default ProductCard;