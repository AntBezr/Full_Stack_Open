import React from 'react';
import { useState } from 'react';

function PersonForm({ saveContact, arrayLenght }) {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSaveContact = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
      id: arrayLenght + 1
    }

    setNewName('')
    setNewNumber('')
    saveContact(newPerson);
  }

  return (
    <div>
      <form onSubmit={handleSaveContact}>
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
    </div>
  );
}

export default PersonForm;