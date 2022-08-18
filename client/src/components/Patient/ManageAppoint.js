import React, { useState, useEffect } from "react";
import Dashboard from "../../pages/dashboard/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import Axios from "axios";
import Innerhtml from "../../pages/Homepage/Innerhtml";

const ManageAppoint = () => {
  let count = 0;
  const [patUser, setpatUser] = useState({});

  const callManageappointment = async () => {
    try {
      const res = await fetch("/patient/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setpatUser(data);
      // console.log(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log("Appointments are not listed");
      console.log(err);
    }
  };

  const mainid = async (mainid, id) => {
    const deleteappoint = await Axios.delete(`/patient/delete/${mainid}/${id}`);
    const message = JSON.stringify(deleteappoint.data);
    console.log(message);
    // console.log(mainid);
    // console.log(id);
    if (message === '{"message":"Appointment Deleted"}') {
      toast.success("Appointment deleted successfully", {
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

  const refreshPage = ()=>{
    setInterval(()=>{
      window.location.reload();
    },1000)
  }

  useEffect(() => {
    callManageappointment();
  }, [count]);

  const appoint = patUser.appointments;
  console.log(appoint);
  return (
    <>
        <Innerhtml/>

      <Dashboard />
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
                <th scope="col">Delete</th>
              </tr>
            </thead>
            {appoint?.map((element, id) => {
              return (
                <tbody>
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{element.pname}</td>
                    <td>{element.docname}</td>
                    <td>{element.date}</td>
                    <td>{element.time}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-danger btn-sm px-3"
                        onClick={() => {
                          mainid(patUser._id, element._id);
                          refreshPage();
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-trash-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                      </button>
                    </td>
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
};

export default ManageAppoint;
