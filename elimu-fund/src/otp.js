import React, { useState } from "react";
import './App.css';

const OTPbox = () => {


    const [otp, setOtp] =useState( new Array(5). fill(""));
    
    const handleChange = (element, index) =>{
         if(isNaN(element.value)) return false;
         setOtp([...otp.map((d,idx) => (idx === index)? element.value : d)]);
    
         if(element.nextSibling){
            element.nextSibling.focus();
         }

    };


    return(
        // <>
        <div>
        <header title="make otp box"/>
        <div className="row">
            <div className="container">
                <h2>Verify your institution Registration</h2>
                <p>We sent you a code to the institution email  you provided  
                    please enter the code below</p>

                    {/* <p>Enter code {otp.join("")}</p> */}

                    

{
    otp.map((data,index) => {
        return (
           
        <input 
        className="otp-field"
        type="text"
        name="otp"
        maxLength="1"
        key={index}
        value={data}
        onChange={e => handleChange (e.target, index)}
        onFocus={e => e.target.select()}
        />
            
        );
    })

}

{/* <p>Enter code {otp.join("")}</p> */}
<h4>Didn’t get code? <span className="link">Resend</span></h4>
<p>
    <button className="btn">
        verify
    </button>
</p>

            </div>
        </div>
        {/* </> */}
     </div>
    )
    
}
export default OTPbox;