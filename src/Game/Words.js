import React, { useState } from 'react';
import Word from './Word';
import WordList from './WordList';

const Words = () => {
  const animals = WordList();
  const [currentWord, setWord] = useState(animals[randomWord()]);
  const [passedWord, setPassedWord] = useState("");
  const [passed, pass] = useState(false);

  function randomWord() {
    return Math.floor(Math.random() * animals.length);
  }

  function wordDone() {
    setWord(animals[randomWord()]);
  }

  function wordPassed() {
    setPassedWord(currentWord);
    wordDone();
    pass(true);
  }

  function wordGoback() {
    setPassedWord(currentWord);
    setWord(passedWord);
  }

  return (
    <>
      <Word word={currentWord} />
      <div>
        <button onClick={ wordGoback }>go back</button>
        <button onClick={ wordPassed }>pass word</button>
        <button onClick={ wordDone }>cleared</button>
      </div>
    </>
  )
}

export default Words;