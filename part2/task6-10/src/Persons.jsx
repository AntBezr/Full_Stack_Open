import React from 'react';

function Persons({ persons, deleteHandler }) {
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