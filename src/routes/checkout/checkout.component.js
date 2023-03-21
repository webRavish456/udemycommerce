import React from "react";
import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import Checkoutitem from "../../components/checkout-item/checkout-item.component";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PaymentForm from "../../components/payment-form/payment-form.component";


const Checkout=()=>
{
      const cartItems = useSelector(selectCartItems);
      const  cartTotal = useSelector(selectCartTotal);
       return (
        <>
            <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
             
                {
                    cartItems.map((cartItem)=>
                    {

                        return (
                            <>
                               <Checkoutitem key = {cartItem.id} cartItem= {cartItem}/>
                            </>
                        )
                    })
                }
                
              
                <span className="total">Total:  <CurrencyRupeeIcon className="currency"/>{cartTotal}</span>
                <PaymentForm/>
             
                </div>
        </>
       )
}
export default Checkout;
