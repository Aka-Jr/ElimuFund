import React, { useState } from "react";
import '../App.css';
import {Link} from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

    // const PaymentInfo = () => {

    //   alert("Dear donor Payment related messege has been sent to your phone number. Please, check your messege.");
  
    // }


const Payment = () => {

  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const handlePaymentOptionClick = (option) => {
    // Handle payment option click logic here
    console.log(`${option} clicked`);
  };

  return (

    <>

    <div className="Payment-container">
      <div className="Payment-option">
        <button className="paymentButton" onClick={() => handlePaymentOptionClick('Mpesa')}>
          <img className="paymentMethod" src="./mpesa.png" alt="Mpesa" />
        </button>
        <button className="paymentButton" onClick={() => handlePaymentOptionClick('Tigopesa')}>
          <img className="paymentMethod" src="./tigopesa.png" alt="Tigopesa" />
        </button>
        <button className="paymentButton" onClick={() => handlePaymentOptionClick('AirtelMoney')}>
          <img className="paymentMethod" src="./airtel.png" alt="AirtelMoney" />
        </button>
        <button className="paymentButton" onClick={() => handlePaymentOptionClick('TTCLpesa')}>
          <img className="paymentMethod" src="./TTCL.jpeg" alt="TTCLpesa" />
        </button>
        <button className="paymentButton" onClick={() => handlePaymentOptionClick('Halopesa')}>
          <img className="paymentMethod" src="./halopesa.png" alt="Halopesa" />
        </button>
        {showMoreOptions && (
          <>
            <button className="paymentButton" onClick={() => handlePaymentOptionClick('CRDd')}>
              <img className="paymentMethod" src="./CRDB.jpeg" alt="CRDB" />
            </button>
            <button className="paymentButton" onClick={() => handlePaymentOptionClick('NMB')}>
              <img className="paymentMethod" src="./NMB.jpeg" alt="NMB" />
            </button>
            <button className="paymentButton" onClick={() => handlePaymentOptionClick('NBC')}>
              <img className="paymentMethod" src="./NBC.png" alt="NBC" />
            </button>
          </>
        )}
        <button className="seeMoreButton" onClick={() => setShowMoreOptions(!showMoreOptions)}>
          {showMoreOptions ? <FaAngleLeft  color="white" size={30}/>  : <FaAngleRight color="white" size={30}/>}
        </button>
    </div>
           <center><h1>Payment details</h1></center> 


        <form >
            <label 
            htmlFor="Name"
            className="payment-label"
            >Name
                  <input
                  type="text"
                  id="Name"
                  name="Name"
                  placeholder="(optional)" 
                  className="payment-input"
                  />
            </label>
               <label 
               htmlFor="Email"
               className="payment-label"
               >Email
                      <input
                          type={"email"}
                          className="payment-input"
                          placeholder="enter email" 

                          style={
                            {
                              gap: '5px',
                              margin: '5px',
                              display: 'block',
                              width: '400px',
                              height: '50px',
                              borderRadius:' 5px',
                              textAlign: 'center',
                              fontSize: '16px',
                            }
                          }
                      />
               </label>
               <label htmlFor="phoneNo"
               className="payment-label"
               >Phone No
                      <input
                        type="text"
                        id="phoneNo"
                        name="phoneNo"
                        className="payment-input"
                        placeholder="enter phone number" 
                        />
        </label>
 
             <label
              htmlFor="amount"
              className="payment-label"
             
             >Amount
                  <input
                      type="text"
                      id="amount"
                      name="amount"
                      className="payment-input"
                      placeholder="enter amount" 
                    />
             
             </label>
              
          <label 
          htmlFor="targetPerson"
          className="payment-label"
          >Target Person
                      <input
                        type="text"
                        id="targetPerson"
                        name="targetPerson"
                        placeholder="(optional)" 
                    
                        className="payment-input"
                      />
          </label>
          <p className="makepayment-buttons">
          <button type="submit" className="makepayment-button">Make Payment</button>
          <Link to="/"><button   className="makepayment-cancel-button">Cancel</button></Link>
          {/* onClick={PaymentInfo()} */}
      </p> 
        
           
      </form>
    </div>
    </>
  );
}

export default Payment;