import { useState } from 'react'
import Persons from './Persons'
import PersonForm from './PersonForm'
import Filter from './Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filteredContacts, setFilteredContacts] = useState(persons)

  const saveContact = (data) => {
    const found = persons.some(person => person.name === data.name)
    if (found) {
      alert(`${data.newPerson.newName} is already added to phonebook`)
      return
    } else {
      setPersons(persons.concat(data))
      setFilteredContacts(persons.concat(data))
    }
  }

  const handleSearch = (data) => {

    const filteredItems = persons.filter((person) =>
      person.name.toLowerCase().includes(data.toLowerCase())
    );

    setFilteredContacts(filteredItems);
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} />
      <PersonForm saveContact={saveContact} arrayLenght={persons.length} />
      <h2>Numbers</h2>
      <Persons persons={filteredContacts} />
    </div>
  )
}

export default App