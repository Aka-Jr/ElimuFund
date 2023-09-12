import React, {useState} from "react";
import "../styles.css";
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const OngoingCampaign = (props) => {

    const [startIndex, setStartIndex] = useState(0); // Starting index of visible cards
    const numVisible = 3; // Number of cards to display at a time
  
    const handleSeeMore = () => {
      // Calculate the next starting index with looping
      const nextIndex = (startIndex + numVisible) % props.details.length;
      setStartIndex(nextIndex);
    };
  
    const handleSeePrevious = () => {
      // Calculate the previous starting index with looping
      const previousIndex = (startIndex - numVisible + props.details.length) % props.details.length;
      setStartIndex(previousIndex);
    };
  
    // Function to get the currently visible cards
    function getVisibleCards() {
      const endIndex = (startIndex + numVisible) % props.details.length;
      if (startIndex <= endIndex) {
        return props.details.slice(startIndex, endIndex);
      } else {
        // Handle looping from the end to the start
        return [...props.details.slice(startIndex), ...props.details.slice(0, endIndex)];
      }
    }

    return(
    <>
                {getVisibleCards().map((value, index) =>(
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
        ))}

       {props.details.length > numVisible && (
                 <div id="seeMore-seeLess-button">
                <button id="seeMore-button" onClick={handleSeeMore}><FaAngleRight color="white" size={30}/> </button>
                {startIndex + numVisible >= props.details.length && (
                    <button id="seeLess-button" onClick={handleSeePrevious}><FaAngleLeft  color="white" size={30}/></button>
                )}
                </div>
      )}
    </>

    )
}

export default OngoingCampaign;