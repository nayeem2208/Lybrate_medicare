import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userState } from "../../context/userContext";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login() {
  let [email, setemail] = useState("");
  let [password, setPassword] = useState("");
  let { userDetails, setUserDetails } = userState();

  const navigate = useNavigate();

  // useEffect(() => {
  //   const storedToken = localStorage.getItem("token");
  //   if (storedToken) {
  //     setUserDetails(storedToken);
  //     navigate("/home");
  //   }
  // }, []);

  const submitHander = async (e) => {
    e.preventDefault();
    try {
      if ((email, password)) {
        const res = await axios.post('http://localhost:3000/api/login',{ email, password })
        toast("Authentication success", 2000);
        let token=res.data.token
        setUserDetails(token)
        localStorage.setItem('token',token)
        navigate("/home");
      } else {
        toast.error("Please give a valid input");
      }
    } catch (err) {
      toast.error(err?.data.error || err.message, 2000);
    }
  };

  return (
    <div className="">
      <div>
        <div className="w-96 bg-white rounded-lg shadow-lg p-6  text-sm">
          <h1 className="text-3xl font-semibold mb-4 text-center text-slate-800">User Login</h1>

          <form onSubmit={submitHander}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                onChange={(e) => setemail(e.target.value)}
                value={email}
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white font-semibold hover:bg-red-950 py-2 rounded-lg hover:bg-mainColorDark transition duration-300 "
            >
              Login
            </button>
            <Link
              className="block text-gray-500 text-center mb-3 mt-3 text-sm"
              to="/signup"
            >
              Dont have Account?
              <span className="font-semibold text-gray-800">SignUp</span>
            </Link>
            <hr className="my-6" />
            <Link
              className="block text-gray-500 text-center mb-3 mt-3 text-sm "
              to="/doctor-login"
            >
              Are you a Doctor?
              <span className="font-semibold text-gray-800">Login</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
