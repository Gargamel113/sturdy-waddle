import React from 'react';
import './BreakMenu.css';

const BreakMenu = (props) => {
  return (
    <div className="BreakMenu-container">
      <h2>Up next: {props.nextPlayer}</h2>
      <button onClick={props.change}>START</button>
    </div>
  )
}

export default BreakMenu;