import React, { useState } from 'react';

import Game from './Game/Game';
import { Menu } from './Menu/Menu';

const App = () => {
  const [view, setView] = useState("menu");
  const [timer, setTimer] = useState(0);
  let viewDisplay = "menu";

  function changeRender() {
    if (view === "menu") {
      setView("game");
    } else {
      setView("menu");
    }
  }

  function setTime(time) {
    setTimer(time);
  }

  switch (view) {
    case "game": viewDisplay = <Menu change={changeRender} time={setTime} />
      break;
    case "menu": viewDisplay = <Game timer={timer} change={changeRender} />
      break;
      default: setTimer("menu");
        break;
  }

  return (
    <div className="App">
      {viewDisplay};
    </div>
  );
}

export default App;
