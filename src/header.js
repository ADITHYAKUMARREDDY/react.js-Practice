import React from "react";
import img from "../src/components/logo.jpg";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="d-flex justify-content-between">
        <div className="container " style={{ position: 'sticky' }}>
          <a className="navbar-brand" href="/">
            <img src={img} alt="IMAGE1" />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="justify-content-end" id="collapsibleNavId">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>
                  Home <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Courses">
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
