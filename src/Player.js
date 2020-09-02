import React from 'react';

const Player = (props) => {
  let currentPlayer = 6;
  const playerList = ["Robbin", "Kristoffer", "Sofie", "Tobbe", "Fia", "Titti", "Viktor"];

  if (props.newTurn === 0){
    currentPlayer = currentPlayer < playerList.length - 1 ? currentPlayer + 1 : 0;
  }

  return <h4>{playerList[currentPlayer]}s Turn</h4>
}

export default Player;