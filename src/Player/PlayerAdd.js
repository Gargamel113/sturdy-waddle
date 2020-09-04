import React, { useState } from 'react';
import { Player } from './Player';
import { add, exists, getList, remove } from './PlayerList';
import '../Menu/Menu.css';

export const PlayerAdd = () => {
  const [player, setPlayer] = useState("");
  const [players, setPlayers] = useState([]);

  const addNewPlayer = (event) => {
    event.preventDefault();
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

  const deleteUser = (name) => {
    remove(name);
    setPlayers(players.filter((n) => n !== name));
  }

  const listItems = players.map((name) => <li key={name}><Player name={name} delete={deleteUser} /></li>)

  return (
    <div className="Player-form">
      <h2>Who will play?</h2>
      <form>
        <input type="text" onChange={changeHandler} ></input>
        <input id="submit-btn" type="submit" onClick={addNewPlayer}></input>
      </form>
      <ul id="player-ul">
        {listItems}
      </ul>
    </div>
  )
}