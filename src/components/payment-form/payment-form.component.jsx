import { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import {useSelector} from "react-redux";
import {selectCartTotal}  from '../../store/cart/cart.selector';
import {selectCurrentUser} from "../../store/user/user.selector";

import Button  from "../button/button.component";
import { PaymentFormContainer, FormContainer } from './payment-form.styles';

const PaymentForm = ()=>
{
    
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const  [isProcessingPayment, setIsProcessingPayment] = useState(false);


    const paymentHandler = async (e) =>
    {
        e.preventDefault();

        if(!stripe || !elements)
        {
            return;
        }
  
        setIsProcessingPayment(true);

       const response = await fetch('https://boisterous-faun-a52394.netlify.app/.netlify/functions/create-payment-intent', {
        method: 'post',
        headers : {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({amount : amount *100}),
       }).then(res=>res.json());
          
   
       const {paymentIntent : {client_secret}} = response;
       console.log(client_secret);
      
       const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method : {
            card: elements.getElement(CardElement),

            billing_details: {
                name: currentUser ? currentUser.displayname : "Guest" ,
            }
        }
       });


       setIsProcessingPayment(false);
       if(paymentResult.error)
       {
           alert(paymentResult.error);
           console.log(JSON.stringify(paymentResult.error));
       } else {
        if(paymentResult.paymentIntent.status === 'succeeded')
        {
             alert('Payment Successful');
          
        }

       }
       
    };

     return (
        <>
            <PaymentFormContainer>
             <FormContainer onSubmit={paymentHandler}>
             <h2>Credit Card Payment: </h2>
             <CardElement/>
                <Button isLoading={isProcessingPayment} buttonType= "inverted" style={{marginTop:"30px"}} >Pay now</Button>
             </FormContainer>
            </PaymentFormContainer>
    

        </>
     )
}
export default PaymentForm;
