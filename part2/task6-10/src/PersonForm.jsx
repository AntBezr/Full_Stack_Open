import React from 'react';

import { useState } from 'react';

function PersonForm({ createNewPerson }) {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleChange = (event) => {
    event.target.id === 'name' ? setNewName(event.target.value) : setNewNumber(event.target.value);
  }

  const handleSaveContact = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
      id: (newName.toLowerCase() + '-' + newNumber)
    }
    if (newPerson.name === '' || newPerson.number === '') {
      alert('Name or number cannot be empty');
      return;
    }
    createNewPerson(newPerson);
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <form onSubmit={handleSaveContact}>
        <div>
          <h2>Add new</h2>
          name: <input
            id='name'
            value={newName}
            onChange={handleChange}
          />
          number: <input
            value={newNumber}
            id='number'
            onChange={handleChange}
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