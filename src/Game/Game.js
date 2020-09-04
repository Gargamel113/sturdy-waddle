// import React, { Component } from 'react';
import React, {useEffect, useState } from 'react';
import Timer from './Timer/Timer';
import PlayerList from '../Menu/Player/PlayerDisplay';
import Words from './Word/Words';
import './Game.css';

const Game = (props) => {
  const [time, setTime] = useState(props.timer);

  useEffect(() => {
    let interval = null;
    if (time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else {
      props.change();
    }
    return () => clearInterval(interval);
  }, [time]);
  
  return (
    <div className="Game">
      <PlayerList newTurn={time}/>
      <Timer time={time} />
      <Words />
    </div>
  )
}


export default Game;