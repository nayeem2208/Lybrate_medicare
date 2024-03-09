import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function UserDoctorProfile(props) {
  const location = useLocation();
  console.log(location.state, "statevalue");
  const doctorData = location.state?.data || {};
  const [bookings, setBookings] = useState([
    { id: 1, date: "2024-03-10", time: "10:00 AM" },
    { id: 2, date: "2024-03-11", time: "02:30 PM" },
    { id: 3, date: "2024-03-11", time: "03:00 AM" },
    { id: 4, date: "2024-03-11", time: "03:30 PM" },
    { id: 5, date: "2024-03-10", time: "10:00 AM" },
    { id: 6, date: "2024-03-11", time: "02:30 PM" },
    { id: 7, date: "2024-03-11", time: "03:00 AM" },
    { id: 8, date: "2024-03-11", time: "03:30 PM" },
  ]);
  console.log(doctorData, "docdataaaaaaaaaaaaaaaaaaaaaaaaaaa");

  return (
    <div className="min-h-screen bg-slate-200 flex justify-center items-center ">
      <div className="w-full max-w-4xl my-12">
        <div className="bg-white flex w-full items-center rounded-lg shadow-lg p-6 space-x-6">
          <div className="w-full flex flex-col justify-center">
            <div className="flex w-full">
              {" "}
              <div className="w-2/5 flex justify-center items-center">
                <div className="w-64 h-64 bg-yellow-500 rounded-full overflow-hidden">
                  <img
                    src={`http://localhost:3000/images/doctors/${doctorData.imagePath}`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-2">{doctorData.name}</h1>
                <p className=" mb-2">Email: {doctorData.email}</p>
                <p className=" mb-2">Address: {doctorData.address}</p>
                <p className=" mb-2">Phone: {doctorData.phone}</p>
                <p className=" mb-2">
                  Experience: {doctorData.experience} years
                </p>
                <p className=" mb-2">Hospital: {doctorData.hospital}</p>
                <p className=" mb-2">
                  Qualification: {doctorData.qualification}
                </p>
                <p className=" mb-2">
                  Specialisation: {doctorData.specialisation}
                </p>
                {/* Add more fields as needed */}
              </div>
            </div>
            <div className="flex justify-center my-4">
            <button className="bg-red-500 rounded-lg shadow-lg p-2 px-5 font-bold text-white ">Chat with doctor</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-4 ">
          <h2 className="text-2xl font-bold mb-4">Bookings</h2>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg text-center">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Time</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-slate-300 text-sm">
                  <td className="py-2 px-4 border-b">{booking.id}</td>
                  <td className="py-2 px-4 border-b">{booking.date}</td>
                  <td className="py-2 px-4 border-b">{booking.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserDoctorProfile;
