import React, { useState } from 'react'
import "./App.css"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newContact, setNewContact ] = useState({name:"", number:"",search:""})

 
  const handelStore = (event) => {
    event.preventDefault()
    if (persons.find((person) => person.name === newContact.name)) {
      alert( `${newContact.name} is already added to phonebook`);
      } else {
        setPersons([...persons, newContact] )
        setNewContact(
          { name:" ",
            number:" ",
            search: newContact.search
          })
    }
  }
  const handelChange = (event) => {
    setNewContact ({...newContact,[event.target.name]: event.target.value});
  }
  const filterPerson = persons.filter((person) => person.name.toLowerCase().includes(newContact.search.toLocaleLowerCase()) )

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handelStore}>
        <div>
          <label htmlFor="search">Search: </label>
          <input
            type="text"
            id="search"
            name="search"
            value={newContact.search}
            onChange={handelChange}
          />
        </div>

        <h2>Add a new</h2>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={newContact.name}
            onChange={handelChange}
          />
        </div>

        <div>
          <label htmlFor="number">Number: </label>
          <input
            type="text"
            id="number"
            name="number"
            value={newContact.number}
            onChange={handelChange}
          />
        </div>

        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {
      filterPerson.map((person) => (
        <p key={person.name}>{`Name: ${person.name}   => Number: ${person.number}`}</p>
        ))
      }
    </div>
  )
}

export default App