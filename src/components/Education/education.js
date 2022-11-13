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
        
        <div className="row justify-content-center">
          <div className="col-xxl-4">
            <video className='UNHackVideo' src='UNHack.mp4' autoplay="true" loop='true' />
            <p className="UNHack">Timelapse of UNHack 2022</p>
          </div>

          <div className="col-xxl-7">
            <div className="row">
              <p className="SHSMTitle">Specialist High Skills Major Program</p>
              <div className="col">
                <p className="SHSMParagraph">Text here...</p>
              </div>
            </div>    
          </div>
        </div>

      </div>
    </body>
  );
}

export default Education;
