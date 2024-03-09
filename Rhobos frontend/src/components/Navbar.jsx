import React, { useEffect } from "react";
import logo from "../../public/Lybrate-Logo.webp";
import { userState } from "../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import { LuMessageCircle } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar() {
  let { userDetails, setUserDetails ,doctorDetails,setDoctorDetails } = userState();
  let navigate = useNavigate();

  function logoutHandler() {
    if(userDetails){
      localStorage.removeItem("token");
      setUserDetails(null);
      navigate("/");
    }
    else if(doctorDetails){
      localStorage.removeItem("doctortoken");
      setDoctorDetails(null)
      navigate('/doctor-login')
    }
    
  }



  return (
    <div className="flex px-4  justify-between h-14  items-center">
      <div className="w-1/5 h-full flex justify-center py-1">
        {!(userDetails || doctorDetails)&& <img src={logo} alt="" className="w-24 h-9" />}
        {userDetails&&<Link to={"/home"}>
          <img src={logo} alt="" className="w-24 h-9" />
        </Link>}
        {doctorDetails&&<Link to={"/doctorhome"}>
          <img src={logo} alt="" className="w-24 h-9" />
        </Link>}
      </div>
      <div className="flex w-2/5 justify-end  text-sm text-gray-500 items-center mr-4 font-semibold">
        {/* <h1>Get the App</h1>
        <h1>For Doctors</h1> */}
        {userDetails && (
          <div className="flex items-center">
            <Link to={"/home/message"} className="mr-4">
              <LuMessageCircle className="w-6 h-6" />
            </Link>

            <button className="text-red-600 border border-red-600 rounded px-2 py-1 font-semibold mx-3">
              Book Free Appointment
            </button>
            <Link to={'/home/profile'}><FaRegUserCircle className="w-6 h-6"/></Link>
          </div>
        )}
        {doctorDetails&&
        <div className="flex"><Link to={"/doctorhome/message"} className="mr-4">
              <LuMessageCircle className="w-6 h-6" />
            </Link><Link to={'/doctorhome/profile'}> <FaRegUserCircle className="w-6 h-6"/></Link></div>}

        {!(userDetails || doctorDetails) ? (
          <h1 className="mx-3">Login/Signup</h1>
        ) : (
          <button onClick={logoutHandler} className="border border-red-700 mx-4 rounded-lg  p-1 hover:text-red-700">
            <h1 className="font-semibold text-base mx-3">Logout</h1>
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
