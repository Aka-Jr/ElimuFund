import React from "react";
import Footer from "../Footer";
const Home = () => {
    return (
    
        // <div class="ongoing-campaign">Ongoing campaigns</div>
<div>

<div class="ongoing-campaign">Ongoing campaigns</div>

    <div class="root">

      <div class="card">
        <div class="card-header"> 
          <img class="card-img" src="./udsm logo.jpg" alt="" />
          <p>University of Dar Es Salaam</p>
        </div>

          <div class="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quibusdam ad odio debitis maxime fugit dolore
               non id iusto odit officiis voluptate ut in saepe aut qui incidunt,
                veniam corrupti perferendis.</p>
                <progress class="fund-progress" value="20" max="100"></progress>
               <button class="donate-btn"> Donate</button>
          </div>
      </div>

      <div class="card">
        <div class="card-header"> 
          <img class="card-img" src="./udsm logo.jpg" alt="" />
          <p>University of Dar Es Salaam</p>
          </div>

          <div class="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ad 
              odio debitis maxime fugit dolore
               non id iusto odit officiis voluptate ut in saepe aut qui incidunt,
                veniam corrupti perferendis.</p>

                <progress class="fund-progress" value="90" max="100"></progress>
               <button class="donate-btn"> Donate</button>
          </div>
      </div>

      <div class="card">
        <div class="card-header">
          <img class="card-img" src="./udsm logo.jpg" alt="" />
          <p>University of Dar Es Salaam</p>
        </div>

          <div class="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quibusdam ad odio debitis maxime fugit dolore
               non id iusto odit officiis voluptate ut in saepe aut qui incidunt, 
               veniam corrupti perferendis.</p>
               <progress class="fund-progress" value="60" max="100"></progress>
               <button class="donate-btn"> Donate</button>
          </div>
      
      </div>


    </div>

    <div class="testimonies">Testimonies</div>

    <div class="root">

<div class="card">
  <div class="card-header-testimonies"> 
    <img class="card-img" src="./Profile_JR.png" alt="" />
    <p>Juma Kibula</p>
  </div>

    <div class="card-body">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Quibusdam ad odio debitis maxime fugit dolore
         non id iusto odit officiis voluptate ut in saepe aut qui incidunt,
          veniam corrupti perferendis.</p>
          {/* <progress class="fund-progress" value="20" max="100"></progress> */}
         {/* <button class="donate-btn"> Donate</button> */}
    </div>
</div>

<div class="card">
  <div class="card-header-testimonies"> 
    <img class="card-img" src="./Profile_JR.png" alt="" />
    <p>Juma kibula</p>
    </div>

    <div class="card-body">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ad 
        odio debitis maxime fugit dolore
         non id iusto odit officiis voluptate ut in saepe aut qui incidunt,
          veniam corrupti perferendis.</p>

          {/* <progress class="fund-progress" value="90" max="100"></progress> */}
         {/* <button class="donate-btn"> Donate</button> */}
    </div>
</div>

<div class="card">
  <div class="card-header-testimonies">
    <img class="card-img" src="./Profile_JR.png" alt="" />
    <p>Juma Kibula</p>
  </div>

    <div class="card-body">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Quibusdam ad odio debitis maxime fugit dolore
         non id iusto odit officiis voluptate ut in saepe aut qui incidunt, 
         veniam corrupti perferendis.</p>
         {/* <progress class="fund-progress" value="60" max="100"></progress> */}
         {/* <button class="donate-btn"> Donate</button> */}
    </div>

</div>
</div>


      <Footer />

    </div>
    

    
    
    )
}

export default Home;