import React,{useState} from 'react'
import {NavLink, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {
    const navigate = useNavigate();

    const [submitted, setSubmitted] = useState(false);

    const [valid, setValid] = useState(false);

    const [user,setUser] = useState({
        firstname:"",lastname:"",email:"",specialization:"",phone:"",address:"",password:"",cpassword:""});

    let name,value;
    const registerInputs = (e) => {
        name = e.target.name ;
        value = e.target.value;

        setUser({...user,[name]:value});
    }

    const postData = async (e) => {
        e.preventDefault();

        const {firstname,lastname,email,specialization,phone,address,password,cpassword} = user;
        const res = await fetch("/doctor/signup",{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstname,lastname,email,specialization,phone,address,password,cpassword
            })
        });

        

        const data = await res.json();
        const message = JSON.stringify(data);

    
        if(data){
            if( message ===`{"message":"User registered successfully"}`){
                if(user.firstname && user.lastname && user.email && user.specialization && user.phone && user.address && user.password && user.cpassword){
                        setValid(true);
                }
            // console.log(message);
            toast.success(message,{
                position: "top-center",
            })
            setInterval(() => {
                navigate("/doctor/signin")
                window.location.reload();
            },1000)
            
            }
            else{
            toast.error(message,{
                position: "top-center",
            });
            setSubmitted(false);
            }

            // if(user.firstname && user.lastname && user.email && user.specialization && user.phone && user.address && user.password && user.cpassword){
            //     setValid(true);
            // }    
           //  console.log(data);
           
        }else{
            console.log("else statement")
        }

        // if(data.status === 422 || !data){
        //     window.alert("Invalid Registration");
        //     console.log(data);
        // }else{
        //     if(user.firstname && user.lastname && user.email && user.specialization && user.phone && user.address && user.password && user.cpassword){
        //         setValid(true);
        //     }    
        //     setSubmitted(true);
            // window.alert("Successful Registration");
            // console.log("Successful Registration");
        //}
    }

    return (
        <>
        <div className="l-form">
            <form className="form" action=" " id="signupform" method="post" onSubmit={postData}>
                <center>
                    <h2 className="form__title"><b>Registration Form</b></h2>
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
                        {/* password */}
                        <div className="form__div">
                            <input type="password" className="form__input" placeholder=" " name="password" value={user.password} onChange={registerInputs}/>
                            <label htmlFor="" className="form__label">Password</label>
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
                        {submitted && !user.password ? <span>Please enter a password</span> : null }


                        {/* <!-- Text input--> */}
                        {/* cpassword */}
                        <div className="form__div">
                            <input type="password" className="form__input" placeholder=" " name="cpassword" value={user.cpassword} onChange={registerInputs}/>
                            <label htmlFor="" className="form__label">Confirm Password</label>
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
                        {submitted && !user.cpassword ? <span>Please enter a confirm password</span> : null }

                        <div className="form__div">
                            <NavLink className="text-center" to='/doctor/signin'>Signin</NavLink>
                        </div>

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

export default Signup