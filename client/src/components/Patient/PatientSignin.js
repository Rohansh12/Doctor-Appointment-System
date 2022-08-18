import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Signintab from '../Signintab'

const PatientSignin = () => {
    
  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const registerInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { email, password } = user;
    const res = await fetch("/patient/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();

    const message = JSON.stringify(data);

    if (data) {
      if (message === `{"message":"User sigin successfully"}`) {
        toast.success("User Sign In Successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(message);
          navigate("/patient/profile");
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
        setSubmitted(false);
      }

      // if(user.firstname && user.lastname && user.email && user.specialization && user.phone && user.address && user.password && user.cpassword){
      //     setValid(true);
      // }
      //  console.log(data);
    } else {
      console.log("else statement");
    }
  };

  // const reloadfunc = () => {
  //   window.location.reload();
  // }

  // useEffect(() => {
  //   // reloadfunc();
  // })

  return (
    <>
        <Signintab />
      {submitted && valid ? (
        <div className="success-message">Success! Thank you for signin</div>
      ) : null}
      <div className="l-form">
        <form action="" className="form">
          <h1 class="form__title">Patient <br/>Sign In</h1>

          <div class="form__div">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              name="email"
              value={user.email}
              onChange={registerInputs}
            />
            <label for="" className="form__label">
              Email
            </label>
          </div>
          {submitted && !user.email ? (
            <span>Please enter your email</span>
          ) : null}

          <div className="form__div">
            <input
              type="password"
              className="form__input"
              placeholder=" "
              name="password"
              value={user.password}
              onChange={registerInputs}
            />
            <label for="" className="form__label">
              Password
            </label>
          </div>
          {submitted && !user.password ? (
            <span>Please enter a password</span>
          ) : null}

          <div className="form__div">
            <NavLink className="text-center" to='/patient/signup'>Create a new account</NavLink>
          </div>

          <input
            type="submit"
            className="form__button"
            value="Sign In"
            name="submit"
            onClick={postData}
          />
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default PatientSignin;
