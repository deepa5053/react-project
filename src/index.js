import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import image2 from "./assets/eevee.png"
import image3 from "./assets/pikachu.png"
import { BrowserRouter } from "react-router-dom"
import Adventure from './Routes/Adventure';



const index = () => {
  return (
    <div className='container'>
      <Adventure name='eevee' />
      <Adventure name='pikachu' />
    </div>
  )
}

export default index
ReactDOM.render(
  <BrowserRouter>
    <App />
 
  </BrowserRouter>,
  document.getElementById('root')
);

