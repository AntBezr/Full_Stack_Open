import React from 'react';

function Persons({ persons }) {
  return (
    <div>
      <ul>
        {persons.map((person) => (<li key={person.name}>{person.name} {person.number}</li>))}
      </ul>
    </div>
  );
}

export default Persons;