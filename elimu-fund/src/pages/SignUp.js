import React, { useState } from "react";
import "../signUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    registration_number: "",
    email: "",
    password: "",
    cf_psd: "",
    phone_number: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Email validation using regex
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!formData.email.match(emailRegex)) {
      toast.error("Invalid email address");
      return;
    }

    // Check if the password and confirm password fields match
    if (formData.password !== formData.cf_psd) {
      toast.error("Password and Confirm Password do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/students/signUp",
        formData
      );

      if (response.data.error === false) {
        toast.success("Sign-up successful");
        navigate("/studentDashboard");
      } else {
        toast.error("Something is missing!");
      }
    } catch (error) {
      toast.error("An error occurred during registration");
    }
  };

  return (
    <div className="signUp-form-container">
      
      <form id="signUp-form" onSubmit={handleSubmit}>
      <center>
          <h1>Sign up</h1>
        </center>
        <label className="signUp-label" htmlFor="first_name">
          First Name
          <input
            type="text"
            id="first_name"
            name="first_name"
            required
            value={formData.first_name}
            onChange={handleChange}
            placeholder="First name"
            className="signUp-input"
          />
        </label>

        <label className="signUp-label" htmlFor="last_name">
          Last Name
          <input
            type="text"
            id="last_name"
            name="last_name"
            required
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Last name"
            className="signUp-input"
          />
        </label>

        <label className="signUp-label" htmlFor="registration_number">
          Student ID
          <input
            type="text"
            id="registration_number"
            name="registration_number"
            required
            value={formData.registration_number}
            onChange={handleChange}
            placeholder="Student ID"
            className="signUp-input"
          />
        </label>

        <label className="signUp-label" htmlFor="phone_number">
          Phone Number
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            required
            value={formData.phone_number}
            onChange={handleChange}
            placeholder="Phone number"
            className="signUp-input"
          />
        </label>

        <label className="signUp-label" htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="signUp-input"
          />
        </label>

        <label className="signUp-label" htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="signUp-input"
          />
        </label>

        <label className="signUp-label" htmlFor="cf_psd">
          Confirm Password
          <input
            type="password"
            id="cf_psd"
            name="cf_psd"
            required
            value={formData.cf_psd}
            onChange={handleChange}
            placeholder="Confirm password"
            className="signUp-input"
          />
        </label>

        <label className="agree">
          <input type="checkbox" name="agree" className="tick" required />
          I agree to the{" "}
          <Link className="Link" to="/terms">
            Terms
          </Link>{" "}
          and{" "}
          <Link className="Link" to="/conditions">
            Conditions
          </Link>{" "}
        </label>
        <button id="signUpButton" type="submit">
          Sign up
        </button>
        <p>Have an account?<Link className="Link" to="/login">  Login
       </Link></p>
       
      </form>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default SignUp;
