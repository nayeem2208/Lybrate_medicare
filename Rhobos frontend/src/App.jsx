import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Authentication from "./pages/Authentication";
import Router from "./Routers/Router";

function App() {
  return (
    <div>
      <Navbar />
      <Router/>
    </div>
  );
}

export default App;
