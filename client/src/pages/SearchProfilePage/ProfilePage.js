import React, { useEffect, useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Axios from 'axios';
import './profilepage.css'
import Innerhtml from'../Homepage/Innerhtml'

const ProfilePage = () => {
  const navigate = useNavigate();

  const [docUser, setDocUser] = useState([]);
  const profileDetails = async ()=>{
    try{
      const details = await Axios.get('/admin/search');
      // console.log(details.data);
      setDocUser(details.data);
      console.log(details.data);
      const length = details.data.length;
      // console.log(length)
      if(length === 0){
        toast.info("No result found",{
          position:"bottom-right",
        })
      }else{
        toast.info(`${length} result found`,{
          position:"bottom-right",
          autoClose: 2500,
        })
      }
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    profileDetails();
  }, [])

    return (
        <>
        <Innerhtml />
            <div className="container bootstrap snippets bootdey">
        <div className="row">
          <div className="post-list">
            <div className="row">
              {/* <div className="col-sm-2">
                <div className="picture">
                  <img alt="Opt wizard thumbnail" src="https://bootdey.com/img/Content/user_1.jpg" />
                </div>
              </div> */}
                {docUser?.map((element,id) => {
                    return(
                      <>
                        <div className="col-sm-6">
                          <h4>
                            <a hre="#" className="username">{element.firstname} {element.lastname}</a><br/>
                            {/* &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; */}
                            <label className="label label-info">#{element.specialization}</label>
                          </h4>
                          {/* <h5> 
                            <i className="fa fa-calendar" />
                            Aug 06, 12:48 
                          </h5> */}
                          <p className="description">Phone No. : {element.phone} <br/> EmailId: {element.email}<br/> Address: {element.address} <br/> Degree: {element.Qualifications[0].degree} <br/> Experience: {element.Qualifications[0].experience}</p>    
                        </div>
                        <div className="col-sm-4" data-no-turbolink>
                        <NavLink to='/patient/bookappoint'>
                          <a className="btn btn-info btn-download btn-round pull-right makeLoading" href="#">
                            <i className="fa fa-share" /> Take a Appointment
                          </a>            
                          </NavLink>
                        </div>
                        <hr style={{width:"90%",textAlign:"left",marginLeft:"0"}}></hr>
                        </>
                    );
                  })
                }
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
        </>
    )
}

export default ProfilePage
