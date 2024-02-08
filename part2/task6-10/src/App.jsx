import { useState, useEffect } from 'react'
import Persons from './Persons'
import PersonForm from './PersonForm'
import Filter from './Filter'
import personsServices from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filteredContacts, setFilteredContacts] = useState([])
  const [message, setMessage] = useState({ message: null, type: null })

  useEffect(() => {
    personsServices
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        setFilteredContacts(initialPersons)
      })
      .catch(error => {
        setMessage({
          message: `Something went wrong while fetching the data: ${error}`,
          type: 'error'
        })
        setTimeout(() => {
          setMessage({ message: '', type: null })
        }, 5000)
      })
  }, [message])

  const createNewPerson = (newPerson) => {
    personsServices.create(newPerson)
      .then(data => {
        setMessage({
          message: `Added ${data.name}`,
          type: 'success'
        })
        setTimeout(() => {
          setMessage({ message: '', type: null })
        }, 5000)
      })
      .catch(error => {
        setMessage({
          message: `Something went wrong while fetching the data: ${error}`,
          type: 'error'
        })
        setTimeout(() => {
          setMessage({ message: '', type: null })
        }, 5000)
      })
    setPersons(persons.concat(newPerson))
    setFilteredContacts(persons.concat(newPerson))
  }

  const deleteHandler = (id) => {
    confirm("Are you sure you want to delete this person?") ?
      personsServices.deletePerson(id)
        .then(data => {
          setMessage({
            message: `Contact ${data.name} has been deleted successfully!`,
            type: 'success'
          })
          setTimeout(() => {
            setMessage({ message: '', type: null })
          }, 5000)
        })
        .catch(error => {
          setMessage({
            message: `Something went wrong while fetching the data: ${error}`,
            type: 'error'
          })
          setTimeout(() => {
            setMessage({ message: '', type: null })
          }, 5000)
        }) : null;

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
      <Notification message={message} />
      <Filter handleSearch={handleSearch} />
      <PersonForm createNewPerson={createNewPerson} />
      <h2>Numbers</h2>
      <Persons persons={filteredContacts} deleteHandler={deleteHandler} />
    </div>
  )
}

export default App