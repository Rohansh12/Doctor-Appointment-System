import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../../pages/SearchProfilePage/profilepage.css'
import Innerhtml from '../../pages/Homepage/Innerhtml';
import DocDashboard from "../../pages/dashboard/DocDashboard";


const PatHistory = () => {
  let data1 = [];
    const [patDetails, setpatDetails] = useState([]);
  const profileDetails = async ()=>{
    try{
      const details = await Axios.get('/doctor/history');
      const data = [details.data];
      // console.log(details.data);
      // setpatDetails([details.data]);
      // console.log(details.data);

      for (let i = 0; i <= data.length; i++){
        // setpatDetails(details.data.appointments[i]);
        data1 = data[i].appointments;
        let length=data1.length;
      console.log(data1.length);
      // console.log(patDetails)
      setpatDetails(data1)
      
      if(length === 0){
        toast.info("No result found",{
          position:"top-center",
        })
      }else{
        toast.info(`${length} result found`,{
          position:"bottom-right",
          autoClose: 2500,
        })
      }
      }
    }catch(err){
      console.log(err)
    }
  }
  console.log(patDetails)


  useEffect(() => {
    profileDetails();
  }, [])

    return (
        <>
          {/* <div className="container bootstrap snippets bootdey">
        <div className="row">
          <div className="post-list">
            <div className="row">
                {patDetails?.map((element,id) => {
                    return(
                      
                          <>
                          
                          <div className="col-sm-6">
                          <h4>
                            <a hre="#" className="username">Patient Name: {element.pname}</a><br/>
                            <label className="label label-info">Doctor Name: {element.docname}</label>
                          </h4>
                          <p className="description">Appointment date: {element.date} <br/> Appointment time: {element.time}</p>    
                        </div>
                        <div className="col-sm-4" data-no-turbolink>
                        </div>
                        <hr/>
                          </>
                    );
                  })
                }
            </div>
          </div>
        </div>
      </div> */}
      <Innerhtml/>
      <DocDashboard />
      <div className="l-form">
                <form className="form tableappoint">
                    <table class="table align-middle" id="tablechanges">
                        <thead>
                            <tr>
                                <th scope="col">Sr No.</th>
                                <th scope="col">Patient Name</th>
                                <th scope="col">Doctor Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                            </tr>
                        </thead>
                        {patDetails?.map((element, id) => {
                            return (
                                <tbody>
                                    <tr key={id}>
                                        <td>{id + 1}</td>
                                        <td>{element.pname}</td>
                                        <td>{element.docname}</td>
                                        <td>{element.date}</td>
                                        <td>{element.time}</td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </table>
                </form>
            </div>
      <ToastContainer />
        </>
    );
}

export default PatHistory