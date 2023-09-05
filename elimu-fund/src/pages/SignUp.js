import React from 'react';
import '../App.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return(
        <div className="Signup-container">
           <center><h1>Sign up</h1></center> 
        <form >
        <div className="form-group">
          <label htmlFor="Name">First Name</label>
          <input type="text" id="first-name" name="first-name" required />
        </div>
        <div className="form-group">
          <label htmlFor="Name">Surname</label>
          <input type="text" id="surname" name="surname" required />
        </div>
        <div className="form-group">
          <label htmlFor="Name">Student ID</label>
          <input type="text" id="studentId" name="studentId" required />
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input type="email" id="Email" name="Email" required/>
        </div>
        <div className="form-group">
          <label htmlFor="Email">Password</label>
          <input type="password" id="psd" name="psd" required/>
        </div>
        <div className="form-group">
          <label htmlFor="Email">Confirm Password</label>
          <input type="password" id="c_psd" name="c_psd" required/>
        </div>
        <div className="form-group">
        <label class="agree">
                <input type="checkbox" name="agree" class="tick" required />I agree to the <Link to="#">Terms and Conditions</Link>
            </label><br/>
        </div>
        
        
          <button type="submit">Sign up</button>
   
      </form>
      <Footer />
    </div>
  );
}

export default SignUp;