import React from 'react'
// import "./App.css";
// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { BrowserRouter,Route,Routes } from "react-router-dom";


const Appp = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          
          <Route path="/"element={<Home></Home>} />
          <Route path="/about"element={<About></About>} />
          <Route path="/contact"element={<Contact></Contact>} />
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default Appp;