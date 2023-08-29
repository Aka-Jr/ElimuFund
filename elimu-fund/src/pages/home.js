import NavBar from "../NavBar";

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


<footer class="footer">
      <div class="footer-component" id="contacts">
        <p><b>Contact us</b></p>
        <ul >
          <li>info@elimufund.co.tz</li>
          <li>+255700020029</li>
          <li>74 Ally sykes Road, Dar Es Salaam</li>
        </ul>
      </div>
      <div class="footer-component" id="terms">
        
        <ul>
          <li>Terms</li>
          <li>Privacy notice</li>
          <li>Legal</li>
        </ul>
      </div>
      <div class="footer-component" id="social-media">
        <p><b>Social Media</b></p>
        <ul>
          <li>Youtube</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>X</li>
        </ul>
      </div>
    </footer>

    </div>
    

    
    
    )
}

export default Home;