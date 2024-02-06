import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchItem, setSearchItem] = useState('')
  const [filteredContacts, setFilteredContacts] = useState(persons)

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const saveContact = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const found = persons.some(person => person.name === newName)
    if (found) {
      alert(`${newName} is already added to phonebook`)
      return
    } else {
      setPersons(persons.concat(newPerson))
      setFilteredContacts(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchItem(searchTerm)

    const filteredItems = persons.filter((person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredContacts(filteredItems);
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <p>Search:</p>
      <input
        type='text'
        value={searchItem}
        onChange={handleSearch}
        placeholder='Type to search' />

      <form onSubmit={saveContact}>
        <div>
          <h2>Add new</h2>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
          number: <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredContacts.map((person) => (<li key={person.name}>{person.name} {person.number}</li>))}
      </ul>
    </div>
  )
}

export default App