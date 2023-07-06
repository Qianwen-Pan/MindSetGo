import React from 'react'
import "../../styles.css";

export const EnvolopeFeedBack = () => {
  return (
    <div>
    
    <h1 className='TitleH1'>Envolope FeedBack</h1>
    <div className='divEnvelope'>
      <img className='envelopeImg' src='../images/bigEnvelope.png'></img>
    </div>
    <div className='divMessage'>
      <p className='message'>
          Hi, you’ve got an envelope feedback, please open it 
          only if you’re ready, don’t put much pressure on yourself!
      </p>
    </div>
    
    
    </div>
  )
}
