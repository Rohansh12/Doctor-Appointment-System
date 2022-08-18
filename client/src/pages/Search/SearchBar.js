import React, { useEffect, useLayoutEffect, useState } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import "./Search.css";
// import "./searchex.css"

const SearchBar = () => {
  let location = [];
  let specialization = [];

  const [users, setUsers] = useState([]);
  const [special, setSpecial] = useState([]);
  const [text, setText] = useState({
    location: "",
    specialization: "",
  });
  const [suggestion, setSuggestion] = useState([]);

  const registerInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setText({ ...text, [name]: value });
  };

  const loadUsers = async () => {
    const docinfo = await Axios.get("/doctor/search");
    const data = docinfo.data;
    for (let i = 0; i < data.length; i++) {
      location = location.concat(data[i].address.toUpperCase());
    }
    // setSuggestion(data.address);
    location = location.filter((element, id, a) => a.indexOf(element) === id);
    setUsers(location);
    // console.log(location)
    for (let i = 0; i < data.length; i++) {
      specialization = specialization.concat(data[i].specialization);
    }
    // console.log(specialization);
    specialization = specialization.filter(
      (element, id, a) => a.indexOf(element) === id
    );
    setSpecial(specialization);
    // console.log(specialization);
  };
  // console.log(text.location)
  // console.log(text.specialization)
  const sendData = async (location, specialization) => {
    const sendDatas = await Axios.get(`/admin/search/${location}/${specialization}`);
    // console.log(location);
    // console.log(specialization);
    // console.log(sendDatas.data)
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <div class="container">
        <form action="#" method="post" novalidate="novalidate">
          <div class="row">
            <div class="col-lg-8">
              <div class="row">
                {/* <select class="form-control search-slt" id="exampleFormControlSelect1" name="location" value={text.location} onChange={registerInputs}>
                            <option selected>Location</option>
                                <option value="Vadodara">Vadodara</option>
                                <option value="Ahmedabad">Ahmedabad</option>
                            </select> */}
                {/* <div class="col-lg-3 col-md-7 col-sm-12 p-0">
                            {location?.map((element,id)=>{
                                <select class="form-control search-slt" id="exampleFormControlSelect1" name="location" value={text.location} onChange={registerInputs}>
                              return(
                                    <option selected>Location</option>
                                    <option value={element[id]}>{element[id]}</option>
                              );
                                </select> 
                            })}
                            </div> */}
                <div className="col-lg-3 col-md-7 col-sm-12 p-0">
                  <select
                    class="form-control search-slt"
                    id="exampleFormControlSelect1"
                    name="location"
                    value={text.location}
                    onChange={registerInputs}
                  >
                  <option value="select" selected>Select Location</option>
                    {users?.map((element, id) => {
                      return <option value={element}>{element}</option>;
                    })}

                    {/* <option value="location">Location</option> */}
                  </select>
                </div>
                {/* <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <select class="form-control search-slt" id="exampleFormControlSelect1" name="specialization" value={text.specialization} onChange={registerInputs}>
                            <option value="">Select your specialization</option>
                                <option value="Gynecologist">Gynecologist</option>
                                <option value="Pediatrician">Pediatrician</option>
                                <option value="Dermatologist">Dermatologist</option>
                                <option value="Orthopedic">Orthopedic</option>
                                <option value="Dentist">Dentist</option>
                                <option value="General Physician">General Physician</option>
                            </select>
                        </div> */}
                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                  <select
                    class="form-control search-slt"
                    id="exampleFormControlSelect1"
                    name="specialization"
                    value={text.specialization}
                    onChange={registerInputs}
                  >
                  <option value="select" selected>Select Specialization</option>
                    {special?.map((element, id) => {
                      return <option value={element}>{element}</option>;
                    })}
                  </select>
                </div>

                {/* <div class="col-lg-3 col-md-7 col-sm-12 p-0"> */}
                {/* <select class="form-control search-slt" id="exampleFormControlSelect1">
                            <option selected>Category</option>
                                <option></option>
                                <option>Example one</option>
                                <option>Example one</option>
                                <option>Example one</option>
                                <option>Example one</option>
                                <option>Example one</option>
                            </select> */}
                {/* <input type="text" className="form-control search-slt" placeholder="Search for a doctor"/> */}
                {/* </div> */}
                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                  <NavLink to="/search">
                  <button
                    type="button"
                    class="btn btn-primary wrn-btn"
                    onClick={() => {
                      sendData(text.location, text.specialization);
                    }}
                  >
                    Search
                  </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
