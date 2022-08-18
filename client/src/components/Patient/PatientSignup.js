import React, { useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';

const PatientSignup = () => {
  const navigate = useNavigate();
  
  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const [patientUser, setPatientUser] = useState({
    firstname:"",lastname:"",email:"",address:"",gender:"",phone:"",password:"",cpassword:""
  });

  let name, value;
  const registerInputs = (e) =>{
    name = e.target.name;
    value = e.target.value;

    setPatientUser({...patientUser,[name]:value});
  }

  const postData = async (e) =>{
    e.preventDefault();

    const {firstname, lastname, email, address, gender, phone, password, cpassword} = patientUser;

    const res = await fetch("/patient/signup",{
      method:"POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        firstname, lastname, email, address, gender, phone, password, cpassword
      })
    });

    const data = await res.json();
    const message = JSON.stringify(data);

    if(data){
      if(message === `{"message":"user registered successfully"}`){
        if(patientUser.firstname && patientUser.lastname && patientUser.email && patientUser.address && patientUser.gender && patientUser.phone && patientUser.password && patientUser.cpassword){
                 setValid(true);
        }
      toast.success(message,{
          position: "top-center",
      })
      setInterval(() => {
          navigate("/patient/signin")
          window.location.reload();
      },1000)
      }else{
        toast.error(message,{
            position: "top-center",
        });
        setSubmitted(false);
        }
    }else{
      console.log("else statement")
    }

    // if(data.status === 422 || !data){
    //   window.alert("Invalid Registration");
    //   console.log("Invalid Registration");
    //  }else{
    //   if(patientUser.firstname && patientUser.lastname && patientUser.email && patientUser.address && patientUser.gender && patientUser.phone && patientUser.password && patientUser.cpassword){
    //       setValid(true);
    //   }    
    //   setSubmitted(true);
  }

    return (
      <>
        <div className="l-form">
            <form className="form" method="post" id="signupform" onSubmit={postData}>
                  <center>
                    <h2 className="form__title">
                      <b>Patient Registration Form</b>
                    </h2>
                  </center>
                {submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : null}
                {/* firstname */}
                <div className="form__div">
                  <input type="text" className="form__input" placeholder=" " name="firstname" value={patientUser.firstname} onChange={registerInputs}/>
                  <label htmlFor="" className="form__label">First Name</label>
                </div> 
                {/* <div className="form-group">
                  <label className="col-md-4 control-label">First Name</label>
                  <div className="col-md-4 inputGroupContainer">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-user"></i>
                      </span>
                      <input
                        name="firstname"
                        placeholder="First Name"
                        className="form-control"
                        type="text"
                        value={patientUser.firstname} onChange={registerInputs}
                      /> 
                     </div>
                  </div>
                </div> */}
                {submitted && !patientUser.firstname ? <span>Please enter your first name</span> : null }

                        {/* lastname */}
                        <div className="form__div">
                          <input type="text" className="form__input" placeholder=" " name="lastname" value={patientUser.lastname} onChange={registerInputs}/>
                          <label htmlFor="" className="form__label">Last Name</label>
                        </div>
                        {/* <div className="form-group">
                            <label className="col-md-4 control-label" >Last Name</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input name="lastname" placeholder="Last Name" className="form-control" type="text"  value={patientUser.lastname} onChange={registerInputs} />
                                </div>
                            </div>
                        </div> */}
                        {submitted && !patientUser.lastname ? <span>Please enter your last name</span> : null }

                         {/* email */}
                         <div className="form__div">
                          <input type="text" className="form__input" placeholder=" " name="email" value={patientUser.email} onChange={registerInputs}/>
                          <label htmlFor="" className="form__label">Email</label>
                        </div>
                        {/* <div className="form-group">
                            <label className="col-md-4 control-label">E-Mail</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                    <input name="email" placeholder="E-Mail Address" className="form-control" type="text"  value={patientUser.email} onChange={registerInputs}/>
                                </div>
                            </div>
                        </div> */}
                        {submitted && !patientUser.email ? <span>Please enter your email</span> : null }
                         
                         {/* address */}
                         <div className="form__div">
                          <input type="text" className="form__input" placeholder=" " name="address" value={patientUser.address} onChange={registerInputs}/>
                          <label htmlFor="" className="form__label">Address</label>
                        </div>
                         {/* <div className="form-group">
                            <label className="col-md-4 control-label">Address</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input name="address" placeholder="Address" className="form-control" type="text" value={patientUser.address} onChange={registerInputs}/>
                                </div>
                            </div>
                        </div> */}
                        {submitted && !patientUser.address ? <span>Please enter your address</span> : null }

                        {/* gender */}
                        <div className="form__div">
                          <div id="selection" className="form__input" name="gender" value={patientUser.gender} onChange={registerInputs}>
                            <input type="radio" className="" value="male" name="gender"/>&nbsp;
                            <label htmlFor="" className="" id="signup__gender">Male</label>&emsp;
                            <input type="radio" className="" value="female" name="gender"/>&nbsp;
                            <label htmlFor="" className="" id="signup__gender">Female</label>
                          </div>
                          <label htmlFor="" className="form__label">
                            Gender
                          </label>
                        </div>
                        {/* <div className="form__div">
                          <label htmlFor="" className="form__label">Gender</label>
                        <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                <div name="gender" className="form-control" value={patientUser.gender} onChange={registerInputs}>
                                  <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="male" />
                                    <label class="form-check-label" for="inlineRadio1">Male</label>
                                  </div>
                                  <div class="form-check form-check-inline">
                                      <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="female" />
                                      <label class="form-check-label" for="inlineRadio2">Female</label>
                                  </div>
                                  </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="form-group">
                            <label className="col-md-4 control-label">Gender</label>
                              <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                <div name="gender" style={{border:0}} className="form-control" value={patientUser.gender} onChange={registerInputs}>
                                  <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="male" />
                                    <label class="form-check-label" for="inlineRadio1">Male</label>
                                  </div>
                                  <div class="form-check form-check-inline">
                                      <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="female" />
                                      <label class="form-check-label" for="inlineRadio2">Female</label>
                                  </div>
                                  </div>
                                </div>
                            </div>
                        </div> */}
                        {submitted && !patientUser.gender ? <span>Please enter your gender</span> : null }

                        

                        {/* phone */}
                        <div className="form__div">
                          <input type="number" className="form__input" placeholder=" " name="phone" value={patientUser.phone} onChange={registerInputs}/>
                          <label htmlFor="" className="form__label">Contact No.</label>
                        </div>
                        {/* <div className="form-group">
                            <label className="col-md-4 control-label">Contact No.</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                                    <input name="phone" placeholder="+91 0000000000" className="form-control" type="text" value={patientUser.phone} onChange={registerInputs} />
                                </div>
                            </div>
                        </div> */}
                        {submitted && !patientUser.phone ? <span>Please enter your phone number</span> : null }

                        {/* password */}
                        <div className="form__div">
                          <input type="password" className="form__input" placeholder=" " name="password" value={patientUser.password} onChange={registerInputs}/>
                          <label htmlFor="" className="form__label">Password</label>
                        </div>
                        {/* <div className="form-group">
                            <label className="col-md-4 control-label" >Password</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input name="password" placeholder="Password" className="form-control" type="password"  value={patientUser.password} onChange={registerInputs}/>
                                </div>
                            </div>
                        </div> */}
                        {submitted && !patientUser.password ? <span>Please enter a password</span> : null }

                        {/* cpassword */}
                        <div className="form__div">
                          <input type="password" className="form__input" placeholder=" " name="cpassword" value={patientUser.cpassword} onChange={registerInputs}/>
                          <label htmlFor="" className="form__label">Confirm Password</label>
                        </div>                        
                        {/* <div className="form-group">
                            <label className="col-md-4 control-label" >Confirm Password</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input name="cpassword" placeholder="Confirm Password" className="form-control" type="password"  value={patientUser.cpassword} onChange={registerInputs}/>
                                </div>
                            </div>
                        </div> */}
                        {submitted && !patientUser.cpassword ? <span>Please enter a confirm password</span> : null }

                        <div className="form__div">
                            <NavLink className="text-center" to='/patient/signin'>Signin</NavLink>
                        </div>

                        {/* button */}
                        <input
                        type="submit"
                        className="form__button"
                        placeholder=" "
                        name="submit"
                        value="Register"
                        />
                        {/* <div className="form-group">
                            <label className="col-md-4 control-label"></label>
                            <div className="col-md-4"><br />
                                <button type="submit" className="btn btn-warning" name="submit">SUBMIT <span className="glyphicon glyphicon-send"></span></button>
                            </div>
                        </div> */}
            </form>
          </div>
          <ToastContainer />
      </>
    );
}

export default PatientSignup;
