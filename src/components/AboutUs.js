import React from 'react';

const AboutUs = () => {
  return (
    <div className="container" >
      <h1>About Us</h1>
      <div id="accordion">
        <div className="card">
          <div className="card-header" id="headingOne" style={{backgroundColor:"cyan"}}>
            <h5 className="mb-0">
            Education Website
            </h5>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
              <h4>Welcome to Edu web, we believe that learning is an exciting journey that knows no bounds. Our mission is to empower learners of all ages with knowledge, skills, and opportunities to unlock their true potential. Whether you're a student seeking to grasp new concepts, a professional aiming to enhance your expertise, or a curious mind hungry for knowledge, we've got you covered!</h4>
            </div>
          </div>
        </div>
        <div className="card" >
          <div className="card-header" id="headingTwo" style={{backgroundColor:"cyan"}}>
            <h5 className="mb-0">
             Address
            </h5>
          </div>
            <div className="card-body" >
            <ul>
                <li>123 Main Street</li>
                <li>City, State ZIP</li>
                
              </ul>
            </div>
          </div>
        <div className="card" >
          <div className="card-header" id="headingFour" style={{backgroundColor:"cyan"}}>
            <h5 className="mb-0">
              Contact Details
            </h5>
          </div>
            <div className="card-body">
            <li>Phone: (123) 456-7890</li>
                <li>Email: info@example.com</li>
            </div>
          </div>
      </div>
    </div>
  );
};

export default AboutUs;