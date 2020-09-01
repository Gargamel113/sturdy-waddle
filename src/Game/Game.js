import React from 'react';
import Word from './Word';
import Timer from './Timer';
import Player from '../Player';
import './Game.css'
const Game = () => {
  return (
    <div className="Game">
      <Player />
      <Timer />
      <Word />
      <div>
        <button>go back</button>
        <button>pass word</button>
        <button>cleared</button>
      </div>
    </div>
  )
}

export default Game;