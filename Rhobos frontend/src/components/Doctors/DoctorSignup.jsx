import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userState } from "../../context/userContext";
import axios from "axios";
import { toast } from "react-toastify";

function DoctorSignup() {
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  let { doctorDetails, setDoctorDetails } = userState();
  const navigate = useNavigate();

  //   useEffect(() => {
  //     if (userInfo) navigate("/user/home");
  //   }, [ userInfo]);

  const usernamePattern = /^[^\s]+$/;
  const phoneNumberPattern = /^\d{10}$/;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?!\s).{6,}$/;

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      if ((email, phone, password,confirmPassword)) {
          if (phoneNumberPattern.test(phone)) {
            if (passwordPattern.test(password)) {
              if (password === confirmPassword) {
                try {
                  let res = await axios.post('http://localhost:3000/api/doctors/signup',{
                    email,
                    phone,
                    password,
                  })
                  let token = res.data.token;
                  localStorage.setItem("doctortoken", token);
                  navigate("/doctorhome");
                } catch (err) {
                  console.log(err.data.err);
                  toast.error(err.data.err || "doctor already exist machaaa");
                }
              } else {
                toast.error("Please check confirm password");
              }
            } else {
              toast.error(
                "Please put a strong password(Minimum 6 including number and string)"
              );
            }
          } else {
            toast.error("Invalid Phone number");
          }
      } else {
        toast.error("Please fill the fields");
      }
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className="">
      <div className="login-form">
        <div className="w-96 bg-white rounded-lg shadow-lg p-6 text-sm">
          <h1 className="text-3xl font-semibold mb-2 text-center text-slate-800">
            Doctor Signup
          </h1>
          <form onSubmit={signupHandler}>
            <div className="mb-1">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-1">
              <label htmlFor="username" className="block text-gray-700">
                Phone
              </label>
              <input
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-1">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-1">
              <label htmlFor="password" className="block text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                id="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="mt-5  w-full bg-red-600 hover:bg-red-950 text-white  font-semibold py-2 rounded-lg hover:bg-mainColorDark transition duration-300 "
            >
              Signup
            </button>
            <div className="flex justify-center items-center "></div>
          </form>
          <Link
            to="/doctor-login"
            className="block text-gray-500 text-center mb-3 mt-3 text-sm "
          >
            Already have account? login
          </Link>
          <hr className="my-6" />
          <Link
            className="block text-gray-500 text-center mb-3 mt-3 text-sm "
            to="/signup"
          >
            <span className="font-semibold text-gray-800">User Signup</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DoctorSignup;
