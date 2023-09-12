import React from 'react';

const FundraiserCard = ({ img, fundraiserName, fundraiserStory }) =>  {
  return (
    <div className="card">
      <div className="card-header">
        <img className="uni-card-img" src={img} alt="" />
        <p className="fundraiserName">{fundraiserName}</p>
      </div>
      <div className="card-body">
        <p className="fundraiserStory">{fundraiserStory}</p>
      </div>
    </div>
  );
}

const FundraiserDetails = (props) => {
  return (
    <div>
      <h1>Fundraiser Details</h1>
      {props.details.map((value, index) => (
        <div className="root" key={index}>
          <FundraiserCard
            img={value.img}
            fundraiserName={value.fundraiserName}
            fundraiserStory={value.fundraiserStory}
          />
        </div>
      ))}
    </div>
  );
}

export default FundraiserDetails;
