import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { LoginRegister } from './LoginRegister';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path='/registro' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>   
);
