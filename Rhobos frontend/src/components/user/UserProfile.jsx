import React, { useEffect, useState } from "react";
import { userState } from "../../context/userContext";
import axios from "axios";
import userImage from "../../../public/149071.png";

function UserProfile() {
  let [userData, setUserData] = useState({});
  let { userDetails } = userState();
  const [bookings, setBookings] = useState([
    { id: 1, Doctor: "Doctor 1", date: "2024-03-10", time: "10:00 AM" },
    { id: 2, Doctor: "Doctor 2", date: "2024-03-11", time: "02:30 PM" },
    { id: 1, Doctor: "Doctor 3", date: "2024-03-11", time: "03:00 AM" },
    { id: 2, Doctor: "Doctor 4", date: "2024-03-11", time: "03:30 PM" },
    { id: 1, Doctor: "Doctor 1", date: "2024-03-10", time: "10:00 AM" },
    { id: 2, Doctor: "Doctor 2", date: "2024-03-11", time: "02:30 PM" },
    { id: 1, Doctor: "Doctor 3", date: "2024-03-11", time: "03:00 AM" },
    { id: 2, Doctor: "Doctor 4", date: "2024-03-11", time: "03:30 PM" },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        let user = await axios.get(
          `http://localhost:3000/api/getuserProfile?id=${userDetails._id}`
        );
        setUserData(user.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (userDetails) {
      fetchData();
    }
  }, [userDetails]);

  return (
    <div className="min-h-screen bg-slate-200 flex justify-center items-center ">
      <div className="w-full max-w-4xl my-12">
        <div className="bg-white flex w-full items-center rounded-lg shadow-lg p-6 space-x-6">
          {/* Doctor Profile Card */}
          <div className="w-2/5 flex justify-center items-center">
            <div className="w-64 h-64 bg-yellow-500 rounded-full overflow-hidden">
              {userData.imagePath ? (
                <img
                  src={`http://localhost:3000/images/doctors/${userData.imagePath}`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <img src={userImage} />
              )}
            </div>
          </div>
          <div className="flex flex-col r">
            <h1 className="text-lg mb-2">Email:{userData.email}</h1>
            <p className="text-lg mb-2">Mobile: {userData.mobile}</p>
            <p className="text-lg mb-2">
              Gender: {userData.gender ? userData.gender : "Nil"}
            </p>
            <p className="text-lg mb-2">Blood: {userData.blood?userData.blood:'Nil'}</p>
            <p className="text-lg mb-2">Age: {userData.age?userData.age:'Nil'}</p>
            {/* Add more fields as needed */}
          </div>
        </div>
        <div className="flex flex-col items-center mt-4 ">
          <h2 className="text-2xl font-bold mb-4">Bookings</h2>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg text-center">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Doctor</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Time</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-slate-300 text-sm">
                  <td className="py-2 px-4 border-b">{booking.id}</td>
                  <td className="py-2 px-4 border-b">{booking.Doctor}</td>
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

export default UserProfile;
