import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from '../components/user/Login'
import Signup from '../components/user/Signup'
import Authentication from '../pages/Authentication'
import DoctorLogin from '../components/Doctors/DoctorLogin'
import DoctorSignup from '../components/Doctors/DoctorSignup'
import Home from '../pages/Home'
import HomeComponent from '../components/user/homeComponent'
import Messages from '../pages/Messages'
import DoctorHome from '../pages/DoctorHome'
import DoctorHomecomp from '../components/Doctors/DoctorHome'
import DoctorChat from '../components/Doctors/DoctorChat'
import DoctorProfile from '../components/Doctors/DoctorProfile'
import UserProfile from '../components/user/UserProfile'
import UserDoctorProfile from '../components/user/DoctorProfile'

function Router() {
  return (
    <Routes >
        <Route path="/" exact element={<Authentication />}>
        <Route index element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/doctor-login' element={<DoctorLogin/>}/>
        <Route path='/doctor-signup' element={<DoctorSignup/>}/>
        </Route>
        <Route path='/home' element={<Home/>}>
          <Route index element={<HomeComponent/>}/>
          <Route path='/home/message' element={<Messages/>}/>
          <Route path='/home/profile' element={<UserProfile/>}/>
          <Route path='/home/doctor-profile' element={<UserDoctorProfile/>}/>
        </Route>
        <Route path='/doctorhome' element={<DoctorHome/>}>
          <Route index element={<DoctorHomecomp/>}/>
          <Route path='/doctorhome/message' element={<DoctorChat/>}/>
          <Route path='/doctorhome/profile' element={<DoctorProfile/>}/>
        </Route>
    </Routes>
    
  )
}

export default Router
