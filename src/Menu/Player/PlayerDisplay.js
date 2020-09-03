import React from 'react';
import { getList } from './PlayerList';

const PlayerDisplay = (props) => {
  let currentPlayer = 0;
  const playerList = getList();

  if (props.newTurn === 0) {
    currentPlayer = currentPlayer < playerList.length - 1 ? currentPlayer + 1 : 0;
  }

  return <h4>{playerList[currentPlayer]}s Turn</h4>
}

export default PlayerDisplay;