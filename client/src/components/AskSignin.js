import React from 'react'
import { NavLink } from 'react-router-dom'

const AskSignin = () => {
    return (
        <>
        <div className="l-form">
            <form className="form">
            <h1 className="form__title">Sign in</h1>
                <div className="form__div">
                    
                    <NavLink className="nav-link" to="/doctor/signin1"><button className="form__button">Doctor Sign</button></NavLink>
                </div>
                <div className="form__div">
                <NavLink className="nav-link" to="/patient/signin2"><button className="form__button">Patient Signin</button></NavLink>
                </div>
            </form>
        </div>
        </>
    )
}

export default AskSignin
