import React, { useEffect, useState } from "react";
import { userState } from "../../context/userContext";
import axios from "axios";

function DoctorProfile() {
  let [doctor, setDoctorData] = useState({});
  let { doctorDetails } = userState();
  const [bookings, setBookings] = useState([
    { id: 1, patient: "Patient 1", date: "2024-03-10", time: "10:00 AM" },
    { id: 2, patient: "Patient 2", date: "2024-03-11", time: "02:30 PM" },
    { id: 1, patient: "Patient 3", date: "2024-03-11", time: "03:00 AM" },
    { id: 2, patient: "Patient 4", date: "2024-03-11", time: "03:30 PM" },
    { id: 1, patient: "Patient 1", date: "2024-03-10", time: "10:00 AM" },
    { id: 2, patient: "Patient 2", date: "2024-03-11", time: "02:30 PM" },
    { id: 1, patient: "Patient 3", date: "2024-03-11", time: "03:00 AM" },
    { id: 2, patient: "Patient 4", date: "2024-03-11", time: "03:30 PM" },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        let doctorData = await axios.get(
          `http://localhost:3000/api/doctors/getDoctorProfile?id=${doctorDetails._id}`
        );
        setDoctorData(doctorData.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (doctorDetails) {
      fetchData();
    }
  }, [doctorDetails]);

  return (
    <div className="min-h-screen bg-slate-200 flex justify-center items-center ">
      <div className="w-full max-w-4xl my-12">
        <div className="bg-white flex w-full items-center rounded-lg shadow-lg p-6 space-x-6">
          {/* Doctor Profile Card */}
          <div className="w-2/5 flex justify-center items-center">
            <div className="w-64 h-64 bg-yellow-500 rounded-full overflow-hidden">
              <img
                src={`http://localhost:3000/images/doctors/${doctor.imagePath}`}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-2">{doctor.name}</h1>
            <p className="text-lg mb-2">Email: {doctor.email}</p>
            <p className="text-lg mb-2">Address: {doctor.address}</p>
            <p className="text-lg mb-2">Phone: {doctor.phone}</p>
            <p className="text-lg mb-2">
              Experience: {doctor.experience} years
            </p>
            <p className="text-lg mb-2">Hospital: {doctor.hospital}</p>
            <p className="text-lg mb-2">
              Qualification: {doctor.qualification}
            </p>
            <p className="text-lg mb-2">
              Specialisation: {doctor.specialisation}
            </p>
            {/* Add more fields as needed */}
          </div>
        </div>
        <div className="flex flex-col items-center mt-4 ">
          <h2 className="text-2xl font-bold mb-4">Bookings</h2>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg text-center">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Patient</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Time</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-slate-300 text-sm">
                  <td className="py-2 px-4 border-b">{booking.id}</td>
                  <td className="py-2 px-4 border-b">{booking.patient}</td>
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

export default DoctorProfile;
