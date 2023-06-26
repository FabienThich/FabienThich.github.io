import React from "react";
import "./education.css";

function Education() {
  return (
    <>
      <div className="container">
        {/** Heading **/}
        <div className="row col-12 text-center">
          <h2 className="introformateducation text-md-center">High School</h2>
        </div>

        <div className="row justify-content-center py-5">
          <div className="col-xxl-5">
            <video
              className="UNHackVideo"
              src="UNHack.mp4"
              autoplay="true"
              loop="true"
            />
            <p className="UNHack">Timelapse of UNHack 2022</p>
          </div>

          <div className="col-xxl-7">
            <div className="row">
              <p className="EducationTitle">
                Hackathon at York University - UNHack 2022
              </p>
              <div className="col">
                <p className="EducationParagraph">
                  Actively participated in a hackathon organized by the Lassonde
                  School of Engineering at York University, which focused on
                  addressing challenges concerning sustainable cities and
                  communities. In a collaborative effort, my team and I
                  dedicated ourselves to developing an innovative solution that
                  aimed to repurpose and recycle waste materials generated on
                  campus. Our goal was to transform these materials into
                  valuable resources for constructing new spaces, buildings, and
                  even artistic installations, contributing to a more
                  sustainable environment on campus.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center py-5">
          <div className="col-xxl-5">
            <img src="Drone.jpg" className="Drone" />
          </div>

          <div className="col-xxl-7">
            <div className="row">
              <p className="EducationTitle">
                Sugo Drones & Restricted Operator Certificate
              </p>
              <div className="col">
                <p className="EducationParagraph">
                  To further my expertise in drone construction, I leveraged the
                  assistance of{" "}
                  <a href="https://sugudrones.com/" target="_blank">
                    Sugo Drones
                  </a>{" "}
                  while concurrently undertaking radio license courses to attain
                  a Restricted Operator Certificate - Aeronautical. Commencing
                  with the successful creation of a four-propeller drone, I
                  subsequently sought to expand my capabilities and ventured
                  into constructing a six-propeller version. To infuse a
                  distinct charm, I personalized the drone by incorporating
                  propellers of diverse colors. Additionally, as part of our
                  radio license training, we delved into learning the phonetic
                  alphabet, which proved to be a valuable skill in effective
                  communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
