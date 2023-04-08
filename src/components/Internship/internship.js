import React from "react";
import "./internship.css";
import Logs from "./logs.js";

function Internship() {
  const LogsReordered = [...Logs].sort((prev, next) => next.id - prev.id);
  Logs.forEach((current, i) => {
    current.id = i++;
  });

  return (
    <>
      <div className="container-fluid">
        {/** Heading **/}
        <div className="row col-12 text-center">
          <h2 className="introformatintern text-md-center">Internship Logs</h2>
        </div>

        <div>
          {LogsReordered.map((log) => {
            return (
              <div key={log.id}>
                <div className="row col justify-content-center">
                  <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-11 col-xm-12 gy-5">
                    <img
                      className="imgformat"
                      src={log.image}
                      alt={`Image of ${log.image}`}
                    />
                  </div>
                  <div className="col-xxl-8 col-xl-9 col-lg-6 col-md-6 col-sm-11 col-xm-12 gy-5">
                    <h2 className="subheading">{log.title}</h2>
                    <p className="paragraph">{log.desc}</p>
                  </div>
                  <div className="row">
                    <p className="date">({log.date})</p>
                  </div>
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
