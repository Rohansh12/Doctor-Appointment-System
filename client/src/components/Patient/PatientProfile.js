import React from 'react'
import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import Innerhtml from '../../pages/Homepage/Innerhtml';



const PatientProfile = () => {

    let count = 0;
    const navigate = useNavigate();

    const [patUser, setPatUser] = useState({});

    const callProfilePage = async () => {
        try{
            const res = await fetch('/patient/profile',{
                method:"GET",
                headers: {
                    Accept : "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            setPatUser({...patUser, firstname:data.firstname, lastname:data.lastname, email:data.email, gender:data.gender, phone:data.phone, address:data.address});
            if(!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }catch(err){
            console.log("Patient profile page not avaliable");
            console.log(err);
            navigate('/patient/signin');
        }
    }

    useEffect(() => {
        callProfilePage();
    },[count]);
    return (
        <>
        <Innerhtml/>

        <Dashboard />
        {/* https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.png */}
<section className="vh-100" style={{backgroundColor: '#f4f5f7'}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col col-lg-6 mb-4 mb-lg-0 ">
              <div className="card mb-3 shadow" style={{borderRadius: '.5rem'}}>
                <div className="row g-0">
                  <div className="col-md-4 gradient-custom text-center text-white color" style={{borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem'}}>
                    <img src="https://www.kinesiology.com.au/wp-content/uploads/testimonial-user.svg" alt="..." className="img-fluid my-5" style={{width: '80px'}} />
                    <h5>{patUser.firstname} {patUser.lastname}</h5>
                    <p>Patient</p>
                    <NavLink to='/patient/edit'><i class='bx bxs-edit' style={{fontSize: '25px',color:"#1977cc"}}></i></NavLink>
                    {/* <i className="far fa-edit mb-5" /> */}
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">{patUser.email}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Phone</h6>
                          <p className="text-muted">{patUser.phone}</p>
                        </div>
                      </div>
                      <h6></h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Gender</h6>
                          <p className="text-muted">{patUser.gender}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Address</h6>
                          <p className="text-muted">{patUser.address}</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-start">
                        <a href="#!"><i className="fab fa-facebook-f fa-lg me-3" /></a>
                        <a href="#!"><i className="fab fa-twitter fa-lg me-3" /></a>
                        <a href="#!"><i className="fab fa-instagram fa-lg" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* <div className="l-form">
                <form className="form" method="get" >
                    <div className="row">
                        <div className="col-md-4">
                            <img src="../images/logo.svg" alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                            <h3>Contact <i>Details</i></h3>
                                    <table>
                                        <tbody>
                                            <tr><td>Name</td><td>{patUser.firstname} {patUser.lastname}</td></tr>
                                            <tr><td>Gender</td><td>{patUser.gender}</td></tr>
                                            <tr><td>Phone</td><td>{patUser.phone}</td></tr>
                                            <tr><td>Email</td><td>{patUser.email}</td></tr>
                                            <tr><td>Country</td><td>{patUser.address}</td></tr>
                                        </tbody>
                                    </table>
                                <p className="profile"></p>
                            </div>
                        </div>
                    </div>
                </form>
            </div> */}
            {/* <div className="l-form">
                <form className="form">
                    <div className="form__div">
                        <div className="col-md-4">
                            <img src="./images/logo.svg" alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>Abc</h5>
                                <h6>Doctor</h6>
                                <p className="profile"></p>
                            </div>
                        </div>
                    </div>
                </form>
            </div> */}
        </>
    )
}

export default PatientProfile
