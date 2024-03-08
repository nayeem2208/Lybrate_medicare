import React, { useEffect } from "react";
import logo from "../../public/Lybrate-Logo.webp";
import { userState } from "../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import { LuMessageCircle } from "react-icons/lu";

function Navbar() {
  let { userDetails, setUserDetails ,doctorDetails,setDoctorDetails } = userState();
  let navigate = useNavigate();

  function logoutHandler() {
    localStorage.removeItem("token");
    localStorage.removeItem("doctortoken");
    setUserDetails(null);
    setDoctorDetails(null)
    navigate("/");
  }



  return (
    <div className="flex px-4  justify-between h-14  items-center">
      <div className="w-1/5 h-full flex justify-center py-1">
        <Link to={"/home"}>
          <img src={logo} alt="" className="w-24 h-9" />
        </Link>
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
          </div>
        )}
        {doctorDetails&&<Link to={"/home/message"} className="mr-4">
              <LuMessageCircle className="w-6 h-6" />
            </Link>}

        {!(userDetails || doctorDetails) ? (
          <h1 className="mx-3">Login/Signup</h1>
        ) : (
          <button onClick={logoutHandler}>
            <h1 className="font-semibold text-base mx-3">Logout</h1>
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
