import React from 'react';
import '../index.css'

function Notification({ message }) {
  const classNameHandler = (message) => {
    switch (message.type) {
      case "success":
        return "successStyle"
      case "error":
        return "errorStyle"
      default:
        return ''
    }

  }

  return (
    <div>
      <h4 className={classNameHandler(message)}>{message.message}</h4>
    </div>
  );
}

export default Notification;