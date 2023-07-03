import React from 'react'
import { useNavigate} from 'react-router-dom';



export const Home = () => 
{
      const navigate = useNavigate();
      const start = (e)=>{
         e.preventDefault();
          navigate("/login", { replace:true });


      };

    return (
    <div>Home
    

       <button onClick={start}>Start</button>
  
    </div>

  )
}
