import React, { useEffect } from 'react'
import { userState } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

function DoctorHome() {
    let {setDoctorDetails} = userState();
    let navigate=useNavigate()
    useEffect(() => {
      let doctorData = localStorage.getItem("doctortoken");
      if (!doctorData) {
          navigate("/doctor-login");
      }
      setDoctorDetails(doctorData)
    }, []);
  return (
    <div>
      dochome
    </div>
  )
}

export default DoctorHome
