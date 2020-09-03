import React from 'react';
import { PlayerAdd } from './Player/PlayerAdd';

export const Menu = (props) => {
  
  function onChangeUpdate(e){
    props.time(e.target.value);
    // console.log(e.target.value);
  }

  return (
    <div>
      <PlayerAdd />
      <h2>Set Timer in seconds</h2>
      <input onChange={onChangeUpdate}type="text"></input>
      <button onClick={props.change}>Start Game</button>
    </div>
  )
}