import React, { useState } from "react";
import "../App.css";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import request from "superagent";
import axios from "axios";
import e from "cors";

const SignUp = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [registration_number, setRegistration_number] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhone_number] = useState();
  const [cf_psd, setCPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCPasswordChange = (event) => {
    setCPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the password and confirm password fields match
    if (password === cf_psd) {
      // Passwords match, you can proceed with your registration logic
      setMessage("Registration successful!");
    } else {
      // Passwords do not match
      setMessage("Password and Confirm Password do not match.");
    }
  };

  const navigate = useNavigate();

  const handleSignUp = () => {
    console.log("sign up reached");
    setPhone_number("255782835133");

    console.log("sign up again");

    axios
      .post("http://localhost:5000/students/signUp", {
        first_name,
        last_name,
        registration_number,
        email,
        password,
        phone_number,
      }).then((response) => {
        console.log(response);

        if (response.data.error == false) {
          console.log("success");
          setMessage("Sign-up successful");
          // const token = response.body.token;
          // localStorage.setItem("token", token);
          navigate("/faqs");
        } else {
          setMessage("Something is missing!");
        }
      })
      .catch((error) => {
        console.log(error);
        setMessage("An error occurred during registration");
      });
  };

  return (
    <div className="Signup-container">
      <center>
        <h1>Sign up</h1>
      </center>
      <form>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            required
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Surname</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            required
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="registration_number">Student ID</label>
          <input
            type="text"
            id="registration_number"
            name="registration_number"
            required
            value={registration_number}
            onChange={(e) => setRegistration_number(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="c_psd">Confirm Password</label>
          <input
            type="password"
            id="c_psd"
            name="cf_psd"
            required
            value={cf_psd}
            onChange={handleCPasswordChange}
          />
        </div>
        <div className="form-group">
          <label className="agree">
            <input type="checkbox" name="agree" className="tick" required />I
            agree to the <Link to="#">Terms and Conditions</Link>
          </label>
          <br />
        </div>
        <button type="button" onClick={handleSignUp}>
          Sign up
        </button>
      </form>
      <p>{message}</p>
      <Footer />
    </div>
  );
};

export default SignUp;
