import React from "react";
import Footer from "../components/Footer";
import OngoingCampaign from "../components/OngoingCampaign";
import OngoingCampaignData from "../components/OngoingCampaignData";
import TestimoniesData from "../components/TestimoniesData";
import Testimonies from "../components/Testimonies";


const Home = () => {
    return (
    
<div>

<div className="ongoing-campaign">Ongoing campaigns</div>

    <div className="root">

      <OngoingCampaign details={OngoingCampaignData}/>

     

    </div>

    <div class="testimonies">Testimonies</div>

    <div class="root">

    <Testimonies details={TestimoniesData}/>

</div>


      <Footer />

    </div>
    

    
    
    )
}

export default Home;
