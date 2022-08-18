import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Signintab from '../Signintab'


const Signin = () => {
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
    const res = await fetch("/doctor/signin", {
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
        // if(user.email  && user.password ){
        //         setValid(true);
        // }
        // setSubmitted(true);
        toast.success("User Sign In Successfully",{
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(message);
        navigate("/doctor/profile");
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
  
  return (
    <>
        <Signintab />
      {submitted && valid ? (
        <div className="success-message">Success! Thank you for signin</div>
      ) : null}
      <div className="l-form">
      <div className="form-group">
        <form action="" className="form">
          <h1 class="form__title">Sign In</h1>

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
          <br/>
          <div className="form__div">
            <NavLink className="text-center" to='/doctor/signup'>Create a new account</NavLink>
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
      </div>
      <ToastContainer />
    </>
    // <>
    //     <div className="container" >

    //         <form className="well form-horizontal" action=" " method="post" id="login_form">
    //             <fieldset>
    //                 <legend><center><h2><b>Login Form</b></h2></center></legend><br />

    //                 {/* <!-- Success message -->  */}
    //                 {/* <div className="alert alert-success" role="alert" id="success_message">Success <i className="glyphicon glyphicon-thumbs-up"></i> Success!.</div> */}

    //                 {/* <!-- Text input--> */}
    //                 <div className="form-group">
    //                     <label className="col-md-4 control-label">E-Mail</label>
    //                     <div className="col-md-4 inputGroupContainer">
    //                         <div className="input-group">
    //                             <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
    //                             <input name="email" placeholder="E-Mail Address" className="form-control" type="text" value={user.email} onChange={registerInputs} />
    //                         </div>
    //                     </div>
    //                 </div>

    //                 {/* <!-- Text input--> */}
    //                 <div className="form-group">
    //                     <label className="col-md-4 control-label" >Password</label>
    //                     <div className="col-md-4 inputGroupContainer">
    //                         <div className="input-group">
    //                             <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
    //                             <input name="password" placeholder="Password" className="form-control" type="password" value={user.password} onChange={registerInputs} />
    //                         </div>
    //                     </div>
    //                 </div>

    //                 {/* <!-- Button --> */}
    //                 <div className="form-group">
    //                     <label className="col-md-4 control-label"></label>
    //                     <div className="col-md-4"><br />
    //                         <button type="submit" className="btn btn-warning" name="submit" onClick={postData}>Login <span className="glyphicon glyphicon-send"></span></button>
    //                     </div>
    //                 </div>

    //             </fieldset>
    //         </form>
    //     </div>

    // </>
  );
};

export default Signin;
