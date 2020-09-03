import React from 'react';
import { remove } from './PlayerList';

export const Player = (props) => {

  function deleteUser() {
    remove(props.name);
  }

  return (
    <div>
      <h3>{props.name}</h3>
      <button onClick={deleteUser}>Delete</button>
    </div>
  )
}