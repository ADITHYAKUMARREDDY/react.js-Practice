import React from "react";
import "./hyd.css";
import about from "./about.jpg";

export const About = () => {
  return (
    <>
      <div id="about" style={{ overflow: "hidden" }}>
        <div className="px-3">
          <div>
            <div className="row-pt-5">
              <h3 className="text-center">About</h3>
            </div>
            <div className="row">
              <div className="col-lg-8 ">
                <h3>
                  Welcome to{" "}
                  <span className="text-danger">Hyderabad IT Trainings</span>
                </h3>
                <p>
                  Hyderabad IT Trainings is a Hyderabad based Training Institute
                  delivering classroom and online trainings in India, USA and
                  UK, Australia. We are Providing high quality training is our
                  core value. We offer both classroom and online training on
                  niche technologies which are in high demand. All our trainers
                  are IT professionals with rich experience.
                </p>
                <br />
                <p>
                  Hyderabad IT Trainings is a leading training and placement
                  company in hyderabad managed by industry experts with more
                  than 9+ years of experience in leading MNC Companies. We are
                  wellknown for our practical approach towards training that
                  enables students to gain realtime exposure.
                </p>
                <p>
                  Hyderabad IT Trainings is a{" "}
                  <strong>
                    one-stop shop for IT courses, Web Development services &
                    Recruitment services.
                  </strong>{" "}
                  Hyderabad IT Trainings concentrates on its vision of building
                  up strong client and business partnerships. To this end,
                  Hyderabad IT Trainings offers Real-time and placement focuses
                  training services.
                </p>
              </div>
              <div className="col-lg-4 pt-5">
                <img src={about} alt="img" className="img-fluid " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
