import React, { useState } from "react";
import '../App.css';

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
          {showMoreOptions ? "See Less" : "See More"}
        </button>
    </div>
           <center><h1>Payment details</h1></center> 
        <form >
            <div className="payment-details">
        <div className="form-group">
           
                <div className="label-wrapper">
                <label htmlFor="Name">Name</label>
                </div>

                <div className="input-wrapper">
                            <input
                        type="text"
                        id="Name"
                        name="Name"
                        placeholder="(optional)" // Placeholder text
                        style={{ textAlign: "center" }} // Center-align the placeholder text
                    />
                </div>
         
          
        </div>
        <div className="form-group">
        <div className="label-wrapper">
                <label htmlFor="Email">Email</label>
                </div>

            <div className="input-wrapper">
                        <input
                    type="email"
                    id="Email"
                    name="Email"
                />
            </div>
          
         
        </div>
        <div className="form-group">

        <div className="label-wrapper">
        <label htmlFor="phoneNo">Phone No</label>
                </div>

            <div className="input-wrapper">
            <input
            type="text"
            id="phoneNo"
            name="phoneNo"
            />
            </div>
         
          
        </div>
        <div className="form-group">

        <div className="label-wrapper">
        <label htmlFor="amount">Amount</label>
                </div>

            <div className="input-wrapper">
            <input
            type="text"
            id="amount"
            name="amount"
          />
            </div>
          
         
          </div>
          <div className="form-group">
            
          <div className="label-wrapper">
          <label htmlFor="targetPerson">Target Person</label>
                </div>

            <div className="input-wrapper">
            <input
            type="text"
            id="targetPerson"
            name="targetPerson"
            placeholder="(optional)" 
            style={{ textAlign: "center" }} // Center-align the placeholder text
          />
            </div>
          
          </div>
          <p>
          <button type="submit" >Make Payment</button>
          {/* onClick={PaymentInfo()} */}
      </p>  
            </div>  
      </form>
    </div>
  );
}

export default Payment;