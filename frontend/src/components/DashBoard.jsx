
import {Routes,Route,NavLink, BrowserRouter,Switch} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import "../styles.css";

function DashBoard() {

  return (
   
    <div>
     {/* <Header /> */}
     
     <nav class="menu">
            <ul>
                {/* <li><NavLink to="/MyAccount">DashBoard</NavLink></li>
                <li><NavLink to="/MyAccount/resources">Resources</NavLink></li>
                <li><NavLink to="/MyAccount/notification">Notifications</NavLink></li> */}
                <nav class="navbar navbar-expand-md sticky-top">
         <a class="navbar-brand" href="#">   
          <img src="../logo.png"  alt="Logo" class="logo" width="200" height="200"/>
          </a>
         <ul class="navbar-nav ms-auto">

           <li class="nav-item">
              <a class="nav-link"   href="/DashBoard/resources">Resources</a> 
           
           </li>
           <li class="nav-item">
             <a class="nav-link" href="/DashBoard/notification">Notifications</a>
           </li>
           <li class="nav-item">
             <a class="nav-link active" aria-current="page" href="/DashBoard/myAccount">My Account</a>
           </li>
         </ul>
     </nav>
            </ul>
      </nav>   
     
        <div>
          
          <Outlet/>
        
        </div>
  
    </div>
  );
}
export default DashBoard; 
