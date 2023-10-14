import React, { useState } from 'react'
import "./App.css"

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: 8888  
    }
  ]) 
  const [ newContact, setNewContact ] = useState({name:"", number:""})

  const handelStore = (event) => {
    event.preventDefault()
    if (persons.find((person) => person.name === newContact.name)) {
      alert( `${newContact.name} is already added to phonebook`);
      } else {
        setPersons([...persons, newContact] )
        setNewContact(
          { name:" ",
            number:" "
          })
    }
  }


  const handelChange = (event) => {
    setNewContact ({...newContact,[event.target.name]: event.target.value});
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handelStore}>
        
        <p>
        <label id='name'>Name: </label>
        <input onChange={handelChange} id='name' name='name' value={newContact.name} />
        </p>

        <p>
          <label id='number'>Number: </label>
        <input onChange={handelChange} id='number' name='number' value={newContact.number} />
        </p>

        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((person) => {
          return (
              <p key={person.name}>{`Name: ${person.name}`}   {`Number: ${person.number}`}</p>
            )
        })
      }
    </div>
  )
}

export default App