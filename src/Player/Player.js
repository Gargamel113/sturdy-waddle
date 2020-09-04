import React from 'react';
import '../Menu/Menu.css';

export const Player = (props) => {
  return (
    <div className="Player-name">
      <h3>{props.name}</h3>
      <button onClick={() => props.delete(props.name)}>Delete</button>
    </div>
  )
}