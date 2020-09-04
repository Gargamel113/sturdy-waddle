import React, { useState } from 'react';
import Game from './Game/Game';
import { Menu } from './Menu/Menu';
import BreakMenu from './Menu/BreakMenu';
import { getList } from './Player/PlayerList';
import './App.css';

const App = () => {
  const [view, setView] = useState("menu");
  const [timer, setTimer] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [playerList] = useState(getList());
  let viewDisplay;

  function changeRender() {
    if (view === "menu") {
      setView("game");
    } else if (view === "game") {
      setView("break");
    } else {
      setView("game");
    }
  }

  function setTime(time) {
    setTimer(time);
  }

  function playersTurn(name) {
    const current = currentPlayer;
    currentPlayer + 1 < playerList.length ? setCurrentPlayer(current + 1) : setCurrentPlayer(0);
  }

  switch (view) {
    case "menu": viewDisplay = <Menu change={changeRender} time={setTime} />
      break;
    case "game": viewDisplay = <Game timer={timer} change={changeRender} nextPlayer={playersTurn} displayPlayer={playerList[currentPlayer]}/>
      break;
    case "break": viewDisplay = <BreakMenu timer={timer} change={changeRender} nextPlayer={playerList[currentPlayer]} />
      break;
    default: setTimer("menu");
      break;
  }

  return (
    <div className="App">
      {viewDisplay}
    </div>
  );
}

export default App;
