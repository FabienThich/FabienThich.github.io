import React from 'react';
import './App.css';
import Header from "./components/header";
import Home from "./components/home";
import Internship from "./components/internship";
import {BrowserRouter as Router, Switch, Route, Routes, Navigate} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div className="App">
          <Header />
          <Routes>
              <Route index element={<Home/>} />
              <Route path='home' element={<Home/>} />
              <Route path='internship' element={<Internship/>} />
          </Routes>
        </div>
    </Router>     
    
  );
}

export default App;
