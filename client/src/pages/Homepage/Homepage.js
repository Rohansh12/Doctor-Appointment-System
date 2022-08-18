import React from "react";
import Navbar from "../../components/Navbartwo"
// import AnimatedNumber from "react-animated-number";
// import { NavLink } from "react-router-dom";
import SearchBar from "../Search/SearchBar";
import SendEmail from "./EditMessage";
// import Innerhtml from "./Innerhtml";

const Homepage = () => {

  return (
    <>
      {/* <div id="topbar" class="d-flex align-items-center fixed-top">
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
            <a href="#hero">DocMeet</a>
          </h1>
          <a href="index.html" className="logo me-auto">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </a> */}
          <Navbar />
          {/* <Innerhtml/> */}
        {/* </div>
      </header> */}

      <section id="hero" className="d-flex align-items-center">
        {/* <div className="container">
          <h2>Welcome to DocMeet</h2>
          <h2>Doctor Appointment at a quick service</h2>
          <NavLink to="/patient/signin" className="btn-get-started scrollto text-decoration-none">
            Register Now
          </NavLink>
        </div> */}
        {/* <div className="container">
        <div className="l-form">
        <form style={{marginRight:"700px"}}>
        <div className="form__div">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              name="patname"
            />
            <label for="" className="form__label" id="search-bg">
              Search
            </label>
          </div>
        <button class="btn btn-outline-primary"  type="submit">Search</button>
      </form>
      </div>
      </div> */}
      <SearchBar />
      </section>

      <section id="why-us" className="why-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="content">
                <h3>Why Choose Docmeet?</h3>
                <p>
                  Consult top doctors online for any health concern. Private
                  online consultations with verified doctors in all specialists.
                </p>
                <div className="text-center">
                  <a href="#" className="more-btn text-decoration-none">
                    Learn More <i className="bx bx-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-receipt"></i>
                      <h4>Caring to the Core</h4>
                      <p>
                        {" "}
                        A seamless experience that gives you access to curated
                        services and transparent choices.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-cube-alt"></i>
                      <h4>The Smart Way to Health</h4>
                      <p>
                        Verified information and trustworthy tips, to guide you
                        to better health everyday.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-images"></i>
                      <h4>Your Health!Your Choice!</h4>
                      <p>
                        Comprehensive healthcare at your fingertips, to put you
                        in charge of your health.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-5 col-lg-6 d-flex justify-content-center align-items-stretch position-relative">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/m3india-prod/content/1495608068307.jpg"
                className="container-fluid"
                alt=""
              />
            </div>

            <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
              <h3>Consult from the Best Doctors</h3>
              <p>
                Consultation made easy through easy appointment booking from the most renowned doctors.
              </p>

              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-atom"></i>
                </div>
                <h4 className="title">
                  <a href="" className="text-decoration-none">Quick Appointments</a>
                </h4>
                <p className="description">
                  Booking Appointments made easy.
                </p>
              </div>

              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-atom"></i>
                </div>
                <h4 className="title">
                  <a href="" className="text-decoration-none">Instant Video Consultation</a>
                </h4>
                <p className="description">
                  Consult from the best doctors via video instantly.
                </p>
              </div>

              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-atom"></i>
                </div>
                <h4 className="title">
                  <a href="" className="text-decoration-none">Affordable Charges</a>
                </h4>
                <p className="description">
                  Affordable Consultation charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="counts" class="counts">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="count-box">
                <i class="fas fa-user-md"></i>

                <AnimatedNumber
                  component="text"
                  value={15}
                  style={{
                    transition: "0.8s ease-out",
                    fontSize: 48,
                    transitionProperty: "background-color, color, opacity",
                  }}
                  frameStyle={(perc) =>
                    perc === 100 ? {} : { backgroundColor: "#ffeb3b" }
                  }
                  duration={300}
                />

                <p>Doctors</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mt-5 mt-md-0">
              <div class="count-box">
                <i class="far fa-hospital"></i>

                <AnimatedNumber
                  component="text"
                  value={10}
                  style={{
                    transition: "0.8s ease-out",
                    fontSize: 48,
                    transitionProperty: "background-color, color, opacity",
                  }}
                  frameStyle={(perc) =>
                    perc === 100 ? {} : { backgroundColor: "#ffeb3b" }
                  }
                  duration={300}
                />
                <p>Departments</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mt-5 mt-lg-0">
              <div class="count-box">
                <i class="fas fa-flask"></i>

                <AnimatedNumber
                  component="text"
                  value={10}
                  style={{
                    transition: "0.8s ease-out",
                    fontSize: 48,
                    transitionProperty: "background-color, color, opacity",
                  }}
                  frameStyle={(perc) =>
                    perc === 100 ? {} : { backgroundColor: "#ffeb3b" }
                  }
                  duration={300}
                />
                <p>Research Labs</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="departments" className="departments">
        <div className="container">
          <div className="section-title">
            <h2>Departments</h2>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link active show"
                    data-bs-toggle="tab"
                    href="#tab-1"
                  >
                    General Physician
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                    Gynecologist
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                    Dermatologist
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                    Orthopedic
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
                    Many More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>General Physician</h3>
                      <p className="fst-italic">
                        General Physicians are highly trained specialists who
                        provide a range of non-surgical health care to adult
                        patients. They care for difficult, serious or unusual
                        medical problems and continue to see the patient until
                        these problems have resolved or stabilised.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="assets/img/departments-1.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Gynecologist</h3>
                      <p className="fst-italic">
                        They deal with a wide range of issues, including
                        obstetrics, or pregnancy and childbirth, menstruation
                        and fertility issues, sexually transmitted infections
                        (STIs), hormone disorders, and others.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="assets/img/departments-4.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Dermatologist</h3>
                      <p>
                        A dermatologist is a doctor who specializes in
                        conditions involving the skin, hair, and nails. A
                        dermatologist can identify and treat more than 3,000
                        conditions. These conditions include eczema, psoriasis,
                        and skin cancer, among many others.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="assets/img/department-3.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-4">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Orthopedic</h3>
                      <p>
                        Orthopedics is a branch of medicine that focuses on the
                        care of the musculoskeletal system. This system is made
                        up of muscles and bones, as well as joints, ligaments,
                        and tendons.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="assets/img/departments-2.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-5">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Many More</h3>
                      <p className="fst-italic">
                        Consult through the best doctors in many different
                        departments.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="assets/img/departments-5.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="doctors" className="doctors">
        <div className="container">
          <div className="section-title">
            <h2>Doctors</h2>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="assets/img/doctors/doctors-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Dr. Gopal Agrawal</h4>
                  <span>Paediatrician</span>
                  <p>
                    Qualification : MBBS, DNB(Paed)
                    <br />
                    {/* Area of Practice : Orthopaedician, Trauma Care */}
                    Experience : 5yr
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="assets/img/doctors/doctors-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Dr. Anamika Shah</h4>
                  <span>Orthopedic</span>
                  <p>
                    Qualification : MBBS, D.Ortho.
                    <br />
                    {/* Area of Practice : Food and Nutrition */}
                    Experience : 5yr
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="assets/img/doctors/doctors-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Dr. Nikhil Sheth</h4>
                  <span>Dermatologist</span>
                  <p>
                    Qualification : MBBS, MD(Skin & VD)
                    <br />
                    {/* Area of Practice : Dermatology */}
                    Experience : 4yr
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="assets/img/doctors/doctors-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Dr. Manisha Amin</h4>
                  <span>Gynecologist</span>
                  <p>
                    Qualification: MBBS , MD
                    <br />
                    {/* Area of Practice: Child neurology, Pediatric critical care */}
                    Experience : 7yr
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="faq section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            <ul>
              <li data-aos="fade-up">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  className="collapse"
                  data-bs-target="#faq-list-1"
                >
                  {" "}
                  How much does a consult cost?
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-1"
                  className="collapse show"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    The cost of a Doctor consult varies, depending on your
                    choice of consulting the 1st available Doctor OR requesting
                    a call back from a specific Doctor.{" "}
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="100">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-2"
                  className="collapsed"
                >
                  Do I talk to “real doctors”?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-2"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Yes. You only talk to reputed Doctors/Experts attached with
                    top hospitals/private practice who are Licensed
                    practitioners. Each Doctor/Expert on our network is
                    qualified and experienced and their profile is available on
                    the App.{" "}
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="200">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-3"
                  className="collapsed"
                >
                  Can I request a particular Doctor?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-3"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Yes. You can choose a specific Doctor from the various
                    categories of Doctors/Experts available, including
                    specialists.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="300">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-4"
                  className="collapsed"
                >
                  How many categories/types of doctors are available on doctor
                  24x7? <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-4"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    We have the following categories currently:
                    <br />
                    General Physician
                    <br />
                    Child Specialist
                    <br />
                    Diabetologist
                    <br />
                    Dermatologist
                    <br />
                    Emotional Wellbeing
                    <br />
                    Dietician
                    <br />
                    Mental Health
                    <br />
                    Cough & Fever
                    <br />
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-5"
                  className="collapsed"
                >
                  Is the patient health data secure?
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-5"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Health records are kept totally secure and only shared
                    between the doctor and the patient. There is nothing more
                    important to us than keeping your data secure.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
            <SendEmail /> 
      </section>

      {/* <div class="container d-md-flex py-4">
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
        <div class="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="#" class="twitter">
            <i class="bx bxl-twitter"></i>
          </a>
          <a href="#" class="facebook">
            <i class="bx bxl-facebook"></i>
          </a>
          <a href="#" class="instagram">
            <i class="bx bxl-instagram"></i>
          </a>
        </div>
      </div> */}
      <footer>
      <div style={{backgroundColor: "#fff"}}>
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
              <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-facebook-f" /></a>
              {/* Twitter */}
              <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-twitter" /></a>
              {/* Google */}
              <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-google" /></a>
              {/* Instagram */}
              <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-instagram" /></a>
            </div>
            {/* Grid column */}
          </div>
        </section>
      </div>
      </footer>
    </>
  );
}

export default Homepage;
