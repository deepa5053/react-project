import "./backgroundimgStyles.css";
import introimg from "../assets/image.jpeg"
import React from 'react';
import { Link } from "react-router-dom";


const backgroundimg = () => {
  return (
  <div className="back">
    <div className="mask">
      <img className="bgimg" src= {introimg} alt="introimg" />
    </div>
    <div className="content">
        <p> Wlecome to the Gaming World</p>
        <h1>Let's start the game</h1>
        <div>
            <Link to="/Adventure" className="btn-start">Start</Link>
            <Link to="/" className="btn-cancel">Cancel</Link>
        </div>
    </div>
</div>
  )
}

export default backgroundimg 