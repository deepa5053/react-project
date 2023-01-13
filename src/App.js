import React from "react";
import "./index.css";
import Welcome from "./Routes/Welcome"
import Adventure from "./Routes/Adventure"
import { Route, Routes } from "react-router-dom";
import Eevee from "../assets/Eevee.png";
import Pikachu from "../assets/Pikachu.png";

function App() {
  return (
    <>
    <div className="container">
      
    </div>
   
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/adventure" element={<Adventure />} />
    </Routes>
   </>
  );
}

export default App;
