import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbartwo from "./components/Navbartwo";
// import Home from "./components/Home";
// import HomePage from "./pages/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";

//doctor imports
import Signup from "./components/Doctor/Signup";
import Signin from "./components/Doctor/Signin";
import DoctorProfile from "./components/Doctor/DoctorProfile";
import DoctorManageApp from "./components/Doctor/DoctorManageApp";
import PatDetails from "./components/Doctor/PatDetails"
import EditProfile from "./components/Doctor/EditProfile";

//patient imports
import PatientSignup from "./components/Patient/PatientSignup";
import PatientProfile from "./components/Patient/PatientProfile";
import PatientSignin from "./components/Patient/PatientSignin";
import Bookappoint from "./components/Patient/Bookappoint";
import ManageAppoint from "./components/Patient/ManageAppoint";
// import TopBar from "./pages/Homepage/TopBar";
// import Header from "./pages/Homepage/Header";

//admin imports
import AdminSignin from "./components/Admin/AdminSignin";
import AdminDoctor from "./components/Admin/AdminDoc";
import AdminPatient from "./components/Admin/AdminPat";
import AdminAppoint from "./components/Admin/AdminAppoint";
// import Admin from "./components/Admin/Admin";


import AskSignin from "./components/AskSignin";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage/Homepage"
import Logout from "./pages/Logout/Logout";
import DocLogout from "./pages/Logout/DocLogout";
import AdLogout from "./pages/Logout/AdLogout";
import ProfilePage from "./pages/SearchProfilePage/ProfilePage";
import "react-toastify/dist/ReactToastify.css";
import PatHistory from "./components/Doctor/PatHistory";
import PatEditProfile from "./components/Patient/PatEditProfile";
// import Innerhtml from "./pages/Homepage/Innerhtml";

const App = () => {
  return (
    
    <>

      {/* <Homepage /> */}
      {/* <TopBar />
      <Header /> */}
      

      {/* <Navbartwo /> */}

      <Routes >
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/inner" element={<Innerhtml />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} /> 
      

      for option of signin
      <Route path="/signin" element={<AskSignin />} /> 


      {/* for doctor  */}
      for doctor signup 
      <Route path="/doctor/signup" element={<Signup />} /> 
      for doctor 
      <Route path="/doctor/signin" element={<Signin />} /> 
      for doctor logout
      <Route path="/doctor/logout" element={<DocLogout />} />
      for managing doctor appointment
      <Route path="/doctor/DoctorManageApp" element={<DoctorManageApp />} />
      for patient details (doctor) 
      <Route path="/doctor/PatDetails" element={<PatDetails />} /> 
      checking doctor profile card 
      <Route path="/doctor/profile" element={<DoctorProfile />} /> 
      for editing profile 
      <Route path="/doctor/edit" element={<EditProfile />}/>
      for patient history 
      <Route path="/doctor/history" element={<PatHistory />} />


      {/* for patient */}
      for patient profile 
      <Route path="/patient/profile" element={<PatientProfile />} /> 
      for booking appointment(patient) 
      <Route path="/patient/bookappoint" element={<Bookappoint />} /> 
      for managing patient appointment 
      <Route path="/patient/manageappoint" element={<ManageAppoint />} /> 
      for patient signup  
      <Route path="/patient/signup" element={<PatientSignup />} /> 
      for patient 
      <Route path="/patient/signin" element={<PatientSignin />} /> 
      for patient logout
      <Route path="/patient/logout" element={<Logout />} />
      for editing profile 
      <Route path="/patient/edit" element={<PatEditProfile />} />


      {/* for admin rotues */}
      <Route path="/admin" element={<AdminSignin />} />
      <Route path="/admin/doc" element={<AdminDoctor />} />
      <Route path="/admin/pat" element={<AdminPatient />} />
      <Route path="/admin/appoint" element={<AdminAppoint />} />
      <Route path="/admin/logout" element={<AdLogout />} />

      {/* for search profile page  */}
      <Route path="/search" element={<ProfilePage />}/>

      for error page  
      <Route path="*" element={<ErrorPage />} /> 
      </Routes>
      
    </>
  );
};

export default App;
