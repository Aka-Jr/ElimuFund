import React from 'react';
import '../signup-campaign.css';

const Registration = () => {
    return(
        <div className="Signup-container">
           <center><h1>Registration your institution</h1></center> 
        <form >
        <div className="form-group">
          <label htmlFor="Name">Institution name</label>
          <input type="text" id="institution-name" name="institution-name" required />
        </div>
        <div className="form-group">
          <label htmlFor="Name">Institution Email</label>
          <input type="email" id="institution-Email" name="institution-Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="Name">Your name</label>
          <input type="text" id="your-name" name="your-name" required />
        </div>
        <div className="form-group">
          <label htmlFor="name">Your position</label>
          <input type="text" id="Email" name="Email" required/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="psd" name="psd" required/>
        </div>
        <div className="form-group">
          <label htmlFor="Email">Confirm Password</label>
          <input type="password" id="c_psd" name="c_psd" required/>
        </div>
        <div className="form-group">
        <label class="agree">
                <input type="checkbox" name="agree" class="tick" required />I agree to the <a href="#">Terms</a> and <a href="#">conditions</a>
            </label><br/>
        </div>
        
        
          <button type="submit">Reqister</button>
   
      </form>
    </div>
  );
}

export default Registration;