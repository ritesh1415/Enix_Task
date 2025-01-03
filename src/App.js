import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./Components/Userlist.js";
import UserDetails from "./Components/Userdetails.js";
import "./styles/App.css"
const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="left-panel">
          <UserList />
        </div>
        <div className="main-panel">
          <Routes>
            
            <Route path="/user/:id" element={<UserDetails />} />
            <Route path="/" element={<div>Select a user to view details</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
