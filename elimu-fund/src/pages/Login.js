import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
const Login = () => {
    return(

    <div className="login-container">
      <h1>Sign In</h1>
      <form >
        <div className="loginForm">
        <input
          type="text"
          name="Email"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
        />
        <div className='forgotpassword'>
        <label>
          <p>Forgot password?</p>
        </label>
        <p> Don't have account?  <Link className=" nav-link" to="/signUp">SignUp</Link></p>
        </div>
        <br />
        <button type="submit">Sign In</button>
        </div>
      </form>

      <div className="separator"></div>
      <div className='buttons'>
      <div className="create-account-button">
        <button className="student-button">Create Account as Student</button>
      </div>
       <div className="register-institution-button">
        <button className="institution-button">Register your Institution</button>
      </div>
      </div>
      

    </div>
    );
}

export default Login;