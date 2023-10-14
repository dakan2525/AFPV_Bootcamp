import React, { useState } from 'react'
import "./App.css"

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handelStore = (event) => {
    event.preventDefault()
    if (persons.find((person) => person.name === newName)) {
      alert( `${newName} is already added to phonebook`);
      } else {
        const newPerson = {name: newName};
        setPersons([...persons, newPerson] )
        setNewName("")
    }
  }
  
  const handleChange = (event) => {
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handelStore}>
        <label id='name'>Name: </label>
        <input onChange={handleChange} id='name' name='name' value={newName} />
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((person) => <p key={person.name}>{person.name}</p>)
      }
    </div>
  )
}

export default App