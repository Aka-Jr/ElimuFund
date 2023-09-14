import React, { useState } from "react";
import "../signUp.css";
import { Link, useNavigate } from "react-router-dom";
import request from "superagent";
import axios from "axios";
import e from "cors";
import { FaImage } from "react-icons/fa";
import {MdCloudUpload, mdCloudupload, MdDelete} from 'react-icons/md';
import {AiFillFileImage, AifillFileImage} from 'react-icons/ai';

const CreateCampaign =()=> {


  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [registration_number, setRegistration_number] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhone_number] = useState();
  const [cf_psd, setCPassword] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [fileName, setFileName] = useState("no selected file");


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
      <>
      <div id="create-campaign-main-container">

      <center><h1>Create Campaign</h1></center>
      <div className="create-campaign-container">
              <div className="create-campaign-input-section">
                <center><h1>Personal details</h1></center>
              <form>
          
          <label 
          className="createCampaign-label"
          htmlFor="first_name">First Name
          <input
            type="text"
            id="first_name"
            name="first_name"
            required
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
            placeholder="enter firstname"
            className="createCampaign-input"
          />
          </label>
          
        
      
          <label 
          className="createCampaign-label"
          htmlFor="last_name">Surname
          <input
            type="text"
            id="last_name"
            name="last_name"
            required
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
            placeholder="enter surname"
            className="createCampaign-input"
          />
          </label>
          


          <label 
          className="createCampaign-label"
          htmlFor="phone_number">Phone Number
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            required
            value={phone_number}
            onChange={(e) => setPhone_number(e.target.value)}
            placeholder="enter phone_number"
            className="createCampaign-input"
          />
          </label>
          <label
          className="createCampaign-label"
          htmlFor="email">Email
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter email"
            className="createCampaign-input"

          />
          </label>
          
          
        
      </form>
              </div>

              <div className="create-campaign-story-section">
              <center><h1>Your story</h1></center>
            <center>
              <textarea
            required
            placeholder="type your story"
            className="textarea"
          />
          </center>
          <center>
          
          <div
          id="image-uploader-div"
          onClick={ ()=> document.querySelector(".profile").click()}
          htmlFor="photo">
            <input
            type="file"
            className="profile"
            accept="image/*"
            hidden
            required
            onChange={({target: {files}})=>{
              files[0] && setFileName(files[0].name)
              if(files){
                setImage(URL.createObjectURL(files[0]))
              }
            }}
          />

          {image ? 
          
        <img  src={image} width={180} height={120}  alt={fileName}/>
        :
        <>
        <MdCloudUpload  color="#43d02a" size={60}/>
        <div>Browse files to upload</div>
        </>
        }
          </div>
          </center>

          <section className="uploaded-row">
          <AiFillFileImage color="#1475cf"/>
          <span className="uploaded-content">
            {fileName}
            <MdDelete
            onClick={()=>{
              setFileName("No selected File")
              setImage(null)
            }}
            size={40}
            color="red"
            />
          </span>
        </section>
        </div>

      </div>

      <center>
      <label 
          className="agree-create-campaign">
            <input type="checkbox" name="agree" className="tick"
             required />
           I agree to the <Link className="Link" to="/terms">Terms</Link> and <Link className="Link" to="/conditions">Conditions</Link> 
          </label>
        
        </center>
        <center><button id="create-campaign-button" type="button" onClick={handleSignUp}>
          Finish
        </button>
        <p>{message}</p>
        </center>

        <center>
        <Link className="Link" to="/studentDashboard">
          <button id="create-campaign-cancel-button" type="button" >
          Cancel
        </button></Link>
        </center>
      </div>
      </>
    );
  }

export default CreateCampaign;