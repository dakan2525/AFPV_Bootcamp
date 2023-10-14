import React, { useState } from 'react'
import "./App.css"
import { Search } from './components/Search'
import { AddPerson } from './components/AddPerson'
import { NumberList } from './components/NumberList'

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
          {name:"", number:"",search:newContact.search})
    }
    
  }
  const handelChange = (event) => {
    setNewContact ({...newContact,[event.target.name]: event.target.value});
  }
  const filterPerson = persons.filter((person) => person.name.toLowerCase().includes(newContact.search.toLocaleLowerCase()) )

  return (
    <div>
      <h1>Phonebook</h1>
      <Search handelChange={handelChange} newContact={newContact} />
      
      <form onSubmit={handelStore}>
        <h2>Add a new</h2>
          <AddPerson name="name" title="Name" handelChange={handelChange} value={newContact.name} />
          <AddPerson name="number" title="Number" handelChange={handelChange} value={newContact.number} />
        <button type="submit">Add</button>
      </form>

      <NumberList title="Numbers" filterPerson={filterPerson}  /> 
    </div>
  )
}

export default App