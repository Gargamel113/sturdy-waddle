import React from 'react';

const Player = () => {
  const playerList = ["Robbin", "Kristoffer", "Sofie", "Tobbe", "Fia", "Titti", "Viktor"];
  let currentPlayer = Math.floor(Math.random() * playerList.length);
  return <h4>{playerList[currentPlayer]}s Turn</h4>
}

export default Player;