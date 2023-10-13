import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [selected, setSelected] = useState(0);
  const [anecdotes, setAnecdotes] = useState([
    {
      content: "If it hurts, do it more often",
      votes: 0,
    },
    {
      content:"Adding manpower to a late software project makes it later!",
      votes: 0,
    },
    {
      content: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0,
    },
    {
      content:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: 0,
    },
    {
      content:'Premature optimization is the root of all evil.',
      votes: 0,
    },
    {
      content :'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: 0,  
    }
  ]);

  const points = anecdotes.map((anecdote) => anecdote.votes);

  const moreVotes = (anecdotes.find((anecdote) => anecdote.votes === Math.max(...points)));

  function vote() {
    const updatedAnecdotes = [...anecdotes];
    updatedAnecdotes[selected].votes++;
    setAnecdotes(updatedAnecdotes); 

  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected].content}</p>
      <p>Has {anecdotes[selected].votes} votes</p>
      <button onClick={()=>vote()}>Vote</button>
      <button onClick={()=>setSelected(Math.floor(Math.random() * 6))}>Next Anecdote</button>
      <br></br>
      <br></br>
      
      <h2>Anecdote with most votes</h2>
      <p>{moreVotes.content}</p>
      <p>Has {moreVotes.votes} votes</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
