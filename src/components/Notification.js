import React from 'react'

const Notification = ({ message }) => {
    if (message === null) {
      return null
    }

    const messageStyle ={
        color: 'blue',
        backgroundColor: 'white',
        width:'300px',
        border: '10px solid blue'
    }
  
    return (
      <div style={messageStyle}>
        {message}
      </div>
    )
  }

  export default Notification