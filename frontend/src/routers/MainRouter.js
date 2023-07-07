import React from "react";
import {
  Routes,
  Route,
  NavLink,
  BrowserRouter,
  Switch,
} from "react-router-dom";
import { Home } from "../pages/Home";

import { Notification } from "../pages/Notification";

import DashBoard from "../pages/DashBoard";
import Resources from "../pages/Resources";
import MyAccount from "../pages/MyAccount";
import { Mood } from "../pages/Mood";
import { EnvolopeFeedBack } from "../pages/EnvolopeFeedBack";
import { Meditation } from "../pages/Meditation";

import Login from "../pages/login";
import Signup from "../pages/Signup";
import Form from "../pages/Form";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      {/* Define all the navigatio routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/createproject" element={<Form />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashBoard" element={<DashBoard />} />
        <Route path="/myAccount" element={<MyAccount />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/mood" element={<Mood />} />
        <Route path="/envolopeFeedBack" element={<EnvolopeFeedBack />} />
        <Route path="/meditation" element={<Meditation />} />
      </Routes>
    </BrowserRouter>
  );
};
