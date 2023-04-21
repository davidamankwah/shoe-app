//IMPORTS
import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/shop-context';
import { PRODUCTS } from '../product';

export const Checkout = () => {
  //useContext hook to consume the ShopContext context object
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext); 

  const [paymentMethod, setPaymentMethod] = useState('credit card');
  
  //handlePaymentMethodChange updates the paymentMethod state variable based on the selected radio button.
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  
  const handleCheckout = () => {
    checkout(); //calls the checkout function from the context 

    
    alert("successful"); //// alert message indicating that the order was successful.
  };

  return (
    <div>
      <h1>Checkout</h1>

      <div>
        <h2>Payment Information</h2>
        <div>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="credit card"
              checked={paymentMethod === 'credit card'}
              onChange={handlePaymentMethodChange}
            />
            Credit Card
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={handlePaymentMethodChange}
            />
            PayPal
          </label>
        </div>
      </div>

      <div>
        <h2>Order Summary</h2>
        <ul>
          {Object.entries(cartItems).map(([itemId, quantity]) => (
            <li key={itemId}>
              {PRODUCTS.find((product) => product.id === Number(itemId)).productName} x {quantity}
            </li>
          ))}
        </ul>
        <p>Total: ${getTotalCartAmount().toFixed(2)}</p>
      </div>
      <div> 
      <h2>Your details</h2>
      <label>
            First Name:
            <input
              type="text"
             
            />
            </label>
         
      </div>
      <br />      
      <div> 
      <label>
            Last Name:
            <input
              type="text"
            />
            </label>   
      </div>
      <br />  

      <div> 
      <label>
            Adress 1:
            <input
              type="text"
             
            />
            </label>   
      </div>
      <br />    

      <div> 
      <label>
            Adress 2:
            <input
              type="text"
             
            />
            </label>
      </div>
      <br />          

      <div> 
      <label>
            PhoneNumebr:
            <input
              type="text"
             
            />
            </label>
      </div>
      <br />          

      <button onClick={handleCheckout}>Place Order</button>

      <footer className="py-5 my-5 bg-dark">
      {/* footer that displays a copyright notice. */}
        <h5>© 2023 SHOES4U, Inc. All Rights Reserved</h5>
      </footer>
    </div>
  );
};
