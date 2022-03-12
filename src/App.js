import './App.css';
import React from 'react';
import Login from '../src/pages/Login/login.js';
import Cadastro from '../src/pages/Cadastro/cadastro.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
         
          <Route path="/login" element={<Login/>}/>
         
          <Route path="/cadastro" element={<Cadastro/>}/>
      
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
