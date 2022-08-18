import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbartwo";

const Innerhtml = () => {
  return (
    <>
      {/* <Navbar/> */}
      <div id="topbar" class="d-flex align-items-center fixed-top">
        <div class="container d-flex justify-content-between">
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-envelope"></i>
            <a href="mailto:contact@example.com">docmeet@gmail.com</a>
            <i class="bi bi-phone"></i> +91 9624902493
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
            <NavLink to="/">DocMeet</NavLink>
          </h1>
          <NavLink to="/" className="logo me-auto">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </NavLink>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <NavLink className="nav-link scrollto active" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to="/">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to="/">
                  Departments
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to="/">
                  Doctors
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to="/">
                  Contact
                </NavLink>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      <footer>
        <div style={{ backgroundColor: "#fff" }}>
          {/* Section: Links */}
          <hr className="my-3" />
          {/* Section: Copyright */}
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              {/* Grid column */}
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                {/* Copyright */}
                <div class="me-md-auto text-center text-md-start">
                  <div class="copyright">
                    &copy; Copyright{" "}
                    <strong>
                      <span>DocMeet</span>
                    </strong>
                    . All Rights Reserved
                  </div>
                  <div class="credits">
                    Designed by <a href="#">UnderGrads</a>
                  </div>
                </div>
                {/* Copyright */}
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                {/* Facebook */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                {/* Twitter */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-twitter" />
                </a>
                {/* Google */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-google" />
                </a>
                {/* Instagram */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
              {/* Grid column */}
            </div>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Innerhtml;
