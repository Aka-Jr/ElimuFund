import React, { useState } from 'react';
import '../App.css';

const AddStudentForm = () => {
  const [hasSponsorship, setHasSponsorship] = useState(false);
  const [parents, setParents] = useState({
    father: false,
    mother: false,
    none: false,
  });

  const toggleSponsorship = () => {
    setHasSponsorship(!hasSponsorship);
  };

  const handleParentsChange = (event) => {
    const { name, checked } = event.target;
    setParents({
      ...parents,
      [name]: checked,
    });
  };

  return (
    <div className="Application-container">
      <h1><center>Application Form</center></h1>
      <form>
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
  <label className="sponsorship-label" htmlFor="hasSponsorship">Does the student have any sponsorship?</label>
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
  <label className="parents-label">Parents that the student has:</label>
  <div className="parent-checkbox">
    
    <label htmlFor="father">Both parents</label>
    <input
      type="radio"
      id="both-parents"
      name="parent"
      value="both parents"
      checked={parents.father}
      onChange={handleParentsChange}
    />
  </div>

  <div className="parent-checkbox">
    
    <label htmlFor="father">Father</label>
    <input
      type="radio"
      id="father"
      name="parent"
      value="father"
      checked={parents.father}
      onChange={handleParentsChange}
    />
  </div>

  <div className="parent-checkbox">
    <label htmlFor="mother">Mother</label>
    <input
      type="radio"
      id="mother"
      name="parent"
      value="mother"
      checked={parents.mother}
      onChange={handleParentsChange}
    />
  </div>

  <div className="parent-checkbox">
    <label htmlFor="none">None</label>
    <input
      type="radio"
      id="none"
      name="parent"
      value={"none"}
      checked={parents.none}
      onChange={handleParentsChange}
    />
  </div>
</div>
 

        <div className="separator"></div>
        <label className="parents-label">Student disability</label>
        <div className="studentdisability">
          <input
            type="text"
            name="studentdisability"
            className="addstudentform-inputs"
          />
          </div>

          <label className="parents-label">Parent's disability:</label>
          <div className="father">
          <label htmlFor="name">Father</label>
            <input
              type="text"
              id='father'
              name="father"
              className="addstudentform-inputs"
            />
            </div> 

            <div className="mother">
          <label htmlFor="name">Mother</label>
            <input
              type="text"
              id='mother'
              name="mother"
              className="addstudentform-inputs"
            />
            </div>
            <hr className="separator" />
<button type="submit">Submit</button>
<hr className="separator" />
      </form>
    </div>
  );
}

export default AddStudentForm;