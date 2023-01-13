import React from "react";
import "./index.css";
import Welcome from "./Routes/Welcome"
import Adventure from "./Routes/Adventure"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
   
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/adventure" element={<Adventure />} />
    </Routes>
   </>
  );
}

export default App;
