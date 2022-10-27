import React from "react";
import Typewriter from "typewriter-effect";
import "./home.css";
import "./about-me";
import { Router } from "react-router-dom";
import AboutMe from "./about-me";

function Home() {
  return (
    <body>
      <div>
        
        <div className="container justify-content-center">
          {/** Introcution 1 **/}
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="row"></div>
            <div className="col">
              <div className="typewriter1">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("HELLO...")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("THIS IS ME")
                      .start();
                  }}
                />
              </div>
            </div>

            <div className="col">
              {/** Introcution 2 **/}
              <div className="typewriter2">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("WELCOME!")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("FABIEN THICH")
                      .start();
                  }}
                />
              </div>
            </div>

              <div className="col">
                {/** Introcution 3 **/}
                <div className="typewriter3">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("")
                        .pauseFor(200)
                        .typeString(
                          "An intern at North P&D with a passion of becoming a software developer."
                        )
                        .start();
                    }}
                  />
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-4 col-sm-12 offset-9">
                  {/** Introduction Image**/}
                  <img
                    className="introduction-image"
                    src="Introduction Image.png"
                  />
                </div>
              </div>
          </div>
        </div> 
      </div>

      <div>
        <AboutMe />
      </div>
    </body>
  );
}

export default Home;
