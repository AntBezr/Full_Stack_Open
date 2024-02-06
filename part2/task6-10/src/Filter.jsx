import React from 'react';
import { useState } from 'react';

function Filter({ handleSearch }) {


  const changeHandler = (event) => {
    const searchTerm = event.target.value;

    handleSearch(searchItem)
  }


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