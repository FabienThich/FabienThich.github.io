import React from "react";
import "./projects.css";

function Projects() {
  return (
    <body>
      <div>
        {/** Heading **/}
        <h2 className="introformatproject">Projects</h2>

        <br />
        <br />
        <br />

        <div className="containter">
          <div className="col justify-content-center">
            <p className="descHeading">Calculator (Click for App)</p>
          </div>

          <div className="col justify-content-center">
            <a href="https://fabienthich.github.io/calculator/" target="_blank">
              <img src="Calculator.png" className="imgformat2" />
            </a>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Projects;
