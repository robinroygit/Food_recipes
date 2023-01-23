import React from "react";
import { BrowserRouter,Route,Routes} from "react-router-dom"

import "../src/App.css";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Signup from "./components/SignupForm";
import Login from "./components/LoginForm";
import SplineApp from "./components/Spline";
import AcDetails from "./components/AcDetails";
import Navbar from "./Navbar";
import Resturant from "./ResturantApp/Resturant";



export default function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Layout/>
    <Navbar/>
    
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/Resturant" element={<Resturant/>}/>
      <Route path="/splineapp" element={<SplineApp/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/acdetails" element={<AcDetails/>}/>
    </Routes>


    </BrowserRouter>



    </div>
  )
}


