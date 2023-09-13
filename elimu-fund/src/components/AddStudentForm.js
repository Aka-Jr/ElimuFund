import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

const AddStudentForm = () => {
  const [hasSponsorship, setHasSponsorship] = useState(false);
  const [parentType, setParentType] = useState('none');

  const toggleSponsorship = () => {
    setHasSponsorship(!hasSponsorship);
  };

  const handleParentChange = (event) => {
    const { value } = event.target;
    setParentType(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const emailInput = event.target.elements.Email.value;
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (!emailInput.trim()) {
      toast.error('Email address is required');
      return;
    }

    if (!emailRegex.test(emailInput)) {
      toast.error('Invalid email address');
      return;
    }

  
    const firstNameInput = event.target.elements.FirstName.value;
    if (!firstNameInput.trim()) {
      toast.error('First Name is required');
      return;
    }

    const surnameInput = event.target.elements.Surname.value;
    if (!surnameInput.trim()) {
      toast.error('SurName is required');
      return;
    }

    const regNoInput = event.target.elements.RegNo.value;
    if (!regNoInput.trim()) {
      toast.error('Registration number is required');
      return;
    }

    const phoneInput = event.target.elements.Phone.value;
    if (!phoneInput.trim()) {
      toast.error('Phone number is required');
      return;
    }

    const yearOfStudyInput = event.target.elements.YearOfStudy.value;
    if (!yearOfStudyInput.trim()) {
      toast.error('Year of Study is required');
      return;
    }



    // Add additional form validation logic here for other fields

    // If all validations pass, proceed with form submission
    // ...

    toast.success('Form submitted successfully');
  };

  return (
    <div className="Application-container">
      <h1>
        <center>Application Form</center>
      </h1>
      <form id="addStudentForm" onSubmit={handleFormSubmit}>
        <div className="name-inputs">
          <input
            type="text"
            name="FirstName"
            placeholder="First Name"
            className="addstudentform-inputs"
          />
          <input
            type="text"
            name="Surname"
            placeholder="Surname"
            className="addstudentform-inputs"
          />
        </div>
        <div className="registration">
          <input
            type="text"
            name="RegNo"
            placeholder="Reg NO"
            className="addstudentform-inputs"
          />
          <input
            type="text"
            name="Email"
            placeholder="Email"
            className="addstudentform-inputs"
          />
        </div>
        <div className="phone">
          <input
            type="text"
            name="Phone"
            placeholder="Phone"
            className="addstudentform-inputs"
          />
          <input
            type="text"
            name="YearOfStudy"
            placeholder="Year of study"
            className="addstudentform-inputs"
          />
        </div>

        <div className="separator"></div>
        {/* Sponsorship section */}
        <div className="sponsorship-section">
          <label className="addStudentForm-label" htmlFor="hasSponsorship">
            Does the student have any sponsorship?
          </label>
          <div className="sponsorship-checkbox">
            <input
              type="checkbox"
              id="hasSponsorship"
              name="hasSponsorship"
              checked={hasSponsorship}
              onChange={toggleSponsorship}
            />
          </div>
        </div>

        {/* Parents section */}
        <div className="parents-section">
          <label className="addStudentForm-label">
            Parents that the student has:
          </label>
          <div className="parent-radio">
            <label className="parent-label" >
              <input
                type="radio"
                name="parentType"
                value="both"
                checked={parentType === 'both'}
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
                checked={parentType === 'father'}
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
                checked={parentType === 'mother'}
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
                checked={parentType === 'none'}
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
            name="studentdisability"
            className="addstudentform-inputs"
          />
        </div>

        <label className="addStudentForm-label">Parent's disability:</label>

        <div className="father">
          <input
            type="text"
            id="father"
            name="father"
            placeholder="Father's disability"
            className="addstudentform-inputs"
          />
        </div>

        <div className="mother">
          <input
            type="text"
            id="mother"
            name="mother"
            placeholder="Mother's disability"
            className="addstudentform-inputs"
          />
        </div>

        <hr className="separator" />
        <button type="submit" className="addstudentButton">
          Submit
        </button>
        <hr className="separator" />
      </form>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default AddStudentForm;
