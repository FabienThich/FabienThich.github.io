import React from "react";
import "./internship.css";
import Logs from "./logs.js";

function Internship() {
  return (
    <>
      <div className="container-fluid">
        {/** Heading **/}
        <div className="row col-12 text-center">
          <h2 className="introformatintern text-md-center">Internship Logs</h2>
        </div>

        {/* <div className="row text-center">
          <div className="col-12">
            <p>Navigate To:</p>
            <div className="row">
              <a href="#sept-tag">September Logs</a>
            </div>
            <div className="row">
              <a href="#oct-tag">October Logs</a>
            </div>
            <div className="row">
              <a href="#nov-tag">November Logs</a>
            </div>
          </div>
        </div> */}

        <div>
          {Logs.map((log) => {
            return (
              <div className="row col justify-content-center">
                <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-11 col-xm-12 gy-5">
                  <img className="imgformat" src={log.image} />
                </div>
                <div className="col-xxl-8 col-xl-9 col-lg-6 col-md-6 col-sm-11 col-xm-12 gy-5">
                  <h2 className="subheading">{log.title}</h2>
                  <p className="paragraph">{log.desc}</p>
                </div>
                <div className="row">
                  <p className="date">({log.date})</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Internship;
