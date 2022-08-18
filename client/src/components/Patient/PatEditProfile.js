import React, { useEffect, useState } from 'react'
import Dashboard from '../../pages/dashboard/Dashboard'
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const PatEditProfile = () => {
    const navigate = useNavigate();

    const [submitted, setSubmitted] = useState(false);

    const [valid, setValid] = useState(false);

    const [user,setUser] = useState({
        firstname:"",lastname:"",email:"",gender:"",phone:"",address:""});

    let name,value;
    const registerInputs = (e) => {
        name = e.target.name ;
        value = e.target.value;

        setUser({...user,[name]:value});
    }

    const getData = async () => {
        try {
          const res = await fetch("/patient/profile", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          const data = await res.json();
        //   console.log(data)
          setUser({
            ...user,
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            phone: data.phone,
            gender: data.gender,
            address: data.address
          });
    
          if (!res.status === 200) {
            const error = new Error(res.error);
            throw error;
          }
        } catch (err) {
          navigate('/patient/signin')
          console.log("Profile page not avaliable");
          console.log(err);
        }
      };

      const postData = async (e) => {
        e.preventDefault();
    
        const { firstname,lastname,email,phone,address,gender } = user;
    
        const res = await fetch("/patient/editprofile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstname,lastname,email,phone,address,gender
          }),
        });
        const data = await res.json();
        const message = JSON.stringify(data);
        console.log(message);
        if (message === `{"message":"Edit Successfully"}`) {
            toast.success("Edit Successfully", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            navigate('/patient/profile')
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
        }
      };
    //   console.log(user)

      useEffect(() => {
        getData();
    },[]);
    return (
        <>
        <Dashboard />
        <div className="l-form">
            <form className="form" action=" " id="signupform" method="post" onSubmit={postData}>
                <center>
                    <h2 className="form__title"><b>Edit Form</b></h2>
                </center>


                        {/* <!-- Success message -->  */}
                        {submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : null}
                        {/* <!-- Text input--> */}
                        {/* firstname */}
                        <div className="form__div">
                            <input type="text" className="form__input" placeholder=" " name="firstname" value={user.firstname} onChange={registerInputs}/>
                            <label htmlFor="" className="form__label">First Name</label>
                        </div> 
                        {/* <div className="form-group">
                            <label className="col-md-4 control-label">First Name</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input name="firstname" placeholder="First Name" className="form-control" type="text"  value={user.firstname} onChange={registerInputs}/>
                                </div>
                            </div>
                        </div> */}
                        {submitted && !user.firstname ? <span>Please enter your first name</span> : null }
                        

                        {/* <!-- Text input--> */}
                        {/* lastname */}
                        <div className="form__div">
                            <input type="text" className="form__input" placeholder=" " name="lastname" value={user.lastname} onChange={registerInputs}/>
                            <label htmlFor="" className="form__label">Last Name</label>
                        </div>
                        {/* <div className="form-group">
                            <label className="col-md-4 control-label" >Last Name</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input name="lastname" placeholder="Last Name" className="form-control" type="text"  value={user.lastname} onChange={registerInputs}/>
                                </div>
                            </div>
                        </div> */}
                        {submitted && !user.lastname ? <span>Please enter your last name</span> : null }


                        {/* <!-- Text input--> */}
                        {/* email */}
                        <div className="form__div">
                            <input type="email" className="form__input" placeholder=" " name="email" value={user.email} onChange={registerInputs}/>
                            <label htmlFor="" className="form__label">Email</label>
                        </div>
                        {/* <div className="form-group">
                            <label className="col-md-4 control-label">E-Mail</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                    <input name="email" placeholder="E-Mail Address" className="form-control" type="text"  value={user.email} onChange={registerInputs}/>
                                </div>
                            </div>
                        </div> */}
                        {submitted && !user.email ? <span>Please enter your email</span> : null }

                        {submitted && !user.specialization ? <span>Please enter your specialization</span> : null }

                        {/* <!-- Text input--> */}
                        {/* phone */}
                        <div className="form__div">
                            <input type="number" className="form__input" placeholder=" " name="phone" value={user.phone} onChange={registerInputs}/>
                            <label htmlFor="" className="form__label">Contact No.</label>
                        </div>
                        {/* <div className="form-group">
                            <label className="col-md-4 control-label">Contact No.</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                                    <input name="phone" placeholder="+91 0000000000" className="form-control" type="text"  value={user.phone} onChange={registerInputs}/>
                                </div>
                            </div>
                        </div> */}
                        {submitted && !user.phone ? <span>Please enter your phone number</span> : null }


                        {/* <!-- Text input--> */}
                        {/* address */}
                        <div className="form__div">
                            <input type="text" className="form__input" placeholder=" " name="address" value={user.address} onChange={registerInputs}/>
                            <label htmlFor="" className="form__label">Address</label>
                        </div>
              
                        {submitted && !user.address ? <span>Please enter your address</span> : null }


                        {/* <!-- Text input--> */}
                        {/* degree */}
                        <div className="form__div">
                            <input type="text" className="form__input" placeholder=" " name="degree" value={user.gender} onChange={registerInputs}/>
                            <label htmlFor="" className="form__label">Gender</label>
                        </div>
                        {/* <div className="form-group">
                            <label className="col-md-4 control-label" >Password</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input name="password" placeholder="Password" className="form-control" type="password"  value={user.password} onChange={registerInputs}/>
                                </div>
                            </div>
                        </div> */}


                      


                        {/* <!-- Button --> */}
                        <input
                        type="submit"
                        className="form__button"
                        placeholder=" "
                        name="submit"
                        value="Edit"
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
    )
}

export default PatEditProfile