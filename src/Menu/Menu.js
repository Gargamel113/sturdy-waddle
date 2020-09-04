import React, { useState } from 'react';
import { PlayerAdd } from '../Player/PlayerAdd';
import { getList } from '../Player/PlayerList';

import './Menu.css';

export const Menu = (props) => {
  const [timer, setTimer] = useState(0);
  const [timerWarning, setTimerWarning] = useState("none");
  
  function onChangeUpdate(e) {
    props.time(e.target.value);

    if (e.target.value > 0) {
      setTimer(e.target.value);
      setTimerWarning("none"); 
    } else {
      setTimerWarning("block");
    }
  }

  function start() {
    if (timer > 0 && getList().length > 0) {
      props.change()
    }
  }

  return (
    <div className="Menu-container">
      <div className="Timer-container">
        <h2>Set Timer in seconds</h2>
        <input id="name-field" onChange={onChangeUpdate} type="text"></input>
        <p id="no-timer-warning" style={{display: `${timerWarning}`}}>Please enter timer length</p>
      </div>
      <div className="Playerlist-container">
        <PlayerAdd />
      </div>
      <button id="start-btn" onClick={start}>Start Game</button>
    </div>
  )
}