import React from 'react';
import './App.css';
import Header from "./components/header";
import Home from "./components/home";
import Internship from "./components/internship";
import Projects from './components/projects';
import {BrowserRouter as Router, Switch, Route, Routes, Navigate} from "react-router-dom";
import Typewriter from 'typewriter-effect';

function App() {
  
  return (
    <Router>
      <div className="App">
          <Header />
          <Routes>
              <Route path='/' element={<App />} />
              <Route index element={<Home/>} />
              <Route path='home' element={<Home/>} />
              <Route path='projects' element={<Projects/>} />
              <Route path='internship' element={<Internship/>} />
          </Routes>
        </div>
    </Router>     
    
  );
}

export default App;
