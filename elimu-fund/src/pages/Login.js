import React,{useState} from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';

import request from 'superagent';


//function to handle log in


const Login = () => {

  const [registration_number, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    request
      .post('http://localhost:5000/students/login')
      .send({ registration_number, password })
      .then(response => {
        if (response.body.error === false) {
          setMessage('Login successful');


          const token = response.body.token;

        // Store the token in localStorage or a secure storage mechanism
        localStorage.setItem('token', token);




          //route to other pages with session
          navigate('/faqs');
        } else {
          setMessage('Invalid credentials');
          //res.status(401).send('Authentication failed');
        }
      })
          .catch(error => {
        console.error(error);
        setMessage('An error occurred during login');
      });
  };
//* function finished*** */
    return(

    <div className="login-container">
      <h1>Sign In</h1>
    
        <div className="loginForm">
        <input
          type="text"
          name="registration_number"
          placeholder="registration Number"
          value={registration_number}
          onChange={e => setRegistrationNumber(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div className='forgotpassword'>
        <label>
          <p>Forgot password?</p>
        </label>
        <p> Don't have account?  <Link className=" nav-link" to="/signUp">SignUp</Link></p>
        </div>
        <br />


        <button type="submit" onClick={handleLogin}>Sign In</button>
        <p>{message}</p>
        </div>
   

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