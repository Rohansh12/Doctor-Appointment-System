import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Dashboard from "../../pages/dashboard/Dashboard";
import Innerhtml from "../../pages/Homepage/Innerhtml";

const Bookappoint = () => {
  const navigate = useNavigate();
  let count = 0;
  const [patUser, setpatUser] = useState({
    pname: "",
    email: "",
    phone: "",
    gender: "",
    docname: "",
    date: "",
    time: "",
  });
  const callbookappoint = async () => {
    try {
      const res = await fetch("/patient/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setpatUser({
        ...patUser,
        email: data.email,
        gender: data.gender,
        phone: data.phone,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      navigate("/patient/signin");
      console.log("Profile page not avaliable");
      console.log(err);
    }
  };

  useEffect(() => {
    callbookappoint();
  }, [count]);

  //storing data in state
  const registerInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setpatUser({ ...patUser, [name]: value });
  };

  //Sending data to backend
  const appointmentForm = async (e) => {
    e.preventDefault();

    const { pname, email, phone, gender, docname, date, time } = patUser;

    const res = await fetch("/patient/bookappoint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pname,
        email,
        phone,
        gender,
        docname,
        date,
        time,
      }),
    });
    const data = await res.json();
    const message = JSON.stringify(data);
    if (message === '{"message":"Appointment saved successfully"}') {
      toast.success("Appointment saved successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setpatUser({ ...patUser, pname: "", docname: "", date: "", time: "" });
    } else {
      toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setpatUser({ ...patUser, pname: "", docname: "", date: "", time: "" });
    }
  };

  return (
    <>
      <Innerhtml />

      <Dashboard />
      <div className="l-form">
        <form
          className="form"
          method="post"
          id="booking"
          onSubmit={appointmentForm}
        >
          <center>
            <h2 className="form__title">Book Appointments</h2>
          </center>

          <br />
          {/* {submitted && valid ? <div className="success-message">Success! You are logged in </div> : null} */}

          {/* firstname */}
          <div className="form__div">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              name="pname"
              value={patUser.pname}
              onChange={registerInputs}
              required
            />
            <label htmlFor="" className="form__label">
              Patient Name
            </label>
          </div>

          {/* email */}
          <div className="form__div">
            <input
              type="email"
              className="form__input"
              placeholder=" "
              name="email"
              value={patUser.email}
              onChange={registerInputs}
              required
            />
            <label htmlFor="" className="form__label">
              Email
            </label>
          </div>
          {/* value={user.email} onChange={registerInputs} */}
          {/* {submitted && !patientUser.email ? <span>Please enter your email</span> : null} */}

          {/* specialization */}
          <div className="form__div">
            <select
              id="selection"
              className="form__input"
              name="docname"
              value={patUser.docname}
              onChange={registerInputs}
              required
            >
              <optgroup label="Gynecologist">
                <option value="Manisha">Manisha Amin</option>
              </optgroup>
              <optgroup label="Pediatrician">
                <option value="Gopal">Gopal Agrawal</option>
                <option value="Tushar">Tushar Shah</option>
              </optgroup>
              <optgroup label="Dermatologist">
                <option value="Nikhil">Nikhil Sheth</option>
                <option value="Rahul">Rahul Thanawala</option>
              </optgroup>
              <optgroup label="Orthopedic">
                <option value="Manoj">Manoj Ambwani</option>
                <option value="Anamika">Anamika Shah</option>
              </optgroup>
              <optgroup label="Dentist">
                <option value="Niraj">Niraj Bhavsar</option>
              </optgroup>
              <optgroup label="General Physician">
                <option value="Daksha">Daksha Antani</option>
                <option value="Vinod">Vinod Bhapal</option>
              </optgroup>
              {/* <option value="">Select your specialization</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="Pediatrician">Pediatrician</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Orthopedic">Orthopedic</option>
              <option value="Dentist">Dentist</option>
              <option value="General Physician">General Physician</option> */}
            </select>
            <label htmlFor="" className="form__label">
              Doctor Name
            </label>
          </div>

          {/* Contact Form */}
          <div className="form__div">
            <input
              type="number"
              className="form__input"
              placeholder=" "
              name="phone"
              value={patUser.phone}
              onChange={registerInputs}
              required
            />
            <label htmlFor="" className="form__label">
              Contact No.
            </label>
          </div>

          {/* <div className="form-group">
          <label className="col-md-4 control-label">Specialization</label>
          <div className="col-md-4 selectContainer">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-list"></i>
              </span>
              <select
                name="specialization"
                className="form-control selectpicker"
              >
                <option value="">Select your specialization</option>
                <optgroup label="Gynecologist">
                  <option value="Doc 1">Doc 1</option>
                </optgroup>
                <optgroup label="Pediatrician">
                  <option value="Doc 2">Doc 2</option>
                </optgroup>
                <optgroup label="Dermatologist">
                  <option value="Doc 3">Doc 3</option>
                </optgroup>
                <optgroup label="Orthopedic">
                  <option value="Doc 4">Doc 4</option>
                </optgroup>
                <optgroup label="Dentist">
                  <option value="Doc 5">Doc 5</option>
                </optgroup>
                <optgroup label="General Physician">
                  <option value="Doc 6">Doc 6</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div> */}

          {/* gender */}
          <div className="form__div">
            <div
              id="selection"
              className="form__input"
              name="gender"
              value={patUser.gender}
              onChange={registerInputs}
              required
            >
              <input type="radio" className="" value="male" name="gender" />
              &nbsp;
              <label htmlFor="" className="" id="signup__gender">
                Male
              </label>
              &emsp;
              <input type="radio" className="" value="female" name="gender" />
              &nbsp;
              <label htmlFor="" className="" id="signup__gender">
                Female
              </label>
            </div>
            <label htmlFor="" className="form__label">
              Gender
            </label>
          </div>

          {/* date */}
          <div className="form__div">
            <input
              type="date"
              className="form__input"
              placeholder=" "
              name="date"
              value={patUser.date}
              onChange={registerInputs}
              required
            />
            <label htmlFor="" className="form__label">
              Date
            </label>
          </div>

          {/* time */}
          <div className="form__div">
            <select
              id="selection"
              className="form__input"
              name="time"
              value={patUser.time}
              onChange={registerInputs}
              required
            >
              <option value="10">10 AM</option>
              <option value="10:15">10:15 AM</option>
              <option value="10:30">10:30 AM</option>
              <option value="10:45">10:45 AM</option>
            </select>
            <label htmlFor="" className="form__label">
              Time
            </label>
          </div>
          {/* <div className="form-group">
          <label className="col-md-4 control-label">Time</label>
          <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-envelope"></i>
              </span>
              <input
                name="time"
                placeholder="time"
                className="form-control"
                type="time"
              />
              {/* value={user.email} onChange={registerInputs} */}
          {/* </div>
          </div>
        </div>  */}

          {/* button */}

          <input
            type="submit"
            className="form__button"
            placeholder=" "
            name="submit"
          />

          {/* <NavLink to="/patient/signup" >Create an account</NavLink> */}
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Bookappoint;
