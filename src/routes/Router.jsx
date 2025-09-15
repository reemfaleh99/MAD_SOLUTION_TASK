import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Projects from "../pages/Projects";
import Teams from "../pages/Teams";

import Home from "../pages/Home";
import Services from "../pages/Services";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/service" element={<Services />} />
    </Routes>
  );
};

export default routes;
