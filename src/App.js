import React from "react";
import "./index.css";
import Welcome from "./Routes/Welcome"
import Adventure from "./Routes/Adventure"
import { Route, Routes } from "react-router-dom";
import image2 from "./assets/eevee.png"
import image3 from "./assets/pikachu.png"
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <>
    <div className="container">
      <Pokemon name='eevee' img={image2}/>
      <Pokemon name='Pikachu' img={image3} />
    </div>
   
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/adventure" element={<Adventure />} />
    </Routes>
   </>
  );
}

export default App;
