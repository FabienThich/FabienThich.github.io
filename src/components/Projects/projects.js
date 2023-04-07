import React from "react";
import "./projects.css";

function Projects() {
  return (
    <>
      {/** Heading **/}
      <h2 className="introformatproject">Projects</h2>

      <br />
      <br />
      <br />

      <div className="containter">
        <div className="col-xxl-2 offset-1">
          <div className="row text-center">
            <p className="descHeading">Calculator (Click for App)</p>
          </div>

          <div className="row text-center">
            <a href="https://fabienthich.github.io/calculator/" target="_blank">
              <img src="Calculator.png" className="imgformat2" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
