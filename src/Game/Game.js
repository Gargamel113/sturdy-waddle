// import React, { Component } from 'react';
import React, {useEffect, useState } from 'react';
import Timer from './Timer';
import Player from '../Player';
import Words from './Words';
import './Game.css';

const Game = () => {
  const [time, setTime] = useState(5);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <div className="Game">
      <Player newTurn={time}/>
      <Timer time={time} />
      <Words />
    </div>
  )
}


export default Game;