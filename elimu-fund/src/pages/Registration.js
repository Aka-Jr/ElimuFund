import React, { useState } from "react";
import "../signUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";

const Registration = () => {
  const [institution_password, setInstitution_password] = useState("");
  const [leader_position, setLeader_position] = useState("");
  const [institution_name, setInstitution_name] = useState("");
  const [institution_leader, setInstitution_leader] = useState("");
  const [institution_email, setInstitution_email] = useState("");
  const [cf_psd, setCPassword] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");// implement inserting the image
  const [fileName, setFileName] = useState("No selected file");

  const handlePasswordChange = (event) => {
    setInstitution_password(event.target.value);
  };

  const handleCPasswordChange = (event) => {
    setCPassword(event.target.value);
  };

  const navigate = useNavigate();

  const handleSignUp = () => {
    axios
      .post("http://localhost:5000/institution/registeration", {
        institution_password,
        leader_position,
        institution_name,
        institution_email,
        institution_leader
      })
      .then((response) => {
        if (response.data.error === false) {
          toast.success("Sign-up successful");
          navigate("/login");
        } else {
          toast.error("Something is missing!");
        }
      })
      .catch((error) => {
        toast.error("An error occurred during registration");
      });
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />
      <form className="signUp-form">
        <center>
          <h1>Register Your Institution</h1>
        </center>
        <label className="signUp-label" htmlFor="institution_name">
          Institution Name
          <input
            type="text"
            id="institution_name"
            name="institution_name"
            required
            value={institution_name}
            onChange={(e) => setInstitution_name(e.target.value)}
            placeholder="Enter institution name"
            className="signUp-input"
          />
        </label>

        <label className="signUp-label" htmlFor="email">
          Institution Email
          <input
            type="email"
            id="institution_email"
            name="institution_email"
            required
            value={institution_email}
            onChange={(e) => setInstitution_email(e.target.value)}
            placeholder="Enter email"
            className="signUp-input"
          />
        </label>

        <label className="signUp-label" htmlFor="institution-admin">
          Your Name
          <input
            type="text"
            id="institution_leader"
            name="institution_leader"
            required
            value={institution_leader}
            onChange={(e) => setInstitution_leader(e.target.value)}
            placeholder="Enter your name"
            className="signUp-input"
          />
        </label>

        <label className="signUp-label" htmlFor="institution-admin-position">
          Your Position
          <input
            type="text"
            id="leader_position"
            name="leader_position"
            required
            value={leader_position}
            onChange={(e) => setLeader_position(e.target.value)}
            placeholder="Enter your position"
            className="signUp-input"
          />
        </label>

        <label className="signUp-label" htmlFor="password">
          Password
          <input
            type="password"
            id="institution_password"
            name="institution_password"
            required
            value={institution_password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
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
            value={cf_psd}
            onChange={handleCPasswordChange}
            placeholder="Confirm password"
            className="signUp-input"
          />
        </label>

        <center>
          <div
            id="image-uploader-div-institution"
            onClick={() => document.querySelector(".profile").click()}
          >
            <input
              type="file"
              className="profile"
              accept="image/*"
              hidden
              required
              onChange={({ target: { files } }) => {
                files[0] && setFileName(files[0].name);
                if (files) {
                  setImage(URL.createObjectURL(files[0]));
                }
              }}
            />

            {image ? (
              <img src={image} width={180} height={120} alt={fileName} />
            ) : (
              <>
                <MdCloudUpload color="#01339e" size={60} />
                <p>Please upload institution logo</p>
              </>
            )}
          </div>
        </center>

        <section className="uploaded-row">
          <AiFillFileImage color="#1475cf" />
          <span className="uploaded-content">
            {fileName}
            <MdDelete
              onClick={() => {
                setFileName("No selected file");
                setImage(null);
              }}
            />
          </span>
        </section>

        <label className="agree">
          <input type="checkbox" name="agree" className="tick" required />
          I agree to the{" "}
          <Link className="Link" to="/terms">
            Terms
          </Link>{" "}
          and{" "}
          <Link className="Link" to="/conditions">
            Conditions
          </Link>
        </label>
        <button id="signUpButton" type="button" onClick={handleSignUp}>
          Sign up
        </button>
        <p>{message}</p>
      </form>
    </>
  );
};

export default Registration;
