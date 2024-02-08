import React from 'react';
import personService from './services/persons';

function Persons({ persons }) {

  const deleteHandler = (id) => {
    confirm("Are you sure you want to delete this person?") ?
      personService.deletePerson(id) : null;
    window.location.reload();
  }

  return (
    <div>
      <ul>
        {persons?.map((person) => (<li key={person.name}>{person.name} {person.number}<button onClick={() => deleteHandler(person.id)}>Delete</button>
        </li>))}
      </ul>
    </div>
  );
}

export default Persons;