import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import Internship from "./components/Internship/internship";
import Projects from './components/Projects/projects';
import {BrowserRouter as Router, Switch, Route, Routes, Navigate} from "react-router-dom";


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
