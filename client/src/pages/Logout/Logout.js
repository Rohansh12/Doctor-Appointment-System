import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const Logout = () => {
    const navigate = useNavigate();

    const logoutfunc = async () => {
        try {
            const res = await fetch("/patient/logout",{
                method: 'GET',
                headers: {
                    Accept : 'application/json',
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            if(res) navigate('/',{replace: true});
            if(res.status !== 200){
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        logoutfunc();
    })

    return (
        <>
        </>
    )
}

export default Logout
