import React, { useState } from "react";
import "../App.css";
import axios from "axios";

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

  const toggleSponsorship = () => {
    setStudentData({
      ...studentData,
      hasSponsorship: !studentData.hasSponsorship,
    });
  };

  const handleParentsChange = (event) => {
    const { name, checked } = event.target;
    setStudentData({
      ...studentData,
      parents: {
        ...studentData.parents,
        [name]: checked,
      },
    });
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
      <form>
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

        {/* Checkbox and radio button inputs */}
        <div className="separator"></div>
        <div className="sponsorship-section">
          <label className="sponsorship-label" htmlFor="hasSponsorship">
            Does the student have any sponsorship?
          </label>
          <div className="sponsorship-checkbox">
            <input
              type="checkbox"
              id="hasSponsorship"
              name="hasSponsorship"
              checked={studentData.hasSponsorship}
              onChange={toggleSponsorship}
            />
          </div>
        </div>

        <div className="parents-section">
          <label className="parents-label">Parents that the student has:</label>
          <div className="parent-checkbox">
            <label htmlFor="both-parents">Both parents</label>
            <input
              type="checkbox"
              id="both-parents"
              name="parents.both_parents"
              checked={studentData.parents.both_parents}
              onChange={handleParentsChange}
            />
          </div>

          <div className="parent-checkbox">
            <label htmlFor="father">Father</label>
            <input
              type="checkbox"
              id="father"
              name="parents.father"
              checked={studentData.parents.father}
              onChange={handleParentsChange}
            />
          </div>

          <div className="parent-checkbox">
            <label htmlFor="mother">Mother</label>
            <input
              type="checkbox"
              id="mother"
              name="parents.mother"
              checked={studentData.parents.mother}
              onChange={handleParentsChange}
            />
          </div>

          <div className="parent-checkbox">
            <label htmlFor="none">None</label>
            <input
              type="checkbox"
              id="none"
              name="parents.none"
              checked={studentData.parents.none}
              onChange={handleParentsChange}
            />
          </div>
        </div>

        <div className="separator"></div>
        <label className="parents-label">Student disability</label>
        <div className="studentdisability">
          <input
            type="text"
            name="candidates_disability"
            value={studentData.candidates_disability}
            className="addstudentform-inputs"
            onChange={handleInputChange}
          />
        </div>

        <label className="parents-label">Parent's disability:</label>
        <div className="father">
          <label htmlFor="father_disability">Father</label>
          <input
            type="text"
            id="father_disability"
            name="father_disability"
            value={studentData.father_disability}
            className="addstudentform-inputs"
            onChange={handleInputChange}
          />
        </div>

        <div className="mother">
          <label htmlFor="mother_disability">Mother</label>
          <input
            type="text"
            id="mother_disability"
            name="mother_disability"
            value={studentData.mother_disability}
            className="addstudentform-inputs"
            onChange={handleInputChange}
          />
        </div>
        <hr className="separator" />
        <button type="button" onClick={handleAddStudentForm}>
          Submit
        </button>
        <hr className="separator" />
      </form>
    </div>
  );
};

export default AddStudentForm;
