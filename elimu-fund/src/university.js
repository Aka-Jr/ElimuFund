import React, { useState } from "react";
import './App.css';


const HorizontalBoxes = () =>{ 

  // const handleSubmit = () => {
  //   console.log('Submitted values:', values); };

  return (
    <div className="university-boxes">
      <div className="box">
        <p>Approved students</p>
        <input type="number" placeholder="e.g 10" />
      </div>
      <div className="box">
        <p>Submitted students</p>
        <input type="number" placeholder="e.g 10" />
      </div>
      <div className="box">
        <p>Rejected students</p>
        <input type="number" placeholder="e.g 10" />
      </div>
      <button className="submit-button" >
        Submit
      </button>
    </div>
  );
}

export default HorizontalBoxes;






