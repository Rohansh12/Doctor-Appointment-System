import React from 'react'
import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import DocDashboard from "../../pages/dashboard/DocDashboard";
// import Innerhtml from '../../pages/Homepage/Innerhtml';
import Navbar from "../../components/Navbartwo"
import docimg from "../Doctor/doctor1.png"
import Innerhtml from '../../pages/Homepage/Innerhtml';

const DoctorProfile = () => {
    let count = 0;

    const [docUser, setDocUser] = useState({});

    const navigate = useNavigate();

    const callProfilePage = async () => {
        try{
            const res = await fetch('/doctor/profile',{
                method:"GET",
                headers: {
                    Accept : "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();

            setDocUser({...docUser, firstname:data.firstname, lastname:data.lastname, email:data.email, specialization:data.specialization, phone:data.phone, address:data.address})

            if(!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }catch(err){
            console.log("Doctor profile page not avaliable");
            navigate('/doctor/signin');
        }
    }

    useEffect(() => {
        callProfilePage();
    },[count]);

    return (
        <>
        {/* <Navbar /> */}
        <Innerhtml/>

        <DocDashboard />
            <section className="vh-100" style={{backgroundColor: '#f4f5f7'}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col col-lg-6 mb-4 mb-lg-0 ">
              <div className="card mb-3 shadow" style={{borderRadius: '.5rem'}}>
                <div className="row g-0">
                  <div className="col-md-4 gradient-custom text-center text-white color" style={{borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem'}}>
                    <img src={docimg} alt="..." className="img-fluid my-5" style={{width: '80px'}} />
                    <h5>{docUser.firstname} {docUser.lastname}</h5>
                    <p>Doctor</p>
                    <NavLink to='/doctor/edit'><i class='bx bxs-edit' style={{fontSize: '25px',color:"#1977cc"}}></i></NavLink>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">{docUser.email}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Phone</h6>
                          <p className="text-muted">{docUser.phone}</p>
                        </div>
                      </div>
                      <h6></h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Specialization</h6>
                          <p className="text-muted">{docUser.specialization}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Address</h6>
                          <p className="text-muted">{docUser.address}</p>
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

export default DoctorProfile
