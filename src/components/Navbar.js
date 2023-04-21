import React from "react";
import { Link } from "react-router-dom";
import "../Stylesheets/Navbar.css";
const Navbar = (props) => {
  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Chivo+Mono:ital,wght@1,200&display=swap');
  </style>;

  const handleLanguage= async (event)=>{
    await props.setCountry(event.target.value)
    console.log(props.country)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top no-padding">
        <div className="container-fluid navbar-color ">
          <h3 className="navbar-brand text-size">NewsApp</h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link bar-color"
                  style={{ fontFamily: "Chivo Mono" }}
                  to="/"
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link bar-color"
                  style={{ fontFamily: "Chivo Mono" }}
                  to="/Business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link bar-color"
                  style={{ fontFamily: "Chivo Mono" }}
                  to="/Entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link bar-color"
                  style={{ fontFamily: "Chivo Mono" }}
                  to="/Health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link bar-color"
                  style={{ fontFamily: "Chivo Mono" }}
                  to="/Science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link bar-color"
                  style={{ fontFamily: "Chivo Mono" }}
                  to="/Sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link bar-color"
                  style={{ fontFamily: "Chivo Mono" }}
                  to="/Technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
          <div className="container language">
          <h5>Region</h5>
              <select className="form-select" aria-label="Default select example" onChange={handleLanguage}>
                
                <option defaultValue={"in"} >India</option>
                <option value="us">America</option>
                <option value="ru">Russia</option>
                <option value="cn">China</option>
                <option value="au">Australia</option>
                <option value="az">Africa</option>
                <option value="gb">England</option>

              </select>
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
