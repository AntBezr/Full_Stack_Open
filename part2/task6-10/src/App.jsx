import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {

    setNewName(event.target.value);
  }

  const saveContact = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName
    }
    const found = persons.some(person => person.name === newName)
    if (found) {
      alert(`${newName} is already added to phonebook`)
      return
    } else {
      setPersons(persons.concat(newPerson))
      setNewName('')
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={saveContact}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (<li key={person.name}>{person.name}</li>))}
      </ul>
    </div>
  )
}

export default App