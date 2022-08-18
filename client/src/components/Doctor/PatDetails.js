import Axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import DocDashboard from "../../pages/dashboard/DocDashboard";
import Innerhtml from "../../pages/Homepage/Innerhtml";

const PatDetails = () => {
  let count = 0;

  const [search, setSearch] = useState();

  // const searchInput = async (e) => {
  //   setSearch(e.target.value);
  // };

  // const postData = async (e) => {
  //     e.preventDefault();
  const callPatientSearch = async () => {
    try {
      const res = await fetch("/doctor/patdetails", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setSearch(data);
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
  // const patData = (id) => {
  //   console.log(search[id])
  // }

  const sendData = async (id) => {
    console.log(id)
    const sendPatData = await Axios.post(`/doctor/patdetails/${id}`);
  }
  // const patientSearch = async (req, res) => {
  //   const searchpat = await Axios.get("/doctor/patdetails");
  //   console.log(searchpat.data);
  //   setSearch(searchpat.data);
  // };
  // }

  useEffect(() => {
    callPatientSearch();
  }, [count]);

  const searchpat = search;
  console.log(searchpat);

  return (
    <>
        <Innerhtml/>

      <DocDashboard />
      {/* <div className="l-form">
        <form class="form">
        <div className="form__div">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              name="patname"
            />
            <label for="" className="form__label">
              Search
            </label>
          </div>
        <button class="btn btn-outline-primary"  type="submit">Search</button>
      </form>
      </div> */}

      <div className="l-form">
        <form className="form tableappoint">
          <table class="table align-middle table table-hover table-fixed" id="tablechanges">
            <thead>
              <tr>
                <th scope="col">Sr No.</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">History</th>
              </tr>
            </thead>
            {searchpat?.map((element, id) => {
              return (
                <tbody>
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{element.firstname} {element.lastname}</td>
                    <td>{element.phone}</td>
                    <td>{element.email}</td>
                    <td>{element.gender}</td>
                    <td><NavLink to="/doctor/history"><button type="button" class="btn btn-info" onClick={()=>{sendData(element._id)}}>Info</button></NavLink></td>
                  </tr>
                </tbody>
              );
            })}
            
            {/* {searchpat?.map((element, id) => {
              return (
                <tbody>
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{element[0].firstname} {element[0].lastname}</td>
                    <td>{element[0].phone}</td>
                    <td>{element[0].email}</td>
                    <td>{element[0].gender}</td>
                  </tr>
                </tbody>
              );
            })} */}
          </table>
        </form>
      </div>
    </>
  );
};

export default PatDetails;
