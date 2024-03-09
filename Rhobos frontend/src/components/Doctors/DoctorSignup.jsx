// DoctorSignup.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userState } from "../../context/userContext";
import axios from "axios";
import { toast } from "react-toastify";

function DoctorSignup() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name:"",
    password: "",
    confirmPassword: "",
    specialisation: "",
    address: "",
    qualification: "",
    experience: "",
    hospital: "",
    image: null,
  });

  const { doctorDetails, setDoctorDetails } = userState();
  const navigate = useNavigate();

  const phoneNumberPattern = /^\d{10}$/;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?!\s).{6,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      if (
        !formData.email ||
        !formData.phone ||
        !formData.name ||
        !formData.password ||
        !formData.confirmPassword ||
        !formData.specialisation ||
        !formData.address ||
        !formData.qualification ||
        !formData.experience ||
        !formData.hospital
      ) {
        toast.error("Please fill all the fields");
        return;
      }

      if (!phoneNumberPattern.test(formData.phone)) {
        toast.error("Invalid Phone number");
        return;
      }

      if (!passwordPattern.test(formData.password)) {
        toast.error(
          "Please put a strong password (Minimum 6 characters including letters and numbers)"
        );
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        toast.error("Please check confirm password");
        return;
      }

      const formDataForApi = new FormData();
      formDataForApi.append("email", formData.email);
      formDataForApi.append("phone", formData.phone);
      formDataForApi.append('name',formData.name)
      formDataForApi.append("password", formData.password);
      formDataForApi.append("specialisation", formData.specialisation);
      formDataForApi.append("address", formData.address);
      formDataForApi.append("qualification", formData.qualification);
      formDataForApi.append("experience", formData.experience);
      formDataForApi.append("hospital", formData.hospital);
      formDataForApi.append("image", formData.image);

      const res = await axios.post(
        "http://localhost:3000/api/doctors/signup",
        formDataForApi
      );

      const token = res.data;
      localStorage.setItem("doctortoken", JSON.stringify(token));
      navigate("/doctorhome");
    } catch (err) {
      console.error(err.response.data.err || "Doctor already exists.");
      toast.error(err.response.data.err || "Doctor already exists.");
    }
  };

  return (
    <div className="mt-9 w-4/5 mb-9">
      <div className="login-form">
        <div className=" bg-white rounded-lg shadow-lg p-6 text-sm">
          <h1 className="text-3xl font-semibold mb-2 text-center text-slate-800">
            Doctor Signup
          </h1>
          <form onSubmit={signupHandler} encType="multipart/form-data">
            <div className="flex space-x-4">
            <div className="mb-1 w-1/2">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-1 w-1/2">
              <label htmlFor="email" className="block text-gray-700">
                name
              </label>
              <input
                type="text"
                onChange={handleChange}
                name="name"
                value={formData.name}
                className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            </div>
            <div className="flex mb-1 space-x-4">
            <div className="mb-1 w-2/6">
              <label htmlFor="phone" className="block text-gray-700">
                Phone
              </label>
              <input
                type="text"
                onChange={handleChange}
                name="phone"
                value={formData.phone}
                className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
              <div className="w-2/6">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="w-2/6">
                <label htmlFor="confirmPassword" className="block text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex space-x-4">
            <div className="mb-1 w-1/2">
              <label htmlFor="specialisation" className="block text-gray-700">
                Specialisation
              </label>
              <input
                type="text"
                id="specialisation"
                name="specialisation"
                value={formData.specialisation}
                onChange={handleChange}
                className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-1 w-1/2">
              <label htmlFor="qualification" className="block text-gray-700">
                Qualification
              </label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            </div>
            
            
            <div className="flex space-x-4">
            <div className="mb-1 w-1/2">
              <label htmlFor="experience" className="block text-gray-700">
                Experience
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-1 w-1/2">
              <label htmlFor="hospital" className="block text-gray-700">
                Hospital
              </label>
              <input
                type="text"
                id="hospital"
                name="hospital"
                value={formData.hospital}
                onChange={handleChange}
                className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div></div>
            <div className="mb-1">
              <label htmlFor="address" className="block text-gray-700">
                Address
              </label>
              <textarea
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-1">
              <label htmlFor="image" className="block text-gray-700">
                Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                id="image"
                name="image"
                className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="mt-5 w-full bg-red-600 hover:bg-red-950 text-white font-semibold py-2 rounded-lg hover:bg-mainColorDark transition duration-300"
            >
              Signup
            </button>
          </form>
          <Link
            to="/doctor-login"
            className="block text-gray-500 text-center mb-3 mt-3 text-sm "
          >
            Already have an account? Login
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
