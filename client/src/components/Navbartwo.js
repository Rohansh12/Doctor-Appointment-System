import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div id="topbar" class="d-flex align-items-center fixed-top">
        <div class="container d-flex justify-content-between">
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-envelope"></i>
            <a href="mailto:contact@example.com" className="text-decoration-none">docmeet@gmail.com</a>
            <i class="bi bi-phone"></i> +91 7984060941
          </div>
          <div class="d-none d-lg-flex social-links align-items-center">
            <a href="#" class="twitter">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#" class="facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="instagram">
              <i class="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="#hero" className="text-decoration-none">DocMeet</a>
          </h1>
          <a href="index.html" className="logo me-auto">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </a>
          {/* <div class="search-box">
              <input class="search-txt" type="text" name="" placeholder="Type to Search" />
              <a class="search-btn" href="#">
                  <i class="fas fa-search" id="search-logo-size"></i>
              </a>
              </div> */}
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a className="nav-link scrollto" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#departments">Departments</a></li>
              <li><a className="nav-link scrollto" href="#doctors">Doctors</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
              <li className="nav-item" style={{margin: -10, marginTop: -13}}>
                  <div className="dropdown">
                  <button type="button" className="btn nav-link dropdown-toggle" id="dropdownMenuButton2 bootstrapbtn" data-bs-toggle="dropdown" aria-expanded="false">
                      Signin
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                      <li><NavLink className="dropdown-item signinhover" to="/doctor/signin">Doctor Signin</NavLink></li>
                      <li><NavLink className="dropdown-item " to="/patient/signin">Patient Signin</NavLink></li>
                  </ul>
                  </div>
              </li>      
              <li className="nav-item" style={{margin: -10, marginTop: -13}}>
                  <div className="dropdown">
                  <button type="button" className="btn nav-link dropdown-toggle" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                      Register
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                      <li><NavLink className="dropdown-item signinhover" to="/doctor/signup">Doctor Signup</NavLink></li>
                      <li><NavLink className="dropdown-item signinhover" to="/patient/signup">Patient Signup</NavLink></li>
                  </ul>
                  </div>
              </li>

            </ul>

            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* <NavLink to="/patient/signin" className="appointment-btn scrollto text-decoration-none">Make an Appointment</NavLink> */}
        </div>
      </header>


    </>
  )

}

export default Navbar
