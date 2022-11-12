import React from "react";
import "./education.css";

function Education() {
  return (
    <body>
      <div className="container-fluid">

        {/** Heading **/}
        <div className="row col-12 text-center">
          <h2 className="introformateducation text-md-center">High School</h2>
        </div>
        
        <div className="row">
          <div className="col-xxl-5">
            <p>Specialist High Skills Major</p>
            <video className='UNHackVideo' src='UNHack.mp4' autoplay="true" loop='true' />
          </div>
        </div>

      </div>
    </body>
  );
}

export default Education;
