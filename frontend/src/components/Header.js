import React  from "react";
import {NavLink} from 'react-router-dom';



function Header(){
    return (
       <div>
            <nav class="menu">
            <ul>
                <li><NavLink to="/resources">Resources</NavLink></li>
                <li><NavLink to="/notification">Notifications</NavLink></li>
                <li><NavLink to="#">My Account</NavLink></li>
            </ul>
            </nav>   

       </div> 
    )


}

export default Header;
