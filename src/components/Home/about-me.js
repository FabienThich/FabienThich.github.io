import React from "react";
import "./home.css";

function AboutMe() {
  return (
    <>
      {/**Professional Sumamary*/}

      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xm-12">
            <p className="setupformattitle">Professional Summary</p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-8 col-sm-12 col-xm-12">
            <img src="React Homepage.png" alt="In the works" />
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-8 col-sm-12 col-xm-12">
            <p className="setupformatparagraph">
              I am a student at Northview Heights Secondary School, specializing
              in Information and Communication Technologies within the
              Specialist High Skills Major program. With a major focus on
              Computer Science, my short-term goal is to gain admission to the
              University of Toronto. In the long run, I aspire to work in the
              software development industry, creating applications that can
              assist users in achieving their tasks and needs effectively. (Need
              to update picture on the left)
            </p>
          </div>
        </div>

        {/**Personal Interest */}
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xm-12">
            <p className="setupformattitle">Personal Interest</p>
          </div>
        </div>

        <div className="row justify-content-around py-5">
          <div className="col-xxl-4 col-xl-7 col-lg-7 col-md-8 col-sm-11 col-xm-12">
            <img src="React Homepage.png" />
            <div className="row-xxl-4 row-xl-7 row-lg-7 row-md-8 row-sm-11 row-xm-12">
              <b>
                Stock Market - - - - -- - - - -- - - - -- - - - -- - - - -- - -
                - -
              </b>
            </div>
          </div>

          <div className="col-xxl-4 col-xl-7 col-lg-7 col-md-8 col-sm-11 col-xm-12">
            <img src="React Homepage.png" />
            <div className="row-xxl-4 row-xl-7 row-lg-7 row-md-8 row-sm-11 row-xm-12">
              <b>Badminton</b>
              <p>
                I've been immersed in the world of badminton since the age of
                10, honing my skills and developing a playing style that
                combines control and speed. As a player, I find myself most
                comfortable executing precise shots while maintaining agility on
                the court. My preferred racket, the Yonex Arcsaber 7, perfectly
                complements my playing style, allowing me to unleash my full
                potential during intense matches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
