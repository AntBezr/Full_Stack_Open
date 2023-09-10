import React from 'react';

const Button = (props) => {
  const { handleClick, text } = props

  return (
    <div >
      <button className='voteButton' type='submit' onClick={handleClick}>{text}</button>
    </div>
  );
};

export default Button;