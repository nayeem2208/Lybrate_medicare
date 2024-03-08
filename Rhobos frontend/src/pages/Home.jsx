import React, { useEffect } from "react";
import { userState } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import HomeComponent from "../components/user/homeComponent";
import { Outlet } from "react-router-dom";

function Home() {
  let { userDetails, setUserDetails } = userState();
  let navigate=useNavigate()
  useEffect(() => {
    let userData = localStorage.getItem("token");
    if (!userData) {
        navigate("/");
    }
    setUserDetails(userData)
  }, []);

  return (
  <div>
    <Outlet/>
  </div>
  )
}

export default Home;
