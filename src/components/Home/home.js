import React from "react";
import Typewriter from "typewriter-effect";
import "./home.css";
import "./about-me";
import AboutMe from "./about-me";

function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xm-12">
            <div className="row-xxl-6 row-xl-6 row-lg-6 row-md-12 row-sm-12 row-xm-12 offset-2">
              <div className="typewriter1">
                {/*TYPEWRITE 1*/}
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
            <div className="row-xxl-6 row-xl-6 row-lg-6 row-md-12 row-sm-12 row-xm-12 offset-2">
              <div className="typewriter2">
                {/*TYPEWRITE 2*/}
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

            <div className="row-xxl-6 row-xl-6 row-lg-6 row-md-12 row-sm-12 row-xm-12 offset-2">
              <div className="typewriter3">
                {/*TYPEWRITE 1*/}
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("")
                      .pauseFor(200)
                      .typeString(
                        "Previous Junior Software Engineer At North P&D, Inc."
                      )
                      .start();
                  }}
                />
              </div>
            </div>
          </div>

          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xm-12 text-center">
            <div className="row-xxl-6 row-xl-6 row-lg-6 row-md-12 row-sm-12 row-xm-12">
              {/*Introduction Image*/}
              <img
                className="introduction-image"
                src="Introduction Image.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <AboutMe />
      </div>
    </>
  );
}

export default Home;
