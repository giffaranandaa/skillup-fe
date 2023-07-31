import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/Home/HomePage";
import Footer from "./Components/Navbar/Footer";
import Register from "./Components/LoginRegisterPage/Regster";

function App() {
  return (
    <>
      <div className="font-Poppins">
        <Router>
          <Routes>
            <Route path="/" element={<Navbar />} />
          </Routes>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Footer />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
