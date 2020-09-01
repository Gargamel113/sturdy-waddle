import React from 'react';
import Timer from './Timer';
import Player from '../Player';
import Words from './Words';
import './Game.css';

const Game = () => {
  return (
    <div className="Game">
      <Player />
      <Timer />
      <Words />
    </div>
  )
}

export default Game;