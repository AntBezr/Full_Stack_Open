import { useState, useEffect } from 'react'
import Persons from './Persons'
import PersonForm from './PersonForm'
import Filter from './Filter'
import personsServices from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filteredContacts, setFilteredContacts] = useState([])

  useEffect(() => {
    personsServices
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        setFilteredContacts(initialPersons)
      })
  }, [])

  const saveContact = (data) => {
    const found = persons.some(person => person.name === data.name)
    if (found) {
      alert(`${data.newPerson.newName} is already added to phonebook`)
      return
    } else {
      personsServices.create(data)
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
      <PersonForm saveContact={saveContact} persons={persons} />
      <h2>Numbers</h2>
      <Persons persons={filteredContacts} />
    </div>
  )
}

export default App