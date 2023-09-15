import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import request from "superagent";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = async () => {
    try {
      if (!identity || !password) {
        throw new Error("Please fill in both email/registration number and password");
      }

      const response = await request
        .post("http://localhost:5000/login")
        .send({ identity, password });

      if (response.body.error === false) {
        toast.success("Login successful");

        const { role } = response.body; // Destructure the role from response.body
        console.log(role);

        if (role== 1){
          return navigate('/admin');
        }
        else if(role == 2){
          return navigate('/UniversityDashboard');
        }
        else{
          return navigate('/studentDashboard');
        }
        // navigate("/studentDashboard"); // Implement navigation based on user role
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during login");
    }
  };

  

  return (
    <div className="login-container">
      <h1>Sign In</h1>
      <div className="loginForm">
        <input
          type="text"
          name="identity"
          placeholder="Email or Registration Number"
          onChange={(e) => setIdentity(e.target.value)}
          className="signIn-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="signIn-input"
        />
        <div className="forgotpassword">
          <label>
            <p>
              Forgot password?{" "}
              <Link className="loginLink" to="/password-reset">
                Reset
              </Link>
            </p>
          </label>
        </div>
        <br />
        <button id="sign-button" type="submit" onClick={handleLogin}>
          Sign In
        </button>
      </div>
      <div className="separator"></div>
      <p>
            Don't have an account?{" "}
            
          </p>
      <div className="buttons">
        <div className="create-account-button">
        <Link className="loginLink" to="/signUp">
            <button className="student-button">Create Account as Student</button>
            </Link>
        </div>
        <div className="register-institution-button">
          <Link  to="/registration">
          <button className="institution-button">
            Register your Institution 
          </button>
            </Link>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default Login;
