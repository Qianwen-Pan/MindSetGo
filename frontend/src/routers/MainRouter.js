import React from 'react'
import {Routes,Route,NavLink, BrowserRouter,Switch} from 'react-router-dom';
import { Dashboard } from '../components/Dashboard';

import { Home } from '../components/Home';
import { Login } from '../components/Login';
import Notification from '../components/Notifications/Notification';
import Resources from '../components/Resources';

export const MainRouter = () => {
  return (
   
     <BrowserRouter>

     
        {/* Define all the navigatio routes */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/resources" element={<Resources/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />


        </Routes>

    </BrowserRouter>
    
  )
}
