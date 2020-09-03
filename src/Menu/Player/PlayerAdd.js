import React, { useState } from 'react';
import { Player } from './Player';

import { add, exists, getList } from './PlayerList';

export const PlayerAdd = (props) => {
  const [player, setPlayer] = useState("");
  const [players, setPlayers] = useState([]);

  const addNewPlayer = () => {
    if (exists(player) || player === "") {
      console.log("Player already exists");
    } else {
      add(player);
      setPlayer("");
    }
    setPlayers(getList());
  }

  const changeHandler = (event) => {
    setPlayer(event.target.value);
  }

  return (
    <div>
      <h2>Who will play?</h2>
      <input type="text" onChange={changeHandler} ></input>
      <input type="submit" onClick={addNewPlayer}></input>
      <ul>
        {players.map((d) => <li><Player name={d}/></li>)}
      </ul>
    </div>
  )
}