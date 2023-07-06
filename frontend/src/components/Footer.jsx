import React from "react";
 import reactDOM from "react-dom";
 import "../styles.css";

 let year = new Date().getFullYear();


 function Footer() {
     return (<footer>
          <img src="ig_ico.png"  alt="ig Social ico" width="20" height="20" />
          <img src="in_ico.png"  alt="ig Social ico" width="20" height="20" />
          <img src="fb_ico.png"  alt="ig Social ico" width="20" height="20" />
          <p>Copyright ⓒ {year}</p>
         </footer>);
 }

 export default Footer; 