import React, { useEffect } from 'react'
import { userState } from '../context/userContext';
import { Outlet, useNavigate } from 'react-router-dom';

function DoctorHome() {
    let {setDoctorDetails} = userState();
    let navigate=useNavigate()
    useEffect(() => {
      let doctorData = localStorage.getItem("doctortoken");
      let parsedToken = JSON.parse(doctorData);
      if (!parsedToken) {
          navigate("/doctor-login");
      }
      setDoctorDetails(parsedToken)
    }, []);
  return (
    <div>
       <Outlet/>
    </div>
  )
}

export default DoctorHome
