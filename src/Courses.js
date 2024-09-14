import React from "react";
import ree from "./components/react js training banner.webp";
import "./components/hyd.css";

export const Courses = () => {
  return (
    <>
      <div className="container gray ">
        <div className=" text-center ">
          <h3>
            Our <span className="text-danger">Courses</span>{" "}
          </h3>
        </div>

        <div
          className="card text-danger mb-3 "
          style={{ width: "250px", height: "227px" }}
        >
          <div className="card-body"style={{padding:'unset'}}>
            <img className="card-img-top" src={ree} alt="Title" />
            <h4 className="card-title text-center">React.js</h4>
            <div className="d-flex justify-content-center">
            <button className="button">Enroll</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
