import React from 'react';
import { BrowserRouter as Router,Route, Routes, Link } from 'react-router-dom';
import Login from '../Loginpage/Login';

function Header() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
        <img src="src/Assets/01_Logo.png" style={{ height: "2rem", width: "2rem" }} alt="logo" />

        
        <Router>
          <Link to="src/Loginpage/Login.jsx">jamaila</Link>
          <Routes>
            <Route path="src/Loginpage/Login.jsx" element={<Login/>}/>
          </Routes>
        </Router>

        <div>
          <a href="#">Today</a>
          <a href="#">Add Events</a>
        </div>
      </div>
      <div style={{ padding: "10px" }}>
        <h1>Lakshya's Event Planner</h1>
      </div>
      <div style={{ padding: "10px" }}>
        <input type="search" placeholder="Search Events" />
      </div>
    </div>
  );
}

export default Header;
