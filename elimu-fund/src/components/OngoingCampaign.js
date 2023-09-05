import React from "react";
import "../styles.css";
import { Link } from 'react-router-dom';
const OngoingCampaign = (props) => {

    return(
    <>
        {props.details.map((value, index) =>(
    <div className="root">       
        <div className="card" key={index}>

            <div className="card-header">
                <img  className="uni-card-img" src= {value.img} alt="" />
                <p className="fundraiserName">
                    {value.fundraiserName}
                </p>
            </div>

            <div className="card-body">
                <p className="fundraiserStory">
                    {value.fundraiserStory}
                </p>
                <progress className="fund-progress" value={value.fundraised} max="100"></progress>
                <Link className=" nav-link" to="/payment"><button className="donate-btn" >Donate</button></Link>
                
            </div>

        </div>
    </div>     
        ))};
    </>

    )
}

export default OngoingCampaign;