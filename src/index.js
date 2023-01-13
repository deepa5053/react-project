import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Eevee from "./assets/Eevee.png"
//import Pikachu from "./assets/Pikachu"

import { BrowserRouter } from "react-router-dom"


ReactDOM.render(
  <BrowserRouter>
    <App />
 
  </BrowserRouter>,
  document.getElementById('root')
);

