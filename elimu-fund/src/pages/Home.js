import React from "react";
import Footer from "../components/Footer";
import OngoingCampaign from "../components/OngoingCampaign";
import OngoingCampaignData from "../components/OngoingCampaignData";
import TestimoniesData from "../components/TestimoniesData";
import Testimonies from "../components/Testimonies";
import NavBar from '../components/NavBar';


const Home = () => {
    return (
    
<>
<NavBar/>

<div className="ongoing-campaign"></div>

        <div className="the-line-container">
        <div className="the-line"></div>
        <div className="ongoing-campaign-text">Ongoing campaigns</div>
        <div className="the-line"></div>
        </div>
    <div className="root">

      <OngoingCampaign details={OngoingCampaignData}/>

     

    </div>

    <div class="testimonies"></div>

    <div className="the-line-container">
        <div className="the-line"></div>
        <div className="ongoing-campaign-text">Testimonies</div>
        <div className="the-line"></div>
        </div>

    <div class="root">

    <Testimonies details={TestimoniesData}/>

</div>


      <Footer />

    </>
    

    
    
    )
}

export default Home;
