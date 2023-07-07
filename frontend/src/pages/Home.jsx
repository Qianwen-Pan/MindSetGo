import React from 'react'
import { useNavigate} from 'react-router-dom';
import Footer from "../components/Footer";
import "../styles.css";
import Button from "@mui/material/Button";


export const Home = () => 
{
      const navigate = useNavigate();
      const start = (e)=>{
         e.preventDefault();
          navigate("/login", { replace:true });


      };

    return (
      <div>
      <img src="logo.png"  alt="Logo" class="logo" width="200" height="200"/>
      <body class="container">

        <div class="home_title">
           <h1>Agil Projects Need Agile Mind</h1>
           <p>Help your team be mentally ready  in the agile projects</p>
           
           <Button
                onClick={start}
                
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#9AC5F4" ,width: 150, height: 50}}
              >
                Start Here
              </Button>
        </div>
        <div> 
           <img class="home_img" src="home1.png" id= "home1"/>
           <img class="home_img" src="home2.png" id= "home2" />
        </div>
      </body>
     <Footer />
   </div>
  )
}
