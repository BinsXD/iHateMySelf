  import React from "react";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import { Login } from "./Login";
  import { Register } from "./Register";
  import { MainDashboard } from "./MainDashboard";

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<MainDashboard />} />
        </Routes>
      </Router>
    );
  }

  export default App;