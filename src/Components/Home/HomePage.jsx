import React from "react";
import Home from "./Home";
import About from "./About";
import Course from "./Course/Courses";
import Teacher from "./Teacher";
import Contact from "./Contact";
const HomePage = () => {
  return (
    <div>
      <Home />
      <About />
      <Course />
      <Teacher />
      <Contact />
    </div>
  );
};

export default HomePage;
