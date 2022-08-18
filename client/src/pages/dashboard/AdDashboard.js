import React from 'react'
import { NavLink } from 'react-router-dom'

const AdDashboard = () => {
    return (
        <>
            <div className="sidebar close">
        <div class="logo-details">
          <span class="logo_name">CodingLab</span>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/admin/pat" className="link_name">
              <i class="bx bxs-user"></i>
              <span className="link_name">Patient</span>
            </NavLink>
            <ul className="sub-menu blank">
              <li>
                <NavLink to="/admin/pat" className="link_name">
                  Patient
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/admin/doc" className="link_name">
              <i class="bx bxs-calendar-check"></i>
              <span className="link_name">Doctor</span>
            </NavLink>
            <ul className="sub-menu blank">
              <li>
                <NavLink to="/admin/doc" className="link_name">
                  Doctor
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/admin/appoint" className="link_name">
              <i class="bx bx-edit-alt"></i>
              <span className="link_name">Manage Appointment</span>
            </NavLink>
            <ul className="sub-menu blank">
              <li>
                <NavLink to="/admin/appoint" className="link_name">
                  Manage Appointment
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/admin/logout" className="link_name">
            <i class='bx bx-log-out bx-flip-horizontal' ></i>
              <span className="link_name">Logout</span>
            </NavLink>
            <ul className="sub-menu blank">
              <li>
                <NavLink to="/admin/logout" className="link_name">
                  Logout
                </NavLink>
              </li>
            </ul>
          </li>

          {/* <li>
              <a href="#">
                <i className="bx bx-grid-alt" />
                <span className="link_name">Dashboard</span>
              </a>
              <ul className="sub-menu blank">
                <li><a className="link_name" href="#">Category</a></li>
              </ul>
            </li> */}
        </ul>
      </div>
        </>
    )
}

export default AdDashboard
