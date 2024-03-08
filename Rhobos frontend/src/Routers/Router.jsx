import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Authentication from '../pages/Authentication'

function Router() {
  return (
    <Routes >
        <Route path="/" exact element={<Authentication />}>
        <Route index element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        </Route>
    </Routes>
    
  )
}

export default Router
