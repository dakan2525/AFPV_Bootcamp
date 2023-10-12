import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import './index.css'



const App = () => {

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })
 
  function handleChange(opinion) {
    
    opinion === "good" && setFeedback({...feedback, "good":feedback.good + 1 });
    
    opinion === "neutral" && setFeedback({...feedback, "neutral":feedback.neutral + 1 });
    
    opinion === "bad" && setFeedback({...feedback, "bad":feedback.bad + 1 });
  }

  return (
    <div>
      <h1>Give FeedBack</h1>
      <div>
        <button onClick={() => handleChange("good")}>Good</button>
        <button onClick={() => handleChange("neutral")}>Neutral</button>
        <button onClick={() => handleChange("bad")}>Bad</button>
      </div>
      <br></br>

      <h2>Statistics</h2>
      <ul>
        <li>Good  {feedback.good}</li>
        <li>Neutral  {feedback.neutral}</li>
        <li>Bad  {feedback.bad}</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))