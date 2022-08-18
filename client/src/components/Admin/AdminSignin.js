import React, { useState } from 'react'
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

const AdminSignin = () => {
      const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);

    const [valid, setValid] = useState(false);

    const [Admin, setAdmin] = useState({
        email: "", password: ""
    });

    let name, value;
    const registerInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setAdmin({ ...Admin, [name]: value });
    }

    const postData = async (e) => {
        e.preventDefault();

        const { email, password } = Admin;

        const res = await fetch("/admin/signin", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email, password
            })
        });

        const data = await res.json();
        const message = JSON.stringify(data);

        if(data){
          if( message === '{"message":"User sigin successfully"}'){
              if(Admin.email  && Admin.password ){
                      setValid(true);
              }
          setSubmitted(true);
          console.log(message);
          navigate("/admin/appoint")
    
          }
          else{
          window.alert("Invalid Credentials");
          setSubmitted(false);
          }
    
      }else{
          console.log("else statement")
      }
    }

    return (
        <>
        {submitted && valid ? (
        <div className="success-message">Success! Thank you for signin</div>
      ) : null}
      <div className="l-form">
        <form action="" className="form">
          <h1 class="form__title">Admin <br/>Sign In</h1>

          <div class="form__div">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              name="email"
              value={Admin.email}
              onChange={registerInputs}
            />
            <label for="" className="form__label">
              Email
            </label>
          </div>
          {submitted && !Admin.email ? (
            <span>Please enter your email</span>
          ) : null}

          <div className="form__div">
            <input
              type="password"
              className="form__input"
              placeholder=" "
              name="password"
              value={Admin.password}
              onChange={registerInputs}
            />
            <label for="" className="form__label">
              Password
            </label>
          </div>
          {submitted && !Admin.password ? (
            <span>Please enter a password</span>
          ) : null}


          <input
            type="submit"
            className="form__button"
            value="Sign In"
            name="submit"
            onClick={postData}
          />
        </form>
      </div>
            
        </>
    );
}

export default AdminSignin;