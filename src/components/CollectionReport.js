import React from "react";
import Dropdownlang from "./Dropdown";
import Binducard from "./Binducard";

const CollectionReport = () => {
  return (
    <div>
      <div className="">
        <div className="row">
          <div className="col-lg-1">
            {" "}
            <h1>hi</h1>
          </div>
          <div className="col-lg-4">
            <div className="d-flex">
              <Dropdownlang />
              <button type="button" class="btn btn-primary">
                + Add appointment
              </button>
            </div>
          </div>
          <div className="col-lg-7">
            {" "}
            <header>
              
              <ul class="nav ">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Active
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">
                    Disabled
                  </a>
                </li>
              </ul>
            </header>
            <b>Upcoming OPD appointment</b>
            <div className="container">
              {/* <Binducard/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionReport;
