import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import Internship from "./components/Internship/internship";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import Education from "./components/Education/education";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="internship" element={<Internship />} />
          <Route path="education" element={<Education />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
