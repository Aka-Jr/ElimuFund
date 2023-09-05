import React from "react";
import "../styles.css";

const Testimonies = (props) => {

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
                
            </div>

        </div>
    </div>     
        ))};
    </>

    )
}

export default Testimonies;