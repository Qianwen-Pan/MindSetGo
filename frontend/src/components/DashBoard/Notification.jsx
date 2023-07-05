import React from 'react'
import { useNavigate} from 'react-router-dom';
import "../../styles.css";

export const Notification = () => {
    
  const navigate = useNavigate(); 
  const mood = (e)=>{
      e.preventDefault();
      navigate("/Dashboard/Mood", { replace:true });
  };
  const envelope = (e)=>{
    e.preventDefault();
    navigate("/Dashboard/EnvolopeFeedBack", { replace:true });

  };
  const meditation = (e)=>{
  e.preventDefault();
  navigate("/Dashboard/Meditation", { replace:true });


};
  return (
   
    <div>
    
      <h2 class='TitleH1'>NOTIFICATIONS</h2>
     
      <div class="grid-layout">
        <div class="time containerNotificacion">
          <p>09:00</p>

        </div>
        <div class="icon containerNotificacion">
          <img src='../images/face.png'></img>

        </div>
        <div class="description containerNotificacion">
          <p onClick={mood}> Good Morning! How do you feel today?</p>

        </div>
        <div class="time containerNotificacion">
          <p>11:40</p>

        </div>
        <div class="icon containerNotificacion">
        <img src='../images/envelope.png'></img>

        </div>
        <div class="description containerNotificacion">
          <p onClick={envelope}> I hope you had a great morning! If not, send an envelope feedback
            to express your feeling, trust me, it’s great for your team!</p>

        </div>
        <div class="time containerNotificacion">
          <p>22:32</p>

        </div>
        <div class="icon containerNotificacion">
        <img src='../images/pilates.png'></img>

        </div>
        <div class="description containerNotificacion">
          <p onClick={meditation}> It’s too late at night! You deserve a good rest, go to bed now or try
            some meditations for you!</p>

        </div>
      </div>
    </div>
  )
}
