import React, { useEffect, useState } from "react";
import bgimage from "../../../public/piron-guillaume-y5hQCIn1c6o-unsplash.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
function HomeComponent() {
  let [doctors, setDoctors] = useState([]);
  let bgStyle = {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // filter: "brightness(70%)",
  };

  useEffect(() => {
    async function fetchData() {
      try {
        let doctors = await axios.get("http://localhost:3000/api/getdoctors");
        setDoctors(doctors.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  console.log(doctors, "doctorssssssssssssssss");
  return (
    <div>
      <div
        className="w-full h-[40vw] flex justify-center items-center"
        style={bgStyle}
      >
        <div className=" ">
          <div>
            {" "}
            <h1 className=" text-4xl font-semibold text-white shadow-lg p-3">
              Stay at Home. Consult Doctors Online.
            </h1>
          </div>
          <div className="flex w-full justify-between ">
            {" "}
            <input type="text" className="rounded p-2 shadow-xl w-5/6" />{" "}
            <button className="bg-red-700 w-1/6 text-white font-semibold py-2 px-4 rounded mx-2">
              Search
            </button>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-3xl text-center m-12">Doctors</h1>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center  px-12 w-4/5 ">
          {doctors &&
            doctors.map((data, index) => (
              <div className="my-6 mx-12 text-center" key={index}>
                <div className="w-48 h-48 rounded-full overflow-x-hidden">
                  <Link to={"/home/doctor-profile"} state={{data}}>
                    <img
                      src={`http://localhost:3000/images/doctors/${data.imagePath}`}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </Link>
                </div>
                <Link to={"/home/doctor-profile"} state={{data}}>
                  {" "}
                  <h1 className=" font-bold text-lg mt-6">{data.name}</h1>
                </Link>
                <h1>{data.specialisation}</h1>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
