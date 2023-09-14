import React from 'react';

const DashboardContent = () => {
  return( 
    <div>
    <div>
     <h1>Welcome James Selemani</h1>
  </div>
  <div className='background' style={{backgroundImage: "url('https://images.pexels.com/photos/11085479/pexels-photo-11085479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}>   
    <div className='row-one-container'>
      <div className='first-first-row-card'>
      <h5>Donations made</h5>
      <h1>116</h1>
      <h6>From Sept 01- Sept 31</h6>
      </div>
      <div className='second-first-row-card'>
      <h5>Funds collected</h5>
      <h1>TZS 115,098,490.<span style={{fontSize:'20px'}}>00</span></h1>
      <h6>From Sept 01- Sept 31</h6>
      </div>
    </div>     
     </div>
    </div>

  );
};

export default DashboardContent;
