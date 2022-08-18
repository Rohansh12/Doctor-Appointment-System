import React, { useEffect, useState } from 'react'
import DocDashboard from '../../pages/dashboard/DocDashboard'
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { Axios } from 'axios';
import Innerhtml from '../../pages/Homepage/Innerhtml'


const EditProfile = () => {
    const navigate = useNavigate();

    const [submitted, setSubmitted] = useState(false);

    const [valid, setValid] = useState(false);

    const [user,setUser] = useState({
        firstname:"",lastname:"",email:"",specialization:"",phone:"",address:"",degree:"",experience:""});

    let name,value;
    const registerInputs = (e) => {
        name = e.target.name ;
        value = e.target.value;

        setUser({...user,[name]:value});
    }

    const getData = async () => {
        try {
          const res = await fetch("/doctor/profile", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          const data = await res.json();
          setUser({
            ...user,
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            specialization: data.specialization,
            phone: data.phone,
            address: data.address
          });
    
          if (!res.status === 200) {
            const error = new Error(res.error);
            throw error;
          }
        } catch (err) {
          navigate('/doctor/signin')
          console.log("Profile page not avaliable");
          console.log(err);
        }
      };

      const postData = async (e) => {
        e.preventDefault();
    
        const { firstname,lastname,email,specialization,phone,address,degree,experience } = user;
    
        const res = await fetch("/doctor/editprofile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstname,lastname,email,specialization,phone,address,degree,experience
          }),
        });
        const data = await res.json();
        const message = JSON.stringify(data);
        if (message === '{"message":"Edit Successfully"}') {
          toast.success("Edit Successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          navigate('/doctor/profile')
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
    

    useEffect(() => {
        getData();
    }, [])
    return (
        <>
        <Innerhtml/>
            <DocDashboard />
            <div className="l-form">
            <form className="form" action=" " id="signupform" method="post"
             onSubmit={postData}
             >
                <center>
                    <h2 className="form__title"><b>Edit Profile</b></h2>
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


                        {/* <!-- Text input--> */}
                        {/* specialization */}
                        {/* <div className="form-group">
                            <label className="col-md-4 control-label">Specialization</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                    <input name="specialization" placeholder="Specialization" className="form-control" type="text"  value={user.specialization} onChange={registerInputs}/>
                                </div>
                            </div>
                        </div> */}

                        
                        {/* <!-- Select input--> */}
                        <div className="form__div">
                            <select id="selection" className="form__input" name="specialization" value={user.specialization} onChange={registerInputs}>
                                <option value="">Select your specialization</option>
                                <option value="Gynecologist">Gynecologist</option>
                                <option value="Pediatrician">Pediatrician</option>
                                <option value="Dermatologist">Dermatologist</option>
                                <option value="Orthopedic">Orthopedic</option>
                                <option value="Dentist">Dentist</option>
                                <option value="General Physician">General Physician</option>
                            </select>
                            <label htmlFor="" className="form__label">
                                Specialization
                            </label>
                        </div>
                        {/* <div className="form-group">
                            <label className="col-md-4 control-label">Specialization</label>
                            <div className="col-md-4 selectContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                                    <select name="specialization" className="form-control selectpicker" value={user.specialization} onChange={registerInputs}>
                                        <option value="">Select your specialization</option>
                                        <option value="General Physician">General Physician</option>
                                        <option value="Gynecologist">Gynecologist</option>
                                        <option value="Pediatrician">Pediatrician</option>
                                        <option value="Dermatologist">Dermatologist</option>
                                        <option value="Orthopedic">Orthopedic</option>
                                        <option value="Dentist">Dentist</option>
                                    </select>
                                </div>
                            </div>
                        </div> */}
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
                        {/* city */}
                        {/* <div className="form__div">
                            <input type="text" className="form__input" placeholder=" " name="city" value={user.city} onChange={registerInputs}/>
                            <label htmlFor="" className="form__label">City</label>
                        </div> */}
                        {/* <div className="form-group">
                            <label className="col-md-4 control-label">Address</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input name="address" placeholder="Address" className="form-control" type="text"  value={user.address} onChange={registerInputs}/>
                                </div>
                            </div>
                        </div> */}
                        {submitted && !user.address ? <span>Please enter your address</span> : null }


                        {/* <!-- Text input--> */}
                        {/* degree */}
                        <div className="form__div">
                            <input type="text" className="form__input" placeholder=" " name="degree" value={user.degree} onChange={registerInputs}/>
                            <label htmlFor="" className="form__label">Degree</label>
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


                        {/* <!-- Text input--> */}
                        {/* cpassword */}
                        <div className="form__div">
                            <input type="text" className="form__input" placeholder=" " name="experience" value={user.experience} onChange={registerInputs}/>
                            <label htmlFor="" className="form__label">Experience(In Year)</label>
                        </div>
                        {/* <div className="form-group">
                            <label className="col-md-4 control-label" >Confirm Password</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input name="cpassword" placeholder="Confirm Password" className="form-control" type="password"  value={user.cpassword} onChange={registerInputs}/>
                                </div>
                            </div>
                        </div> */}


                        {/* <!-- Button --> */}
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
    )
}

export default EditProfile