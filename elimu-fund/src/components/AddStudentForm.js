import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

const AddStudentForm = () => {
  const [studentData, setStudentData] = useState({
    first_name: "",
    last_name: "",
    registration_number: "",
    registration_date: "",
    email: "",
    phone_no: "",
    candidates_disability: "",
    mother_disability: "",
    father_disability: "",
    hasSponsorship: false,
    parents: {
      father: false,
      mother: false,
      both_parents: false,
      none: false,
    },
  });



const AddStudentForm = () => {
  const [hasSponsorship, setHasSponsorship] = useState(false);
  const [parentType, setParentType] = useState('none');

  const toggleSponsorship = () => {
    setStudentData({
      ...studentData,
      hasSponsorship: !studentData.hasSponsorship,
    });
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleAddStudentForm = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/valid_candidate/register",
        studentData
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
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
            name="first_name"
            placeholder="First Name"
            value={studentData.first_name}
            onChange={handleInputChange}
            className="addstudentform-inputs"
          />
          <input
            type="text"
            name="last_name"
            value={studentData.last_name}
            placeholder="Surname"
            onChange={handleInputChange}
            className="addstudentform-inputs"
          />
        </div>
        <div className="registration">
          <input
            type="text"
            name="registration_number"
            value={studentData.registration_number}
            placeholder="Reg NO"
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
            placeholder="registered year"
            value={studentData.registration_date}
            onChange={handleInputChange}
            className="addstudentform-inputs"
          />
        </div>

        <div className="separator"></div>
        <div className="sponsorship-section">

            Does the student have any sponsorship?
          </label>
          <div className="sponsorship-checkbox">
            <input
              type="checkbox"
              id="hasSponsorship"
              name="hasSponsorship"

              onChange={toggleSponsorship}
            />
          </div>
        </div>

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
            name="candidates_disability"
            value={studentData.candidates_disability}
            className="addstudentform-inputs"
            onChange={handleInputChange}
          />
        </div>

          Submit
        </button>
        <hr className="separator" />
      </form>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default AddStudentForm;
