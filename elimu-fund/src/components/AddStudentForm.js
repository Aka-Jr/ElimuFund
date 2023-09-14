import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

const AddStudentForm = () => {
  const [studentData, setStudentData] = useState({
    first_name: '',
    last_name: '',
    registration_number: '',
    registration_date: '',
    email: '',
    phone_no: '',
    candidates_disability: '',
    hasSponsorship: false,
    parentType: 'none',
  });

  const toggleSponsorship = () => {
    setStudentData({
      ...studentData,
      hasSponsorship: !studentData.hasSponsorship,
    });
  };

  const handleParentChange = (event) => {
    const { value } = event.target;
    setStudentData({
      ...studentData,
      parentType: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Form validation and submission logic here

    const emailInput = studentData.email;
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (!emailInput.trim()) {
      toast.error('Email address is required');
      return;
    }

    if (!emailRegex.test(emailInput)) {
      toast.error('Invalid email address');
      return;
    }

    // Additional form validation for other fields


    const firstNameInput = event.target.elements.first_name.value;
    if (!firstNameInput.trim()) {
      toast.error('First Name is required');
      return;
    }

    const surnameInput = event.target.elements.last_name.value;
    if (!surnameInput.trim()) {
      toast.error('SurName is required');
      return;
    }

    const regNoInput = event.target.elements.registration_number.value;
    if (!regNoInput.trim()) {
      toast.error('Registration number is required');
      return;
    }

    const phoneInput = event.target.elements.phone_no.value;
    if (!phoneInput.trim()) {
      toast.error('Phone number is required');
      return;
    }

    const yearOfStudyInput = event.target.elements.registration_date.value;
    if (!yearOfStudyInput.trim()) {
      toast.error('Year of Study is required');
      return;
    }


    // If all validations pass, proceed with form submission
    toast.success('Form submitted successfully');

    // Clear input fields
    setStudentData({
      ...studentData,
      first_name: '',
      last_name: '',
      registration_number: '',
      registration_date: '',
      email: '',
      phone_no: '',
      candidates_disability: '',
      hasSponsorship: false,
      parentType: 'none',
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  return (
    <div className="Application-container">
      

      <form id="addStudentForm" onSubmit={handleFormSubmit}>
      <h1>
        <center>Application Form</center>
      </h1>
        <div className="name-inputs">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={studentData.first_name}
            onChange={handleInputChange}
            className="addstudentform-inputs"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Surname"
            value={studentData.last_name}
            onChange={handleInputChange}
            className="addstudentform-inputs"
          />
        </div>

        <div className="registration">
          <input
            type="text"
            name="registration_number"
            placeholder="Reg NO"
            value={studentData.registration_number}
            onChange={handleInputChange}
            className="addstudentform-inputs"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={studentData.email}
            onChange={handleInputChange}
            className="addstudentform-inputs"
          />
        </div>

        <div className="phone">
          <input
            type="text"
            name="phone_no"
            placeholder="Phone"
            value={studentData.phone_no}
            onChange={handleInputChange}
            className="addstudentform-inputs"
          />
          <input
            type="text"
            name="registration_date"
            placeholder="Registered Year"
            value={studentData.registration_date}
            onChange={handleInputChange}
            className="addstudentform-inputs"
          />
        </div>

        <div className="separator"></div>

        <div className="sponsorship-section">
          <label>
            Does the student have any sponsorship?
            <input
              type="checkbox"
              id="hasSponsorship"
              name="hasSponsorship"
              checked={studentData.hasSponsorship}
              onChange={toggleSponsorship}
            />
          </label>
        </div>

        <div className="parents-section">
          <label className="addStudentForm-label">
            Parents that the student has:
          </label>

          <div className="parent-radio">
            <label>
              <input
                type="radio"
                name="parentType"
                value="both"
                checked={studentData.parentType === 'both'}
                onChange={handleParentChange}
              />
              Both parents
            </label>
          </div>

          <div className="parent-radio">
            <label>
              <input
                type="radio"
                name="parentType"
                value="father"
                checked={studentData.parentType === 'father'}
                onChange={handleParentChange}
              />
              Father
            </label>
          </div>

          <div className="parent-radio">
            <label>
              <input
                type="radio"
                name="parentType"
                value="mother"
                checked={studentData.parentType === 'mother'}
                onChange={handleParentChange}
              />
              Mother
            </label>
          </div>

          <div className="parent-radio">
            <label>
              <input
                type="radio"
                name="parentType"
                value="none"
                checked={studentData.parentType === 'none'}
                onChange={handleParentChange}
              />
              None
            </label>
          </div>
        </div>

        <div className="separator"></div>
        <label className="addStudentForm-label">Student's disability</label>
        <div className="studentdisability">
          <input
            type="text"
            name="candidates_disability"
            value={studentData.candidates_disability}
            placeholder="If any"
            className="addstudentform-inputs"
            onChange={handleInputChange}
          />
        </div>

        <div className="separator"></div>
        <label className="addStudentForm-label">Mother's disability</label>
        <div className="studentdisability">
          <input
            type="text"
            name="candidates_disability"
            value={studentData.candidates_disability}
            className="addstudentform-inputs"
            placeholder="If any"
            onChange={handleInputChange}
          />
        </div>

        <div className="separator"></div>
        <label className="addStudentForm-label">Student's disability</label>
        <div className="studentdisability">
          <input
            type="text"
            placeholder="If any"
            name="candidates_disability"
            value={studentData.candidates_disability}
            className="addstudentform-inputs"
            onChange={handleInputChange}
          />
           <div className="separator"></div>
        </div>
        <button 
        id="signUpButton"
        type="submit"
        >Submit</button>
        <hr className="separator" />
      </form>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default AddStudentForm;
