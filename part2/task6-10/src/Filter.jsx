import React from 'react';

function Filter({ handleSearch }) {

  return (
    <div>
      <p>Search:</p>
      <input
        type='text'
        onChange={(e) => handleSearch(e.target.value)}
        placeholder='Type to search' />
    </div>
  );
}

export default Filter;