import React from 'react'
import {createRoot} from 'react-dom/client'
import { useState } from 'react'
import './index.css'
import Statistics from './components/Statistics'
import Button from './components/Button'



const App = () => {

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
 
  function handleChange(opinion) {
    opinion === "Good" && setFeedback({...feedback, "good":feedback.good + 1 });
    opinion === "Neutral" && setFeedback({...feedback, "neutral":feedback.neutral + 1 });
    opinion === "Bad" && setFeedback({...feedback, "bad":feedback.bad + 1 });
  }


  return (
    <div>
      <h1>Give FeedBack</h1>
      <div>
        <Button handleChange={handleChange} name="Good"/>
        <Button handleChange={handleChange} name="Neutral"/>
        <Button handleChange={handleChange} name="Bad"/>
      </div>
      <br></br>
      <Statistics feedback={feedback}/>    
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />);