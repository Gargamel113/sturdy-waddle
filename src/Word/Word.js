import React from 'react';
import './Word.css';

const Word = (props) => {
  return <>
  <div className="Word-container">
  {props.word}
  </div>
    <div className="Game-btn-container">
      <button id="back" onClick={props.wordGoback}>Go Back</button>
      <button id="pass" onClick={props.wordPassed}>Pass Word</button>
      <button id="done" onClick={props.wordDone}>Next Word</button>
    </div>
  </>
}

export default Word;