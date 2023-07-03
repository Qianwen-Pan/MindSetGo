import React from 'react';
import { useNavigate} from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const send = (e)=>{
       e.preventDefault();
        navigate("/dashboard", { replace:true });


    };
    return (
    <div>login
        <button onClick={send}>Sign In</button>
    </div>
  )
}
