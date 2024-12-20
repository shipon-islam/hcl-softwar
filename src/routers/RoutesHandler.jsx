import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Join from "../pages/Join";
import Login from "../pages/Login";
import Networking from "../pages/Networking";
import Notification from "../pages/Notification";
import Signup from "../pages/Signup";

export default function RoutesHandler() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/networking" element={<Networking />} />
      <Route path="/notification" element={<Notification />} />
    </Routes>
  );
}
