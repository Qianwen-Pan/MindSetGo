import React from 'react'
import { Routes,Route,NavLink, BrowserRouter,Switch } from 'react-router-dom';
import { Home } from '../components/Home';

import  Login  from '../pages/login';
import { Notification }  from '../components/DashBoard/Notification';

import DashBoard  from '../components/DashBoard';
import Resources from '../components/DashBoard/Resources';
import MyAccount from '../components/DashBoard/MyAccount';
import {Mood} from '../components/DashBoard/Mood';
import {EnvolopeFeedBack}  from '../components/DashBoard/EnvolopeFeedBack';
import {Meditation} from '../components/DashBoard/Meditation';

import Login from '../pages/login';
import Signup from "../pages/Signup";
import Notification from '../components/Notifications/Notification';
import Resources from '../components/Resources';


export const MainRouter = () => {
  return (
   
     <BrowserRouter>

        {/* Define all the navigatio routes */}
        <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/login" element={<Login/>} />
            <Route path='/register' element={<Signup/>} />
            <Route path="/home" element={<Home />} />
                        <Route path="/dashBoard/*" element={<DashBoard />} >
                <Route path="myAccount" element={<MyAccount />} />
                <Route path="resources" element={<Resources />} /> 
                <Route path="notification" element={<Notification />} />
                <Route path="mood" element={<Mood />} />
                <Route path="envolopeFeedBack" element={<EnvolopeFeedBack />} />
                <Route path="meditation" element={<Meditation />} />
               
            </Route>

        </Routes>

    </BrowserRouter>
    
  )
}
