import React from 'react'
import "../../styles.css";
import Header from '../Header';

export const Mood = () => {
  return (
    <div>
      <Header/>
    <div class="grid-layoutMoodTitle">
    <div>
     <h1 className='TitleH1'>Which ball stands for your mood today? 
      <img className='face' src='../../images/faceThink.png' ></img></h1></div>
     </div>
    <div className="grid-layoutMoodBalls">

     <div> <img className="balls" src='../../images/redBall.png' ></img></div>
     <div><img className="balls" src='../../images/greyBall.png' ></img></div>
    </div>
    
    </div>
  )
}
