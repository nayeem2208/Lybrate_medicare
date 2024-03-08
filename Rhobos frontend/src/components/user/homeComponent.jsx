import React from "react";
import bgimage from "../../../public/piron-guillaume-y5hQCIn1c6o-unsplash.jpg";
function HomeComponent() {
  let bgStyle = {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // filter: "brightness(70%)", 
  };
  return (
    <div>
      <div
        className="w-full h-[40vw] flex justify-center items-center"
        style={bgStyle}
      >
        <div className=" ">
       <div> <h1 className=" text-4xl font-semibold text-white shadow-lg p-3" >Stay at Home. Consult Doctors Online.</h1></div>
       <div className="flex w-full justify-between "> <input type="text" className="rounded p-2 shadow-xl w-5/6"/> <button className="bg-red-700 w-1/6 text-white font-semibold py-2 px-4 rounded mx-2">Search</button></div>
       </div>
      </div>
    </div>
  );
}

export default HomeComponent;
