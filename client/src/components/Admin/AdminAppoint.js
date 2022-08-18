import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import AdDashboard from "../../pages/dashboard/AdDashboard";
import Innerhtml from "../../pages/Homepage/Innerhtml";

const AdminAppoint = () => {
  const navigate = useNavigate();
  const [appoint, setappoint] = useState();
  const user = async () => {
    try {
      const res = await Axios.get("/admin/appointment");
      setappoint(res.data);
    } catch (e) {
      navigate("/admin");
    }
  };

  const mainid = async (mainid, id) => {
    const deleteappoint = await Axios.delete(`/doctor/delete/${mainid}/${id}`);
    console.log(mainid);
    console.log(id);
    const message = JSON.stringify(deleteappoint.data);
    console.log(message);
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

  const refreshPage = () => {
    setInterval(() => {
      window.location.reload();
    }, 1000);
  };

//   console.log(appoin);
  useEffect(() => {
    user();
  }, []);
  return (
    <>
        <Innerhtml/>
        <AdDashboard />
        {/* <div className="container-md">
        <table class="table table-hover table-responsive" id="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">User Name</th>
              <th scope="col">Patient Name</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Delete</th>
              </tr>
          </thead>
          {appoin?.map((element, id) => {
            return (
              <tbody>
                <tr key={id}>
                  <td className="text-center">{element.firstname}</td>
                  {element.appointments.map((element, id) => {
                    return (
                      <tr key={id}>
                        <td>{element.pname}</td>
                        <td>{element.date}</td>
                        <td>{element.time}</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-danger btn-sm px-3"
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
                    );
                  })}
                </tr>
              </tbody>
            );
          })}
        </table>
      </div> */}
      <div className="l-form">
        <form className="form tableappoint">
          <table class="table align-middle" id="tablechanges">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">User Name</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Patient Email</th>
                <th scope="col">Doctor Name</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            {appoint?.map((pat, id) => {
              return (
                <tbody>
                  {pat.appointments.map((element, id) => {
                    return (
                      <tr>
                        <td><i class='bx bxs-right-arrow bx-burst bx-rotate-90' ></i></td>
                        <td>{pat.firstname}</td>
                        <td>{element.pname}</td>
                        <td>{pat.email}</td>
                        <td>{element.docname}</td>
                        <td>{element.date}</td>
                        <td>{element.time}</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-danger btn-sm px-3"
                            onClick={() => {
                            mainid(pat._id, element._id)
                            refreshPage();
                            }
                            }
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
                    );
                  })}
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

export default AdminAppoint;
