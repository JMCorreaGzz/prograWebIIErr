import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {LoginRegister} from './LoginRegister';
import {Muro} from './Muro';
import { NewUser } from './NewUser';
import { Register } from './Register';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter> 
      <Routes>
        <Route exact path="/" element={<LoginRegister />} />
        <Route path="/muro" element={<Muro />} />
        <Route path="/NewUser" element={<NewUser />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>   

    /*<React.StrictMode>
    <LoginRegister />
  </React.StrictMode>*/
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
