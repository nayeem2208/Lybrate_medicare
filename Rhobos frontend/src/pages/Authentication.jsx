import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import backgroundImage from "../../public/hush-naidoo-jade-photography-yo01Z-9HQAw-unsplash.jpg";
import { userState } from "../context/userContext";

function Authentication() {
  let navigate = useNavigate();
  let { userDetails, setUserDetails, setDoctorDetails } = userState();
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    let parsedToken = JSON.parse(storedToken);

    const doctorToken = localStorage.getItem("doctortoken");
    let docParsedToken = JSON.parse(doctorToken);

    if (parsedToken) {
      setUserDetails(parsedToken);
      navigate("/home");
    }
    if (docParsedToken) {
      setDoctorDetails(docParsedToken);
      navigate("/doctorhome");
    }
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      className="flex justify-center items-center h-full min-h-screen"
      style={backgroundStyle}
    >
      <Outlet />
    </div>
  );
}

export default Authentication;
