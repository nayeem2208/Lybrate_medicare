import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/user/Login";
import Authentication from "./pages/Authentication";
import Router from "./Routers/Router";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar />
      <ToastContainer/>
      <Router/>
    </div>
  );
}

export default App;
