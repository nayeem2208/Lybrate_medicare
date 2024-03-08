import React, { createContext, useContext, useState } from "react";

const userDetailsContext = createContext();

const UserDetailsProvider = ({ children }) => {
  let [userDetails, setUserDetails] = useState(null);
  let [doctorDetails,setDoctorDetails]=useState(null)

  return (
    <userDetailsContext.Provider
      value={{
        userDetails,
        setUserDetails,
        doctorDetails,
        setDoctorDetails
      }}
    >
      {children}
    </userDetailsContext.Provider>
  );
};

export const userState = () => {
  return useContext(userDetailsContext);
};

export default UserDetailsProvider;
